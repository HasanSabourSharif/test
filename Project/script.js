const showAnswerButtons = document.querySelectorAll('.show-answer');

showAnswerButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const answer = button.nextElementSibling;
        if (answer.classList.contains('hidden')) {
            const question = button.previousElementSibling.innerText.trim();
            const response = await getAnswerFromAPI(question);
            answer.textContent = response.answer;
        }
        answer.classList.toggle('hidden');
    });
});

async function getAnswerFromAPI(question) {
    try {
        const response = await fetch('https://', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question })
        });

        if (!response.ok) {
            throw new Error('Error fetching answer from API');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return { answer: 'متاسفانه پاسخی در دسترس نیست.' };
    }
}

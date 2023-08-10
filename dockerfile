FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8
COPY Project ./Project
COPY nginx.conf   ./etc/nginx/nginx.conf
EXPOSE 80
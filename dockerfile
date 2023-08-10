FROM nginx:alpine
COPY Project ./Project
COPY nginx.conf   ./etc/nginx/nginx.conf
EXPOSE 80
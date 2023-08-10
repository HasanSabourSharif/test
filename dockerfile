# استفاده از تصویر اصلی Nginx
FROM nginx:latest


COPY ./Project /usr/share/nginx/html

# پورت‌های مورد استفاده توسط Nginx
EXPOSE 80

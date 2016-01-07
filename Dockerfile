
FROM daocloud.io/php:5.6-apache


RUN docker-php-ext-install pdo_mysql

COPY ./www/ /var/www/html/
COPY ./www/data /var/www/
COPY . /var/www/


FROM daocloud.io/php:5.6-apache


RUN docker-php-ext-install pdo_mysql


COPY . /var/www/

RUN chmod o=rwx -R /var/www/tmp/

RUN chmod o=rwx -R /var/www/www/data



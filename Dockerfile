
FROM daocloud.io/php:5.6-apache


RUN docker-php-ext-install pdo_mysql


RUN ls /usr/local/etc/php
RUN echo /usr/local/etc/php.ini

COPY . /var/www/

RUN chmod o=rwx -R /var/www/tmp/

RUN chmod o=rwx -R /var/www/www/data

RUN rm -f /var/www/html/index.html


FROM daocloud.io/php:5.6-apache


RUN docker-php-ext-install pdo_mysql


COPY . /var/www/

COPY config/php.ini /usr/local/etc/php

RUN chmod o=rwx -R /var/www/tmp/

RUN chmod o=rwx -R /var/www/www/data/

RUN mkdir /var/session/
RUN chmod o=rwx -R /var/session/


RUN ls /var/www/html/
RUN rm -f /var/www/html/index.html
RUN ls /var/www/html/

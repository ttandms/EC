FROM php:5
RUN apt-get update \
&&  apt-get install -y \
        zlib1g-dev \
        libicu-dev \
        g++ \
        curl \
        unzip \
        zip
RUN docker-php-ext-configure intl 
RUN docker-php-ext-install intl
RUN docker-php-ext-enable intl
RUN docker-php-ext-configure pdo_mysql 
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-enable pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer
RUN mkdir /myapp
ENV APP_HOME /myapp
WORKDIR $APP_HOME
ADD ./backend/composer.json composer.json
RUN composer install

ADD ./backend $APP_HOME
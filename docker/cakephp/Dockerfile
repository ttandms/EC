FROM php:5.6-fpm
RUN apt-get update \
&&  apt-get install -y \
        composer \
        curl \
        unzip \
        zip

RUN mkdir /myapp
ENV APP_HOME /myapp
WORKDIR $APP_HOME
ADD ./backend/composer.json composer.json
RUN composer install

ADD ./backend $APP_HOME
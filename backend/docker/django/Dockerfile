# Dockerイメージを指定
FROM python:3.12-bullseye

# docker-compose.ymlで指定したenvironment_nameを設定
ARG environment_name
ENV environment=$environment_name
ENV APP_ROOT /backend

# codeというディレクトリを作成しソースコードを配置、pip installでライブラリをインストール
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT
COPY ./backend $APP_ROOT/
RUN python -m pip install --upgrade pip && \
    pip install -r requirements.lock

# Djangoを起動
ENTRYPOINT python manage.py runserver 0.0.0.0:8000 --settings $DJANGO_SETTINGS_MODULE

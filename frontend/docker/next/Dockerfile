# Dockerイメージを指定
FROM node:20-slim

ENV APP_ROOT /frontend
ENV PATH $APP_ROOT/node_modules/.bin:$PATH

# frontendというディレクトリを作成しソースコードを配置、yarnでライブラリをインストールし、yarn buildでライブラリをビルド
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

COPY ./frontend $APP_ROOT/
# RUN ls
RUN yarn install

# RUN next --version
RUN yarn build

# 別ホストからもアクセスできるように設定
ENV HOST 0.0.0.0

# Next.jsを起動
CMD ["yarn", "start"]

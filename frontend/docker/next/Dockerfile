# Dockerイメージを指定
FROM node:20-slim

# frontendというディレクトリを作成しソースコードを配置、yarnでライブラリをインストールし、yarn buildでライブラリをビルド
RUN mkdir /frontend
WORKDIR /frontend
ADD ./frontend /frontend/
RUN yarn
RUN yarn build

# 別ホストからもアクセスできるように設定
ENV HOST 0.0.0.0

# Next.jsを起動
ENTRYPOINT yarn start

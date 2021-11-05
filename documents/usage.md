# Usage

Next.jsで開発しています。

## Install dependencies

```bash
yarn install
```

## ローカルでデバッグする

WebRTCはSSL通信でないと使えないため、オレオレ認証局を作成します。

```bash
# `./certificates`内にcrtファイルと.keyファイルを作成します。
# macで開発している場合、.keyファイルをキーチェンに入れるとブラウザで開いたときに警告がでません。（finderでkeyファイルを開いてください）
yarn certification

# SSL（https）でデバッグ
# URL: https://localhost:3000
yarn dev:ssl

# 通常デバッグ（カメラは使用できない）
# URL: http://localhost
yarn dev
```

## 静的ファイル出力

```bash
yarn export
```

## Lint

```bash
yarn lint
```

# 勤怠メール自動送信くん（ついでにJobcanも自動打刻するよくん）

Web NFCを使って自動打刻を行えるようにするWeb App。
NFCタグのシリアルナンバーとメールアドレス・ジョブカンログイン用PWを紐付けることで、公開ページでも安全に（別の人が勝手に打刻するなどは出来ないように）打刻自動化が出来る。

# 技術要素

- Web NFC(Origin Trial)
- Firebase Hosting
- Chrome Canaly
- Google Apps Script
- Puppeter(On Firebase Cloud Function)

# ページ構成

- `/about` : アプリの使い方・環境情報をまとめたページ。TOPページの代わり
- `/stamp` : 出社打刻を行うページ

# 各技術でのやること

## Web NFC

- NFCタグのシリアルナンバーの取得
- 取得したシリアルナンバーのGoogle Apps Scriptへの送信

## Google Apps Script

- 受け取ったシリアルナンバーのスプレッドシート内（Sheet: シリアルナンバーリスト）での突き合わせ
  - 存在する場合、下記の処理をキックする / 存在しない場合、エラーメッセージをレスポンスする
- スプレッドシート内（Sheet: メール送信文）の定型文からメール送信文を作成
  - 送信先CCはスプレッドシート内（Sheet: CC先リスト）で定義されているものから取得
  - 打刻状況・打刻時間によって文面を切り替えるためにスプレッドシート内（Sheet: 打刻記録）にメールアドレスと共に記録する
  - 上記処理完了後に指定のメールアドレス宛にメール送信
- スプレッドシート内（Sheet: シリアルナンバーリスト）からメールアドレス・パスワードを取得し、Firebase Cloud FunctionにHTTPリクエスト送信
  

## Puppeter(On Firebase Cloud Function)

- HTTPリクエストから受け取ったメールアドレス・パスワードをPuppeterでジョブカンのフォームにアクセスし、ログイン→打刻ボタン押下を自動的に行う
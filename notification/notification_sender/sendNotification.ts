// node sendNotification.ts で通知送信
const webpush = require("web-push");
const Keys = require('../../keys/web-push-keys.json');

// サーバー鍵ペア
const vapidPublicKey = Keys.serverPublic;
const vapidPrivateKey = Keys.serverPrivate;
// 通知に必要なパラメーター
const endpoint = Keys.endpoint;
const p256dh = Keys.clientPublic;
const auth = Keys.authSecret;
// web-pushライブラリーに検証のための情報を設定
webpush.setVapidDetails(
  'https://y-mimura.github.io/PWA/',
  vapidPublicKey,
  vapidPrivateKey
);
// pushSubscription（プッシュ通知送信先情報）を作成
const pushSubscription = {
  endpoint: endpoint,
  keys: {
    p256dh: p256dh,
    auth: auth
  }
};
// プッシュ通知送信
webpush.sendNotification(
  pushSubscription,
  JSON.stringify({
    notification: {
      title: 'あなただけにお得なお知らせ',
      body: '年に一度の限定セールがスタート！ 今すぐWebページでチェック！',
      icon: 'src/assets/icons/icon-192x192.png'
    }
  })
);

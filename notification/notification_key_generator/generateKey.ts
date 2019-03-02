// node generateKey.ts で鍵生成
const webpush = require("web-push");
// サーバの鍵ペアを生成
const vapidKeys = webpush.generateVAPIDKeys();
console.log("publicKey: ",vapidKeys.publicKey);
console.log('privateKey:', vapidKeys.privateKey);
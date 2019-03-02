import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import WebPushKeys from '../../keys/web-push-keys.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pwa';
  vapidPublicKey = WebPushKeys.serverPublic;
  // プッシュ通知登録の設定
  constructor(private swpush: SwPush) {
    // プッシュ通知登録の処理
    this.swpush.subscription.subscribe(pushSubscription => {
      if (pushSubscription == null) {
        // 登録がなければ新規登録
        this.swpush.requestSubscription({
          serverPublicKey: this.vapidPublicKey  // サーバー公開鍵を指定
        });
      }
      else {
        // すでに登録がある場合
        // エンドポイント（プッシュ通知送信時にアクセスするURL）
        console.log("endpoint:", pushSubscription.toJSON().endpoint);
        // クライアント公開鍵／Auth Secret（通知の暗号化に利用）
        console.log("publicKey:", pushSubscription.toJSON().keys.p256dh);
        console.log('authSecret:', pushSubscription.toJSON().keys.auth);
      }
    })
  }

  // 自動更新の設定
  // コンストラクタでSwUpdateのオブジェクトを受け取る
  // constructor(private updates: SwUpdate){
  //   this.updates.available.subscribe(event => {
  //     // 更新が見つかった時の処理
  //     alert("新しいコンテンツが見つかりました。更新します。");
  //     this.updates.activateUpdate();  // 更新を実行
  //   });
  //   this.updates.activated.subscribe(event => {
  //     // 更新が完了
  //     alert("コンテンツが更新されました。ページを再読み込みします。");
  //     document.location.reload();
  //   });
  //   // ServiceWorkerが準備できてから実行
  //   navigator.serviceWorker.ready.then(() => {
  //     // 30秒に1回更新確認を行う
  //     setInterval(() => {
  //       this.updates.checkForUpdate();  // 更新確認
  //     }, 5000);
  //   });
  // }
}

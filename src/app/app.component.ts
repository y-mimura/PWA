import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa';
  // 自動更新の設定
  // コンストラクタでSwUpdateのオブジェクトを受け取る
  constructor(private updates: SwUpdate){
    this.updates.available.subscribe(event => {
      // 更新が見つかった時の処理
      alert("新しいコンテンツが見つかりました。更新します。");
      this.updates.activateUpdate();  // 更新を実行
    });
    this.updates.activated.subscribe(event => {
      // 更新が完了
      alert("コンテンツが更新されました。ページを再読み込みします。");
      document.location.reload();
    });
    // ServiceWorkerが準備できてから実行
    navigator.serviceWorker.ready.then(() => {
      // 30秒に1回更新確認を行う
      setInterval(() => {
        this.updates.checkForUpdate();  // 更新確認
      }, 5000);
    });
  }
}

[参考](https://codezine.jp/article/detail/11151)

manifest.jsonの設定項目
```
  "name": "Angular PWA Sample",
  "short_name": "AngularPWA",
  "theme_color": "#1976d2",
  "background_color": "#fafafa",
  "display": "standalone",
  "scope": "/",
  "start_url": "/",
  "icons": [
    {
      "src": "assets/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    :
    :
```
| 項目 | 設定内容 |
| ---- | ---- |
|  name  |  アプリ名  |  
|  short_name  |  短いアプリ名  |  
|  theme_color  |  テーマカラー  |  
|  background_color  |  背景色  |
|  display  |  ブラウザーのUIを表示する場合はbrowser、<br />しない場合はstandalone  |
| scope | Webアプリのパス |
| start_url | 最初に表示するページのURL |
| icons | アプリアイコン（複数サイズを設定可能） |
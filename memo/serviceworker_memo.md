> PWA機能を追加したAngularのWebアプリでは、Service Workerによって、以下のファイルが自動的にキャッシュされます。そのため、一度Webページを表示してキャッシュしておけば、ネットワーク接続がなくても、同じURLでWebページを再表示できます。
> - index.html
> - favicon.ico
> - ビルドで生成されたJavaScriptやCSSファイル
> - assetsフォルダー配下のファイル（画像ファイルなど）

> AngularのService Worker機能でキャッシュするファイルは、ngsw-config.jsonファイルで定義されています。
> キャッシュするファイルはassetGroupsに設定します。assetGroupsは配列で指定でき、デフォルトではHTML/JavaScript/CSSをキャッシュする「app」という名前のグループと、assetsフォルダーのファイルをキャッシュする「assets」という名前のグループが登録されています。グループごとに以下のような設定ができます。

| 項目 | 設定内容 |
| ---- | ---- |
| name | グループ名 |
| installMode | インストール時のファイル取得モード |
| updateMode | アップデート時のファイル取得モード |
| resources | キャッシュするファイル |

> installMode、updateModeは、「prefetch」を指定すると、インストール／アップデート直後にすべてのファイルを取得するようになり、「lazy」では、インストール／アップデート直後にはファイルを取得せず、リクエストを受けてから取得するようになります。
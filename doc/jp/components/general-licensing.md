---
title: {Platform} ライセンス | ドック マネージャー | {ProductName} | インフラジスティックス
_description: インフラジスティックスの {ProductName} ライセンス npm フィードの使用方法について説明します。
_keywords: npm package license, {ProductName} license feed, licensing, npm パッケージのライセンス, {Platform} ライセンス フィード, ライセンス
_language: ja
mentionedTypes: []
---

# ライセンスについてのよくある質問とインストール
# {ProductName} 使用許諾契約
購入して使用する {ProductName} に関するすべての[使用条件](https://jp.infragistics.com/legal/license/igultimate-la)を知っておくことが重要です。

> 2020 年第 2 四半期にライセンス条項とサブスクリプション モデルを更新しました。

トライアルが終了した場合、またはサブスクリプションが[期限切れ](https://jp.infragistics.com/renewal)になった場合、Ignite UI を使用しているチームの各開発者はサブスクリプションを[購入する](https://jp.infragistics.com/how-to-buy/product-pricing)必要があります。これにより、<https://packages.infragistics.com/npm/js-licensed/> でホストされるプライベート npm フィードを開発に使用できます。ここには、{ProductName} パッケージの最新バージョンがあります。現在サブスクリプションをお持ちの場合は、{ProductName} の製品版をプライベート フィードによりアクセスできます。

Ignite UI ライセンス契約および使用条件の詳細については、[ここをクリック](https://jp.infragistics.com/legal/license/igultimate-la)してください。

インフラジスティックスは、以下の無料の非営利および再販禁止 (NFR) ライセンスを提供しています。

  - Microsoft MVP、Microsoft Regional Director、Google Developer Expert などの開発者プログラムに参加している場合。
  - 小学生、中学生、大学生、または教育機関、または教授である場合。

無料の非商用の NFR ライセンスを取得する資格がある場合、またはライセンスに関する質問がある場合は、[お問い合わせ](https://jp.infragistics.com/about-us/contact-us)ください。

> 現在、プライベート npm フィードで利用できるのは **igniteui-dockmanager** パッケージのみですが、将来的には他の {ProductName} パッケージも追加する予定です。

## {ProductName} npm パッケージ - プライベート npm フィードの使用
Npm は Node.js ランタイム環境で使用する一般的なデフォルト パッケージ マネージャーです。プロジェクトに依存するパッケージをすばやく簡単に処理できます。npm の使用方法の詳細については、[npm ヘルプ](https://docs.npmjs.com/)を参照してください。

Infragistics {ProductName} は npm パッケージで提供され、[いくつかの簡単な手順](./general-getting-started.md)でプロジェクトの依存関係として追加できます。この方法を選択する場合、npm を構成する必要はありません。このパッケージをインストールすると、製品の **{ProductName} トライアル版**の使用が開始されます。

> 現在、[igniteui-dockmanager](https://www.npmjs.com/package/igniteui-dockmanager) の npm パッケージのみにトライアル ウォーターマークがありますが、今後は他の {ProductName} パッケージにも追加する予定です。

### プライベート npm フィードを使用するための環境設定方法

#### 最初にプライベート レジストリを構成し、レジストリを Infragistics スコープと関連付けます。

これにより公開用の npm レジストリおよびプライベート Infragistics レジストリからのパッケージを同時に使用できます。Infragistics アカウントにログインするユーザー名およびパスワードを入力する必要があります。Infragistics プロファイルに登録されるメールも入力してください。

> アカウントのライセンスがない場合 (トライアル版アカウントを使用している場合)、プライベート パッケージ フィードにアクセスできません (たとえば、404 または 403 エラー メッセージが返されます)。**ライセンスされているアカウントのみが packages.infragistics プライベート フィードにアクセスできます。**

### npm を使用してプライベート フィードにログインするには、次のようにします。

#### npm バーション 9 以降
プライベート フィードは現在、npm v9 で login/adduser コマンドをサポートしていないため、必要な認証フィールドを構成に追加する代わりに、次の手順をお勧めします。

```cmd
npm config set @infragistics:registry https://packages.infragistics.com/npm/js-licensed/

npm config set //packages.infragistics.com/npm/js-licensed/:username=YOUR_USERNAME

npm config set //packages.infragistics.com/npm/js-licensed/:email=YOUR_IG_EMAIL

npm config set //packages.infragistics.com/npm/js-licensed/:_auth=YOUR_IG_AUTH_TOKEN
```

Infragistics プロファイルから[アクセス トークン](#アクセス-トークンの使用)を生成できます。

このアプローチは、以前のすべてのバージョンの npm に適用できます。

#### v8 までの npm バージョン
`adduser` コマンドを実行し、ユーザー アカウントとパスワードを指定します。

```cmd
npm adduser --registry=https://packages.infragistics.com/npm/js-licensed/ --scope=@infragistics
```

Infragistics アカウントにログインするユーザー名およびパスワードを入力する必要があります。Infragistics プロファイルに登録されるメールも入力してください。

> `npm` はユーザー名で `"@"` の使用を許可しません。ユーザー名が Infragistics アカウントのメール アドレスであるため、`"@"` 記号を含みます。この制限を回避するには、`"@"` 記号の代わりに `"!!"` (2 つの感嘆符) を使用します。たとえば、ユーザー名が `"username@example.com"` の場合、`"username!!example.com"` と入力します。

#### 完了した後に、ログイン済みの状態で、プロジェクトで Ignite UI の最新バージョンをインストールできます。

```cmd
npm uninstall igniteui-dockmanager
npm install @infragistics/igniteui-dockmanager

npm uninstall igniteui-dockmanager
npm install @infragistics/igniteui-dockmanager
```

{ProductName} パッケージをスコープに設定したため、プライベート フィードおよび npmjs.org からのパッケージを同時にインストールするためにレジストリを変更する必要はありません。

### ライセンス パッケージの更新後のプロジェクト ソースの変更

トライアル版からライセンス版パッケージにアップグレードする場合、新しいパッケージは `@infragistics` の下でスコープされます。
その結果、次のいずれかを行うことができます。

- すべてのトライアル版パッケージに対してグローバル置換を実行し、プロジェクト内のすべてのファイルにわたってライセンス版スコープ付きバージョンに変更します。たとえば、すべての `igniteui-dockmanager` 参照を `@infragistics/igniteui-dockmanager` に置き換えます。この変更は、そのようなパッケージが使用されているすべてのインポートに影響します。

  **または**

- プロジェクトの **tsconfig.json** に **paths** マッピングを追加します。

```json
{
  /* ... */
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    /* ... */
    "paths": {
      "igniteui-dockmanager": ["./node_modules/@infragistics/igniteui-dockmanager"],
      "igniteui-dockmanager/*": ["./node_modules/@infragistics/igniteui-dockmanager/*"],
    }
  }
}
```

<!-- React -->
必要となる可能性のある React パッケージのすべてのパス マッピングを含む完全な例を次に示します。

```json
      "paths": {
        "igniteui-react-core": ["node_modules/igniteui-react-core", "node_modules/@infragistics/igniteui-react-core"],
        "igniteui-react-charts": ["node_modules/igniteui-react-charts", "node_modules/@infragistics/igniteui-react-charts"],
        "igniteui-react-grids": ["node_modules/igniteui-react-grids", "node_modules/@infragistics/igniteui-react-grids"],
        "igniteui-react-data-grids": ["node_modules/igniteui-react-data-grids", "node_modules/@infragistics/igniteui-react-data-grids"],
        "igniteui-react-grids/grids": ["node_modules/igniteui-react-grids/grids", "node_modules/@infragistics/igniteui-react-grids/grids"],
        "igniteui-react-gauges": ["node_modules/igniteui-react-gauges", "node_modules/@infragistics/igniteui-react-gauges"],
        "igniteui-react-inputs": ["node_modules/igniteui-react-inputs", "node_modules/@infragistics/igniteui-react-inputs"],
        "igniteui-react-layouts": ["node_modules/igniteui-react-layouts", "node_modules/@infragistics/igniteui-react-layouts"],
        "igniteui-react-maps": ["node_modules/igniteui-react-maps", "node_modules/@infragistics/igniteui-react-maps"],
        "igniteui-react": ["node_modules/igniteui-react", "node_modules/@infragistics/igniteui-react"],
        "igniteui-react-excel": ["node_modules/igniteui-react-excel", "node_modules/@infragistics/igniteui-react-excel"],
        "igniteui-react-datasources": ["node_modules/igniteui-react-datasources", "node_modules/@infragistics/igniteui-react-datasources"],
        "igniteui-react-spreadsheet": ["node_modules/igniteui-react-spreadsheet", "node_modules/@infragistics/igniteui-react-spreadsheet"],
        "igniteui-react-spreadsheet-chart-adapter": ["node_modules/igniteui-react-spreadsheet-chart-adapter", "node_modules/@infragistics/igniteui-react-spreadsheet-chart-adapter"],
        "igniteui-webcomponents": ["node_modules/igniteui-webcomponents", "node_modules/@infragistics/igniteui-webcomponents"],
        "igniteui-dockmanager": ["node_modules/igniteui-dockmanager", "node_modules/@infragisics/igniteui-dockmanager"],
        "igniteui-dockmanager/loader": ["node_modules/igniteui-dockmanager/loader", "node_modules/@infragistics/igniteui-dockmanager/loader"]
      }
```


<!-- end: React -->

- テーマのインポートを以下のように変更します。

```ts
@import '~igniteui-dockmanager/dist/collection/styles/igc.themes';

// Should be changed to

@import '~@infragistics/igniteui-dockmanager/dist/collection/styles/igc.themes';
```

npm を既に使用していて、{ProductName} ライセンスがある場合、Infragistics プライベート フィードを構成してください。

## アクセス トークンの使用

アクセス トークンを使用してプライベート npm フィードの認証を受けることもできます。アクセストークンは [infragistics.com ユーザー アカウント](https://account.infragistics.com/access-tokens)で取得できます。アクセス トークン認証は、CI プロセスを {ProductName} ライセンス パッケージを使用する公開アクセス可能なリポジトリに統合する場合に推奨される代替方法です。

以下は、ローカル構成でアクセス トークンを使用してプライベート npm レジストリへの認証を設定する方法、Azure Pipelines のビルド手順、および Travis CI のビルド プロセスです。

* https://account.infragistics.com/access-tokens からトークンを生成します。

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 600px"
  src="../images/general/generate-token.jpg"
  data-src="../images/general/generate-token.jpg"
  alt="New Token Generated"
  title="Generate new token" />

> 各トークンは Base64 エンコードです。

* 以下を [.npmrc](https://docs.npmjs.com/configuring-npm/npmrc.html) ファイルに追加します。

```cmd
@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/
//packages.infragistics.com/npm/js-licensed/:_auth=YOUR_ACCESS_TOKEN
//packages.infragistics.com/npm/js-licensed/:username=YOUR_USERNAME
```

## Azure Pipelines の構成
以下の手順で azure-pipelines.yml を更新します。

```cmd
steps:

- script: npm config set @infragistics:registry $(npmRegistry)
  displayName: 'Npm add registry'
- script: npm config set $(igScope):_auth=$(token)
  displayName: 'Npm config auth'
```

**npm registry** および **token** 変数を追加します。

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 600px"
  src="../images/general/azure-ci-new-variable-2.jpg"
  data-src="../images/general/azure-ci-new-variable-2.jpg"
  alt="Set npm Registry and token variables"
  title="Set npm Registry and token variables" />

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 380px"
  src="../images/general/azure-ci-add-token-variable-1.jpg"
  data-src="../images/general/azure-ci-add-token-variable-1.jpg"
  alt="npm Registry and token variables"
  title="npm Registry and token variables" />

## Travis CI の構成
ここではほとんど同じ方法を使用しますが、構成は [before_install](https://docs.travis-ci.com/user/job-lifecycle/#the-job-lifecycle) に設定されます。

```cmd
before_install:
- echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
- echo "//packages.infragistics.com/npm/js-licensed/:_auth=$TOKEN" >> ~/.npmrc
```

環境変数を定義する方法は、含まれる情報のタイプによって異なるため、[2 つ のオプションがあります](https://docs.travis-ci.com/user/environment-variables/)。

* 暗号化して [.travis.yml](https://docs.travis-ci.com/user/environment-variables/#defining-encrypted-variables-in-travisyml) に追加します。
* [リポジトリ設定](https://docs.travis-ci.com/user/environment-variables/#defining-variables-in-repository-settings)に追加します。

### GitHub Actions の構成

**npm i(ci)** 手順の前に以下のスクリプトを [CI ワークフロー構成](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions)に追加します:

```cmd
- run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
- run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=${{ secrets.NPM_TOKEN }}" >> ~/.npmrc
```

[*シークレット* (暗号化された環境変数)](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) を定義してアクセス トークンなどの機密情報に対して GitHub Actions ワークフローでそれらを使用します。

---
title: {Platform} {ComponentTitle} for {ProductName} のライブ データ更新
_description: {ProductName} {ComponentTitle} が、ユーザーの操作に応答し続けている間、1 秒あたり数千の更新を処理する方法を確認します。
_keywords: {Platform} {ComponentKeywords} updates, {Platform} live data, infragistics, 更新, ライブ データ, インフラジスティックス
sharedComponents: ["Grid", "TreeGrid"]
_language: ja
---

# {Platform} {ComponentTitle} のライブ データ更新

{ComponentTitle} コンポーネントは、ユーザーの操作に応答し続けている間、1 秒あたり数千の更新を処理できます。

<!-- Angular -->
## {Platform} ライブ データ更新の例

以下のサンプルは、すべてのレコードが 1 秒間に複数回更新される場合の {ComponentTitle} のパフォーマンスを示しています。UI コントロールを使用して、読み込むレコードの数と更新の頻度を選択します。
同じデータを[折れ線チャート](../charts/types/line-chart.md)に入力して、Ignite UI for Angular の強力なチャート作成機能を体験してください。`Chart` ボタンには、選択した行の Category Prices per Region データが表示され、`Chart` 列ボタンには現在の行の同じデータが表示されます。

<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-grid-finjs"
           alt="Angular ライブ データ更新の例">
</code-view>

<!-- end: Angular -->
## データ バインディングおよび更新

サービスは、ページが読み込まれたとき、およびスライダー　コントローラーを使用して特定の数のレコードを取得したときに、コンポーネントにデータを提供します。実際のシナリオでは、更新されたデータはサービスから消費されますが、ここではデータはコードで更新されます。これは、デモをシンプルに保ち、その主な目標であるグリッドのパフォーマンスを実証するために行われます。

```Razor
<IgbDataGrid data="data"><IgbDataGrid>
```

<!-- Angular -->
```html
<{ComponentSelector} [data]="data"></{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector}></{ComponentSelector}>
```
<!-- end: WebComponents -->


```typescript
    this.localService.getData(this.volume);
    this.volumeSlider.onValueChange.subscribe(x => this.localService.getData(this.volume);
    this.localService.records.subscribe(x => { this.data = x; });
```

データ フィールド値の変更またはデータ オブジェクト/データ コレクション参照の変更により、対応するパイプがトリガーされます。ただし、これは[複合データ オブジェクト](grid.md#複雑なデータ-バインディング)にバインドされている列には当てはまりません。この状況を解決するには、プロパティを含むデータ オブジェクトの新しいオブジェクト参照を提供します。例:

```Razor
<IgbDataGrid data="data">
    <IgbTextColumn field="price.usd"/>
</IgbDataGrid>
```

<!-- Angular -->
```html
<{ComponentSelector} #grid [data]="data">
    <igx-column field="price.usd"></igx-column>
</{ComponentSelector}>
```
<!-- end: Angular -->

<!-- WebComponents -->
```html
<{ComponentSelector} id="grid">
    <igc-column field="price.usd"></igc-column>
</{ComponentSelector}>
```
<!-- end: WebComponents -->

```typescript
private updateData(data: IRecord[]) {
    const newData = []
    for (const rowData of data) {
        rowData.price = { usd: getUSD(), eur: getEUR() };
        newData.push({...rowData});
    }
    this.grid.data = newData;
}
```

## テンプレート
ビューの更新は、デフォルト テンプレートの列とカスタム テンプレートの列で同じように機能します。ただし、カスタム テンプレートは比較的単純にしておくことをお勧めします。テンプレート内の要素の数が増えると、パフォーマンスへの悪影響も大きくなります。

<!-- Angular -->
## Dock Manager および igxGrid コンポーネントを使用したライブ データ フィード
このデモの目的は、[SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr) ハブ バックエンドを使用してリアルタイム データ ストリームを表示する財務用スクリーン ボードを紹介することです。
igxGrid コンポーネントは、サーバーからの高頻度の更新を簡単に処理できます。SignalR を使用する ASP.NET Core アプリケーションのコードは、この[公開な GitHub リポジトリ](https://github.com/IgniteUI/finjs-web-api)にあります。
<code-view style="height:700px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/{ComponentSample}-grid-finjs-dock-manager"
           alt="{Platform} {ComponentTitle} サービスを使用したライブ データ更新の例">
</code-view>
<!-- end: Angular -->

### ハブ接続の開始

signal-r.service は公開された管理可能なパラメーター - *frequency*、*volume* および *live-update 状態のトグル* (開始/停止) - の接続と更新を処理します。

```ts
this.hubConnection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Trace)
        .withUrl('https://www.infragistics.com/angular-apis/webapi/streamHub')
        .build();
    this.hubConnection
        .start()
        .then(() => {
            this.hasRemoteConnection = true;
            this.registerSignalEvents();
            this.broadcastParams(interval, volume, live, updateAll);
        })
        .catch(() => {});
```

指定された頻度に基づいて、合計 30 の新しい更新がサーバーによって受信されます。特定の cellStyle クラスは、変更を処理する 3 つの列に適用されます - Price、Change および Change (%)。

### 更新頻度とデータ ボリューム

左側のアクション パネルを使用して、データ フィードの頻度と要求されたデータ ボリュームを管理できます。すべてのグリッドは同じデータ ソースを使用します。データ フィードの停止、アプリケーション テーマの変更、または igxGrid を使用した DockSlot コンテナーの動的追加は、他のアクション要素をご自由にお使いください。

`updateParameters` メソッドを使用して、特定の頻度で新しいデータのセットを要求します。このメソッドは、SignalR [ストリーム ハブの実装](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Models/StreamHub.cs#L18)の一部です。

```ts
this.hubConnection.invoke('updateparameters', frequency, volume, live, updateAll)
    .then(() => console.log('requestLiveData', volume))
    .catch(err => {
        console.error(err);
    });
```

### DockSlot および Grid コンポーネントを動的に作成

[ComponentFactoryResolver](https://angular.io/api/core/ComponentFactoryResolver) を使用して、DockSlot および Grid コンポーネントをオンザフライで作成できます。

### DockManager コンポーネント
[Dock Manager](../dock-manager.md) WebComponent を利用し、ドケットまたはフローティング パネルを使用して独自の Web ビューを作成します。新しいフローティング パネルを追加するには、右側のアクション ペインを開き、[フローティング ペインの追加] ボタンをクリックします。新しいペインを目的の場所にドラッグアンドドロップします。

## API リファレンス
* `{ComponentName}`
* `Cell`
* `BaseTransactionService`

## その他のリソース

* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列の移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-{PlatformLower})
* [{ProductName} **GitHub (英語)**](https://github.com/IgniteUI/igniteui-{PlatformLowerNoHyphen})



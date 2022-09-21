---
title: {Platform} Tabs | レイアウト コントロール | インフラジスティックス
_description: 同様のデータ セットを切り替えるには、インフラジスティックスの {Platform} タブ コンポーネントを使用します。
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Tabs Component, Infragistics, UI コントロール, web ウィジェット, UI ウィジェット, {Platform} タブ コンポーネント, インフラジスティックス
mentionedTypes: ['Tabs', 'Tab', 'TabPanel', 'Icon', 'IconButton', 'RadioGroup']
_language: ja
---

# {Platform} Tabs (タブ)

{ProductName} タブは、同様のデータ セットを整理して切り替えます。タブは、データ コンテンツの上部に配置されます。タブが選択されると、対応する ID を持つパネルが表示されます。このコンポーネントは、定義されたタブのみ (パネルなし) で使用できます。

## {Platform} タブの例

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/tabs-overview"
           alt="{Platform} タブの例"
           github-src="layouts/tabs/overview">
</code-view>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`Tabs` を使用する前に、次のように登録する必要があります:

```razor
IgbTabsModule.Register(IgniteUIBlazor);
```

```ts
import { defineComponents, IgcTabsComponent } from 'igniteui-webcomponents';

defineComponents(IgcTabsComponent);
```

単純な `Tabs` の宣言は次のように行われます:

```html
<igc-tabs>
    <igc-tab panel="first">Tab 1</igc-tab>
    <igc-tab panel="second">Tab 2</igc-tab>
    <igc-tab panel="third">Tab 3</igc-tab>
    <igc-tab-panel id="first">Panel 1</igc-tab-panel>
    <igc-tab-panel id="second">Panel 2</igc-tab-panel>
    <igc-tab-panel id="third">Panel 3</igc-tab-panel>
</igc-tabs>
```

```razor
<IgbTabs>
    <IgbTab Panel="first">Tab 1</IgbTab>
    <IgbTab Panel="second">Tab 2</IgbTab>
    <IgbTab Panel="third">Tab 3</IgbTab>
    <IgbTabPanel Id="first">Panel 1</IgbTabPanel>
    <IgbTabPanel Id="second">Panel 2</IgbTabPanel>
    <IgbTabPanel Id="third">Panel 3</IgbTabPanel>
</IgbTabs>
```

### 選択

ユーザーがキーを押すかクリックして項目を選択すると、 `Tabs` は `igcChange` イベントを発行します。`select` メソッドを使用すると、パネルを文字列値として指定してタブを選択できます。

選択したタブが初期の読み込み時に指定されていない場合、無効になっていない最初のタブが選択されます。

ユーザーが矢印キーでナビゲートしているときにタブを選択するデフォルトの動作は、 `activation` プロパティによって変更できます。`manual` に設定すると、矢印キーを押すと次 / 前のタブにフォーカスしますが、タブは <kbd>Space</kbd> または <kbd>Enter</kbd> を押した後にのみ選択されます。

### 無効化されたタブ

`disabled` 属性を設定すると、タブが無効になります:

```html
<igc-tab panel="first" disabled>Tab 1</igc-tab>
```

```razor
<IgbTab Panel="first" Disabled>Tab 1</IgbTab>
```

### 配置

`alignment` プロパティは、タブの配置方法を制御します。プロパティは以下の値を含みます:

- `start` (デフォルト): タブの幅はコンテンツ (ラベル、アイコン、両方) に依存し、すべてのタブのパディングは等しくなります。最初のタブは、タブ コンテナーの左側に配置されます。
- `center`: タブの幅はコンテンツによって異なり、タブ コンテナーの中心を占めます。
- `end`: タブの幅はコンテンツによって異なり、すべてのタブのパディングは同じです。最後のタブは、タブ コンテナーの右側に配置されます。
- `justify`: すべてのタブは幅が等しく、タブ コンテナーに完全に収まります。

スペースがすべてのタブに収まらない場合は、スクロール ボタンが表示されます。

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/tabs-alignment"
           alt="{Platform} タブの例"
           github-src="layouts/tabs/alignment">
</code-view>

### スクローリング

スクロール ボタンは、利用可能なスペースがすべてのタブを描画するのに十分でない場合に表示されます。最初のタブが表示されている場合、スクロール開始ボタンは無効になります。最後のタブが表示されている場合、スクロール終了ボタンは無効になります。スクロール ボタンの 1 つを押すと、その方向のタブが完全に表示されるようにタブがスクロールされます。または、既に表示されている場合は、その方向の前 / 次のタブが表示されます。

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/tabs-scrolling"
           alt="{Platform} タブの例"
           github-src="layouts/tabs/scrolling">
</code-view>

### キーボード ナビゲーション

|キー|説明|
|----|-----------|
| <kbd>&larr;</kbd> | 前 (右から左モードでは次) のタブを選択します。`activation` が `manual` に設定されている場合は、タブのみがフォーカスされます。最初のタブにある場合は最後までスクロールします。 |
| <kbd>&rarr;</kbd> | 次へ (右から左モードでは前へ) タブを選択します。`activation` が `manual` に設定されている場合は、タブのみがフォーカスされます。最後のタブにある場合は、スクロールして開始します。 |
| <kbd>Home</kbd> | 最初のタブを選択します。 |
| <kbd>End</kbd> | 最後のタブを選択します。 |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | `activation` が `manual` の場合、フォーカスされたタブを選択します。 |

### Prefix / Suffix (プレフィックス / サフィックス)

各タブには、情報を表示するためのデフォルト スロットがあります。アイコン、テキスト、またはその両方と、開始および / または終了に追加のコンテンツを表示するための `prefix` と `suffix` のスロットです。

<code-view style="height: 150px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/layouts/tabs-prefix-suffix"
           alt="{Platform} タブの例"
           github-src="layouts/tabs/prefix-suffix">
</code-view>

### スタイル設定

`Tabs` コンポーネントは、そのすべての要素の CSS パーツを公開します。

| 名前 | 説明 |
|--|--|
| `headers` | タブとスクロール ボタンを含むラッパー。 |
| `headers-content` | タブの描画に使用できるスペースを表すタブのコンテナー。 |
| `headers-wrapper` | タブと選択されたインジケーターのラッパー。 |
| `headers-scroll` | タブのコンテナー。 |
| `selected-indicator` | 選択されたインジケーター。 |
| `start-scroll-button` | タブがオーバーフローしたときに表示されるスクロール開始ボタン。 |
| `end-scroll-button` | タブがオーバーフローしたときに表示されるスクロール終了ボタン。|
| `content` | データが表示されるコンテンツのコンテナー。 |

`Tab` コンポーネントは、次の CSS パーツを公開します:

|名前|説明|
|--|--|
| `base` | タブ ヘッダーの基本ラッパー。|
| `prefix` | プレフィックス ラッパー。 |
| `suffix` | サフィックス ラッパー。 |

```css
igc-tabs::part(selected-indicator) {
    background: #ecaa53;
}

igc-tab::part(base) {
    background: #ffe6cc;
}
```

<!-- WebComponents -->

## API リファレンス

* `Tabs`
* `Tab`
* `TabPanel`

使用したその他のコンポーネントとディレクティブ:
* `Icon`
* `IconButton`
* `RadioGroup`

<!-- end: WebComponents -->

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [**GitHub** の Ignite UI for Blazor の例 (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->
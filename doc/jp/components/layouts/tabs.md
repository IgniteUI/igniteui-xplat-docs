---
title: {Platform} Tabs コントロール | レイアウト コントロール | {ProductName}
_description: {Platform} タブ コンポーネントを使用すると、ユーザーはタブを上部に配置して、同様のデータ セットを切り替えることができます。今すぐお試しください。
_keywords: {Platform}, UI controls, web widgets, UI widgets, {Platform} Tabs Component, Infragistics, UI コントロール, web ウィジェット, UI ウィジェット, {Platform} タブ コンポーネント, インフラジスティックス
mentionedTypes: ["Tabs", "Tab", "Icon", "IconButton", "RadioGroup"]
_language: ja
---

# {Platform} Tabs (タブ) の概要

{Platform} タブは軽量で使いやすいコンポーネントで、対応するコンテンツをタブ形式または通常は水平に配置されたタブのコレクションで整理します。{Platform} タブを使用すると、エンドユーザーは簡単にクリックしてさまざまなビューを表示できます。タブの向き、テンプレート、組み込みのヘッダー スタイル、アニメーション、スクロール ボタンなど、いくつかの機能とカスタマイズ オプションがあります。

{ProductName} タブは、同様のデータ セットを整理して切り替えます。タブは、データ コンテンツの上部に配置されます。タブが選択されると、対応するコンテンツパネルが表示されます。

## {Platform} タブの例

以下の {Platform} タブの例では、3 つの異なるタブが 1 行に並んで表示されているため、それぞれをすばやく簡単に移動できます。

`sample="/layouts/tabs/overview", height="150", alt="{Platform} タブの例"`

## {ProductName} でタブを使用する方法

<!-- WebComponents -->

まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

<!-- end: React -->

`Tabs` を使用する前に、次のようにインポートする必要があります:

```tsx
import { IgrTabs, IgrTab } from "igniteui-react";
```


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTabsModule));
```

```ts
import { defineComponents, IgcTabsComponent } from 'igniteui-webcomponents';

defineComponents(IgcTabsComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

単純な `Tabs` の宣言は次のように行われます:

```html
<igc-tabs>
    <igc-tab>
      <div slot="label">Tab 1</div>
      <span>Content for tab 1</span>
    </igc-tab>
    <igc-tab>
      <div slot="label">Tab 2</div>
      <span>Content for tab 2</span>
    </igc-tab>
    <igc-tab>
      <div slot="label">Tab 3</div>
      <span>Content for tab 3</span>
    </igc-tab>
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

```tsx
<IgrTabs>
    <IgrTab label="Tab 1">
      <span>Panel 1</span>
    </IgrTab>
    <IgrTab label="Tab 2">
      <span>Panel 2</span>
    </IgrTab>
    <IgrTab label="Tab 3">
      <span>Panel 3</span>
    </IgrTab>
</IgrTabs>
```

### 選択

ユーザーがキーを押すかクリックして項目を選択すると、`Tabs` は `Change` イベントを発行します。`Select` メソッドを使用すると、`Tab` またはその ID を指定してタブを選択できます。

選択したタブが初期の読み込み時に指定されていない場合、無効になっていない最初のタブが選択されます。

ユーザーが矢印キーでナビゲートしているときにタブを選択するデフォルトの動作は、`Activation` プロパティによって変更できます。`Manual` に設定すると、矢印キーを押すと次 / 前のタブにフォーカスしますが、タブは <kbd>Space</kbd> または <kbd>Enter</kbd> を押した後にのみ選択されます。

### 無効化されたタブ

`Disabled` 属性を設定すると、タブが無効になります:

```html
<igc-tab disabled>Tab 1</igc-tab>
```

```razor
<IgbTab Panel="first" Disabled>Tab 1</IgbTab>
```

```tsx
<IgrTab disabled={true}>Tab 1</IgrTab>
```

### 配置

`Alignment` プロパティは、{Platform} タブの配置方法を制御します。プロパティは以下の値を含みます:

- `Start` (デフォルト): タブの幅はコンテンツ (ラベル、アイコン、両方) に依存し、すべてのタブのパディングは等しくなります。最初のタブは、タブ コンテナーの左側に配置されます。
- `Center`: タブの幅はコンテンツによって異なり、タブ コンテナーの中心を占めます。
- `End`: タブの幅はコンテンツによって異なり、すべてのタブのパディングは同じです。最後のタブは、タブ コンテナーの右側に配置されます。
- `Justify`: すべてのタブは幅が等しく、タブ コンテナーに完全に収まります。

スペースがすべてのタブに収まらない場合は、スクロール ボタンが表示されます。

`sample="/layouts/tabs/alignment", height="200", alt="{Platform} タブの例"`



### スクローリング

スクロール ボタンは、利用可能なスペースがすべての {Platform} タブを描画するのに十分でない場合に表示されます。最初のタブが表示されている場合、スクロール開始ボタンは無効になります。最後のタブが表示されている場合、スクロール終了ボタンは無効になります。スクロール ボタンの 1 つを押すと、その方向のタブが完全に表示されるようにタブがスクロールされます。または、既に表示されている場合は、その方向の前 / 次のタブが表示されます。

`sample="/layouts/tabs/scrolling", height="150", alt="{Platform} タブの例"`



### キーボード ナビゲーション

|キー|説明|
|----|-----------|
| <kbd>&larr;</kbd> | 前 (右から左モードでは次) のタブを選択します。`Activation` が `Manual` に設定されている場合は、タブのみがフォーカスされます。最初のタブにある場合は最後までスクロールします。 |
| <kbd>&rarr;</kbd> | 次へ (右から左モードでは前へ) タブを選択します。`Activation` が `Manual` に設定されている場合は、タブのみがフォーカスされます。最後のタブにある場合は、スクロールして開始します。 |
| <kbd>Home</kbd> | 最初のタブを選択します。 |
| <kbd>End</kbd> | 最後のタブを選択します。 |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | `Activation` が `Manual` の場合、フォーカスされたタブを選択します。 |

### Prefix / Suffix (プレフィックス / サフィックス)

各タブには、情報を表示するためのデフォルト スロットがあります。アイコン、テキスト、またはその両方と、開始および / または終了に追加のコンテンツを表示するための `prefix` と `suffix` のスロットです。

`sample="/layouts/tabs/prefix-suffix", height="150", alt="{Platform} タブの例"`



## スタイル設定

`Tabs` コンポーネントはいくつかの CSS パーツを公開し、スタイルを完全に制御できるようにします。

<!-- WebComponents, React -->
| 名前 | 説明 |
|--|--|
| `selected-indicator` | 選択されたインジケーター。 |
| `start-scroll-button` | タブがオーバーフローしたときに表示されるスクロール開始ボタン。 |
| `end-scroll-button` | タブがオーバーフローしたときに表示されるスクロール終了ボタン。 |
<!-- end: WebComponents, React -->

<!-- Blazor -->
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
<!-- end: Blazor -->

`Tab` コンポーネントは、次の CSS パーツを公開します:

<!-- WebComponents, React -->
|名前|説明|
|--|--|
| `content` | タブ ヘッダーのラベル スロット コンテナー。 |
| `prefix` | タブ ヘッダーのラベル プレフィックス。 |
| `suffix` | タブ ヘッダーのラベル サフィックス。 |
| `tab-header` | 単一のタブのヘッダー。 |
| `tab-body` | 単一のタブの本体コンテンツを保持します。選択したタブの本体のみが表示されます。 |

```css
igc-tab::part(tab-header) {
  background-color: var(--ig-gray-200);
}

igc-tab::part(content) {
  color: var(--ig-success-500);
}
```
<!-- end: WebComponents, React -->

<!-- Blazor -->
|名前|説明|
|--|--|
| `content` | コンテンツのラッパー。 |
| `prefix` | プレフィックス ラッパー。 |
| `suffix` | サフィックス ラッパー。 |

```css
igc-tabs::part(headers-content) {
  background-color: var(--ig-gray-200);
}

igc-tab::part(content) {
  color: var(--ig-success-500);
}
```
<!-- end: Blazor -->
`sample="/layouts/tabs/styling", height="150", alt="Tabs スタイル設定の例"`

## API リファレンス

- `Tabs`
- `Tab`
- `Icon`
- `IconButton`
- `RadioGroup`
- [スタイル設定 & テーマ](../themes/overview.md)


## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
---
title: {Platform} Accordion | アコーディオン | インフラジスティックス
_description: アコーディオンは、アコーディオン メニューで垂直方向に展開可能なパネルを構築するために使用されます。
_keywords: {Platform} Accordion, {ProductName}, Infragistics, {Platform} アコーディオン, インフラジスティックス
mentionedTypes: ["Accordion", "Infragistics.Controls.Layouts.Implementation.ExpansionPanel"]
namespace: Infragistics.Controls
_language: ja
---

# {Platform} Accordion (アコーディオン) の概要

{ProductName} アコーディオンは、単一のコンテナーに表示されるクリック可能なヘッダーと関連するコンテンツ セクションを含む垂直方向に展開可能なパネルを構築するための GUI コンポーネントです。Accordion は、単一のページのコンテンツの複数のセクションでスクロールする必要性を軽減するためによく使用されます。キーボード ナビゲーションと基になるパネルの展開状態を制御する API を提供します。

ユーザーは、サムネイルやラベルなどの項目のリスト間で操作および移動できます。含まれる情報を表示するために、各項目を切り替えることができます (展開または縮小)。構成に応じて、一度に 1 つまたは複数の展開されている項目があります。

## {Platform} アコーディオンの例

以下は FAQ セクションの基本的な {ProductName} アコーディオンの例です。アコーディオンとして動作し、個別に動作します。複数のパネルを同時に展開しながら、各テキスト ブロックをシングル クリックで切り替えることができます。これにより、自動的に展開および縮小パネル間を前後に移動することなく、情報をより簡単に読み取ることができます。このパネルは、以前に開いたセクションを毎回非表示にします。

その中で、アコーディオンとその展開パネルを定義する方法を見ることができます。このサンプルは、2 種類の展開動作も示します。切り替えボタンは `SingleExpand` プロパティを設定し、一度に展開する単一ブランチと複数ブランチを切り替えます。

`sample="/layouts/accordion/overview", height="460", alt="{Platform} アコーディオンの例"`

<div class="divider--half"></div>

## {Platform} アコーディオンで作業を開始

<!-- WebComponents -->

まず、次のコマンドを実行して {ProductName} をインストールする必要があります:

```cmd
npm install {PackageWebComponents}
```

`Accordion` を使用する前に、次のように登録する必要があります:

```ts
import { defineComponents, IgcAccordionComponent } from 'igniteui-webcomponents';

defineComponents(IgcAccordionComponent);
```

{ProductName} の完全な概要については、[作業の開始](../general-getting-started.md)トピックを参照してください。

<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`Accordion` および `ExpansionPanel` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import {
  IgrAccordion,
  IgrAccordionModule,
  IgrExpansionPanel,
  IgrExpansionPanelModule,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

IgrAccordionModule.register();
IgrExpansionPanelModule.register();
```

<!-- end: React -->

`Accordion` を使用する前に、次のように登録する必要があります:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbAccordionModule));
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `Accordion` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

これで、`Accordion` とそのパネルの基本構成から始めることができます。

## 使用方法

{Platform} アコーディオン コンポーネントの各セクションは、{Platform} 展開パネルを使用して定義されます。
パネルには、`Disabled` および `Open` プロパティが用意されており、要件に応じてパネルの状態を構成できます。

### Accordion の宣言

アコーディオンは、その中で宣言されたすべての展開パネルをラップします。

```html
<igc-accordion id="accordion" single-expand="true">
    <igc-expansion-panel>
        <div slot="title">Title Panel 1</div>
        <div>
            Content Panel 1
        </div>
    </igc-expansion-panel>
    <igc-expansion-panel>
        <div slot="title">Title Panel 2</div>
        <div>
            Content Panel 2
        </div>
    </igc-expansion-panel>
</igc-accordion>
```

```razor
<IgbAccordion SingleExpand=true>
    <IgbExpansionPanel>
        <div slot="title">Title Panel 1</div>
        <div>
            Content Panel 1
        </div>
    </IgbExpansionPanel>
    <IgbExpansionPanel>
        <div slot="title">Title Panel 2</div>
        <div>
            Content Panel 2
        </div>
    </IgbExpansionPanel>
</IgbAccordion>
```

```tsx
<IgrAccordion singleExpand={true}>
  <IgrExpansionPanel>
    <div slot="title">Title Panel 1</div>
    <div>Content Panel 1</div>
  </IgrExpansionPanel>
  <IgrExpansionPanel>
    <div slot="title">Title Panel 2</div>
    <div>Content Panel 2</div>
  </IgrExpansionPanel>
</IgrAccordion>
```

<!-- WebComponents -->

`Panels` アクセサーを使用して、`Accordion` のすべての子の拡張パネルを含むコレクションへの参照を取得できます。

```typescript
private accordion: IgcAccordionComponent;
private panels: IgcExpansionPanelComponent[];

constructor() {
	this.accordion = document.getElementById("accordion") as IgcAccordionComponent;
	this.panels = this.accordion.panels;
}
```

<!-- end: WebComponents -->

上記で示したように、`SingleExpand` プロパティを使用すると、一度に 1 つまたは複数のパネルを展開できるかどうかを設定できます。

`HideAll` メソッドと `ShowAll` メソッドを使用すると、`Accordion` のすべての `ExpansionPanel` をプログラムでそれぞれ省略したり展開したりできます。

> [!Note]
> `SingleExpand` プロパティが *true* に設定されている場合、`ShowAll` メソッドを呼び出すと、フォーカスされたパネルのみが展開されます。

### {Platform} アコーディオンのカスタマイズの例

{Platform} アコーディオンを使用すると、ヘッダーとコンテンツ パネルの外観をカスタマイズできます。

以下のサンプルは、`ExpansionPanel` の組み込みスロットを使用して、複雑なフィルタリング オプションを実装する方法を示しています。

`sample="/layouts/accordion/customization", height="550", alt="{Platform} アコーディオンのカスタマイズの例"`



<div class="divider--half"></div>

### ネストされた {Platform} アコーディオンのシナリオ

次の {Platform} アコーディオンの例では、この一般的なアプリケーション シナリオにどのように取り組むことができるかを説明するために、複雑な FAQ セクションが作成されています。サンプルでは、ネストされたアコーディオンは、展開パネル内に `Accordion` を追加することによって実現されます。

`sample="/layouts/accordion/nested-scenario", height="550", alt="{Platform} ネストされた {Platform} アコーディオンの例"`



<div class="divider--half"></div>

## キーボード ナビゲーション

{Platform} アコーディオンのキーボード ナビゲーションは、エンド ユーザーにさまざまなキーボード操作を提供します。この機能はデフォルトで有効になっており、エンドユーザーは簡単にパネル間を移動できます。

アコーディオン ナビゲーションは、W3C アクセシビリティ標準に準拠しており、使いやすいです。

**キーの組み合わせ**
 - <kbd>↓</kbd> - フォーカスを下のパネルに移動します。
 - <kbd>↑</kbd> - フォーカスを上のパネルに移動します。
 - <kbd>Alt</kbd> + <kbd>↓</kbd> - アコーディオンでフォーカスされたパネルを開きます。
 - <kbd>Alt</kbd> + <kbd>↑</kbd> - Accordion でフォーカスされたパネルを閉じます。
 - <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd> - 有効なすべてのパネルを開きます。(singleExpand が true に設定されている場合、フォーカスされたパネルが開きます)。
 - <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↑</kbd> - 有効なすべてのパネルを閉じます。
 - <kbd>Home</kbd> - Accordion の最初の有効なパネルに移動します。
 - <kbd>End</kbd> - Accordion の最後の有効なパネルに移動します。

<div class="divider"></div>

## API リファレンス

- `Accordion`
- `ExpansionPanel`

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
---
title: {Platform} ズームスライダー | データ可視化ツール | ナビゲーション | ズーム | データ チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの {Platform} ズームスライダー コントロールを使用して、最小値と最大値を表す 2 つのハンドルのデータ サブセットを簡単に表示します。{ProductName} ズームスライダーでデータの可視化を向上させます。
_keywords: zoom slider, {ProductName}, Infragistics, data chart, ズームスライダー, インフラジスティックス, データ チャート
mentionedTypes: ['ZoomSlider', 'XamDataChart']
_language: ja
---

# {Platform} ズーム スライダーの概要

{Platform} ZoomSlider コントロールは、範囲対応コントロールにズーム機能を提供します。ZoomSlider には、水平スクロールバー、全範囲の縮小表示、サイズ変更可能なズーム範囲ウィンドウの機能があります。ZoomSlider は、スタンド アロン コントロールとして機能できません。または、DataChart や CategoryChart などの範囲ベースのコントロールの拡張機能として動作します。

## {Platform} ズーム スライダーの例

以下のサンプルは、`ZoomSlider` を使用して `XamDataChart` のコンテンツをナビゲートする方法を示しています。

`sample="/charts/zoomslider/overview", height="600", alt="{Platform} ズーム スライダーの例"`



<div class="divider--half"></div>

## 使用方法

| 機能名|説明 |
| --------------------|----------------------- |
| スクロールバーのナビゲーション|ZoomSlider スクロールバーの組み込み機能を使用して、スケールを変更してデータ範囲をスクロールできます。 |
| パンとズーム|サムパッドの端をドラッグして表示スケールを調節し、現在の表示範囲を広げる (ズーム アウト)、または狭くする (ズーム イン) ことができます。 |
| 複数のユーザー インタラクション オプション|マウスによるすべてのインタラクションは、タッチ操作 (ほとんどはキーボードを介した操作) でもサポートされます。詳細は、ユーザー インタラクションと操作性を参照してください。 |
| タッチ サポート|タッチ対応デバイスでは、ZoomSlider のすべての機能を使用できます。すべてのマウス操作は、タッチ環境でもサポートされます。 |
| 拡張性|ZoomSlider コントロールは、追加設定なしで DataChart コントロール をサポートします。 |
| 構成可能なズーム範囲ウィンドウ|ズーム範囲ウィンドウの初期幅、初期位置、最小サイズは、構成可能です。 |

<!-- Angular, React, WebComponents -->
## 依存関係
{Platform} chart コンポーネントをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

## モジュールの要件
`ZoomSlider` を作成するには、以下のモジュールが必要です。


```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbZoomSliderModule));
```

```ts
import { IgxZoomSliderModule } from 'igniteui-angular-charts';
import { IgxZoomSliderComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxZoomSliderModule,
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrZoomSliderModule } from 'igniteui-react-charts';
import { IgrZoomSlider } from 'igniteui-react-charts';

IgrDataChartInteractivityModule.register();
```

```ts
import { IgcZoomSliderModule } from 'igniteui-webcomponents-charts';
import { IgcZoomSliderComponent } from "igniteui-webcomponents-charts";

IgcZoomSliderModule.register();

```

## コード スニペット
以下のコードは、ZoomSlider を設定する方法を示します。

```html
<igx-zoom-slider
  width="100%"
  height="150px">
</igx-zoom-slider>
```

```tsx
 <IgrZoomSlider
  width="100%"
  height="100%"
 />
```


```html
  <igc-zoom-slider
      name="zoomSlider"
      width="100%"
      height="160px" >
  </igc-zoom-slider>
```
<div class="divider--half"></div>

## その他のリソース

チャートの詳細については、[グラフの機能](charts/chart-features.md)トピックを参照してください。

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

- `ZoomSlider`
- `XamDataChart`
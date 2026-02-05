---
title: {Platform} {GridLiteTitle} の概要 | {ProductName} | MIT ライセンス
_description: オープン ソースの {GridLiteTitle} を使用してアプリを作成できます。軽量でありながら、フィルタリング、非表示、ソート など、必要な機能がすべて搭載されています。今すぐお試しください。
_keywords: overview, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, 概要, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_language: ja
---

# オープン ソース {Platform} グリッド (Grid Lite)

{ProductName} {GridLiteTitle} は、Infragistics のオープン ソース UI コンポーネント セットの一部であり、今後も継続的にサポートおよびメンテナンスされます。これはオープン ソースの JavaScript データ グリッドで、Web コンポーネントとして構築されているため、Web フレームワークの有無に関係なく依存関係なしで使用できます。現在、Angular、React、Blazor、Web Components 向けに 40 以上の OSS コントロールが MIT ライセンスのもとで利用可能です。

{GridLiteTitle} は、必要最小限のオーバーヘッドで本質的なデータ表示機能を提供し、ユーザーが期待するパフォーマンスを実現します。これは、エンタープライズ グリッドの複雑さを避けつつ、高速で軽量なデータ表示を必要とする開発者向けに設計されています。

{GridLiteTitle} の機能:

- 列フィルタリング
- 非表示
- サイズ変更
- ソート
- 行仮想化
- ユーザー補助
- テーマとスタイル設定
- 列のデータ タイプ

<!-- React, WebComponents -->
## インストールとセットアップ

### インストール
{GridLiteTitle} をインストールするには、プロジェクトのルート フォルダー (`package.json` がある場所) に移動し、npm を使用して次のコマンドを実行します。

```cmd
npm install igniteui-grid-lite --save
```

または yarn を使用する場合:

```cmd
yarn add igniteui-grid-lite
```

### {Platform} コードでの Grid Lite の使用

Grid Lite を使用するファイルで、コンポーネント クラスまたは関数を宣言する前にインポートして登録します。

<!-- React -->
```tsx
import { IgcGridLite } from 'igniteui-grid-lite';

IgcGridLite.register();
```
<!-- End: React -->

<!-- WebComponents -->
```ts
import { IgcGridLite } from 'igniteui-grid-lite';

IgcGridLite.register();
```
<!-- End: WebComponents -->

<!-- WebComponents -->
TypeScript ファイルで、id によって HTML から要素を取得します。

```ts
const gridLite = document.getElementById('grid-lite') as IgcGridLite<ProductInfo>;
```
<!-- end: WebComponents -->

マークアップに `<igc-grid-lite>` 要素を追加します。

<!-- React -->
```tsx
return (
  <div className="container sample ig-typography">
    <div className="grid-lite-wrapper">
      <igc-grid-lite ref={this.gridRef} id="grid-lite"></igc-grid-lite>
    </div>
  </div>
);
```
<!-- end: React -->

<!-- WebComponents -->
```html
<div class="grid-lite-wrapper">
    <igc-grid-lite id="grid-lite"></igc-grid-lite>
</div>
```
<!-- end: WebComponents -->

<!-- end: React, WebComponents -->

<!-- Blazor -->
### IgniteUI.Blazor.GridLite のインストール

Visual Studio で、**[ツール]** → **[NuGet パッケージ マネージャー]** → **[ソリューションの NuGet パッケージの管理]** を選択して、NuGet パッケージ マネージャーを開きます。**IgniteUI.Blazor.GridLite NuGet** パッケージを検索してインストールします。

または、パッケージ マネージャー コンソール経由でインストールします。

```cmd
Install-Package IgniteUI.Blazor.GridLite
```

または、.NET CLI 経由でインストールします。

```cmd
dotnet add package IgniteUI.Blazor.GridLite
```
### Grid Lite の使用

1 - **IgniteUI.Blazor.Controls** 名前空間を **_Imports.razor** ファイルに追加します。

```razor
@using IgniteUI.Blazor.Controls
```

2 - プロジェクト タイプに応じて、適切な場所にスタイル シートを追加します。

```razor
<head>
       <link href="_content/IgniteUI.Blazor.GridLite/css/themes/light/bootstrap.css" rel="stylesheet" />
</head>
```

3 - razor ページに Grid Lite コンポーネントを追加します。

```razor
<IgbGridLite Data="data" AutoGenerateColumns="true">
</IgbGridLite>

@code {
    private object[] data = new object[]
    {
        new { Name = "John", Age = 30, City = "New York" },
        new { Name = "Jane", Age = 25, City = "Los Angeles" },
        new { Name = "Bob", Age = 35, City = "Chicago" }
    };
}
```
<!-- end: Blazor -->

## Grid Lite の動作

`sample="/{GridLiteSample}/overview", height="600", alt="{Platform} {GridLiteTitle} メイン アプリ サンプル"`

{GridLiteTitle} は、アプリで美しいデータ グリッド/データ テーブル体験を提供するために必要なコア機能を備えています。パフォーマンスと美しさを重視して設計されており、どのフレームワーク、どのプラットフォームでも動作します。

## パフォーマンス内蔵

行レベルの仮想化により、無制限のデータをスムーズなスクロールでレンダリングできます。

## 自動列タイプ

列タイプは、データ ソースに基づいて自動的に生成され、各列タイプに合わせた組み込みのフィルタリングが提供されます。

<!-- WebComponents -->
## カスタム列テンプレート

列テンプレートを使用して、あらゆるタイプの UX を実現できます。思い描いたものを、グリッド列にそのまま描画できます。
<!-- end: WebComponents -->

## インタラクティブ機能

ユーザーが期待するすべてのコアなインタラクティブ機能を提供します: 列のフィルタリング、列の非表示、列のリサイズ、列のソートなどが含まれます。

## 美しい UX とブランディング

Bootstrap、Material、Fluent 向けの組み込みテーマ ポートに加え、カラー パレット、フォント、エレベーション、表示密度など無限のブランディング オプションがあります。

## 高度なキーボード ナビゲーション

Excel スタイルのフル キーボード ナビゲーションにより、大規模なデータセットでも高いパフォーマンスを維持しながら、ユーザーが期待する操作性を提供します。

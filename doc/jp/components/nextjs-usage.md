---
title: Next.js アプリケーションで {ProductName} コンポーネントを使用する | インフラジスティックス
_description: インフラジスティックスの {Platform} コンポーネントを使用してアプリを作成し、Next.js の世界最速の {Platform} データ グリッドとチャートでデータの視覚化を向上させます。
_keywords: {ProductName} Next.js, {ProductName} Components in Next.js, Infragistics, {ProductName} Next.js のコンポーネント, インフラジスティックス
mentionedTypes: []
_language: ja
---

# {ProductName} と Next.js の統合

{ProductName} を Next.js プロジェクトにシームレスに統合する方法について説明します。このトピックは、開発者が堅牢でパフォーマンスの高いフル スタック アプリケーションを構築するために Next.js の機能を活用しながら、Infragistics {Platform} コンポーネントを最大限に活用できるように作成されています。

## 前提条件

1. NodeJS をインストールします。
2. Visual Studio Code をインストールします。

<div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/nodejs.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        Node のダウンロード
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/vs-code.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        VS Code のダウンロード
      </a>
    </div>
</div>

## 新しい Next.js プロジェクトの作成

前提条件のインストール後、新しい Next.js アプリケーションを作成できます。

1 - **VS Code** を開き、**[ターミナル]** メニューを選択してから、**[新しいターミナル]** オプションを選択します。

2 - ターミナル ウィンドウに以下のコマンドを入力します。

```cmd
npx create-next-app@latest my-app-name
cd my-app-name
```

## 既存の Next.js アプリの更新

既存の Next.js プロジェクト(既に以前に作成したもの) で {ProductName} を使用する場合は、以下のコマンドを実行するだけです。

```cmd
npm install --save {PackageCommon}
npm install --save {PackageCharts} {PackageCore}
npm install --save {PackageExcel} {PackageCore}
npm install --save {PackageGauges} {PackageCore}
npm install --save {PackageGrids} {PackageCore}
npm install --save {PackageMaps} {PackageCore}
npm install --save {PackageSpreadsheet} {PackageCore}
```

または

```cmd
yarn add {PackageCharts} {PackageCore}
yarn add {PackageExcel} {PackageCore}
yarn add {PackageGauges} {PackageCore}
yarn add {PackageGrids} {PackageCore}
yarn add {PackageMaps} {PackageCore}
yarn add {PackageSpreadsheet} {PackageCore}
```

これにより、{ProductName} のパッケージが、それらのすべての依存関係、フォントのインポート、および既存のプロジェクトへのスタイル参照と共に自動的にインストールされます。

## コンポーネント モジュールのインポート

はじめに、使いたいコンポーネントの必要なモジュールをインポートします。[**GeographicMap**](geo-map.md) コンポーネントに対してこれを行います。

```ts
"use client"
import { IgrGeographicMapModule, IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
```
> [!Note]
> {ProductName} コンポーネントは、状態やブラウザー イベントなどのクライアント専用の機能を使用していることに注意してください。Infragistics のコンポーネントは、「use client」 ディレクティブがあるため、クライアント Next.js コンポーネント内では期待どおりに動作しますが、サーバー コンポーネント内では動作しません。

## コンポーネントの使用

Next.js に {ProductName} マップ コンポーネントを使用する準備が整いました。以下のように定義します。

```tsx
function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <IgrGeographicMap
        width="800px"
        height="500px"
        zoomable="true" />
    </div>
  );
}
```

## アプリケーションの実行

以下のコマンドを使用して新しいアプリケーションを実行できます。

```cmd
npm run dev
```

コマンドを実行した後、プロジェクトがローカルでビルドされて提供されます。これでデフォルトのブラウザーで自動的に開き、プロジェクトで {ProductName} コンポーネントを使用できるようになります。

以下の画像は、上記を実行した結果です。

<img src="../images/general/geo-map.png" />

## Next.js サーバー コンポーネントでの {Platform} の使用
上記に記述した通り、{Platform} のほとんどのコンポーネントは状態とブラウザー イベントに依存しているため、サーバー コンポーネント内での直接使用と互換性がありません。ですが、サーバーコンポーネント内で使用する必要がある場合は、Infragistics のコンポーネントをそれぞれのクライアント コンポーネント内にラップすることができます。

```tsx
'use client'
import { IgrGeographicMap } from 'igniteui-react-maps';
IgrGeographicMapModule.register();

export default IgrGeographicMap;
```

そのようにすることで、Next.js サーバー コンポーネントで IgrGeographicMap を直接使用できます。

```tsx
import IgrGeographicMap from './wrapped-geographic-map';

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <IgrGeographicMap
        width="800px"
        height="500px"
        zoomable="true" />
    </div>
  );
}
```

> [!Note]
> {ProductName} コンポーネントの大部分は、他のクライアント コンポーネント内で使用されることが予想されるため、ラップされていないままになる可能性があります。したがって、Infragistics コントロールをラップする必要はありません。

## {ProductName} コンポーネントの動的インポート

アプリケーションの初期読み込みパフォーマンスの向上は、遅延読み込みによって促進されます。これにより、ルートをレンダリングするために必要な JavaScript の量が削減されます。インポートされたライブラリの読み込みを延期し、必要な場合にのみクライアント バンドルに含めることができます。`next/dynamic` を使用すると、遅延読み込みを実装できます。

```tsx
"use client";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import dynamic from "next/dynamic";

export default function DynamicButtonComponent() {
  const IgButton = dynamic(
    async () => {
      const { IgrButton, IgrButtonModule } = await import("igniteui-react");
      IgrButtonModule.register();
      return IgrButton;
    }
  );
  
  return (
      <IgButton variant="contained">
        <span key="title">Click me</span>
      </IgButton>
  );
}
```

ただし、より複雑なコンポーネント (通常は子コンポーネントを含む [**IgrGrid**](grids/data-grid.md) など) を使用する場合は、すべての子コンポーネントを動的にインポートしないことが重要です。コンポーネントは次のように使用する必要があります。

```tsx
"use client";
import dynamic from "next/dynamic";
import CustomersDataLocal from "./CustomersDataLocal.json";
import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function GridDynamicComponent() {
  const IgnGrid = dynamic(
    async () => {
      const {
        IgrGrid,
        IgrGridModule,
        IgrColumn,
        IgrGridToolbar,
        IgrGridToolbarTitle,
        IgrGridToolbarActions,
        IgrGridToolbarPinning,
      } = await import("igniteui-react-grids");
      IgrGridModule.register();

      const IgGrid = ({ ...props }) => {
        return (
          <IgrGrid {...props}>
            <IgrGridToolbar>
              <IgrGridToolbarTitle></IgrGridToolbarTitle>
              <IgrGridToolbarActions>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
              </IgrGridToolbarActions>
            </IgrGridToolbar>
            <IgrColumn field="ID" header="ID" hidden="true"></IgrColumn>
            <IgrColumn
              field="CompanyName"
              header="Company Name"
              width="300px"
            ></IgrColumn>
            <IgrColumn
              field="ContactName"
              header="Contact Name"
              width="200px"
              pinned="true"
            ></IgrColumn>
            <IgrColumn
              field="ContactTitle"
              header="Contact Title"
              width="200px"
              pinned="true"
            ></IgrColumn>
            <IgrColumn
              field="Address"
              header="Address"
              width="300px"
            ></IgrColumn>
            <IgrColumn field="City" header="City" width="120px"></IgrColumn>
            <IgrColumn field="Region" header="Region" width="120px"></IgrColumn>
            <IgrColumn
              field="PostalCode"
              header="Postal Code"
              width="150px"
            ></IgrColumn>
            <IgrColumn field="Phone" header="Phone" width="150px"></IgrColumn>
            <IgrColumn field="Fax" header="Fax" width="150px"></IgrColumn>
          </IgrGrid>
        );
      };
      return IgGrid;
    }
  );

  return <IgnGrid data={CustomersDataLocal}></IgnGrid>;
}
```

> [!Note]
> コンポーネントの遅延読み込みを実装するとパフォーマンスが向上しますが、コンポーネントがページ上にすぐに表示されない場合にのみ使用することをお勧めします。

## その他のリソース

* [Ignite UI for React](../components/general-getting-started.md)
* [Grid の概要](../components/grids/data-grid.md)
* [Next.js ドキュメント](https://nextjs.org/docs)

コミュニティに参加して新しいアイデアをご提案ください。

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})
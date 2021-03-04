---
title: $PlatformShort$ ツリーマップ | データ可視化ツール | 方向 | レイアウト | データ バインディング | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ ツリーマップ コントロールを使用して、複数のレベルをサポートするストリップ、長方形、およびスライスアンドダイス アルゴリズムのデータ ポイントの相対的なウェイトを表示します。$ProductName$ ツリーマップについて説明します。
_keywords: $PlatformShort$ Tree Map, Treemap, layout, orientation, $ProductName$, Infragistics, $PlatformShort$ ツリーマップ, ツリーマップ, レイアウト, 方向, インフラジスティックス
mentionedTypes: ['Treemap','TreemapOrientation','TreemapLayoutType']
---
# $PlatformShort$ ツリーマップの概要
$ProductName$ ツリーマップは、ネストされた一連のノードとして階層 (ツリー構造) データを表示します。ツリーの各ブランチにはツリーマップ ノードが提供されて、サブマップを表す小さなノードでタイル化されます。各ノードの長方形には、データ上の指定されたディメンションに比例した領域があります。多くの場合、ノードは色分けされて、データの個別のディメンションを示します。


## $PlatformShort$ ツリーマップの例


<code-view style="height: 600px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/tree-map-overview" alt="$PlatformShort$ ツリーマップの例">
</code-view>


<div class="divider--half"></div>

色とサイズのディメンションが何らかの方法でツリー構造と関連付けられている場合、他の方法では見つけにくいパターンを簡単に識別できます。ツリーマップは、より効率的にスペースを使用します。このため、数千の項目を同時に画面に表示することが可能となります。

ツリーマップは、数値の表示ではなく相対的順位の表示に向いています。ツリーマップは、データ ポイントを分類し、値の相対的な差異の表示が円チャートや他のエリア チャートよりも効果的です。

## データの要件

`Treemap` のバインドは以下のデータ要件があります。
- データソースはデータ項目の配列またはリストである必要があります。
- データソースにはデータ項目を少なくとも 1 つ含む必要があり、含まれない場合はマップでノードがレンダリングされません。
- すべてのデータ項目には、`LabelMemberPath` プロパティにマッピングする必要があるデータ列 (文字列など) を少なくとも 1 列含める必要があります。
- すべてのデータ項目には、`ValueMemberPath` プロパティにマッピングする必要がある数値データ列を少なくとも 1 列含める必要があります。
- データを整理されたタイルに分類するには、オプションで `ParentIdMemberPath` および `IdMemberPath` を使用できます。

## レイアウトのタイプ

$ProductName$ ツリーマップ コンポーネントは、以下のタイプのアルゴリズムをサポートします。

- `SliceAndDice`
- `Squarified`
- `Stripped`

型は `TreemapLayoutType` プロパティの設定により定義されます。`TreemapLayoutType` プロパティが指定されていない場合は、既定では `Stripped` 型が表示されます。データを表示するようになる時にはさまざまなタイル アルゴリズムがあります。すべてのアルゴリズムには、ユーザーのニーズに基づいて利点があります。最適なアスペクト比を得ることを目的とするものもあります。ノードは可能な限り長方形に近くなります。その他のアルゴリズムは、要素の初期順序を保持することを目的としています。データソース内で互いに近いオブジェクトは、ツリーマップ上で互いに近くに配置されます。

* `Stripped` タイプのアルゴリズムは、最適な縦横比を描画しますが、オブジェクトがサイズによってソートされます。

* `SliceAndDice` レイアウトのアルゴリズムは、縦横比を代わりに最初の順番を維持するようにします。

* `Squarified` レイアウトのタイル アルゴリズムでは、SliceAndDice より縦横比がより正確で、Squarified より適切にソートされます。

## レイアウトの方向

`LayoutOrientation` プロパティによってユーザーは階層のノードが展開される方向を設定できます。

LayoutOrientation プロパティがレイアウト タイプ SliceAndDice および Strip と動作することに注意してください。

* `Horizontal` – 子ノードは水平に積み重ねられます (SliceAndDice)。

* `Vertical` – 子ノードは垂直に積み重ねられます (SliceAndDice)。

<!-- Angular, React, WebComponents -->
## 依存関係
chart コンポーネントをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save {PackageCore}
npm install --save {PackageCharts}
</pre>
<!-- end: Angular, React, WebComponents -->

## モジュールの要件
`Treemap` を作成するには、以下のモジュールが必要です。

```razor
TreemapModule.Register(IgniteUIBlazor);
```

```ts
import { IgxTreemapModule } from "igniteui-angular-charts";
import { IgxTreemapComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxTreemapModule,
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgrTreemapModule } from "igniteui-react-charts";
import { IgrTreemapComponent } from 'igniteui-react-charts';

IgrTreeMapModule.register();
```

```ts
import { IgcTreemapModule } from "igniteui-webcomponents-charts";
import { IgcTreemapComponent } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(IgcTreemapModule);
```

## コード スニペット
以下のコードは、Treemap を設定する方法を示します。

```html
<igx-treemap
    height="100%"
    width="100%"
    layoutType="stripped"
    layoutOrientation="horizontal"
    parentIdMemberPath="parent"
    idMemberPath="id"
    labelMemberPath="name"
    valueMemberPath="pop"
    transitionDuration="500"
    rootTitle="Countries"   >
</igx-treemap>
```

```tsx
<igr-treemap
    height="100%"
    width="100%"
    layoutType="stripped"
    layoutOrientation="horizontal"
    parentIdMemberPath="parent"
    idMemberPath="id"
    labelMemberPath="name"
    valueMemberPath="pop"
    transitionDuration="500"
    rootTitle="Countries" >
</igr-treemap>
```

```html
<igc-treemap
    height="100%"
    width="100%"
    id="treemap"
    layout-type="stripped"
    layout-orientation="horizontal"
    parent-id-member-path="parent"
    id-member-path="id"
    label-member-path="name"
    value-member-path="pop"
    transition-duration="500"
    root-title="Countries" >
</igc-treemap>
```

```razor
<Treemap Height="100%" Width="100%"
    DataSource="Data"
    LayoutType="TreemapLayoutType.Stripped"
    LayoutOrientation="TreemapOrientation.Horizontal"
    ParentIdMemberPath="parent"
    IdMemberPath="id"
    LabelMemberPath="name"
    ValueMemberPath="pop"
    TransitionDuration="500"
    RootTitle="Countries" />
```

## 塗りつぶしスケール
以下のコードは、Treemap の塗りつぶしスケールを設定する方法を示します。

```ts
import { TreemapFillScaleMode } from 'igniteui-angular-charts';
// ...
this.treeMap = new IgxTreemapComponent()
this.treeMap.fillScaleMode = TreemapFillScaleMode.Value;
this.treeMap.fillScaleMinimumValue = 0;
this.treeMap.fillScaleMaximumValue = 1500000000; // 1.5B
this.treeMap.fillBrushes = "#4e62cf #8a58d6" as any;
this.treeMap.isFillScaleLogarithmic = false;
```

```ts
import { TreemapFillScaleMode } from 'igniteui-react-charts';
// ...
this.treeMap = new IgrTreemapComponent({ name: "treeMap" })
this.treeMap.fillScaleMode = TreemapFillScaleMode.Value;
this.treeMap.fillScaleMinimumValue = 0;
this.treeMap.fillScaleMaximumValue = 1500000000; // 1.5B
this.treeMap.fillBrushes = "#4e62cf #8a58d6" as any;
this.treeMap.isFillScaleLogarithmic = false;
```

```ts
import { TreemapFillScaleMode } from 'igniteui-webcomponents-charts';
// ...
this.treeMap = document.getElementById("treeMap") as IgcTreemapComponent;
this.treeMap.fillScaleMode = TreemapFillScaleMode.Value;
this.treeMap.fillScaleMinimumValue = 0;
this.treeMap.fillScaleMaximumValue = 1500000000; // 1.5B
this.treeMap.fillBrushes = "#4e62cf #8a58d6" as any;
this.treeMap.isFillScaleLogarithmic = false;
```

```razor
<Treemap Height="100%" Width="100%"
    DataSource="Data"
    ParentIdMemberPath="Parent"
    IdMemberPath="Name"
    LabelMemberPath="Name"
    ValueMemberPath="Pop"    
    FillScaleMode="TreemapFillScaleMode.Value"
    FillScaleMinimumValue="0"
    FillScaleMaximumValue="1500000000"
    FillBrushes="#4e62cf, #8a58d6"
    IsFillScaleLogarithmic="false"    
    RootTitle="Countries" />
```

<div class="divider--half"></div>

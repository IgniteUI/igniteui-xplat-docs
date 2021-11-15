# $Platform$ Navigation Drawer (ナビゲーション ドロワー) の概要

Infragistics $Platform$ Navigation Drawer は、サイド ナビゲーションを提供する WebComponent です。コンテンツ内で展開または縮小されることができます。ミニ バージョンが閉じている場合もナビゲーションへのクイック アクセスを提供します。そのコンテンツは完全にカスタマイズ可能であると同時に、デフォルトのメニュー項目のスタイルも提供します。

## $Platform$ Navigation Drawer の例

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-drawer-items"
           alt="$Platform$ Navigation Drawer 項目の例"
           github-src="menus/nav-drawer/add-drawer-items">
</code-view>

## 使用方法

[`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html) の使用を開始するには、最初に次のコマンドを実行して $ProductName$ をインストールする必要があります:

```cmd
npm install {PackageComponents}
```

次に、`IgcNavDrawerComponent` と [`IgcNavDrawerHeaderItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawerheaderitemcomponent.html) および[`IgcNavDrawerItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdraweritemcomponent.html) を typescript ファイルにインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出して登録する必要があります。

```ts
import { defineComponents, IgcNavDrawerComponent, IgcNavDrawerHeaderItemComponent, IgcNavDrawerItemComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavDrawerComponent, IgcNavDrawerHeaderItemComponent, IgcNavDrawerItemComponent);
```

## Navigation Drawer 項目の追加

Navigation Drawer コンポーネントがインポートされたら、使用を開始する準備が整いました。いくつかの項目を含む単純な Navigation Drawer を表示する次のコードを追加できます。

```html
    <div style="display: flex;">
        <igc-nav-drawer open="true">
            <igc-nav-drawer-header-item>
                Sample Drawer
            </igc-nav-drawer-header-item>

            <igc-nav-drawer-item>
                <igc-icon slot="icon" name="home"></igc-icon>
                <span slot="content">Home</span>
            </igc-nav-drawer-item>

            <igc-nav-drawer-item>
                <igc-icon slot="icon" name="search"></igc-icon>
                <span slot="content">Search</span>
            </igc-nav-drawer-item>
        </igc-nav-drawer>
    </div>
```

以下は結果です:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-drawer-items"
           alt="$Platform$ Navigation Drawer 項目の例"
           github-src="menus/nav-drawer/add-drawer-items">
</code-view>

ドロワーには任意のコンテンツを提供できますが、[`igc-nav-drawer-item`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdraweritemcomponent.html) が定義済みのスタイル設定を項目に適用します。

コンポーネントを少し強化するために、[`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavbarcomponent.html) と組み合わせて使用できます。このようにして、より完成された外観を実現し、ドロワーの方法を使用できます。次の例でこれを見てみましょう:

```html
    <igc-navbar>
      <igc-icon slot="start" name="menu" id="menu"></igc-icon>
      <h2>Home</h2>
    </igc-navbar>

    <div id="root" style="display: flex;">
        <igc-nav-drawer id="navDrawer">
            <igc-nav-drawer-header-item>
                Sample Drawer
            </igc-nav-drawer-header-item>

            <igc-nav-drawer-item>
                <igc-icon slot="icon" name="home"></igc-icon>
                <span slot="content">Home</span>
            </igc-nav-drawer-item>

            <igc-nav-drawer-item>
                <igc-icon slot="icon" name="search"></igc-icon>
                <span slot="content">Search</span>
            </igc-nav-drawer-item>
        </igc-nav-drawer>
    </div>
```

また、すべての [`position`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html#position) の値を表示するためにいくつかのラジオ ボタンを追加しましょう。このように、1 つが選択されるたびに、ドロワーの位置を変更します。

```ts
// ...
import { defineComponents, IgcNavDrawerComponent, IgcNavDrawerHeaderItemComponent, IgcNavDrawerItemComponent,
  IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';


defineComponents(IgcNavDrawerComponent, IgcNavDrawerHeaderItemComponent, IgcNavDrawerItemComponent,
    IgcRadioComponent, IgcRadioGroupComponent);
this.navDrawer = document.getElementById('navDrawer') as IgcNavDrawerComponent;
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;
this.radioGroup.addEventListener('click', (radio: any) => {
    this.navDrawer.position = radio.target.value;
});
```

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="position" value="start" label-position="after" checked>Start</igc-radio>
    <igc-radio name="position" value="end" label-position="after">End</igc-radio>
    <igc-radio name="position" value="top" label-position="after">Top</igc-radio>
    <igc-radio name="position" value="bottom" label-position="after">Bottom</igc-radio>
</igc-radio-group>
```

そして最後に、Navigation Drawer を開閉する方法が必要です。これを実現するにはいくつかの方法がありますが、この例のために、次のことを行います:

```ts
// ...
const menu = document.getElementById('menu');
const navDrawer = document.querySelector('igc-nav-drawer') as IgcNavDrawerComponent;

menu!.addEventListener('click', () => {
    navDrawer.show();
})

document.getElementById('root')!.onclick = (e) => {
    if(e.target != document.getElementById('navDrawer')) {
        navDrawer.hide();
    }
}
```


すべてがうまくいけば、コンポーネントは次のようになります:

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-positions-navbar"
           alt="$Platform$ Navigation Drawer Navbar の例"
           github-src="menus/nav-drawer/add-positions-navbar">
</code-view>

## ミニ バリアント

ミニ バリアントを使用する場合、Navigation Drawer を閉じる代わりに幅を変更します。アイコンだけを残して、いつでも利用できるクイック ナビゲーションを維持するために使用されます。これを実現するには、ドロワーの `mini` スロットを設定するだけです。

```html
    <div style="display: flex;">
        <igc-nav-drawer position="start">
            <igc-nav-drawer-header-item>Sample Drawer</igc-nav-drawer-header-item>

            <igc-nav-drawer-item>
                <igc-icon slot="icon" name="home"></igc-icon>
                <span slot="content">Home</span>
            </igc-nav-drawer-item>

            <igc-nav-drawer-item>
                <igc-icon slot="icon" name="search"></igc-icon>
                <span slot="content">Search</span>
            </igc-nav-drawer-item>

            <div slot="mini">
                <igc-nav-drawer-item>
                    <igc-icon slot="icon" name="home"></igc-icon>
                </igc-nav-drawer-item>

                <igc-nav-drawer-item>
                    <igc-icon slot="icon" name="search"></igc-icon>
                </igc-nav-drawer-item>
            </div>
        </igc-nav-drawer>
    </div>
```

以下は結果です:

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-mini"
           alt="$Platform$ Navigation Drawer Mini の例"
           github-src="menus/nav-drawer/add-mini">
</code-view>

## Navigation Drawer のスタイル設定

Navigation Drawer コンポーネントは、`base`、`main`、`mini` など、いくつかの CSS パーツを公開します。Navigation Drawer Item コンポーネントは、ベース、アイコン、コンテンツの 3 つの CSS パーツも公開し、スタイルを完全に制御できるようにします。

```scss
igc-nav-drawer::part(base) {
    background: #2d313a;
}

igc-nav-drawer-item::part(base) {
    color: #fff;
}

igc-nav-drawer-item::part(base):hover {
    background-color: #3D4149;
}

igc-nav-drawer-item[active]::part(base) {
    background: #f3c03e;
    color: #2c2c2c
}

igc-nav-drawer-header-item {
    color: #f3c03e
}
```

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-styling"
           alt="$Platform$ Navigation Drawer スタイル設定の例"
           github-src="menus/nav-drawer/styling">
</code-view>

## API リファレンス

* [IgcNavDrawerComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html)
* [IgcNavDrawerItemComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdraweritemcomponent.html)
* [IgcNavDrawerHeaderItemComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawerheaderitemcomponent.html)

使用したその他の Web Components:

* [IgcIconComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
* [IgcButtonComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
* [IgcRadioComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html)
* [IgcRadioGroupComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [$Platform$ **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-webcomponents)
* [$Platform$ **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)
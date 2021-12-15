---
title: $Platform$ NavDrawer | インフラジスティックス
_description: インフラジスティックスの $Platform$ NavDrawer は、コンテンツ内で展開または縮小ことができるサイド ナビゲーションを提供します。
_keywords: $Platform$ navbar, $ProductName$, Infragistics, $Platform$ ナビゲーション バー, インフラジスティックス
mentionedTypes: ['NavDrawer']
_language: ja
---

# $Platform$ Navigation Drawer (ナビゲーション ドロワー) の概要

$Platform$ Navigation Drawer は、コンテンツ内で展開または縮小されることができるサイド ナビゲーションを提供します。ミニ バージョンが閉じている場合もナビゲーションへのクイック アクセスを提供します。そのコンテンツは完全にカスタマイズ可能であると同時に、デフォルトのメニュー項目のスタイルも提供します。


## $Platform$ Navigation Drawer の例

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-drawer-items"
           alt="$Platform$ Navigation Drawer 項目の例"
           github-src="menus/nav-drawer/add-drawer-items">
</code-view>

## 使用方法

<!-- WebComponents -->
まず、次のコマンドを実行して $ProductName$ をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

`NavDrawer` を使用する前に、次のように登録する必要があります。

```razor
IgbNavDrawerModule.Register(IgniteUIBlazor);
IgbNavDrawerHeaderItemModule.Register(IgniteUIBlazor);
```

```ts
import { defineComponents, IgcNavDrawerComponent, IgcNavDrawerHeaderItemComponent, IgcNavDrawerItemComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavDrawerComponent, IgcNavDrawerHeaderItemComponent, IgcNavDrawerItemComponent);
```


## Navigation Drawer 項目の追加

`NavDrawer` の使用を開始する最も簡単な方法は次のとおりです:

```html    
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
```

```razor
<IgbNavDrawer Open="true">
    <IgbNavDrawerHeaderItem>
        Sample Drawer
    </IgbNavDrawerHeaderItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@HomeIcon" slot="icon" IconName="home" Collection="material"></IgbIcon>
        <span slot="content">Home</span>
    </IgbNavDrawerItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@SearchIcon" slot="icon" IconName="search" Collection="material"></IgbIcon>
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
</IgbNavDrawer>
```

以下は結果です:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-drawer-items"
           alt="$Platform$ Navigation Drawer 項目の例"
           github-src="menus/nav-drawer/add-drawer-items">
</code-view>

## Navbar の統合

ドロワーには任意のコンテンツを提供できますが、`NavDrawerItem` が定義済みのスタイル設定を項目に適用します。

コンポーネントを少し強化するために、`Navbar` と組み合わせて使用できます。このようにして、より完成された外観を実現し、ドロワーの方法を使用できます。次の例でこれを見てみましょう:

```html
<igc-navbar>
  <igc-icon slot="start" name="menu" id="menu"></igc-icon>
  <h2>Home</h2>
</igc-navbar>

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
```

```razor
<IgbNavbar>
    <IgbIcon slot="start" IconName="menu" Collection="material" />
    <h2>Home</h2>
</IgbNavbar>

<IgbNavDrawer @ref="NavDrawerRef">
    <IgbNavDrawerHeaderItem>
        Sample Drawer
    </IgbNavDrawerHeaderItem>
    <IgbNavDrawerItem>
        <IgbIcon slot="icon" IconName="home" Collection="material" />
        <span slot="content">Home</span>
    </IgbNavDrawerItem>
    <IgbNavDrawerItem>
        <IgbIcon slot="icon" IconName="search" Collection="material" @onclick="OnMenuIconClick" />
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
</IgbNavDrawer>
```

また、すべての `position` の値を表示するためにいくつかのラジオ ボタンを追加しましょう。このように、1 つが選択されるたびに、ドロワーの位置を変更します。

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

```razor
<IgbRadioGroup id="radio-group" Alignment="RadioGroupAlignment.Horizontal">
    <IgbRadio Value="Start" LabelPosition="RadioLabelPosition.After" Checked="true" Change="OnRadioOptionClick">Start</IgbRadio>
    <IgbRadio Value="End" LabelPosition="RadioLabelPosition.After" Change="OnRadioOptionClick">End</IgbRadio>
    <IgbRadio Value="Top" LabelPosition="RadioLabelPosition.After" Change="OnRadioOptionClick">Top</IgbRadio>
    <IgbRadio Value="Bottom" LabelPosition="RadioLabelPosition.After" Change="OnRadioOptionClick">Bottom</IgbRadio>
</IgbRadioGroup>

@code {
    
    public IgbNavDrawer NavDrawerRef { get; set; }

    public void OnRadioOptionClick(IgbComponentBoolValueChangedEventArgs args)
    {
        IgbRadio radio = args.Parent as IgbRadio;

        if (this.NavDrawerRef != null)
        {
            switch (radio.Value)
            {
                case "Start":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Start;
                        break;
                    }
                case "End":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.End;
                        break;
                    }
                case "Top":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Top;
                        break;
                    }
                case "Bottom":
                    {
                        this.NavDrawerRef.Position = NavDrawerPosition.Bottom;
                        break;
                    }
            }
        }
    }
}
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

```razor
public void OnMenuIconClick()
{
    if(this.NavDrawerRef != null)
    {
        this.NavDrawerRef.Show();
    }
}
```

すべてがうまくいけば、コンポーネントは次のようになります:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-add-positions-navbar"
           alt="$Platform$ Navigation Drawer Navbar の例"
           github-src="menus/nav-drawer/add-positions-navbar">
</code-view>

## ミニ バリアント

ミニ バリアントを使用する場合、Navigation Drawer を閉じる代わりに幅を変更します。アイコンだけを残して、いつでも利用できるクイック ナビゲーションを維持するために使用されます。これを実現するには、ドロワーの `mini` スロットを設定するだけです。

```html    
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
```

```razor
<IgbNavDrawer @ref="@NavDrawerRef" Open="true" style="position: relative">
    <IgbNavDrawerHeaderItem>
        Sample Drawer
    </IgbNavDrawerHeaderItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@HomeIcon" slot="icon" Collection="material" IconName="home" />
        <span slot="content">Home</span>
    </IgbNavDrawerItem>
    <IgbNavDrawerItem>
        <IgbIcon @ref="@SearchIcon" slot="icon" Collection="material" IconName="search" />
        <span slot="content">Search</span>
    </IgbNavDrawerItem>
    <div slot="mini">
        <IgbNavDrawerItem>
            <IgbIcon slot="icon" Collection="material" IconName="home" />
        </IgbNavDrawerItem>
        <IgbNavDrawerItem>
            <IgbIcon slot="icon" Collection="material" IconName="search" />
        </IgbNavDrawerItem>
    </div>
</IgbNavDrawer>
```

以下は結果です:

<code-view style="height: 300px"
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

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/menus/nav-drawer-styling"
           alt="$Platform$ Navigation Drawer スタイル設定の例"
           github-src="menus/nav-drawer/styling">
</code-view>

<!-- WebComponents -->

## API リファレンス

* `NavDrawer`
* `NavDrawerItem`
* `NavDrawerHeaderItem`

使用したその他の Web Components:

* `Icon`
* `Button`
* `Radio`
* `RadioGroup`

<!-- end: WebComponents -->

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [Ignite UI for Blazor Examples on **GitHub** (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- WebComponents -->

* [Ignite UI for Web Components **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [Ignite UI for Web Components **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->
---
title: {Platform} List コンポーネント | インフラジスティックス
_description: インフラジスティックスの {Platform} List コンポーネントは、項目のグループを表示するのに役立ちます。{ProductName} を使用したデータの表示方法について説明します。
_keywords: {Platform} List, Item List, overview, {ProductName}, data binding, Infragistics, {Platform} リスト, 項目リスト, 概要, データ バインディング, インフラジスティックス
mentionedTypes: ['List', 'ListHeader', 'ListItem', 'Avatar', 'Button', 'RadioGroup', 'Radio']
_language: ja
---

# {Platform} List (リスト) の概要

{ProductName} List 要素は、項目のグループを番号の付いた形式または黒丸の付いた形式のいずれかで提示する時に非常に役に立ちます。さまざまなレイアウト要素の配列を含むテキスト アイテムの単純なリスト、またはより複雑なリストを作成できます。`List` コンポーネントは項目の行を表示し、1 つ以上のヘッダーもサポートします。各リスト項目は完全にテンプレート化可能であり、有効な HTML またはその他のコンポーネントをサポートします。

## {Platform} List の例

次の例は、名前と電話番号のプロパティを持つ連絡先が入力されたリストを表しています。以下に示す `List` コンポーネントは、`Avatar` 要素と `Button` 要素を使用して、ユーザー エクスペリエンスを強化し、テキストと呼び出しアクションのアバター画像とボタンを設定する機能を公開します。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-overview"
           alt="{Platform} List の例"
           github-src="grids/list/overview">
</code-view>

<div class="divider--half"></div>

## 使用方法

List Web コンポーネントは、項目の垂直リストを簡単に表示できます。

<!-- WebComponents -->
まず、次のコマンドを実行して {ProductName} をインストールする必要があります。

```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->

<!-- React -->

まず、次のコマンドを実行して、対応する {ProductName} npm パッケージをインストールする必要があります:

```cmd
npm install igniteui-react
```

次に、以下のように、`List` とそれに必要な CSS をインポートし、そのモジュールを登録する必要があります:

```tsx
import { IgrListModule, IgrList, IgrListHeader, IgrListItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrListModule.register();
```

<!-- end: React -->

`List` を使用する前に、次のように登録する必要があります。

```razor
IgbListModule.Register(IgniteUIBlazor);
```

<!-- Blazor -->

また、追加の CSS ファイルをリンクして、スタイルを `List` コンポーネントに適用する必要があります。以下は、**Blazor Web Assembly** プロジェクトの **wwwroot/index.html** ファイルまたは **Blazor Server** プロジェクトの **Pages/_Host.cshtml** ファイルに配置する必要があります:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

<!-- end: Blazor -->

```ts
import { defineComponents, IgcListComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent);
```


### リスト項目の追加

これで、次のコードを追加して、項目の簡単なリストを取得できます。

```html
    <igc-list>
        <igc-list-header>Header</igc-list-header>
        <igc-list-item>
            <h2 slot="title">Item 1</h2>
        </igc-list-item>
        <igc-list-item>
            <h2 slot="title">Item 2</h2>
        </igc-list-item>
        <igc-list-item>
            <h2 slot="title">Item 3</h2>
        </igc-list-item>
    </igc-list>
```

```razor
<IgbList>
    <IgbListHeader>Header</IgbListHeader>
    <IgbListItem>
        <h2 slot="title">Item 1</h2>
    </IgbListItem>
    <IgbListItem>
        <h2 slot="title">Item 2</h2>
    </IgbListItem>
    <IgbListItem>
        <h2 slot="title">Item 3</h2>
    </IgbListItem>
</IgbList>
```

```tsx
<IgrList>
    <IgrListHeader>
        <span>Header</span>
    </IgrListHeader>
    <IgrListItem>
        <h2 slot="title">Item 1</h2>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Item 2</h2>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Item 3</h2>
    </IgrListItem>
</IgrList>
```

以下は結果です:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-add-list-items"
           alt="{Platform} リスト項目の追加の例"
           github-src="grids/list/add-list-items">
</code-view>

リスト項目を次のように強化できます。名前と名前の下に表示される電話番号を使用して連絡先のリストを作成するとします。これを実現するために、次の例に示すように、リスト項目に付属するいくつかのスロットを使用できます。

```html
<igc-list>
    <igc-list-header>
        <h1>Contacts</h1>
    </igc-list-header>
    <igc-list-item>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
    </igc-list-item>
    <igc-list-item>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
    </igc-list-item>
    <igc-list-item>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
    </igc-list-item>
</igc-list>
```

```razor
<IgbList>
    <IgbListHeader>
        <h1>Contacts</h1>
    </IgbListHeader>
    <IgbListItem>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
    </IgbListItem>
    <IgbListItem>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
    </IgbListItem>
    <IgbListItem>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
    </IgbListItem>
</IgbList>
```

```tsx
<IgrList>
    <IgrListHeader>
        <span>Contacts</span>
    </IgrListHeader>
    <IgrListItem>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
    </IgrListItem>
</IgrList>
```

上記のコードを実装すると、リスト コンポーネントは次のようになります:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-list-item-content"
           alt="{Platform} List の例"
           github-src="grids/list/list-item-content">
</code-view>

### アバターおよびボタンの追加

他のコンポーネントのいくつかを `List` コンポーネントと組み合わせて使用して、エクスペリエンスを充実させ、いくつかの機能を追加することができます。名前や電話番号の値の左に画像のアバターを表示できます。さらに、右側にいくつかのボタンを追加して、ユーザーが連絡先にテキスト メッセージを送信したり電話をかけたりできるようにすることができるので、連絡先リスト コンポーネントを更新して、アバターとボタンを表示します。リスト項目のスロットのいくつかを使用することでそれを行うことができます。

```html
    <igc-list>
        <igc-list-header>
            <h1>Job Positions</h1>
        </igc-list-header>
        <igc-list-item>
            <igc-avatar slot="start" src="https://randomuser.me/api/portraits/men/27.jpg" shape="circle">
                AA
            </igc-avatar>
            <h2 slot="title">Terrance Orta</h2>
            <span slot="subtitle">770-504-2217</span>
            <igc-button slot="end" variant="outlined">
                Text
            </igc-button>
            <igc-button slot="end" variant="outlined">
                Call
            </igc-button>
        </igc-list-item>
        <igc-list-item>
            <igc-avatar slot="start" src="https://randomuser.me/api/portraits/men/1.jpg" shape="circle">
                AA
            </igc-avatar>
            <h2 slot="title">Richard Mahoney</h2>
            <span slot="subtitle">423-676-2869</span>
            <igc-button slot="end" variant="outlined">
                Text
            </igc-button>
            <igc-button slot="end" variant="outlined">
                Call
            </igc-button>
        </igc-list-item>
        <igc-list-item>
            <igc-avatar slot="start" src="https://randomuser.me/api/portraits/women/50.jpg" shape="circle">
                AA
            </igc-avatar>
            <h2 slot="title">Donna Price</h2>
            <span slot="subtitle">859-496-2817</span>
            <igc-button slot="end" variant="outlined">
                Text
            </igc-button>
            <igc-button slot="end" variant="outlined">
                Call
            </igc-button>
        </igc-list-item>
    </igc-list>
```

```razor
<IgbList>
    <IgbListHeader>
        <h1>Contacts</h1>
    </IgbListHeader>
    <IgbListItem>
        <IgbAvatar slot="start" src="https://static.infragistics.com/xplatform/images/avatars/8.jpg" Shape="@AvatarShape.Circle"/>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
    </IgbListItem>
    <IgbListItem>
        <IgbAvatar slot="start" src="https://static.infragistics.com/xplatform/images/avatars/17.jpg" Shape="@AvatarShape.Circle"/>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
    </IgbListItem>
    <IgbListItem>
        <IgbAvatar slot="start" src="https://static.infragistics.com/xplatform/images/avatars/9.jpg" Shape="@AvatarShape.Circle"/>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
        <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
    </IgbListItem>
</IgbList>
```

```tsx
<IgrList>
    <IgrListHeader>
        <span>Contacts</span>
    </IgrListHeader>
    <IgrListItem>
        <div slot="start">
            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/8.jpg" shape="circle" />
        </div>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Text</span>
            </IgrButton>
        </div>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Call</span>
            </IgrButton>
        </div>
    </IgrListItem>
    <IgrListItem>
        <div slot="start">
            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/17.jpg" shape="circle" />
        </div>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Text</span>
            </IgrButton>
        </div>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Call</span>
            </IgrButton>
        </div>
    </IgrListItem>
    <IgrListItem>
        <div slot="start">
            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/9.jpg" shape="circle" />
        </div>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Text</span>
            </IgrButton>
        </div>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Call</span>
            </IgrButton>
        </div>
    </IgrListItem>
</IgrList>
```

`start` スロットは、リスト項目の他のすべてのコンテンツの前に、ある種のメディアを追加するために使用することを目的としています。ターゲット要素 (この場合は `Avatar` コンポーネント) にも、デフォルトの位置と間隔が提供されます。

`end` スロットは、switch、button、checkbox などで表される、ある種のアクションまたはメタデータを持つリスト項目に使用することを目的としています。`Button` コンポーネントを使用します。

また、ユーザーがその `size` プロパティを使用してリストのサイズを選択できるようにします。すべてのサイズ値を表示するために、いくつかのラジオ ボタンを追加します。このようにして、選択されるたびに、リストの size プロパティを変更します。

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="size" value="small" label-position="after">Small</igc-radio>
    <igc-radio name="size" value="medium" label-position="after">Medium</igc-radio>
    <igc-radio name="size" value="large" label-position="after" checked="true">Large</igc-radio>
</igc-radio-group>
```

```ts
this.list = document.getElementById('list') as IgcListComponent;
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;

this.radioGroup.addEventListener('click', (radio: any) => {
    this.list.size = radio.target.value;
});
```

```razor
<IgbRadioGroup Alignment="@RadioGroupAlignment.Horizontal">
    <IgbRadio Value="Small" label-position="after" Change="OnRadioOptionClick">Small</IgbRadio>
    <IgbRadio Value="Medium" label-position="after" Change="OnRadioOptionClick">Medium</IgbRadio>
    <IgbRadio Value="Large" label-position="after" Checked="true" Change="OnRadioOptionClick">Large</IgbRadio>
</IgbRadioGroup>

<IgbList style="margin-top: 10px;" Size="@ListSize" />

@code {
    public SizableComponentSize ListSize { get; set; }

    public void OnRadioOptionClick(IgbComponentBoolValueChangedEventArgs e)
    {
        IgbRadio radio = e.Parent as IgbRadio;
        switch (radio.Value)
        {
            case "Small":
                {
                    this.ListSize = SizableComponentSize.Small;
                    break;
                }
            case "Medium":
                {
                    this.ListSize = SizableComponentSize.Medium;
                    break;
                }
            case "Large":
                {
                    this.ListSize = SizableComponentSize.Large;
                    break;
                }
        }
    }
}
```

```tsx
<IgrRadioGroup alignment="horizontal">
    <IgrRadio value="small" labelPosition="after" change={this.onRadioChange}>
        <span>Small</span>
    </IgrRadio>
    <IgrRadio value="medium" labelPosition="after" change={this.onRadioChange}>
        <span>Medium</span>
    </IgrRadio>
    <IgrRadio value="large" labelPosition="after" checked={true} change={this.onRadioChange}>
        <span>Large</span>
    </IgrRadio>
</IgrRadioGroup>

<IgrList size={this.state.listSize} />

public onRadioChange(e: any) {
    if (e.checked == true) {
        this.setState({ listSize: e.value });
    }
}
```

上記のコードを実装した結果は、次のようになります:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-overview"
           alt="{Platform} List の例"
           github-src="grids/list/overview">
</code-view>

## スタイル設定

公開されている CSS パーツ (`title`、`subtitle`、`end`) を使用して、リストの外観を変更できます。

```css
igc-list-header {
    font-size: 20px;
    font-weight: 700;
    color: #3f51b5;
}

igc-list-item::part(title) {
    font-size: 18px;
    color: #3f51b5;
}

igc-list-item::part(subtitle) {
    color: #0099ff;
}

igc-list-item::part(end) {
    --igc-secondary-500: 230,48%,47%;
}
```

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-styling"
           alt="{Platform} List の例"
           github-src="grids/list/styling">
</code-view>

<!-- WebComponents -->

## API リファレンス

この記事では、`List` コンポーネントで多くのことを取り上げました。最初に、テキスト項目を含む簡単なリストを作成しました。次に、連絡先項目のリストを作成し、`Avatar` や `Button` などの追加の {ProductName} コンポーネントを使用してそれらに機能を追加しました。最後に、公開された CSS パーツを使用してコンポーネントの外観を変更しました。

* `List`
* `ListHeader`
* `ListItem`

使用したその他のコンポーネント:

* `Avatar`
* `Button`
* `RadioGroup`
* `Radio`

<!-- end: WebComponents -->

<div class="divider--half"></div>

## その他のリソース

<!-- Blazor -->

* [Ignite UI for Blazor **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
* [**GitHub** の Ignite UI for Blazor の例 (英語)](https://github.com/IgniteUI/igniteui-blazor-examples)

<!-- end: Blazor -->

<!-- React -->

* [Ignite UI for React **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
* [**GitHub** の Ignite UI for React の例 (英語)](https://github.com/IgniteUI/igniteui-react-examples)

<!-- end: React -->

<!-- WebComponents -->

* [{Platform} **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [{Platform} **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

<!-- end: WebComponents -->


## API メンバー

 - `Avatar`
 - `Button`
 - `RadioGroup`
 - `Radio`
 - `ListHeader`
 - `ListItem`
 - `List`
# $Platform$ List (リスト) の概要

List 要素は、項目のグループを番号の付いた形式または黒丸の付いた形式のいずれかで提示する時に非常に役に立ちます。さまざまなレイアウト要素の配列を含むテキスト アイテムの単純なリスト、またはより複雑なリストを作成できます。List コンポーネントは項目の行を表示し、1 つ以上のヘッダーもサポートします。各リスト項目は完全にテンプレート化可能であり、有効な HTML またはその他のコンポーネントをサポートします。

## $Platform$ List の例

次の例は、名前と電話番号のプロパティを持つ連絡先が入力されたリストを表しています。[`IgcList`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcListComponent.html) コンポーネントは、[`IgcAvatar`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcAvatarComponent.html) と [`IgcButton`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html) を使用して、ユーザー エクスペリエンスを向上させ、テキストと呼び出しアクションのアバター画像とボタンを設定する機能を公開します。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-overview"
           alt="$Platform$ List の例"
           github-src="grids/list/overview">
</code-view>

<div class="divider--half"></div>

## 使用方法

List Web コンポーネントは、項目の垂直リストを簡単に表示できます。

<!-- Blazor -->

To get started with the `IgbList` component, you first need to register the `IgbListModule`.

```razor
IgbListModule.Register(IgniteUIBlazor);
```

<!-- end: Blazor -->

<!-- WebComponents -->

List Web コンポーネントの使用を開始するには、最初に次のコマンドを入力して Ignite UI for Web Components をインストールする必要があります。
```cmd
npm install igniteui-webcomponents
```

次の手順は、typescript ファイル内の項目とともに `IgcListComponent` をインポートし、次のように [`defineComponents()`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/index.html#defineComponents) 関数を呼び出してそれらを登録することです。

```typescript
// index.ts
...
import {defineComponents, IgcListComponent, IgcListHeaderComponent, IgcListItemComponent} from 'igniteui-webcomponents';

defineComponents(IgcListComponent, IgcListHeaderComponent, IgcListItemComponent);
```

<!-- end: WebComponents -->

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

以下は結果です:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-add-list-items"
           alt="$Platform$ リスト項目の追加の例"
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

スロットの `title` と `subtitle` の両方が、[`list item`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcListItemComponent.html) にデフォルトの外観を与えます。

結果は次のようになります:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-list-item-content"
           alt="$Platform$ List の例"
           github-src="grids/list/list-item-content">
</code-view>

### アバターおよびボタンの追加

他のコンポーネントのいくつかを [IgcList](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcListComponent.html) コンポーネントと組み合わせて使用して、エクスペリエンスを充実させ、いくつかの機能を追加することができます。名前や電話番号の値の左に画像のアバターを表示できます。さらに、右側にいくつかのボタンを追加して、ユーザーが連絡先にテキスト メッセージを送信したり電話をかけたりできるようにすることができるので、連絡先リスト コンポーネントを更新して、アバターとボタンを表示します。リスト項目のスロットのいくつかを使用することでそれを行うことができます。

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

`start` スロットは、リスト項目の他のすべてのコンテンツの前に、ある種のメディアを追加するために使用することを目的としています。ターゲット要素 (この場合は igc-avatar) にも、デフォルトの位置と間隔が提供されます。

`end` スロットは、switch、button、checkbox などで表される、ある種のアクションまたはメタデータを持つリスト項目に使用することを目的としています。igc-buttons を使用します。

また、ユーザーがその [`size`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcListComponent.html#size) プロパティを使用してリストのサイズを選択できるようにします。すべてのサイズ値を表示するために、いくつかのラジオ ボタンを追加します。このようにして、選択されるたびに、リストの size プロパティを変更します。

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

結果は以下のようになります。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/grids/list-overview"
           alt="$Platform$ List Example"
           github-src="grids/list/overview">
</code-view>

## スタイル設定

公開されている CSS パーツ (`title`、`subtitle`、`end`) を使用して、リストの外観を変更する方法を見てみましょう。

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
           alt="$Platform$ List Example"
           github-src="grids/list/styling">
</code-view>

## API リファレンス

この記事では、List Web コンポーネントで多くのことを取り上げました。最初に、テキスト項目を含む簡単なリストを作成しました。次に、連絡先項目のリストを作成し、アバターやボタンなどの追加の Ignite UI Web Components を使用してそれらに機能を追加しました。最後に、公開された CSS パーツを使用してコンポーネントの外観を変更しました。

* [IgcListComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcListComponent.html)
* [IgcListHeaderComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcListHeaderComponent.html)
* [IgcListItemComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcListItemComponent.html)

使用したその他の Web Components:

* [IgcAvatarComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcAvatarComponent.html)
* [IgcButtonComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcButtonComponent.html)
* [IgcRadioGroupComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioGroupComponent.html)
* [IgcRadioComponent](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/IgcRadioComponent.html)

## その他のリソース

<div class="divider--half"></div>

* [$Platform$ **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
* [$Platform$ **GitHub** (英語)](https://github.com/IgniteUI/igniteui-webcomponents)

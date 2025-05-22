---
title: アップデート ガイド | Ignite UI for React | インフラジスティックス
_description: Ignite UI for React ライブラリの新しいバージョンに更新する方法については、この記事をご覧ください。
_keywords: ignite ui for react, update, npm package, material components, アップデート, npm パッケージ, マテリアル コンポーネント
_language: ja
---

# アップデート ガイド
Ignite UI for React バージョニング は、最初の数字がコードがサポートする React のメジャー バージョンで、2 番目の数字はメジャー バージョン リリースの数字です。重大な変更はメジャー リリースとメジャー リリースの間にリリースされる場合があります。Ignite UI for React 各リリースのすべての変更の一覧は、製品 [CHANGELOG](./general-changelog-dv-react.md) をご覧ください。


## 18.9.0 から 19.0.0 の場合
このリリースでは、一部の React コンポーネントの内部構造が大幅に再設計され、**igniteui-react** および **igniteui-react-data-grids** パッケージに以下の変更が加えられました。

### 一般
#### 重大な変更

- Ignite UI for React のコンポーネントは、React の関数コンポーネントを使用するようになりました。これにより、***useRef*** で取得される参照は、クラス コンポーネントのインスタンスではなく、ネイティブ要素へのフォワード参照になります。多くのユースケースでは変更なしにそのまま使用できますが、DOM 要素自体へアクセスするために追加のプロパティが不要になるなど、一部の実装には変更が必要な場合があります。
- すべてのプロパティでの代替的な文字列ユニオン タイプ (例: ***boolean | string*** や ***number | string***) の使用は、コンポーネントでサポートされなくなりました。さらに、文字列のユニオン タイプでは大文字と小文字が区別されなくなりました。

```tsx
<IgrColumn dataType="String" sortable="true"></IgrColumn>
```

は次のようになります:

```tsx
<IgrColumn dataType="string" sortable={true}></IgrColumn>
```
- コンポーネント イベントには **on** というプレフィックスが付きます。つまり

```tsx
<IgrGrid columnPin={handlePinning}></IgrGrid>
```

は次のようになります:

```tsx
<IgrGrid onColumnPin={handlePinning}></IgrGrid>
```

- コンポーネント イベントは、最初の引数として **sender** の代わりに単一の標準 **CustomEvent** 引数を発行します。したがって、***sender.nativeElement*** などのカスタム プロパティは使用できなくなりましたが、ネイティブ イベント プロパティはすべて使用できます。また、イベント引数のタイプは特定のカスタム イベントのエイリアスとして使用できるため、***detail*** にアクセスする使用法は同じままです。新しいハンドラー シグネチャでは、***event.detail*** は同じで、***event.target*** は送信者と同等の DOM 要素になります。

```tsx
    const handlePinning = (sender: IgrGridBaseDirective, event: IgrPinColumnCancellableEventArgs) => {};
```

は次のようになります:

```tsx
    const handlePinning = (event: IgrPinColumnCancellableEventArgs) => {}
    // equivalent to
    const handlePinning = (event: CustomEvent<IgrPinColumnCancellableEventArgsDetail>) => {}
```
- コンポーネントには、デフォルトで非機能的な ***name*** プロパティが付与されなくなりました。***name*** プロパティは、主に **IgrInput** や **IgrCombo** などのフォーム入力コンポーネントにおいてネイティブの機能を持つため、**igniteui-react** のコンポーネントにのみ残されています。
- Ignite UI for React コンポーネントでは、React の[ドキュメント](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)に従って必要な場合を除き、***key*** プロパティは不要になりました。
- [IgrDataGrid](./grids/data-grid/overview.md) は、**igniteui-react-data-grids** パッケージの一部ではなくなりました。より軽量な構成を実現するため、**igniteui-react-data-grids** パッケージに移動されました。
- バージョン **18.9.0** ではクラスとして公開されていたいくつかの型は、現在ではタイプとしてエクスポート されるようになりました。これらは以下のように使用できます:

```tsx
const pivotConfiguration = new IgrPivotConfiguration();
```

は次のようになります:

```tsx
const pivotConfiguration: IgrPivotConfiguration = {
  rows: [],
  columns: [],
  values: []
}
```

- **IgrButton**
  - **重大な変更**
    - ***clicked*** イベントは削除されました。代わりにネイティブの ***onClick*** を使用してください。
- **IgrInput**
  - **重大な変更**
    - ***inputOccurred*** イベントの名前が ***onInput*** に変更されました。
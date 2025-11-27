---
title: {Platform} チャートのユーザー注釈 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの {Platform} チャートのユーザー注釈
_keywords: {Platform} Charts, User Annotations, Infragistics, {Platform} チャート, ユーザー注釈, インフラジスティックス
mentionedTypes: ["DataChart", "UserAnnotationLayer", "UserStripAnnotation", "UserSliceAnnotation", "UserPointAnnotation", "Toolbar", "UserAnnotationInformation", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# {Platform} チャートのユーザー注釈レイヤー <label>PREVIEW</label>

{ProductName} では、ユーザー注釈機能を使用して、実行時に `XamDataChart` にスライス注釈、ストリップ注釈、ポイント注釈を追加できます。これにより、エンドユーザーは、スライス注釈を使用して会社の四半期レポートなどの単一の重要イベントを強調したり、ストリップ注釈を使用して期間を持つイベントを示したりするなど、プロットに詳細を追加できます。ポイント注釈またはこれら 3 つの任意の組み合わせを使用して、プロットされたシリーズ上の個々のポイントを呼び出すこともできます。

これは、`Toolbar` のデフォルトのツールと統合されています。このトピックでは、`Toolbar` を使用してチャートのプロット領域にユーザー注釈を追加する方法と、これらのユーザー注釈をプログラムから追加する方法を、例と共に解説します。

`sample="/charts/data-chart/user-annotation-layer", height="500", alt="{Platform} 近似曲線の例"`

> [!Note]
> この機能は X 軸と Y 軸をサポートするように設計されており、現在、ラジアル軸やアンギュラー軸はサポートされていません。

## Toolbar でユーザー注釈を使用する

`Toolbar` には、「Annotate Chart」 と 「Delete Note」 という 2 つのツールを含む Annotations メニュー項目が用意されています。このメニュー項目を表示するには、対象のチャートで `IsUserAnnotationsEnabled` プロパティを **true** に設定する必要があります。

開いた後に表示される 「Annotate Chart」 オプションを使用すると、`XamDataChart` のプロット領域に注釈を付けることができます。追加できる注釈はスライス注釈、ストリップ注釈、ポイント注釈です。X 軸または Y 軸のラベルをクリックすると、スライス注釈を追加できます。プロット領域をクリックしてドラッグすることで、ストリップ注釈を追加できます。また、チャートにプロットされたシリーズ内のポイントをクリックして、ポイント注釈を追加することもできます。

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-create.gif"
alt="{Platform} user-annotation-create"/>

以前に追加した注釈を削除するには、[Delete Note] メニュー項目を選択した後、スライスまたは ストリップのユーザー注釈に対応する軸注釈、またはポイントのユーザー注釈に対応するデータ ポイントをクリックします。

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-delete.gif"
alt="{Platform} user-annotation-delete"/>

`XamToolbar` を使用してこれらのユーザー注釈を追加すると、`XamDataChart` は `UserAnnotationInformationRequested` イベントを発生させ、そこでユーザー注釈に関する追加情報を提供できます。このイベント引数には `AnnotationInfo` プロパティがあり、追加される注釈のさまざまな要素を構成可能な `UserAnnotationInformation` オブジェクトを返します。

以下の表は、`UserAnnotationInformation` で構成可能なさまざまなプロパティの詳細を示しています。

| プロパティ | タイプ | 説明 |
|------------|---------|-------------|
|`AnnotationData`|`string`|このプロパティは、ユーザー注釈に追加情報を提供するためのものです。このプロパティは、`UserAnnotationToolTipContentUpdating` イベントと組み合わせて使用され、注釈のツールチップに追加情報を表示するよう設計されています。|
|`AnnotationId`|`string`|この読み取り専用プロパティは、ユーザー注釈の一意の文字列 ID を返します。|
|`BadgeColor`|`string`|このプロパティは、ユーザー注釈のバッジに使用する色を取得または設定します。|
|`BadgeImageUri`|`string`|このプロパティは、ユーザー注釈のバッジに使用する画像へのパスを取得または設定します。|
|`DialogSuggestedXLocation`|`double`|このプロパティは、ユーザー注釈が追加された位置に基づいて、ダイアログを表示する推奨 X 座標を取得します。|
|`DialogSuggestedYLocation`|`double`|このプロパティは、ユーザー注釈が追加された位置に基づいて、ダイアログを表示する推奨 Y 座標を取得します。|
|`Label`|`string`|このプロパティは、ユーザー注釈に表示するラベルを取得または設定します。|
|`MainColor`|`string`|このプロパティは、ユーザー注釈の背景を塗りつぶすために使用する色を取得または設定します。|

`UserAnnotationInformationRequested` イベントで注釈情報を更新した後、`XamDataChart` の `FinishAnnotationFlow` メソッドを呼び出して注釈の作成を完了し、変更を確定する必要があります。あるいは、`CancelAnnotationFlow` を呼び出して注釈の `AnnotationId` を渡すことで注釈の作成をキャンセルすることもできます。注釈の `AnnotationId` は、前述のように、`UserAnnotationInformationRequested` イベントの引数の AnnotationInfo パラメーターから取得できます。これにより、プロット領域から注釈が削除されます。

## ユーザー注釈をプログラムで使用する

`UserAnnotationLayer` をプログラムで使用する場合、`XamDataChart` に対して 2 つのメソッドを呼び出し、ユーザー注釈の追加または削除を行えるモードに切り替えることができます。これらのメソッドは `StartCreatingAnnotation` と `StartDeletingAnnotation` です。

`StartCreatingAnnotation` を呼び出した後は、X または Y 軸のラベルをクリックしてスライス注釈を追加したり、プロット領域をクリックしドラッグしてからマウスボタンを離してストリップ注釈を追加したり、チャート内のシリーズ上のデータ ポイントをクリックしてポイント注釈を追加したりできます。

これらのユーザー注釈のいずれかを追加すると、`UserAnnotationInformationRequested` イベントが発生し、ユーザー注釈に関する詳細情報を提供できます。このイベント引数には `AnnotationInfo` プロパティがあり、追加される注釈のさまざまな要素を構成可能な `UserAnnotationInformation` オブジェクトを返します。

`UserAnnotationInformationRequested` イベントで注釈情報を更新した後、`XamDataChart` の `FinishAnnotationFlow` メソッドを呼び出して注釈の作成を完了し、変更を確定する必要があります。あるいは、`CancelAnnotationFlow` を呼び出して注釈の `AnnotationId` を渡すことで注釈の作成をキャンセルすることもできます。注釈の `AnnotationId` は、前述のように、`UserAnnotationInformationRequested` イベントの引数の AnnotationInfo パラメーターから取得できます。これにより、プロット領域から注釈が削除されます。

ユーザー注釈がチャートに追加されると、`Series` コレクションに `UserAnnotationLayer` として表示されます。`UserAnnotationLayer` には、プロット領域に追加された注釈の種類に応じて `UserSliceAnnotation`、`UserStripAnnotation`、および `UserPointAnnotation` 要素を保存できる `Annotations` コレクションがあります。

## UserAnnotationToolTip

各ユーザー注釈は、マウス ホバー時にツールチップを表示し、さらに詳細な情報を提供できます。

チャートは `UserAnnotationToolTipContentUpdating` イベントを公開しており、ツールチップが表示される際にその内容を更新できます。このイベント引数には `Content` と `AnnotationInfo` の 2 つのプロパティがあります。

ツールチップは `UserAnnotationInformationRequested` イベントと連動する設計になっており、そのイベントで `AnnotationInfo.AnnotationData` に設定した追加情報を、ツールチップ表示時にも利用できます。`UserAnnotationToolTipContentUpdating` イベントのイベント引数の `AnnotationInfo` プロパティは、そのイベントで変更できる `UserAnnotationInformationRequested` の `AnnotationInfo` プロパティと同じインスタンスになります。これにより、ユーザー注釈の作成時に提供された情報を活用し、ツールチップ内にさらに多くの情報を提供できるようになります。


## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

- `XamDataChart`.`SeriesViewer.IsUserAnnotationsEnabled`
- `XamDataChart`.`SeriesViewer.UserAnnotationInformationRequested`
- `XamDataChart`.`SeriesViewer.userAnnotationToolTipContentUpdating`
- `XamDataChart`.`SeriesViewer.CancelAnnotationFlow`
- `XamDataChart`.`SeriesViewer.StartCreatingAnnotation`
- `XamDataChart`.`SeriesViewer.StartDeletingAnnotation`
- `UserAnnotationInformation`
- `UserSliceAnnotation`
- `UserStripAnnotation`
- `UserPointAnnotation`
- `Toolbar`

## その他のリソース

関連するチャート機能の詳細については、次のトピックを参照してください。

- [チャートの注釈](chart-annotations.md)
- [チャートのデータ注釈](chart-data-annotations.md)

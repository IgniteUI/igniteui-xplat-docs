---
title: {Platform} {GridLiteTitle} ヘッダー テンプレート | {ProductName} | MIT ライセンス
_description: カスタム {GridLiteTitle} 列ヘッダー レンダラーを構成およびカスタマイズします。オープン ソースの {Platform} {GridLiteTitle} を使用してアプリケーションを構築できます。今すぐお試しください。
_keywords: header template, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics, ヘッダー テンプレート, インフラジスティックス
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_license: MIT
_language: ja
---

# 列ヘッダーのカスタマイズ

セル テンプレートと同様に、列ヘッダーも目的のユース ケースに合わせてカスタマイズできます。`header` プロパティを通じてテキスト ラベルを渡したり、本格的なカスタム テンプレートを提供したりできます。

## ヘッダー テキストによるカスタマイズ

<!-- React, WebComponents -->
デフォルトでは、列はラベル テキストに `field` プロパティを使用します。ラベルをカスタマイズするには、`header` プロパティをより人間が読みやすい形式に設定します。
<!-- End: React, WebComponents -->

<!-- WebComponents -->
```html
<igc-grid-lite-column field="price" header="Price per item"></igc-grid-lite-column>
```
<!-- End: WebComponents -->

```tsx
return (
  <igc-grid-lite>
    <igc-grid-lite-column field="price" header="Price per item"></igc-grid-lite-column>
  </igc-grid-lite>
);
```

<!-- Blazor -->
デフォルトでは、列はラベル テキストに `Field` プロパティを使用します。ラベルをカスタマイズするには、`Header` プロパティをより人間が読みやすい形式に設定します。

```razor
<IgbGridLiteColumn Field="Price" Header="Price per item" />
```

<!-- End: Blazor -->

>[!NOTE]
>`headerTemplate` が指定されている場合、`header` は無視されます。

## ヘッダー テンプレートによるカスタマイズ

セル テンプレートと同様に、カスタム テンプレート レンダラーを渡して、列ヘッダー内に独自の DOM を作成できます。

<!-- React, WebComponents -->

```typescript
import { html } from 'lit';


const column = document.querySelector('igc-grid-lite-column');
column.headerTemplate = () => html`<h3>⭐ Rating ⭐</h3>`;
```
<!-- End: React, WebComponents -->

<!-- Blazor -->

```razor
<!-- Templates TBD in Blazor -->
<IgbGridLiteColumn Field="Rating"></IgbGridLiteColumn>
```
<!-- End: Blazor -->

`sample="/{GridLiteSample}/column-config-headers", height="600", alt="{Platform} {GridLiteTitle} 列設定ヘッダー"`

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## その他のリソース

- [列の構成](column-configuration.md)
- [セル テンプレート](cell-template.md)
- [テーマ設定とスタイル設定](theming.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [{GridLiteTitle} **GitHub**]({GithubLinkLite})

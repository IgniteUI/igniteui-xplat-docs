---
title: {Platform} ドック マネージャー | カスタマイズ | インフラジスティックス
_description: Infragistics の {Platform} ドック マネージャー コンポーネントを使用して、カスタマイズ機能を備えたペインを通じてレイアウトを管理します。{ProductName} ドック マネージャーのチュートリアルを是非お試しください!
_keywords: dock manager, layout, customization, {ProductName}, ドック マネージャー、レイアウト、カスタマイズ
mentionedTypes: ['DockManager', 'ContentPane']
_language: ja
---

## {Platform} Dock Manager のカスタマイズ

Infragistics {Platform} Dock Manager コンポーネントは、特定のアプリケーション要件に合わせてレイアウトをさらにカスタマイズするために必要なプロパティを提供します。
{Platform} DockManager がどのようにして優れたユーザー インターフェイスを作成し、アプリケーションの生産性を向上させることができるのかを詳しく見ていきましょう。

<div class="divider--half"></div>

## Proximity Dock (近接ドック)

このモードでは、ジョイスティック インジケーターが非表示になり、ペインを別のペインの境界近くにドラッグすることでドッキングを実行できます。ペインのドラッグ中にマウス カーソルがドック位置に対応する領域に到達すると、ドック プレビューが表示されます。マウスを上に置くと、ドラッグされたペインがプレビューされた場所にドッキングされます。近接ドッキングを有効にするには、`proximityDock` プロパティを ***true*** に設定するだけです。

```ts
this.dockManager.proximityDock = true;
```

### 内側ドッキング

ドラッグしたペイン 1 をペイン 2 に右ドッキングするには、カーソルがペイン 2 の右境界線と左にオフセットされた右境界線によって定義される領域内にある必要があります。オフセット距離は近接ドックしきい値として指定され、50px の値に設定されます。スプリッターがある場合は、スプリッターの両側からドッキングできます。

### 外側ドッキング
外側ドックを実行するには、まず特定の基準を満たす必要があります。Dock Manager では、外側のドッキングはドキュメント ホスト内でのみ許可されます。つまり、ターゲット ペインをドキュメント ホストの外側の領域にドッキングすることになります。

近接ドックのしきい値の 50 ピクセルは変更されず、これは基本的に、このシナリオでは内側ドッキングに使用できるのは 25 ピクセルの領域のみであることを意味します。オフセット距離は近接ドックの外側しきい値として指定され、明示的に 25 ピクセルの値に設定されます。近接ドックのしきい値の 50 ピクセルは変更されず、これは基本的に、このシナリオでは内側ドッキングに使用できるのは 25 ピクセルの領域のみであることを意味します。ドキュメント ホスト内にスプリッターがある場合は、スプリッターの両側から外側ドックを実行できます。

> 注: 近接ドックが有効になっている場合、ユーザーは 1 つのペインから左右および上下の位置の両方に対して外側ドックを実行できません。たとえば、間にスプリッターを備えた 2 つの分割ペインがあるシナリオでは、ドラッグされたペインが左側の分割ペインの上にある場合、ユーザーは外側の左側のドックのみを実行でき、その逆も同様です。

以下のサンプルをご覧ください:

`sample="/layouts/dock-manager/proximity-dock", height="600", alt="{Platform} Dock Manager Proximity Dock の例"`

## プログラムによるペインのフォーカス

`focusPane` メソッドを使用すると、目的のペインの `contentId` を指定することで、レイアウト内の特定のペインに動的かつプログラム的にフォーカスすることができます。

```ts
this.dockManager.focusPane('content1');
```

`focusPane` メソッドを使用する場合、対象のペインの状態に応じて動作が異なります。その仕組みは次のとおりです:

1. **フローティング ペイン**: ペインがフローティングしている場合、`focusPane` を呼び出すとそのペインがフォーカスされ、アクティブ ペインとして設定され、他のフローティング ペインの上に表示されるようになります。

2. **ピン固定されていないペイン**: ターゲットのペインのピン固定が解除されると、`focusPane` はペインを開いた状態にポップアップします。

3. **通常のピン固定ペイン**: 通常のピン固定ペインの場合、`focusPane` はペインを `activePane` として設定します。


この方法を利用すると、開発者はユーザーの操作やアプリケーション イベントに基づいてペインの表示と位置を簡単に制御できます。

以下のサンプルをご覧ください:

`sample="/layouts/dock-manager/focus-panes", height="600", alt="{Platform} Dock Manager でプログラムによるペインのフォーカスの例"`


## ペイン ヘッダーを自動非表示にする

DockManager の `showPaneHeaders` プロパティを使用すると、開発者は `layout` 内のペイン ヘッダーの表示を柔軟に制御できるようになりました。デフォルトでは、`showPaneHeaders` は `always` に設定されており、ペイン ヘッダーが常に表示されます。`onHoverOnly` に設定すると、コンテンツ ペインの上端にマウスを置くまで、すべてのペイン ヘッダーが非表示になります。対応するペインのヘッダーが表示され、マウスが離れるとスムーズに非表示になります。以下の例を参照してください:

`sample="/layouts/dock-manager/hide-pane-headers", height="600", alt="{Platform} Dock Manager でペイン ヘッダーを自動非表示にする例"`

## 内側ドッキングの制御
デフォルトでは、Dock Manager を使用すると、ユーザーはペインを簡単にドラッグして相互にドッキングし、タブを作成できます。この機能をより詳細に制御するために、`allowInnerDock` と `acceptsInnerDock` という 2 つのプロパティを導入しました。

`IgcContentPane` の `acceptsInnerDock` プロパティを設定することで、開発者は特定のコンテンツ ペイン内のドッキングを制御できます。このプロパティを false に設定すると、ユーザーは指定されたペインで内側ドッキングを実行できなくなります。


```ts
{
    type: IgcDockManagerPaneType.contentPane,
    header: 'Floating 1',
    contentId: 'content3',
    acceptsInnerDock: false
}
```

DockManager 全体で内側ドッキングを無効にしたい場合は、`allowInnerDock` を **false** に設定するだけです。このプロパティは、エンド ユーザーがドック ペインの内側にアクセスできるかどうかを決定します。


```ts
this.dockManager.allowInnerDock = false;
```

`sample="/layouts/dock-manager/toggle-inner-dock", height="600", alt="{Platform} Dock Manager 内側ドッキングの切り替えの例"`

## ペイン ドラッグの制御 

`containedInBoundaries` プロパティを使用すると、開発者はフローティング ペインの側面を常に DockManager 内に含めるかどうかを制御できます。**true** に設定すると、いずれかの側が DockManager の境界を越えて移動しようとすると、ペインのドラッグが停止します。


以下の例をご覧ください。

`sample="/layouts/dock-manager/contained-in-boundaries", height="600", alt="{Platform} 境界に含まれる Dock Manager の例"`

## API リファレンス

 - `DockManager`
 - `ContentPane`

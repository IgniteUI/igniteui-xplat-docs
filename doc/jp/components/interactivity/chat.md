---
title: {Platform} Chat | {ProductName}
_description: {ProductName} Chat を使用すると、メッセージ、添付、サジェスト、入力中インジケーター、カスタム テンプレートのサポートにより、インタラクティブなメッセージング エクスペリエンスを構築できます。
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Chat components, {Platform} Chat controls, UI コントロール, {Platform} ウィジェット, Web ウィジェット, UI ウィジェット, ネイティブ {Platform} コンポーネント スイート, ネイティブ {Platform} コントロール, ネイティブ {Platform} コンポーネント ライブラリ, {Platform} Chat コンポーネント, {Platform} Chat コントロール
mentionedTypes: ["Chat"]
_language: ja
---

# {Platform} Chat (チャット) の概要

{ProductName} チャット コンポーネントは、アプリケーションで会話型インターフェースを構築するための完全なソリューションを提供します。カスタマー サポート ツール、コラボレーション ワークスペース、チャットボット アシスタントなどを作成する場合でも、チャット コンポーネントは必要な機能を提供します: テキスト メッセージの送受信、ファイル添付のアップロード、クイック リプライサジェストの表示、他の参加者が入力中であることを示す入力中インジケーター。

`Chat` コンポーネントは静的なメッセージ リストではなく、**リアルタイム通信**を想定したインタラクティブな設計です。入力やレンダリング、ユーザー操作を管理しつつ、メッセージや添付の表示方法は完全にカスタマイズ可能です。また、レイアウトやビジュアルの任意部分をオーバーライドできる広範なレンダリング API も提供されています。

`sample="/interactions/chat/overview", height="900", alt="{Platform} Chat 概要の例"`

## インストール

{ProductName} を使用するには、以下のコマンドでインストールします。
<!-- WebComponents -->
```cmd
npm install {PackageWebComponents}
```
<!-- end: WebComponents -->
<!-- React -->
```cmd
npm install igniteui-react
```
<!-- end: React -->
インストール後、プロジェクトにコンポーネントをインポートし、カスタム要素として登録すると利用可能になります。
<!-- WebComponents -->
```ts
import { defineComponents, IgcChatComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcChatComponent);
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
import { IgrChat } from "igniteui-react";
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```
<!-- end: React -->
CSS ファイルにはデフォルト テーマが含まれています。`Chat` をアプリケーションのブランドに合わせて変更したい場合は、別のテーマに置き換えたり、カスタム テーマを作成したりできます。

## 使用方法
最も簡単な使用方法は、以下のように直接 `Chat` を宣言することです。
<!-- WebComponents -->
```ts
const options: IgcChatOptions = {
  currentUserId: 'me',
  headerText: 'Support Chat',
};
```
```html
<igc-chat id="myChat" .options=${options}>
</igc-chat>
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
import { IgrChat, IgrChatOptions } from 'igniteui-react';

const options: IgrChatOptions = {
  currentUserId: 'me',
  headerText: 'Support Chat',
};

return (
  <IgrChat options={options} />
);
```
<!-- end: React -->

ここで、`currentUserId` プロパティは、どのメッセージが「送信済み」 (現在のユーザー) で、どれ「受信済み」 (他のユーザー) かをコンポーネントに判定します。`headerText` はチャット ウィンドウのタイトルを提供します。

レンダリング後は、プログラムからメッセージを追加することも可能です。
<!-- WebComponents -->

```ts
const chat = document.getElementById('myChat');
const newMessage = {
  id: '1',
  sender: 'me',
  text: 'Hello! How can I help you?',
  timestamp: Date.now().toString()
};
chat.messages = [...chat.messages, newMessage ];

```
<!-- end: WebComponents -->
<!-- React -->
```tsx
import { useRef } from 'react';
import { IgrChat } from 'igniteui-react';

const ChatExample = () => {
  const chatRef = useRef<IgrChat>(null);

  const sendMessage = () => {
    const newMessage = {
      id: '1',
      sender: 'me',
      text: 'Hello! How can I help you?',
      timestamp: Date.now().toString()
    };
    chatRef.current!.messages = [...chatRef.current!.messages, newMessage];
  };

  return (
    <>
      <IgrChat ref={chatRef} options={{ currentUserId: 'me', headerText: 'Support Chat' }} />
      <button onClick={sendMessage}>Send Message</button>
    </>
  );
};
```
<!-- end: React -->
この方法により、サーバー エンドポイント、チャットボット エンジン、コラボレーション アプリのバックエンドなど、任意のデータ ソースと簡単に統合できます。

### プロパティ

`Chat` コンポーネントは、その状態と構成を制御できるいくつかの重要なプロパティを公開します。

| 名前              | 説明                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`        | チャットに表示されるメッセージの配列 (`ChatMessage[]`)。表示するメッセージを制御するためにバインド可能。                                                  |
| `draftMessage`    | 未送信メッセージ。`text` とオプションの `attachments` を含むオブジェクト。メッセージ下書きの保存や復元に便利。            |
| `options`         | 現在のユーザー ID、入力プレースホルダー、許可されるファイル タイプ、クイック リプライサジェスト、入力遅延、カスタム レンダラーなどのチャット設定 (`ChatOptions`)。 |
| `resourceStrings` | ラベル、ヘッダー、システム テキストのローカライズ文字列。多言語対応に使用。                                   |

上記のプロパティを使用することで、Chat の UI をアプリケーションの状態やバックエンドと簡単に同期させることができます。

### 添付

モダンな会話ではテキストだけに限られません。Chat コンポーネントはファイル添付機能のサポートが組み込まれており、ユーザーは画像、ドキュメント、その他のファイルを共有できます。
デフォルトでは入力領域に添付ボタンが表示されます。`acceptedFiles` プロパティで許可されるファイル タイプを制御可能です。

<!-- WebComponents -->
```ts
const options: IgcChatOptions = {
  acceptedFiles="image/*,.pdf",
};
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
const options: IgrChatOptions = {
  acceptedFiles="image/*,.pdf",
};
```
<!-- end: React -->

この例では、ユーザーは画像と PDF ファイルのみをアップロードできます。
添付が不要なユースケースの場合は、簡単にオフにすることができます。
<!-- WebComponents -->

```ts
const options: IgcChatOptions = {
  disableInputAttachments: true,
};
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
const options: IgrChatOptions = {
  disableInputAttachments: true,
};
```
<!-- end: React -->

### サジェスト

クイック リプライのサジェストは、ユーザーがすぐにタップして返信できる事前定義の応答を提供します。この機能は、チャットボットやカスタマー サービスのフロー、あるいはユーザーを構造化されたプロセスに案内する場合に特に有用です。
サジェストは、文字列の配列を suggestions プロパティにバインドすることで提供できます。`suggestions-position` 属性を使用すると、表示位置を入力領域の下またはメッセージ リストの下に制御できます。

<!-- WebComponents -->
```ts
const options: IgcChatOptions = {
  currentUserId: "me",
  suggestions: ['Yes', 'No', 'Maybe later'],
  suggestionsPosition: "below-input"
};
```
```html
<igc-chat
  .options=${options}>
</igc-chat>
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
const options: IgrChatOptions = {
  currentUserId: "me",
  suggestions: ['Yes', 'No', 'Maybe later'],
  suggestionsPosition: "below-input"
};

return (
  <IgrChat ref={chatRef} options={{ options }} />
);
```
<!-- end: React -->

この方法により、繰り返し入力する必要が減り、ガイド付きの会話でユーザー体験を向上させることができます。

### 入力中インジケーター

相手が入力中であることが見えると、会話はより自然に感じられます。Chat コンポーネントでは、オプション オブジェクトの `isTyping` プロパティを通じてこの動作を提供します。
true に設定すると、メッセージ下にさりげない入力中インジケーターが表示されます。
<!-- WebComponents -->

```ts
const options: IgcChatOptions = {
  isTyping: true
};
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
const options: IgrChatOptions = {
  isTyping: true
};
```
<!-- end: React -->

この機能は通常、バックエンド サービスからの入力イベントを受け取ったときなど、プログラムで切り替えます。

### カスタム レンダラー

Chat コンポーネントはデフォルトの UI ですぐに使用できますが、多くのアプリケーションでは外観と操作性をカスタマイズする必要があります。たとえば、既読通知を追加したり、アバターを表示したり、入力領域を音声録音ボタンに置き換えたりする場合です。
`Chat` コンポーネントはレンダラー システムでこのニーズに対応します。レンダラーは、UI の特定の部分のテンプレートを返す関数です。必要に応じて、任意の数のレンダラーをオーバーライドできます。

#### ChatTemplateRenderer

すべてのレンダラーは同じ関数シグネチャに従います。

```ts
export type ChatTemplateRenderer<T> = (ctx: T) => unknown;
```

ctx パラメーターは、レンダリングされる対象に応じたさまざまなコンテキスト データを提供します。

#### レンダラー コンテキスト

| コンテキスト タイプ                    | 提供データ                                                                                                   |
|-------------------------------|-----------------------------------------------------------------------------------------------------------|
| `ChatRenderContext`           | `instance` (チャット コンポーネント インスタンス).                                                                         |
| `ChatInputRenderContext`      | `ChatRenderContext` を継承し、`attachments` (`ChatMessageAttachment` の配列) と `value` (現在の入力テキスト) を追加。 |
| `ChatMessageRenderContext`    | `ChatRenderContext` を継承し、`ChatMessage` (レンダリングされる `ChatMessage`) を追加。                                 |
| `ChatAttachmentRenderContext` | `ChatMessageRenderContext` を継承し、`attachment` (レンダリングされる `ChatMessageAttachment`) を追加。                 |

#### 利用可能なレンダラー

Chat のカスタマイズ可能な部分は次の通りです:
- Message レベル: message、messageHeader、messageContent、messageAttachments、messageActions
- Attachment レベル: attachment、attachmentHeader、attachmentContent
- Input レベル: input、inputActions、inputActionsStart、inputActionsEnd、inputAttachments、fileUploadButton、sendButton
- Suggestion: suggestionPrefix
- その他: TypingIndicator

この粒度により、添付の表示方法など、特定の部分だけを変更してもチャット全体のレイアウトを書き換える必要はありません。

#### 例: メッセージ内容のカスタマイズ

メッセージ バブルを独自のテンプレートに置き換える例です。

```ts
const options = {
  renderers: {
    messageContent: (ctx) => {
      const { message } = ctx;
      return html`<div class="bubble custom">${message.content}</div>`;
    }
  }
};
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
const options = {
  renderers: {
    messageContent: (ctx) => {
      const { message } = ctx;
      return (
        <div className="bubble custom">${message.content}</div>
      );
    }
  }
};
```
<!-- end: React -->
#### 例: 入力領域のカスタマイズ

デフォルトでは、チャット入力はテキスト領域です。音声入力ボタンなど、より適した体験を提供するためにオーバーライドできます。

```ts
const options = {
  renderers: {
    input: (ctx) => html`
      <textarea placeholder=${ctx.instance?.options?.inputPlaceholder || 'Type here...'}>${ctx.value}</textarea>
      <button @click=${() => alert('Voice input!')}>🎤</button>
    `
  }
};
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
const options = {
  renderers: {
    input: (ctx) => {
      return (
        <>
          <textarea placeholder={ctx.instance?.options?.inputPlaceholder || 'Type here...'}>{ctx.value}</textarea>
          <button onClick={() => alert('Voice input!')}>🎤</button>
        </>
      );
    } 
  }
};
```
<!-- end: React -->
#### 例: 入力アクションの拡張

`Chat` コンポーネントには、デフォルトのアクション (アップロードと送信) を保持しつつ追加のコントロールを拡張できるレンダラーがあります:
- `inputActionsStart` - デフォルトのアップロード ボタンの後にカスタム コンテンツを挿入可能。
- `inputActionsEnd` - デフォルトの送信ボタンの後にカスタム コンテンツを挿入可能。

例えば、アップロード ボタンの横に音声録音ボタンを追加したり、送信ボタンの後に追加オプション メニューを追加したりできます。
次の例では、デフォルトのアップロード ボタンはそのままですが、その隣にマイク ボタンが追加されています。一方、デフォルトの送信ボタンを削除し、カスタムの「質問」ボタンと「その他」メニューに置き換えます。
<!-- WebComponents -->
```ts
const _actionsStartTemplate = () => html`
  <igc-icon-button variant="flat">🎤</igc-icon-button>
`;

const _actionsEndTemplate = (ctx: ChatRenderContext) => html`
  <div>
    <igc-button @click=${() => handleCustomSendClick(ctx.instance)}>Ask</igc-button>
    <igc-icon-button variant="flat" name="more_horiz"></igc-icon-button>
  </div>
`;

const options = {
  renderers: {
    inputActionsStart: _actionsStartTemplate,
    inputActionsEnd: _actionsEndTemplate,
    sendButton: () => nothing,
  },
};
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
const _actionsStartTemplate = () => (
  <IgrIconButton variant="flat">🎤</IgrIconButton>
);

const _actionsEndTemplate = (ctx) => (
  <div>
    <IgrButton onClick={() => handleCustomSendClick(ctx.instance)}>Ask</IgrButton>
    <IgrIconButton variant="flat" name="more_horiz"></IgrIconButton>
  </div>
);

const options = {
  renderers: {
    inputActionsStart: _actionsStartTemplate,
    inputActionsEnd: _actionsEndTemplate,
    sendButton: () => null,
  },
};
```
<!-- end: React -->
この設定では:
- アップロード ボタンはそのまま残ります。
- その後にマイク ボタンが追加されます (inputActionsStart)。
- デフォルトの送信ボタンが削除され、カスタムの「質問」ボタンと「その他」アイコン (inputActionsEnd) に置き換えられました。

この方法により、チャット入力バーの柔軟性が完全に向上し、入力領域を最初から再構築することなく、アクションを追加、削除、または並べ替えることができます。

### Markdown レンダリング

Chat コンポーネントは <!-- WebComponents --> `igniteui-webcomponents/extras` <!-- end: WebComponents --><!-- React --> `igniteui-react/extras` <!-- end: React --> からエクスポートされる `createMarkdownRenderer` ヘルパーを通じて Markdown をサポートします。これにより、書式付きテキスト、リンク、リスト、シンタックス ハイライト付きコードブロックを表示しつつ、安全に HTML をサニタイズできます。

> [!Note]
> Markdown レンダラーを使用するには、プロジェクトに次のピア依存関係をインストールする必要があります。

```cmd
npm install marked marked-shiki shiki dompurify
```

デフォルトでは、メッセージはプレーン テキストとして表示されます。Markdown サポートを有効にする場合は、messageContent レンダラーをオーバーライドし、以下に示すように Markdown レンダラーを使用できます。
<!-- WebComponents -->

```ts
import { createMarkdownRenderer } from 'igniteui-webcomponents/extras';

// Create a reusable Markdown renderer instance
const markdownRenderer = await createMarkdownRenderer();

const options = {
  renderers: {
    messageContent: async ({ message }) => markdownRenderer(message),
  }
};
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
import { createMarkdownRenderer } from 'igniteui-react/extras';

// Create a reusable Markdown renderer instance
const markdownRenderer = await createMarkdownRenderer();

const options = {
  renderers: {
    messageContent: async ({ message }) => markdownRenderer(message),
  }
};
```
<!-- end: React -->

例:
- 各メッセージの text プロパティが [marked](https://github.com/markedjs/marked) ライブラリを使用して Markdown として解析されます。
- レンダラーは [DOMPurify](https://github.com/cure53/DOMPurify) を使用して出力をサニタイズします。
- リンクは自動的に新しいタブで開き、安全な rel 属性が付与されます。

#### 構文のハイライト表示

Markdown レンダラーは、[Shiki](https://shiki.matsu.io/) を使用したコード ブロックの構文のハイライト表示もサポートします。デフォルトでは JavaScript、TypeScript、HTML、CSS に対して github-light テーマでハイライト表示されます。この動作は、MarkdownRendererOptions を通じてカスタマイズできます。

```ts
const markdownRenderer = await createMarkdownRenderer({
  theme: { light: 'min-light' },
  languages: ['javascript', 'python']
});
```

これにより、GitHub のダーク テーマでスタイル設定された、JavaScript、Python、Go のハイライト表示されたコード ブロックが有効になります。

#### 構成オプション

| オプション           | 説明                                                                                                                          |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------|
| `noHighlighter` | **true** の場合、構文のハイライト表示が完全に無効になります。                                                                                   |
| `languages`     | ハイライト表示されたコード ブロックでサポートするプログラミング言語のリスト。                                                                                   |
| `theme`         | 適用する Shiki テーマを指定するオブジェクト。`light` モードと `dark` モードに個別の値をサポートします (例: `{ light: 'github-light', dark: 'github-dark' }`)。 |
| `sanitizer`     | 最終的な HTML をサニタイズするカスタム関数。デフォルトは `DOMPurify.sanitize` です。                                                                 |

### イベント

アプリケーション ロジックと統合するために、Chat コンポーネントは一連のイベントを発行します。
<!-- WebComponents -->
- igcMessageCreated - 新しいメッセージ作成時
- igcMessageReact - メッセージにリアクションした時
- igcAttachmentClick - 添付クリック時
- igcAttachmentDrop - 添付が追加された時
- igcAttachmentDrop - 添付が削除された時
- igcAttachmentDrag - 添付ドラッグ中
- igcAttachmentDrop - 添付ドロップ時
- igcTypingChange - 入力状態変更時
- igcInputFocus / igcInputBlur - 入力フォーカス イベント
- igcInputChange - 入力値変更時
<!-- end: WebComponents -->
<!-- React -->
- onMessageCreated - 新しいメッセージ作成時
- onMessageReact - メッセージにリアクションした時
- onAttachmentClick - 添付クリック時
- onAttachmentAdded - 添付が追加された時
- onAttachmentRemoved - 添付が削除された時
- onAttachmentDrag - 添付ドラッグ中
- onAttachmentDrop - 添付ドロップ時
- onTypingChange - 入力状態変更時
- onInputFocus / onInputBlur - 入力フォーカス イベント
- onInputChange - 入力値変更時
<!-- end: React -->
これらのイベントをリッスンし、バックエンドと同期することができます。
<!-- WebComponents -->
```ts
chat.addEventListener('igcMessageCreated', (e) => {
  console.log('Message:', e.detail);
});
```
<!-- end: WebComponents -->
<!-- React -->
```tsx
const chatRef = useRef<IgrChat>(null);
chatRef.current.addEventListener('onMessageCreated', (e) => {
  console.log('Message:', e.detail);
});
```
<!-- end: React -->
`sample="/interactions/chat/features", height="900", alt="Web Components チャット機能"`

## スタイル設定

`Chat` コンポーネントは、外観や構造を詳細にカスタマイズできる **CSS パーツ**と**スロット**を提供します。

### CSS パーツ

| パーツ名                           | 説明                                                    |
|---------------------------------|-------------------------------------------------------|
| `chat-container`                | メイン チャット コンテナーのスタイルを設定します。                            |
| `header`                        | チャット ヘッダー コンテナーのスタイルを設定します。                           |
| `prefix`                        | チャット タイトルの前の要素 (アバターなど) のスタイルを設定します。               |
| `title`                         | チャット ヘッダー タイトルのスタイルを設定します。                            |
| `message-area-container`        | メッセージと (オプションの) サジェストを保持するコンテナーのスタイルを設定します。         |
| `message-list`                  | メッセージ リスト コンテナーのスタイルを設定します。                           |
| `message-item`                  | 各メッセージ ラッパーのスタイルを設定します。                              |
| `typing-indicator`              | 入力インジケーター コンテナーのスタイルを設定します。                         |
| `typing-dot`                    | 個々の入力中インジケーターのドットをスタイルします。                          |
| `suggestions-container`         | すべてのサジェストを保持するコンテナーのスタイルを設定します。                     |
| `suggestions-header`            | サジェスト ヘッダーのスタイルを設定します。                                |
| `suggestion`                    | 各サジェスト項目にスタイルを設定します。                               |
| `suggestion-prefix`             | サジェスト内のアイコンまたはプレフィックスのスタイルを設定します。                    |
| `suggestion-title`              | サジェストのテキスト/タイトルのスタイルを設定します。                           |
| `empty-state`                   | メッセージがない場合の空の状態のコンテナーのスタイルを設定します。                |
| `input-area-container`          | チャット入力領域のラッパーのスタイルを設定します。                         |
| `input-container`               | メイン入力コンテナーのスタイルを設定します。                              |
| `input-attachments-container`   | 入力内の添付のコンテナーのスタイルを設定します。                         |
| `input-attachment-container`    | 入力領域内の単一の添付にスタイルを設定します。                      |
| `input-attachment-name`         | 添付のファイル名のスタイルを設定します。                               |
| `input-attachment-icon`         | 添付のアイコンのスタイルを設定します。                                 |
| `text-input`                    | メッセージを入力するためのテキスト入力フィールドのスタイルを設定します。              |
| `input-actions-container`       | 入力アクション用のコンテナーのスタイルを設定します。                         |
| `input-actions-start`           | デフォルトのファイル アップロード後、入力の先頭にあるアクション グループをスタイル設定します。 |
| `input-actions-end`             | 入力の末尾にあるアクション グループをスタイル設定します。                     |
| `file-upload-container`         | ファイル アップロード入力用のコンテナーのスタイルを設定します。                   |
| `file-upload`                   | ファイル アップロード入力自体のスタイルを設定します。                       |
| `send-button-container`         | 送信ボタンの周囲のコンテナーのスタイルを設定します。                        |
| `send-button`                   | 送信ボタンのスタイルを設定します。                                   |
| `message-container`             | 単一メッセージのコンテナーをスタイルします。                                |
| `message-list (forwarded)`      | メッセージの内部リストのスタイルを設定します。                             |
| `message-header`                | メッセージのヘッダー (送信者、タイムスタンプなど) のスタイルを設定します。            |
| `message-content`               | メッセージのテキスト コンテンツのスタイルを設定します。                          |
| `message-attachments-container` | メッセージ添付のコンテナーのスタイルを設定します。                           |
| `message-attachment`            | 単一のメッセージ添付にスタイルを設定します。                            |
| `message-actions-container`     | メッセージ アクションを保持するコンテナーのスタイルを設定します。                   |
| `message-sent`                  | 現在のユーザーによって送信済みとしてマークされたメッセージにスタイルを設定します。        |
| `attachment-header`             | 添付ブロックのヘッダーにスタイルを設定します。                             |
| `attachment-content`            | 添付ブロックのコンテンツにスタイルを設定します。                            |
| `attachment-icon`               | 添付のアイコンのスタイルを設定します。                                 |
| `file-name`                     | 添付に表示されるファイル名のスタイルを指定します。                        |

### スロット

| スロット名                | 説明                                             |
|-----------------------|--------------------------------------------------|
| `prefix`              | チャット タイトルの前にコンテンツ (アバターやアイコンなど) を挿入するためのスロット。 |
| `title`               | チャット タイトルの内容をオーバーライドするためのスロット。                 |
| `actions`             | ヘッダー アクション (ボタン、メニューなど) を挿入するためのスロット。          |
| `suggestions-header`  | サジェスト リストのカスタム ヘッダーをレンダリングするためのスロット。             |
| `suggestions`         | クイック リプライのサジェストのカスタム リストをレンダリングするためのスロット。        |
| `suggestions-actions` | 追加のアクションをレンダリングするためのスロット。                      |
| `suggestion`          | 単一のサジェスト項目をレンダリングするためのスロット。                  |
| `empty-state`         | メッセージがない場合に表示されるスロット。                        |

#### ルート スタイルの採用 (adoptRootStyles)

Chat コンポーネントのオプションには、高度なスタイル設定シナリオ用の特別なフラグが含まれています。

| オプション             | タイプ       | デフォルト | 説明                                                                                                                                                                    |
|-------------------|-----------|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `adoptRootStyles` | `boolean` | false | **true** の場合、コンポーネントは、Shadow DOM 内でレンダリングされるコンテンツ (カスタム レンダラーなど) がドキュメントのルートからスタイルを継承することを許可します。これは、スタイル設定のための簡単な回避策を提供しますが、本番環境での使用は**推奨されません**。 |

このプロパティは、カスタム レンダリングされたテンプレートにグローバル CSS を適用するときに Shadow DOM カプセル化を処理したくない場合に役立ちます。
ただし、以下のトレードオフがあります:
- ✅ 利便性: ドキュメントのグローバル スタイルがカスタム メッセージ レンダラーに適用されます。
- ⚠️ 危険: カプセル化が破られ、グローバル CSS によって内部の表示が意図せず変更される可能性があります。
- 🔒 1 回限りの設定: このオプションは初期化時のみ設定可能で、実行時に変更しても効果はありません。

このプロパティに使用する前に、標準の Web Component スタイル設定アプローチを使用することを強くお勧めします。
- CSS 変数と ::part API - 公開されたパーツと変数を使用したカスタマイズを優先します。
- `<link>` 要素 – 大きなスタイルシートの場合は、Shadow DOM 内に挿入します。
- インライン `<style>` タグ – 小さなスコープのスタイル オーバーライド用。

#### 例

```css
igc-chat::part(header) {
  background: var(--ig-primary-100);
}

igc-chat::part(message-container) {
  border-radius: 12px;
  padding: 0.5rem;
}

igc-chat::part(empty-state) {
  font-style: italic;
  color: var(--ig-gray-500);
}
```

これにより、`Chat` の機能を置き換えることなく、ブランドに合わせたスタイルを適用できます。

`sample="/interactions/chat/styling", height="900", alt="Web Components チャットのスタイル設定の例"`

## API リファレンス

- `Chat`
- `ChatOptions`
- `ChatMessage`
- `ChatMessageAttachment`
- `ChatRenderers`
- `ChatTemplateRenderer`
- [スタイル設定およびテーマ](../themes/overview.md)

## その他のリソース

* [{ProductName} **フォーラム (英語)**]({ForumsLink})
* [{ProductName} **GitHub (英語)**]({GithubLink})

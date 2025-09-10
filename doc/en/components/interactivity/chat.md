---
title: {Platform} Chat  
_description: With {ProductName} Chat, you can build interactive messaging experiences with support for messages, attachments, suggestions, typing indicators, and custom templates.  
_keywords: {ProductName}, UI controls, {Platform} widgets, web widgets, UI widgets, {Platform}, Native {Platform} Components Suite, Native {Platform} Controls, Native {Platform} Components Library, {Platform} Chat components, {Platform} Chat controls  
mentionedTypes: ["Chat"]  
---

# {Platform} Chat Overview

The {ProductName} Chat component provides a complete solution for building conversational interfaces in your applications. Whether you are creating a customer support tool, a collaborative workspace, or a chatbot assistant, the Chat component gives you the building blocks you need: sending and receiving text messages, uploading file attachments, displaying quick reply suggestions, showing typing indicators when the other participant is writing a response.

Unlike a static message list, the Chat component is interactive and designed for **real-time communication**. It manages input, rendering, and user interaction while giving you full control over how messages and attachments are displayed. It also exposes an extensive rendering API that lets you override any part of its layout or visuals.

`sample="/interactions/chat/overview", height="400", alt="{Platform} Chat Overview Example"`

## Installation
<!-- WebComponents -->

To get started, install the {ProductName} by running the following command:

```cmd
npm install {PackageWebComponents}
```

Once installed, you can import the component in your project and register it so it becomes available as a custom element:

```ts
import { defineComponents, IgcChatComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcChatComponent);
```
The CSS file includes one of our default themes. You can replace it with a different theme or create a custom one if you want the Chat to match your application’s branding.

## Basic Usage
The simplest way to use the Chat is to declare it in your HTML:
```html
<igc-chat id="myChat" current-user-id="me" header-text="Support Chat">
</igc-chat>
```

Here, the current-user-id attribute tells the component which messages are “outgoing” (sent by the current user) versus “incoming” (sent by others). The header-text provides a title for the chat window.

Once rendered, you can programmatically add messages:

```ts
const chat = document.getElementById('myChat');
chat.addMessage({
  id: '1',
  userId: 'me',
  content: 'Hello! How can I help you?',
  timestamp: new Date()
});
```
This approach makes it easy to plug the Chat into your own data source, such as a server endpoint, a chatbot engine, or a collaborative app backend.

### Properties
The Chat component exposes several key properties that let you control its state and configuration:

| Name              | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`        | Array of messages (`IgcMessage[]`) displayed in the chat. You can bind to this to control which messages are shown.                                                  |
| `draftMessage`    | The current unsent message, represented as an object containing `text` and optional `attachments`. This is useful for saving or restoring message drafts.            |
| `options`         | Chat configuration (`IgcChatOptions`) such as current user ID, input placeholders, accepted file types, quick reply suggestions, typing delay, and custom renderers. |
| `resourceStrings` | Localized resource strings for labels, headers, and system text. Use this property to adapt the component for different languages.                                   |

These properties make it straightforward to synchronize the Chat’s UI with your application’s state and backend.

### Attachments

Modern conversations are rarely limited to text alone. The Chat component includes built-in support for file attachments, allowing users to share images, documents, and other files.

By default, the input area includes an attachment button. You can control which file types are allowed by setting the accepted-files attribute:

```html
<igc-chat
  current-user-id="me"
  accepted-files="image/*,.pdf">
</igc-chat>
```
In this example, users will only be able to upload images and PDF files.

If your use case does not require attachments, you can easily turn them off:
```html
<igc-chat current-user-id="me" disable-input-attachments></igc-chat>
```
### Suggestions

Quick reply suggestions provide users with pre-defined responses they can tap to reply instantly. This feature is particularly useful in chatbots, customer service flows, or when guiding users through a structured process.

You can provide suggestions by binding an array of strings to the suggestions property. The suggestions-position attribute lets you control where they are displayed: either below the input area or below the messages list.

```html
<igc-chat
  current-user-id="me"
  .suggestions=${['Yes', 'No', 'Maybe later']}
  suggestions-position="below-input">
</igc-chat>
```
This approach helps streamline user interactions by reducing the need to type repetitive answers and improves the overall experience in guided conversations.

### Typing Indicator

Conversations feel more natural when participants can see that the other person is typing. The Chat component provides this behavior through the is-typing property.

When set to true, the chat shows a subtle typing indicator below the messages:

```html
<igc-chat current-user-id="me" is-typing></igc-chat>
```
This feature is typically toggled programmatically, for example when receiving a typing event from your backend service.

### Custom Renderers

While the Chat component works out of the box with its default UI, many applications need to customize the look and feel. For example, you might want to add read receipts, display avatars, or replace the input area with a voice recording button.

The Chat component addresses this need with a renderer system. A renderer is simply a function that returns a template for a given part of the UI. You can override as many or as few renderers as you like.

#### ChatTemplateRenderer

Every renderer follows the same function signature:
```ts
export type ChatTemplateRenderer<T> = (ctx: {
  param: T;
  defaults: Partial<ChatRenderers>;
  options?: IgcChatOptions;
}) => unknown;
```

The ctx parameter provides:

- param – the data being rendered (e.g. a message, an attachment, or nothing)

- defaults – the default renderer functions, which you can call to preserve built-in behavior

- options – the chat options applied to the component

#### Available Renderers

The following parts of the Chat can be customized:

- Message-level: message, messageHeader, messageContent, messageAttachments, messageActions

- Attachment-level: attachment, attachmentHeader, attachmentContent, attachments

- Input-level: input, inputActions, inputAttachments, fileUploadButton, sendButton

- Miscellaneous: typingIndicator

This level of granularity means you can tweak just one part (for example, how attachments look) without rewriting the entire chat layout.

#### Example: Custom Message Content
This example shows how to replace the message bubble with your own template:

```ts
const chat = document.getElementById('myChat');

chat.renderers = {
  messageContent: (ctx) => {
    const { param: message } = ctx;
    return html`<div class="bubble custom">${message.content}</div>`;
  }
};
```

#### Example: Wrapping Defaults
Instead of replacing a renderer entirely, you can also wrap the default one. This is useful if you want to add small enhancements:
```ts
chat.renderers = {
  message: (ctx) => html`
    <div class="message-wrapper">
      ${ctx.defaults.message?.(ctx)}
      <span class="read-status">✓✓</span>
    </div>
  `
};
```
Here, we reuse the built-in message renderer and simply append a read receipt indicator.

#### Example: Custom Input Area
By default, the chat input is a text area. You can override it to provide a more tailored experience, such as adding a voice input button:
```ts
chat.renderers = {
  input: (ctx) => html`
    <textarea placeholder=${ctx.options?.inputPlaceholder || 'Type here...'}></textarea>
    <button @click=${() => alert('Voice input!')}>🎤</button>
  `
};
```

#### Example: Attachment Preview
This example shows how to render image attachments differently while falling back to the default renderer for other file types:
```ts
chat.renderers = {
  attachmentContent: (ctx) => {
    const attachment = ctx.param;
    if (attachment.type.startsWith('image/')) {
      return html`<img src=${attachment.url} alt="preview" />`;
    }
    return ctx.defaults.attachmentContent?.(ctx);
  }
};
```
`sample="/interactions/chat/templating", height="200", alt="Web Components Chat Templating"`

### Events
To integrate with your application logic, the Chat component emits a set of events:

- igcMessageCreated – when a new message is created.

- igcMessageReact – when a message is reacted to.

- igcAttachmentClick – when an attachment is clicked.

- igcAttachmentChange – when an attachment changes.

- igcAttachmentDrag – while dragging an attachment.

- igcAttachmentDrop – when an attachment is dropped.

- igcTypingChange – when typing status changes.

- igcInputFocus / igcInputBlur – input focus events.

- igcInputChange – when the input value changes.

You can listen for these events and sync them with your backend:

```ts
chat.addEventListener('igcMessageCreated', (e) => {
  console.log('Message:', e.detail);
});
```
<!-- end: WebComponents -->

## Styling

The `Chat` component exposes both **CSS parts** and **slots** for fine-grained customization of its appearance and structure.

### CSS Parts

| Part name | Description |
|-----------|-------------|
| `chat-container` | Styles the main chat container. |
| `header` | Styles the chat header container. |
| `prefix` | Styles the element before the title (e.g., avatar or icon). |
| `title` | Styles the chat header title. |
| `actions` | Styles the header actions container. |
| `chat-wrapper` | Styles the wrapper around messages and empty state. |
| `message-list` | Wrapper for all messages. |
| `message-item` | Styles each individual message item. |
| `message-text` | Styles the text content of a message. |
| `message-attachments` | Styles the message attachments container. |
| `message-actions` | Styles the actions related to a message. |
| `typing-indicator` | Styles the typing indicator (animated dots). |
| `attachments-container` | Styles the container holding attachments. |
| `attachment` | Styles each attachment. |
| `attachment-header` | Styles the attachment header. |
| `attachment-content` | Styles the attachment content. |
| `attachment-icon` | Styles the attachment icon. |
| `file-name` | Styles the displayed file name for attachments. |
| `attachment-actions` | Styles the actions container for attachments. |
| `empty-state` | Styles the container shown when no messages are present. |
| `suggestions-container` | Styles the container for quick reply suggestions. |
| `suggestions-header` | Styles the header above suggestions. |
| `suggestions` | Styles the suggestions list. |
| `suggestions-actions` | Styles the additional actions under suggestions. |
| `suggestion` | Styles each suggestion item. |

### Slots

| Slot name | Description |
|-----------|-------------|
| `prefix` | Inject content (e.g., avatar or icon) before the chat title. |
| `title` | Override the chat title content. |
| `actions` | Inject header actions such as buttons or menus. |
| `suggestions-header` | Provide a custom header for the suggestions list. |
| `suggestions` | Provide a custom list of quick reply suggestions. |
| `suggestions-actions` | Provide additional actions in the suggestions area. |
| `suggestion` | Override the rendering of a single suggestion item. |
| `empty-state` | Displayed when there are no messages in the chat. |

#### Example

```css
igc-chat::part(header) {
  background: var(--ig-primary-100);
}

igc-chat::part(message-item) {
  border-radius: 12px;
  padding: 0.5rem;
}

igc-chat::part(suggestion) {
  cursor: pointer;
  color: var(--ig-secondary-700);
}

igc-chat::part(empty-state) {
  font-style: italic;
  color: var(--ig-gray-500);
}
```

This allows you to style the Chat to match your brand without replacing its functionality.

`sample="/interactions/chat/styling", height="400", alt="Web Components Chat Styling Example"`

## API Reference

- `Chat`
- `ChatOptions`
- `Message`
- `MessageAttachment`
- `ChatRenderers`
- `ChatTemplateRenderer`
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

* [{ProductName} **Forums**]({ForumsLink})
* [{ProductName} **GitHub**]({GithubLink})

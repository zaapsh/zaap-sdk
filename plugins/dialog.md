---
description: >-
  The Dialog API provides methods for triggering native dialog windows for
  alerts, confirmations, and input prompts
---

# Dialog

## Example

```javascript
import { Plugins } from 'zaap-sdk';

const showAlert = async () => {
  await Plugins.Dialog.alert({
    title: 'Stop',
    message: 'this is an error',
  });
};

const showConfirm = async () => {
  const { value } = await Plugins.Dialog.confirm({
    title: 'Confirm',
    message: `Are you sure you'd like to press the red button?`,
  });

  console.log('Confirmed:', value);
};

const showPrompt = async () => {
  const { value, cancelled } = await Plugins.Dialog.prompt({
    title: 'Hello',
    message: `What's your name?`,
  });

  console.log('Name:', value);
  console.log('Cancelled:', cancelled);
};
```

## API

* [`alert(...)`](dialog.md#alert)
* [`prompt(...)`](dialog.md#prompt)
* [`confirm(...)`](dialog.md#confirm)
* [Interfaces](dialog.md#interfaces)

### alert\(...\)

```typescript
alert(options: AlertOptions) => Promise<void>
```

Show an alert dialog

### prompt\(…\)

```typescript
prompt(options: PromptOptions) => Promise<PromptResult>
```

Show a prompt dialog

**Returns:** `Promise<`[`PromptResult`](dialog.md#promptresult)`>`

### confirm\(...\)

```typescript
confirm(options: ConfirmOptions) => Promise<ConfirmResult>
```

Show a confirmation dialog

**Returns:** `Promise<`[`ConfirmResult`](dialog.md#confirmresult)`>`

## Interfaces

### **AlertOptions**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`title`** | string | Title of the dialog. |
| **`message`** | string | Message to show on the dialog. |
| **`buttonTitle`** | string | Text to use on the action "OK" button. |

### **PromptResult**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`value`** | string | Text entered on the prompt. |
| **`cancelled`** | boolean | Whether if the prompt was canceled or accepted. |

### **PromptOptions**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`title`** | string | Title of the dialog. |
| **`message`** | string | Message to show on the dialog. |
| **`okButtonTitle`** | string | Text to use on the positive action button. |
| **`cancelButtonTitle`** | string | Text to use on the negative action button. |
| **`inputPlaceholder`** | string | Placeholder text for hints. |
| **`inputText`** | string | Pre-populated text. |

### **ConfirmResult**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`value`** | boolean | true if the positive button was clicked, false otherwise. |

### **ConfirmOptions**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`title`** | string | Title of the dialog. |
| **`messagemessage`** | string | Message to show on the dialog. |
| **`okButtonTitle`** | string | Text to use on the positive action button. |
| **`cancelButtonTitle`** | string | Text to use on the negative action button. |


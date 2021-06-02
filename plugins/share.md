---
description: >-
  The Share API provides methods for sharing content in any sharing-enabled apps
  the user may have installed.
---

# Share

## Example

```javascript
import { Plugins } from 'zaap-sdk';

await Plugins.Share.share({
  title: 'See cool stuff',
  text: 'Really awesome thing you need to see right meow',
  url: 'http://ionicframework.com/',
  dialogTitle: 'Share with buddies',
});
```

## API

* [`share(...)`](share.md#share)
* [Interfaces](share.md#interfaces)

### share\(…\)

```text
share(options: ShareOptions) => Promise<ShareResult>
```

Show a Share modal for sharing content with other apps

**Returns:** `Promise<`[`ShareResult`](share.md#shareresult)`>`

## Interfaces

### **ShareResult**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`activityType`** | "SHARED" \| "DISMISSED" | Identifier of the app that received the share action. Can be an empty string in some cases. On web it will be undefined. |

### **ShareOptions**

| **Prop** | Type | Description |
| :--- | :--- | :--- |
| **`title`** | string | Set a title for any message |
| **`text`** | string | Set some text to share |
| **`url`** | string | Set a URL to share |
| **`dialogTitle`** | string | Set a title for the share modal. This option is only supported on Android. |


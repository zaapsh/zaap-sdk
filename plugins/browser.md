---
description: >-
  The Browser API provides the ability to open an in-app browser and subscribe
  to browser events.
---

# Browser

## Example

```javascript
import { Plugins } from 'zaap-sdk';

const openZaapSite = async () => {
  await Plugins.Browser.open({ url: 'http://zaap.sh/' });
};
```

## API

* [`open(...)`](browser.md#open)
* [`close()`](browser.md#close)
* [Interfaces](browser.md#interfaces)

### open\(...\)

```typescript
open(options: OpenOptions) => Promise<void>
```

Open a page with the specified options.

### close\(\)

```typescript
close() => Promise<void>
```

Close an open browser window.

## Interfaces

### **OpenOptions**

| Prop | **Type** | Description |
| :--- | :--- | :--- |
| **`url`** | string | The URL to which the browser is opened. |
| **`toolbarColor`** | string | A hex colour to which the toolbar colour is set. |


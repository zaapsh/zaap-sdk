---
description: The AppLauncher API allows to open other apps
---

# App Launcher

## Example

```javascript
import { Plugins } from 'zaap-sdk';

const checkCanOpenUrl = async () => {
  const { value } = await Plugins.AppLauncher.canOpenUrl({ url: 'com.getcapacitor.myapp' });

  alert('Can open url: ', value);
};

const openPortfolioPage = async () => {
  await Plugins.AppLauncher.openUrl({ url: 'com.getcapacitor.myapp://page?id=portfolio' });
};
```

## API

* [`openSettings()`](app-launcher.md#opensettings)
* [`canOpenUrl(...)`](app-launcher.md#canopenurl)
* [`openUrl(...)`](app-launcher.md#openurl)
* [Interfaces](app-launcher.md#interfaces)

### openSettings\(\)

```typescript
openSettings() => Promise<void>
```

Open the homepage of the settings app.

**Returns:** `Promise<void>`

### canOpenUrl\(...\)

```typescript
canOpenUrl(options: CanOpenURLOptions) => Promise<CanOpenURLResult>
```

Check if an app can be opened with the given URL.

**Returns:** `Promise<`[`CanOpenURLResult`](app-launcher.md#openurlresult)`>`

### openUrl\(...\)

```typescript
openUrl(options: OpenURLOptions) => Promise<OpenURLResult>
```

Open an app with the given URL.

**Returns:** `Promise<`[`OpenURLResult`](app-launcher.md#openurlresult)`>`

## Interfaces

### **CanOpenURLResult**

| Prop | Type |
| :--- | :--- |
| **`value`** | `boolean` |

### **CanOpenURLOptions**

| Prop | Type |
| :--- | :--- |
| **`url`** | `string` |

### **OpenURLResult**

| Prop | Type |
| :--- | :--- |
| **`completed`** | `boolean` |

### **OpenURLOptions**

| Prop | Type |
| :--- | :--- |
| **`url`** | `string` |

[  
](https://capacitorjs.com/docs/v3/apis/app)


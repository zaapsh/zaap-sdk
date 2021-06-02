---
description: >-
  The Storage API provides a simple key/value persistent store for lightweight
  data.
---

# Storage

Mobile OS’s may periodically clear data set in `window.localStorage`, so this API should be used instead. This API will fall back to using `localStorage` when running as a Progressive Web App.

This plugin will use `UserDefaults` on iOS and `SharedPreferences` on Android. Stored data is cleared if the app is uninstalled.

**Note**: This API is _not_ meant to be used as a local database.

## Example

```javascript
import { Plugins } from 'zaap-sdk';

const setName = async () => {
  await Plugins.Storage.set({
    key: 'name',
    value: 'Max',
  });
};

const checkName = async () => {
  const { value } = await Plugins.Storage.get({ key: 'name' });

  alert(`Hello ${value}!`);
};

const removeName = async () => {
  await Plugins.Storage.remove({ key: 'name' });
};
```

## API

* [`get(...)`](storage.md#get)
* [`set(...)`](storage.md#set)
* [`remove(...)`](storage.md#remove)
* [`clear()`](storage.md#clear)
* [`keys()`](storage.md#keys)
* [Interfaces](storage.md#interfaces)

### get\(…\)

Get the value from storage of a given key.

```typescript
get(options: GetOptions) => Promise<GetResult>
```

**Returns:** `Promise<`[`GetResult`](storage.md#getresult)`>`

### set\(…\)

```typescript
set(options: SetOptions) => Promise<void>
```

Set the value in storage for a given key.

### remove\(…\)

```typescript
remove(options: RemoveOptions) => Promise<void>
```

Remove the value from storage for a given key, if any.

### clear\(\)

```typescript
clear() => Promise<void>
```

Clear keys and values from storage.

### keys\(\)

```text
keys() => Promise<KeysResult>
```

Return the list of known keys in storage.

**Returns:** `Promise<`[`KeysResult`](storage.md#keysresult)`>`

## Interfaces

### **ConfigureOptions**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`group`** | string | Set the storage group. Storage groups are used to organize key/value pairs. WARNING: The `clear()` method can delete unintended values when using the ‘NativeStorage’ group. |

### **GetResult**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`value`** | string \| null | The value from storage associated with the given key. If a value was not previously set or was removed, value will be `null`. |

### **GetOptions**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`key`** | string | The key whose value to retrieve from storage. |

### **SetOptions**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`key`** | string | The key to associate with the value being set in storage. |
| **`value`** | string | The value to set in storage with the associated key. |

### **RemoveOptions**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`key`** | string | The key whose value to remove from storage. |

### **KeysResult**

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`keys`** | string\[\] | The known keys in storage. |


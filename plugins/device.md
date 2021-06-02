---
description: >-
  The Device API exposes internal information about the device, such as the
  model and operating system version, along with user information such as unique
  ids.
---

# Device

## Example

```javascript
import { Plugins } from 'zaap-sdk';

const logDeviceInfo = async () => {
  const info = await Plugins.Device.getInfo();

  console.log(info);
};

const logBatteryInfo = async () => {
  const info = await Plugins.Device.getBatteryInfo();

  console.log(info);
};
```

## API

* [`getId()`](device.md#getid)
* [`getInfo()`](device.md#getinfo)
* [`getBatteryInfo()`](device.md#getbatteryinfo)
* [`getLanguageCode()`](device.md#getlanguagecode)
* [Interfaces](device.md#interfaces)

### getId\(\)

```typescript
getId() => Promise<DeviceId>
```

Return a unique identifier for the device.

**Returns:** `Promise<`[`DeviceId`](device.md#deviceid)`>`

### getInfo\(\)

```typescript
getInfo() => Promise<DeviceInfo>
```

Return information about the underlying device/os/platform.

**Returns:** `Promise<`[`DeviceInfo`](device.md#deviceinfo)`>`  


### getBatteryInfo\(\)

```typescript
getBatteryInfo() => Promise<BatteryInfo>
```

Return information about the battery.

**Returns:** `Promise<`[`BatteryInfo`](device.md#batteryinfo)`>`

### getLanguageCode\(\)

```typescript
getLanguageCode() => Promise<GetLanguageCodeResult>
```

Get the device’s current language locale code.

**Returns:** `Promise<`[`GetLanguageCodeResult`](device.md#getlanguagecoderesult)`>`

## Interfaces

### **DeviceId**

| **Prop** | Type | Description |
| :--- | :--- | :--- |
| **`uuid`** | string | The UUID of the device as available to the app. This identifier may change on modern mobile platforms that only allow per-app install UUIDs. On web, a random identifier is generated and stored on localStorage for subsequent calls. |

### **DeviceInfo**

| **Prop** | Type | Description |
| :--- | :--- | :--- |
| **`name`** | string | The name of the device. For example, “John’s iPhone”. This is only supported on iOS and Android 7.1 or above. |
| **`model`** | string | The device model. For example, “iPhone”. |
| **`platform`** | 'ios' \| 'android' \| 'web' | The device platform \(lowercase\). |
| **`operatingSystem`** | string | The operating system of the device. |
| **`osVersion`** | string | The version of the device OS. |
| **`manufacturer`** | string | The manufacturer of the device. |
| **`isVirtual`** | boolean | Whether the app is running in a simulator/emulator. |
| **`memUsed`** | number | Approximate memory used by the current app, in bytes. Divide by 1048576 to get the number of MBs used. |
| **`diskFree`** | number | How much free disk space is available on the the normal data storage. path for the os, in bytes |
| **`diskTotal`** | number | The total size of the normal data storage path for the OS, in bytes. |
| **`appVersion`** | string | The version of the application. |
| **`appBuild`** | string | The build number of the application. |
| **`appId`** | string | The id of the application. |
| **`appName`** | string | The name of the application. |

### **BatteryInfo**

| **Prop** | Type | Description |
| :--- | :--- | :--- |
| **`batteryLevel`** | number | A percentage \(0 to 1\) indicating how much the battery is charged. |
| **`isCharging`** | boolean | Whether the device is charging. |

### GetLanguageCodeResult

| Prop | Type | Description |
| :--- | :--- | :--- |
| **`value`** | string | Two character language code. |


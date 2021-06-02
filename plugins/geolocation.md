---
description: >-
  The Geolocation API provides simple methods for getting and tracking the
  current position of the device using GPS, along with altitude, heading, and
  speed information if available.
---

# Geolocation

## Example

```javascript
import { Plugins } from 'zaap-sdk';

const printCurrentPosition = async () => {
  const coordinates = await Plugins.Geolocation.getCurrentPosition();

  console.log('Current position:', coordinates);
};
```

## API

* [`getCurrentPosition(...)`](geolocation.md#getcurrentposition)
* [`requestPermissions()`](geolocation.md#requestpermissions)
* [Interfaces](geolocation.md#interfaces)

### getCurrentPosition\(…\)

```typescript
getCurrentPosition(options?: PositionOptions | undefined) => Promise<Position>
```

Get the current GPS location of the device

**Returns:** `Promise<`[`Position`](geolocation.md#position)`>`

### requestPermissions\(\)

```typescript
requestPermissions() => Promise<PermissionStatus>
```

Request location permissions

**Returns:** `Promise<`[`PermissionStatus`](geolocation.md#permissionstatus)`>`

## Interfaces

### **Position**

| `Prop` | Type | Description |
| :--- | :--- | :--- |
| **`timestamp`** | number | Creation timestamp for coords |
| **`coords`** | { latitude: number; longitude: number; accuracy: number; altitudeAccuracy: number \| null; altitude: number \| null; speed: number \| null; heading: number \| null; } | The GPS coordinates along with the accuracy of the data |

### **PositionOptions**

| **Prop** | Type | Description |
| :--- | :--- | :--- |
| **`enableHighAccuracy`** | boolean | High accuracy mode \(such as GPS, if available\) |
| **`timeout`** | number | The maximum wait time in milliseconds for location updates |
| **`maximumAge`** | number | The maximum age in milliseconds of a possible cached position that is acceptable to return |

### **PermissionStatus**

| **Prop** | Type |
| :--- | :--- |
| **`location`** | [PermissionState](geolocation.md#permissionstate) |

## Type Aliases

### **PermissionState**

`'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'`


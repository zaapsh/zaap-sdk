---
description: >-
  The Tracking provides ability to get the user permissions status about
  tracking (only on IOS).
---

# Tracking

## Example

```java
import { Plugins } from 'zaap-sdk';

const status = await Plugins.Tracking.requestPermission();
```

## API

* [`getStatus()`](tracking.md#getstatus)
* [`requestPermission()`](tracking.md#requestpermission)
* [Type Aliases](tracking.md#type-aliases)

### getStatus\(\)

```typescript
getStatus() => Promise<TrackingStatus>
```

Show a Share modal for sharing content with other apps

**Returns:** `Promise<`[`TrackingStatus`](tracking.md#trackingstatus)`>`

### requestPermission\(\)

```typescript
requestPermission(): Promise<TrackingStatus>
```

Show a Share modal for sharing content with other apps

**Returns:** `Promise<`[`TrackingStatus`](tracking.md#trackingstatus)`>`

## Type Aliases

### TrackingStatus

`"unavailable" | "denied" | "authorized" | "restricted" | "not-determined"`


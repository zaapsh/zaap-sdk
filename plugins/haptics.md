---
description: >-
  The Haptics API provides physical feedback to the user through touch or
  vibration.
---

# Haptics

## Example

```javascript
import { Plugins } from 'zaap-sdk';

const hapticsImpactMedium = async () => {
  await Plugins.Haptics.impact({ style: Plugins.ImpactStyle.Medium });
};

const hapticsImpactLight = async () => {
  await Plugins.Haptics.impact({ style: Plugins.ImpactStyle.Light });
};

const hapticsVibrate = async () => {
  await Plugins.Haptics.vibrate();
};

const hapticsSelectionStart = async () => {
  await Plugins.Haptics.selectionStart();
};

const hapticsSelectionChanged = async () => {
  await Plugins.Haptics.selectionChanged();
};

const hapticsSelectionEnd = async () => {
  await Plugins.Haptics.selectionEnd();
};
```

## API

* [`impact(...)`](haptics.md#impact)
* [`notification(...)`](haptics.md#notification)
* [Interfaces](haptics.md#interfaces)

### impact\(...\)

```text
impact(options?: ImpactOptions | undefined) => Promise<void>
```

Trigger a haptics “impact” feedback

### notification\(…\)

```text
notification(options?: NotificationOptions | undefined) => Promise<void>
```

Trigger a haptics “notification” feedback

## Interfaces

### **ImpactOptions**

| **Prop** | Type | Description |
| :--- | :--- | :--- |
| **`style`** | [ImpactStyle](haptics.md#impactstyle) | Impact Feedback Style The mass of the objects in the collision simulated. |

### **NotificationOptions**

| **Prop** | Type | Description |
| :--- | :--- | :--- |
| **`type`** | [NotificationType](haptics.md#notificationtype) | Notification Feedback Type The type of notification feedback generated. |

## Enums

### ImpactStyle

| Members | Value | Description |
| :--- | :--- | :--- |
| **`Heavy`** | 'HEAVY' | A collision between small, light user interface elements |
| **`Medium`** | 'MEDIUM' | A collision between moderately sized user interface elements |
| **`Light`** | 'LIGHT' | A collision between small, light user interface elements |

### NotificationType

| Members | Value | Description |
| :--- | :--- | :--- |
| **`Success`** | 'SUCCESS' | A notification feedback type indicating that a task has completed successfully |
| **`Warning`** | 'WARNING' | A notification feedback type indicating that a task has produced a warning |
| **`Error`** | 'ERROR' | A notification feedback type indicating that a task has failed |


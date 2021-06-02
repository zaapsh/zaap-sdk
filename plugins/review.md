# Review

## Example

```javascript
import { Plugins } from 'zaap-sdk';

const requestReview = async () => {
  const hasFlowFinishedSuccessfully = await Plugins.Review.request();

  console.log('InAppReview:', hasFlowFinishedSuccessfully);
};

const isReviewAvailable = () => {
  const isAvailable = Plugins.Review.isAvailable();

  console.log('Is Review Available', isAvailable);
};
```

## API

* [`request()`](review.md#request)
* [`isAvailable()`](review.md#isavailable)

### request\(\)

```typescript
request() => Promise<boolean>
```

Request review.

### isAvailable\(\)

```typescript
isAvailable() => boolean
```

Return if the device support rating or not


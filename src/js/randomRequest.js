/*
This function is used mainly for testing purpose
when you want to simulate request errors.

- Usage:
Imagine you have this request function

```js
export const getRealEstateById = (propertyId: number) =>
  requestBFF(`${prefix}?propertyId=${propertyId}`, formatFetchData('get'));
```

Transform it into this

```js
import { randomRequest } from 'Base/testHelpers/randomRequest';

export const getRealEstateById = (propertyId: number) =>
  randomRequest(() => requestBFF(`${prefix}?propertyId=${propertyId}`, formatFetchData('get')));
```

You have 50% of failure and 50% of success.
This way, you can test the error handling by failing the request first,
refetching again with the error dialog, and getting a success request response.
*/

export const randomRequest = (request) =>
  Math.random() > 0.5 ? Promise.reject('error') : request();

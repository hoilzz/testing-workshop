# Mock Functions

mock 함수는 실제 함수 구현체를 지워서 코드 간에 링크를 테스트하기 쉽게 만들어준다.
함수 호출을 캡처링(함수 호출에 전달되는 파라미터도 캡처링), `new`로 이니셜라이징 될 때 생성자 함수 인스턴스를 캡처링, return 값의 테스트 타임 환경을 허용한다.

- 함수 호출 캡처링 (파라미터도 캡처링)
- `new`로 이니셜라이징 될 떄 생성자 함수 인스턴스를 캡처링
- return 값의 테스트 타임 환경 허용

mock 함수의 2가지 방식 있다.
- 테스트 코드에서 mock 함수를 생성하여 사용하기
- 모듈 디펜던시를 오버라이드 하기 위해 `manual_mock`을 작성하기

```js
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
```

## Mocking Modules

실제 API 호출 없이 이 메서드를 테스트하기 위해 (느리고 취약한 테스트를 작성하기 위해),
자동으로 axios module을 모킹하기 위한 `jest.mock(...)` 함수를 사용할 수 있다.

module을 mocking하면, 테스트 하려는 data를 리턴해주는 `.get`에 `mockResolvedValue`를 제공할 수 있다. 사실 `axios.get('/users.json')`이 fake response를 리턴하도록 만들고 있다.

## Mock 구현

반환 값 지정을 넘어서서 __mock 함수 구현을 바꿀 수 있는 기능__ 이 있다.
`jest.fn` or mock함수의 `mockImplementationOnce`로 할 수 있다.

_단순 함수 mocking하기_
```js
const myMockFn = jest.fn(cb => cb(null, true))

myMockFn((err, val) => console.log(val))
```

`mockImplementation` method는 다른 모듈에서 생성된 mock 함수 구현을 정의할 때 유용하다.

_다른 모듈에서 생성된 mock 함수_
```js
// foo.js
module.exports = function() {
  // some implementation;
};

// test.js
jest.mock('../foo'); // this happens automatically with automocking
const foo = require('../foo');

// foo is a mock function
foo.mockImplementation(() => 42);
foo();
// > 42
```




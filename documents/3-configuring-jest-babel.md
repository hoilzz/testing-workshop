__test__ 디렉토리에 넣는 것을 좋아한다.

왜냐하면 관리하기 좋고 테스트파일 점점 많아질거라 따로 폴더 두고 관리한다.

import에서 에러난다.

unexpected token import.

리얼 월드에서는 웹팩과 바벨이 해결해준다. 바벨은 import를 제외하고 전부 트랜스파일한다.

웹팩을 사용할 때 import를 트랜스파일 하지 않아야 하는 이유는?

webpack이 es module을 지원하기 때문이다. 이유는 ES modules을 지원하는데 이걸 써야 웹팩이 트리쉐이킹을 할 수 있기 때문이다.

여튼 다시 돌아가서 바벨 설정을 보자

```js
module.exports = {
  presets: [['env', {modules: false}], 'react'],
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    'transform-object-rest-spread',
  ],
}
```

`modules:false`는 import로 트랜스파일하는건데,
제스트는 babelrc를 자동으로 찾아서 적용한다.
문제는 위 설정이 바벨이 트랜스파일시 `import문 그대로 냅둬`라고 말하는데,
제스트는 import문을 해석할 줄 모른다.
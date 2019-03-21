# 2-1. Unit Testing Component

요번 강의는 pain first. 나중에 좋은거 알려줄께.

form event 생성.. form element로 해당 이벤트를 dispatch..
나중에 얘네 일일히 다 짤 필요 없음. 어차피 유틸리티 다 있음.

추상화와 테스트가 어떻게 작동되는지 이해하는게 중요.

```js
jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve()),
    },
  }
})
```

custom mock을 mock하려고 함.
object를 리턴. 그 오브젝트는 mock 오브젝트다.

커스텀 mock이 실제 API module 대신에 API에서 pull할 때,

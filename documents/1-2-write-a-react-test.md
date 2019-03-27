```
test('title', () => {
  // arrange

  //act

  //
})
```

`<div>`인지 `<span>`인지 신경 안쓴다.

걍 no items만 나오면된다. 이러한 경우 때문에 UI test가 고통스럽게 느껴진다.

expect(container.textContent).toMatch('blahblah')

스타일 때문에 span이 오든 div로 바뀌든 textContent만 비교.
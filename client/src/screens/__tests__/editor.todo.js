import React from 'react';
import ReactDOM from 'react-dom';
import Editor from '../editor';


function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test('mock fn test', () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);
})

jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve())
    }
  }
})

const flushPromise = (() => {
  new Promise(resolve => setTimeout(resolve, 0))
})

test('calls onSubmit with the username and password when submitted', async () => {
  // Editor 불러와서 제출 하는지 안하는지
  const container = document.createElement('div');
  const fakeUser = {user: {id: 'hoilzz'}}
  const fakeHistory = {
    push: jest.fn()
  }
  ReactDOM.render(<Editor user={fakeUser} history={fakeHistory} />, container);

  // fake post로 form element 채우기

  const form = container.querySelector('form');
  const [title, content, tags] = form.elements;

  title.value = "this is title";
  content.value = 'content content content';
  tags.value = ['tags', 'is']


  const submit = new Event('submit');
  form.dispatchEvent(submit);

  await flushPromise();
  // promise로 settle 기다리기
  // right data로 호출되었는지 함수 만들기
  expect(fakeHistory.push).toHaveBeenCalledTimes(1)

})

// TODO later...
test('snapshot', () => {})

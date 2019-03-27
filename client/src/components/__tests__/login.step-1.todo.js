import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../login';


// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const container = document.createElement('div');
  const handleSubmit = jest.fn();
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container);
  // 🐨 create a fake object to hold the form field values (username and password)
  const form = container.querySelector('form');
  const [id, password] = form.elements;

  // 🐨 create a jest.fn() for your submit handler
  // 🐨 render the Login component to a div

  // 💰 const div = document.createElement('div')
  //
  // 🐨 get the field nodes
  // 💰 const inputs = div.querySelectorAll('input')
  // 💰 const form = div.querySelector('form')
  // 🐨 fill in the field values
  id.value = 'hoilzz'
  password.value = 'password'

  const submit = new Event('submit');
  form.dispatchEvent(submit)
  //
  // Act
  // 🐨 submit the form:
  // 💰 formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // 🐨 ensure your submit handler was called properly
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    username: id.value,
    password: password.value
  })
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

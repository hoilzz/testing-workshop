// add a beforeEach for cleaning up state and intitializing the API

import axiosMock from 'axios';
import React from 'react'
import {Router} from 'react-router-dom'
import {fireEvent, render, wait} from 'react-testing-library'
import {createMemoryHistory} from 'history'
import 'jest-dom/extend-expect'
import App from '../app';
import {init as initAPI} from '../utils/api'

test('login as an existing user', async () => {
  axiosMock.__mock.reset();
  initAPI();
  const history = createMemoryHistory({initialEntries: ['/']})
  // 🐨 render the app with the router provider and custom history
  //  const utils = renderWithRouter(<App />)
  const utils = render(<Router history={history}><App /></Router>)
  // 🐨 wait for the app to finish loading the mocked requests
  // 💰 await utils.finishLoading()
  await wait(() => expect(utils.queryByText('Loading')).toBeNull())
  // await wait(() => expect(utils))
  // 🐨 navigate to login by clicking login-link
  // 💰 the link has text that matches /login/i
  // 💰 when you fireEvent.click on the login link, react-router will ignore
  // the click unless it's a "left click" which is based on the `button`
  // property. So as a second argument to `fireEvent.click`, pass `{button: 0}`
  const loginLink = utils.getByText(/login/i)

  fireEvent.click(loginLink, {button: 0})
  expect(window.location.href).toContain('login')
  // 🐨 assert that window.location.href contains 'login'
  //
  // 🐨 fill out the form
  // 💰 generate.loginForm()
  const username = 'hoilzz';
  const password = 'hzz';
  const usernameElement = utils.getByText(/username/i)
  const passwordElement = utils.getByText(/password/i)


  // 💰 get the username and password fields and set their values
  //
  // Now we need to prepare our axios mock to handle the form submission properly:
  // use the axiosMock.__mock.instance
  // to mock out the post implementation
  // it should return the fake user + a token
  // which you can generate with generate.token(fakeUser)
  // 💰 you may want to look at the final version for this one...
  //
  // 🐨 submit form by clicking on the submit button
  //
  // 🐨 wait for the mocked requests to finish
  // 💰 await utils.finishLoading()
  //
  // 🐨 now make some assertions:
  // assert post was called correctly
  // assert localStorage is correct
  // assert the user was redirected (window.location.href)
  // assert the username display is the fake user's username
  // assert the logout button exists
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=app.login&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

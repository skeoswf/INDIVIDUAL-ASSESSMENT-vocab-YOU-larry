import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
// prettier-ignore
const loginButton = () => {
  const domString = `
  <h1 id="loginHeader">vocabYOUlary get it LMFAOOO</h1>
  <br>
  <button id="google-auth" class="btn btn-danger">login please    login i n eed a good career</button>
  `;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;

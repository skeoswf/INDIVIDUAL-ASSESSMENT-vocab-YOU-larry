import { signIn } from '../utils/auth';
import book from '../assets/book.png';

const bookString = `<img src=${book} alt="book" id="book" style="width: 350px; height: 350px;" hidden>`;

// prettier-ignore
const loginButton = () => {
  const domString = `
  <h1 id="loginHeader">"VOCAB<i>YOU</i>LARY"</h1>
  <br>
  <button id="google-auth" class="btn btn-danger">login to access terms</button>
  ${bookString}
  `;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('mouseover', () => {
    document.querySelector('#book').hidden = false;
    document.querySelector('#loginHeader').hidden = true;
  });
  document.querySelector('#google-auth').addEventListener('mouseout', () => {
    document.querySelector('#book').hidden = true;
    document.querySelector('#loginHeader').hidden = false;
  });
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;

import { signOut } from '../utils/auth';

// prettier-ignore
const logoutButton = () => {
  const domString = '<button id="google-auth-test" class="btn btn-danger">sign out</button>';
  document.querySelector('#logout-button').innerHTML = domString;
  document.querySelector('#google-auth-test').addEventListener('click', signOut);
};

export default logoutButton;

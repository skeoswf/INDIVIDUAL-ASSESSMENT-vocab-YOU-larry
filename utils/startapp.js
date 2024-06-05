import navigationEvents from '../events/navigationEvents';
import domBuilder from '../components/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
  logoutButton();
};

export default startApp;

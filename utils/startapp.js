import navigationEvents from '../events/navigationEvents';
import domBuilder from '../components/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import filterRow from '../components/shared/filterButtons';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  navBar();
  filterRow();
  navigationEvents();
  domEvents();
  logoutButton();
};

export default startApp;

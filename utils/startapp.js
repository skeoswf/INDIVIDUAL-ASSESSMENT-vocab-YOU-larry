import navigationEvents from '../events/navigationEvents';
import domBuilder from '../components/domBuilder';

const startApp = () => {
  domBuilder();
  navigationEvents();
};

export default startApp;

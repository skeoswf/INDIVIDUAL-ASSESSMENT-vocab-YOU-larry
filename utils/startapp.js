import navigationEvents from '../events/navigationEvents';
import domBuilder from '../components/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import filterRow from '../components/shared/filterButtons';
import domEvents from '../events/domEvents';
import { showVocab } from '../pages/showVocab';
import { getVocab } from '../api/vocabData';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  filterRow(user);
  navigationEvents(user);
  domEvents(user);
  formEvents(user);
  logoutButton(user);

  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;

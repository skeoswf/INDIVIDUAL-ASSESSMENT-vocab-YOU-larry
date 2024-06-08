import { signOut } from '../utils/auth';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/showVocab';

const navigationEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#coding-filter').addEventListener('click', () => {
    getVocab().then((vocab) => {
      const filteredVocab = vocab.filter((word) => word.category === 'coding');
      showVocab(filteredVocab);
    });
  });

  document.querySelector('#networking-filter').addEventListener('click', () => {
    getVocab().then((vocab) => {
      const filteredVocab = vocab.filter(
        (word) => word.category === 'networking'
      );
      showVocab(filteredVocab);
    });
  });

  document
    .querySelector('#web-development-filter')
    .addEventListener('click', () => {
      getVocab().then((vocab) => {
        const filteredVocab = vocab.filter(
          (word) => word.category === 'web development'
        );
        showVocab(filteredVocab);
      });
    });
};

export default navigationEvents;

import addVocabForm from '../components/addVocabForm';
import { getSingleVocab, deleteVocab, getVocab } from '../api/vocabData';
import { showVocab } from '../pages/showVocab';

const domEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('form-entry')) {
      addVocabForm();
    }
  });

  document.querySelector('#card-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocab) => {
        addVocabForm(vocab);
      });
    }

    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('cast the term into the void?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab().then(showVocab);
        });
      }
    }
  });
};

export default domEvents;

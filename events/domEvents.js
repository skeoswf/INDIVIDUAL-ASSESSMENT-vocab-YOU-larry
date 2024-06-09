import addVocabForm from '../components/addVocabForm';
import { getSingleVocab } from '../api/vocabData';

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
  });
};

export default domEvents;

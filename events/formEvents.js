import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/showVocab';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#vocab_category').value,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab().then(showVocab); // showvocab is rendering in a div that isnt there anymore
        });
      });
    }

    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#vocab_category').value,
        firebaseKey,
      };
      updateVocab(payload).then(() => {
        getVocab().then(showVocab);
      });
    }
  });
};

export default formEvents;

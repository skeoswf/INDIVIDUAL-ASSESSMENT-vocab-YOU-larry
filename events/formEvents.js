import {
  createVocab,
  getVocab,
  updateVocab,
  showVocab,
} from '../api/vocabData';

if (e.target.id.includes('submit-vocab')) {
  const payload = {
    title: document.querySelector('#title').value,
    description: document.querySelector('#description').value,
    category: document.querySelector('#vocab_category').value,
  };

  createVocab(payload).then(({ name }) => {
    const patchPayload = { firebaseKey: name };

    updateVocab(patchPayload).then(() => {
      getVocab().then(showVocab);
    });
  });
}

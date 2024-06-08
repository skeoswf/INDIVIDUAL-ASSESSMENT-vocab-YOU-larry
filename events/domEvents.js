import addVocabForm from '../components/addVocabForm';

// const domEvents = () => {
//   document.querySelector('navigation').addEventListener('click', (e) => {

//     if (e.target.id.includes('form-entry') {
//       addVocabForm();
//     };
//   )};
// )};

const domEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('form-entry')) {
      addVocabForm();
    }
  });
};

export default domEvents;

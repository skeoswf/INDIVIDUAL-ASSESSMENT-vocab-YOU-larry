import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>no vocab</h1>';
  renderToDOM('#main-container', domString);
};

//  prettier-ignore
const showVocab = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 300px;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
          <p class="card-text">${item.description}</p>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas btn btn-info">edit</i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas">delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#card-container', domString);
};

export { emptyVocab, showVocab };

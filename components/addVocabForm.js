import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// prettier-ignore
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">vocab term</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="enter new term" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">description</label>
        <textarea class="form-control" placeholder="vocab description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="category">select a category</label>
        <select class="form-control" id="vocab_category" required>
          <option value="coding" ${obj.category === 'coding' ? 'selected' : ''}>coding</option>
          <option value="networking" ${obj.category === 'networking' ? 'selected' : ''}>networking</option>
          <option value="web development" ${obj.category === 'web development' ? 'selected' : ''}>web development</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">submit vocab
      </button>
    </form>`;

  renderToDOM('#main-container', domString);
};

export default addVocabForm;

import renderToDOM from '../../utils/renderToDom';

const filterRow = () => {
  const domString = `<button id="coding-filter" class="filter-buttons">CODING</button>
  <button id="networking-filter" class="filter-buttons">NETWORKING</button>
  <button id="web-development-filter" class="filter-buttons">WEB DEVELOPMENT</button>
  `;

  renderToDOM('#filters', domString);
};

export default filterRow;

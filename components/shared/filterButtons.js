import renderToDOM from '../../utils/renderToDom';

const filterRow = () => {
  const domString = `<button id="coding-filter" class="filter-buttons">coding</button>
  <button id="networking-filter" class="filter-buttons">networking</button>
  <button id="web-development-filter" class="filter-buttons">web development</button>
  `;

  renderToDOM('#filters', domString);
};

export default filterRow;

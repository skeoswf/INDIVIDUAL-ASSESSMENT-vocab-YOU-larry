import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <div id="left-nav-content">
    <div id="logo">vocabulary</div>
    <a id="form-entry" href="#">create entry</a>
  </div>
  <div id="logout-button">test</div>
  `;

  renderToDOM('#navigation', domString);
};

export default navBar;

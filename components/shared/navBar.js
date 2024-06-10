import renderToDOM from '../../utils/renderToDom';
import noteImage from '../../assets/newentry.png';

const imageString = `<img src=${noteImage} alt="note" id="note" style="width: 100px; height: 100px;">`;

const navBar = () => {
  const domString = `
  <div id="left-nav-content">
    <div id="logo">"VOCAB<i id="italics">YOU</i>LARY"</div>
    <div id="funny-form-box">
    <a id="form-entry" href="#">create entry</a>
    ${imageString}
    </div>
  </div>
  <div id="logout-button">test</div>
  `;

  renderToDOM('#navigation', domString);

  document.querySelector('#form-entry').addEventListener('mouseover', () => {
    document.querySelector('#note').style.opacity = 1;
  });

  document.querySelector('#form-entry').addEventListener('mouseout', () => {
    document.querySelector('#note').style.opacity = 0;
  });
};

export default navBar;

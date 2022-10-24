//import '../public/style/fonts.css';
import './styles/index.scss';
import '@/_index';

const packageInfo = require('../package.json');

/**
 * Create HTML
 */
// update title
const title = `${packageInfo.prettyName} v${packageInfo.version}`;
document.title = `[DEV] ${title} - ${packageInfo.description}`;
document.querySelector('[data-title]').innerHTML = title;
document.querySelector('[data-description]').innerHTML = packageInfo.description;

// init
MyLib.init();
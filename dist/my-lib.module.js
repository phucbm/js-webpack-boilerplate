/**!
 * Webpack Library Boilerplate v0.0.1
 * @author phucbm
 * @homepage https://github.com/phucbm/webpack-library-boilerplate
 * @license MIT 2022
 */
class t{constructor(t){this.id=function(t=""){return t+(+new Date).toString(16)+(1e8*Math.random()|0).toString(16)}(),this.options={el:void 0,...t},this.options.el.innerHTML="Hello!"}}window.MyLibController=new class{constructor(){this.instances=[]}add(t){this.instances.push(t)}get(t){return this.instances.filter((i=>i.id===t))[0]}},window.MyLib={init:(i={})=>{const n=i.selector||"[data-my-lib]";document.querySelectorAll(n).forEach((n=>{window.MyLibController.add(new t({el:n,...i}))}))},get:t=>window.MyLibController.get(t)},window.MyLib.init();
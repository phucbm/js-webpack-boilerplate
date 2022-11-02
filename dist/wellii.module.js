/**!
 * Wellii - Webpack Library Boilerplate v0.0.1
 * @author phucbm
 * @homepage https://github.com/phucbm/wellii
 * @license MIT 2022
 */
class i{constructor(i){this.id=function(i=""){return i+(+new Date).toString(16)+(1e8*Math.random()|0).toString(16)}(),this.options={el:void 0,...i},this.options.el.innerHTML="Hello!"}}window.WelliiController=new class{constructor(){this.instances=[]}add(i){this.instances.push(i)}get(i){return this.instances.filter((t=>t.id===i))[0]}},window.Wellii={init:(t={})=>{const e=t.selector||"[data-wellii]";document.querySelectorAll(e).forEach((e=>{window.WelliiController.add(new i({el:e,...t}))}))},get:i=>window.WelliiController.get(i)},window.Wellii.init();
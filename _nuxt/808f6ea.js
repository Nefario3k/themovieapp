(window.webpackJsonp=window.webpackJsonp||[]).push([[31,15],{479:function(t,e,n){var content=n(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("41144467",content,!0,{sourceMap:!1})},484:function(t,e,n){"use strict";n(479)},485:function(t,e,n){var o=n(16)(!1);o.push([t.i,".loading[data-v-11bbab63]{height:100vh;width:100%;display:flex;justify-content:center;align-items:center}@keyframes circle-loading-11bbab63{to{transform:rotate(1turn)}}.loading span[data-v-11bbab63]{display:block;width:70px;height:70px;border-radius:50%;border:2px solid transparent;border-top:2px solid var(--loader-color);animation:circle-loading-11bbab63 1.2s ease infinite}",""]),t.exports=o},486:function(t,e,n){"use strict";n.r(e);var o={},r=(n(484),n(45)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"loading"},[t("span")])}],!1,null,"11bbab63",null);e.default=component.exports},555:function(t,e,n){var content=n(602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0216c396",content,!0,{sourceMap:!1})},601:function(t,e,n){"use strict";n(555)},602:function(t,e,n){var o=n(16)(!1);o.push([t.i,".mainCol h3[data-v-0b9e3581]{margin-bottom:15px;font-weight:600;color:var(--text-color)}.mainCol h3 span[data-v-0b9e3581]{opacity:.5}.mainCol .cc_content[data-v-0b9e3581]{display:flex;align-items:center;grid-gap:15px;gap:15px;margin-bottom:15px}.mainCol .cc_content a[data-v-0b9e3581]{text-decoration:none;color:var(--text-color)}.mainCol .cc_content a.profileImg[data-v-0b9e3581]{border-radius:8px;overflow:hidden;height:120px;width:120px;background-position:top;background-size:cover;background-color:var(--text-color)}.mainCol .cc_content a.profileImg.small[data-v-0b9e3581]{background-size:75%;background-position:50%}.mainCol .cc_content a.profileImg img[data-v-0b9e3581]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:8px}.mainCol .cc_content a.profileImg:hover img[data-v-0b9e3581]{transform:scale(1.1);transition:all .5s ease-in-out}.mainCol .cc_content p[data-v-0b9e3581]{margin:0;font-weight:600;font-size:1.8rem}.mainCol .cc_content p:hover a[data-v-0b9e3581]{color:var(--primary-color);transition:color .3s linear}.mainCol .cc_content span[data-v-0b9e3581]{font-size:1.4rem;color:var(--text-color)}.mainCol .cc_content .flex_down p[data-v-0b9e3581]{margin:0}.mainCol p.crewTitle[data-v-0b9e3581]{font-size:2rem;color:var(--text-color);font-weight:600}",""]),t.exports=o},633:function(t,e,n){"use strict";n.r(e);var o=n(477),r=n(625),c=(n(27),n(9)),l=(n(73),n(4),n(10),n(42),n(54),n(299),{data:function(){return{data:[],cast:[],crew:[],crewWork:[],accessKey:"575e447d3c3e2de9aa3104d937ebb4f1",lang:"en-US",imageLink:"http://image.tmdb.org/t/p/",imgSize:"original/"}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("movie/".concat(t.$route.params.id,"/credits?api_key=").concat(t.accessKey,"&languagae=").concat(t.lang));case 3:n=e.sent,t.data=n.data,t.cast=t.data.cast,t.crew=t.data.crew,t.crewWork=[],t.crew.forEach((function(element){"Acting"==element.known_for_department||t.crewWork.includes(element.known_for_department)||t.crewWork.push(element.known_for_department)})),t.crewWork=t.crewWork.sort(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},head:function(){return{title:"Credits - Latest Streaming Movies And series info",meta:[{hid:"description",name:"description",content:"Get all the latest streaming movies and series in theaters and online"},{hid:"keywords",name:"keywords",content:"movies, streaming, stream, tv series"}]}}}),d=(n(601),n(45)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.data?e(o.a,[e(r.a,{staticStyle:{"margin-top":"25px"}},[e("div",{staticClass:"col-12"},[e("h3",{staticClass:"back",attrs:{onclick:"history.back()"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"}})]),e("span",[t._v("Go back")])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mainCol cast"},[e("h3",[t._v("\n          Cast ("),e("span",[t._v(t._s(t.cast.length))]),t._v(")\n        ")]),t._v(" "),t._l(t.cast,(function(n,o){return e("div",{key:o,staticClass:"cc_content"},[n.profile_path?e("nuxt-link",{staticClass:"profileImg",style:"background-image: url(".concat(t.imageLink+t.imgSize+n.profile_path,")"),attrs:{to:"/persons/".concat(n.id,"?query=").concat(n.original_name)}}):e("nuxt-link",{staticClass:"profileImg small",staticStyle:{"background-image":"url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg)"},attrs:{to:"/persons/".concat(n.id,"?query=").concat(n.original_name)}}),t._v(" "),e("div",{staticClass:"flex_down"},[e("p",[e("nuxt-link",{attrs:{to:"/persons/".concat(n.id,"?query=").concat(n.original_name)}},[t._v("\n                "+t._s(n.original_name)+"\n              ")])],1),t._v(" "),e("span",[t._v(t._s(n.character))])])],1)}))],2),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mainCol crew"},[e("h3",[t._v("\n          Crew ("),e("span",[t._v(t._s(t.crew.length))]),t._v(")\n        ")]),t._v(" "),t._l(t.crewWork,(function(n){return e("div",{key:n,staticClass:"crewContainer"},[e("p",{staticClass:"crewTitle"},[t._v("\n            "+t._s(n)+"\n          ")]),t._v(" "),t._l(t.crew,(function(o,r){return e("div",{key:r},[o.known_for_department==n?e("div",{staticClass:"cc_content"},[o.profile_path?e("nuxt-link",{staticClass:"profileImg",style:"background-image: url(".concat(t.imageLink+t.imgSize+o.profile_path,")"),attrs:{to:"/persons/".concat(o.id,"?query=").concat(o.original_name)}}):e("nuxt-link",{staticClass:"profileImg small",staticStyle:{"background-image":"url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg)"},attrs:{to:"/persons/".concat(o.id,"?query=").concat(o.original_name)}}),t._v(" "),e("div",{staticClass:"flex_down"},[e("p",[e("nuxt-link",{attrs:{to:"/persons/".concat(o.id,"?query=").concat(o.original_name)}},[t._v("\n                    "+t._s(o.original_name)+"\n                  ")])],1),t._v(" "),e("span",[t._v(t._s(o.job))])])],1):t._e()])}))],2)}))],2)])],1):e("Loading")],1)}),[],!1,null,"0b9e3581",null);e.default=component.exports;installComponents(component,{Loading:n(486).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[34,16,25],{482:function(e,t,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("708fb410",content,!0,{sourceMap:!1})},491:function(e,t,n){"use strict";n(482)},492:function(e,t,n){var r=n(16)(!1);r.push([e.i,".loading[data-v-1eb89644]{height:100%;width:100%;min-height:300px;display:flex;justify-content:center;align-items:center}@keyframes circle-loading-1eb89644{to{transform:rotate(1turn)}}.loading span[data-v-1eb89644]{display:block;width:70px;height:70px;border-radius:50%;border:2px solid transparent;border-top:2px solid var(--loader-color);animation:circle-loading-1eb89644 1.2s ease infinite}",""]),e.exports=r},494:function(e,t,n){"use strict";n.r(t);var r={},o=(n(491),n(45)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"loading"},[e("span")])}],!1,null,"1eb89644",null);t.default=component.exports},502:function(e,t,n){n(5)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},503:function(e,t,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("7f6d4ad6",content,!0,{sourceMap:!1})},504:function(e,t,n){var r=n(16)(!1);r.push([e.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),e.exports=r},513:function(e,t,n){n(514)},514:function(e,t,n){"use strict";n(519)("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n(520))},516:function(e,t,n){"use strict";n(12),n(13),n(15),n(19),n(10),n(20);var r=n(86),o=n(2),c=(n(26),n(502),n(27),n(61),n(4),n(74),n(64),n(503),n(132)),l=n(209),h=n(32),d=n(134),v=n(7),f=n(1);var _=n(38),m=n(8);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var y;t.a=Object(m.a)(h.a,(y={onVisible:["init"]},f.a.extend({name:"intersectable",data:function(){return{isIntersecting:!1}},mounted:function(){d.a.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed:function(){d.a.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve:function(e,t,n){if(this.isIntersecting=n,n)for(var i=0,r=y.onVisible.length;i<r;i++){var o=this[y.onVisible[i]];"function"!=typeof o?Object(v.c)(y.onVisible[i]+" method is not available on the instance but referenced in intersectable mixin options"):o()}}}})),_.a).extend({name:"v-pagination",directives:{Resize:l.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(e){return e%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var e=parseInt(this.totalVisible,10);if(0===e||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];var t=Math.min(Math.max(0,e)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=t)return this.range(1,this.length);var n=t%2==0?1:0,o=Math.floor(t/2),c=this.length-o+1+n;if(this.value>o&&this.value<c){var l=this.length,h=this.value-o+2,d=this.value+o-2-n,v=d+1===l-1?d+1:"...";return[1,h-1==2?2:"..."].concat(Object(r.a)(this.range(h,d)),[v,this.length])}if(this.value===o){var f=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,f)),["...",this.length])}if(this.value===c){var _=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(_,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(c,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var e=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return e.selected=e.value}),100)},onResize:function(){var e=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((e-96)/42)},next:function(e){e.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(e){e.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(e,t){for(var n=[],i=e=e>0?e:1;i<=t;i++)n.push(i);return n},genIcon:function(e,t,n,r,label){return e("li",[e("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}},[e(c.a,[t])])])},genItem:function(e,i){var t=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,o=r?this.currentPageAriaLabel:this.pageAriaLabel;return e("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return t.$emit("input",i)}}}),[i.toString()])},genItems:function(e){var t=this;return this.items.map((function(i,n){return e("li",{key:n},[isNaN(Number(i))?e("span",{class:"v-pagination__more"},[i.toString()]):t.genItem(e,i)])}))},genList:function(e,t){return e("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},t)}},render:function(e){var t=[this.genIcon(e,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(e),this.genIcon(e,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return e("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(e,t)])}})},522:function(e,t,n){var content=n(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("5c1e6819",content,!0,{sourceMap:!1})},535:function(e,t,n){"use strict";n(522)},536:function(e,t,n){var r=n(16)(!1);r.push([e.i,".mainContainer[data-v-cd8630ce]{text-align:center;width:100%;border-top-left-radius:16px;border-top-right-radius:16px}",""]),e.exports=r},553:function(e,t,n){var content=n(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("06757ae8",content,!0,{sourceMap:!1})},564:function(e,t,n){"use strict";n.r(t);var r=n(169),o=(n(41),n(37),n(27),{props:["searched"],data:function(){return{imageLink:"http://image.tmdb.org/t/p/",imgSize:"original/"}},methods:{refactorRatings:function(e){return Math.ceil(10*e)/10}}}),c=(n(535),n(45)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",["movie"==e.searched.media_type?t("div",{staticClass:"mainContainer flex_down"},[t("div",{staticClass:"relative imgContainer"},[t("nuxt-link",{attrs:{to:"/movie/".concat(e.searched.id)}},[""!=e.searched.poster_path&&null!=e.searched.poster_path&&e.searched.poster_path?t(r.a,{attrs:{src:e.imageLink+e.imgSize+e.searched.poster_path,alt:e.searched.original_title}}):t("img",{attrs:{src:"/images/poster.png",alt:e.searched.original_title}})],1),e._v(" "),t("div",{staticClass:"absolute flex_all_center video_ratings"},[e._v("\n        "+e._s(e.refactorRatings(e.searched.vote_average))+"\n      ")]),e._v(" "),t("div",{staticClass:"absolute overview"},[e._v("\n        "+e._s(e.searched.overview.slice(0,200))+"\n        "),e.searched.overview.length>200?t("span",[e._v("...")]):e._e(),e._v(" "),t("nuxt-link",{attrs:{to:"/movie/".concat(e.searched.id)}},[e._v("Read more")])],1)],1),e._v(" "),t("div",{staticClass:"listingTag"},[t("nuxt-link",{attrs:{to:"/movie/".concat(e.searched.id)}},[t("h3",[e._v(e._s(e.searched.original_title))])]),e._v(" "),t("p",[e._v("\n        "+e._s(new Date(e.searched.release_date).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}))+"\n      ")])],1)]):e._e(),e._v(" "),"tv"==e.searched.media_type?t("div",{staticClass:"mainContainer flex_down"},[t("div",{staticClass:"relative imgContainer"},[t("nuxt-link",{attrs:{to:"/seasonal/".concat(e.searched.id)}},[""!=e.searched.poster_path&&null!=e.searched.poster_path?t(r.a,{attrs:{src:e.imageLink+e.imgSize+e.searched.poster_path,alt:e.searched.name}}):t("img",{attrs:{src:"/images/poster.png",alt:e.searched.name}})],1),e._v(" "),t("div",{staticClass:"absolute flex_all_center video_ratings"},[e._v("\n        "+e._s(e.refactorRatings(e.searched.vote_average))+"\n      ")]),e._v(" "),t("div",{staticClass:"absolute overview"},[e._v("\n        "+e._s(e.searched.overview.slice(0,200))+"\n        "),e.searched.overview.length>200?t("span",[e._v("...")]):e._e(),e._v(" "),t("nuxt-link",{attrs:{to:"/seasonal/".concat(e.searched.id)}},[e._v("Read more")])],1)],1),e._v(" "),t("div",{staticClass:"listingTag"},[t("nuxt-link",{attrs:{to:"/seasonal/".concat(e.searched.id)}},[t("h3",[e._v(e._s(e.searched.name))])]),e._v(" "),t("p",[e._v("\n        "+e._s(new Date(e.searched.first_air_date).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}))+"\n      ")])],1)]):e._e(),e._v(" "),"person"==e.searched.media_type?t("div",{staticClass:"mainContainer flex_down"},[t("div",{staticClass:"relative imgContainer trending"},[t("nuxt-link",{attrs:{to:"/persons/".concat(e.searched.id)}},[""!=e.searched.profile_path&&null!=e.searched.profile_path?t(r.a,{attrs:{src:e.imageLink+e.imgSize+e.searched.profile_path,alt:e.searched.name}}):t("img",{attrs:{src:"/images/poster.png",alt:e.searched.name}})],1),e._v(" "),t("div",{staticClass:"absolute flex_all_center video_ratings"},[e._v("\n        "+e._s(e.refactorRatings(e.searched.popularity))+"\n      ")])],1),e._v(" "),t("div",{staticClass:"listingTag"},[t("nuxt-link",{attrs:{to:"/persons/".concat(e.searched.id,"?query=").concat(e.searched.name)}},[t("h3",[e._v(e._s(e.searched.name))])]),e._v(" "),t("p",[e._v("\n        "+e._s(e.searched.known_for_department)+"\n      ")])],1)]):e._e()])}),[],!1,null,"cd8630ce",null);t.default=component.exports},597:function(e,t,n){"use strict";n(553)},598:function(e,t,n){var r=n(16)(!1);r.push([e.i,".nocontent[data-v-75a3ecec]{color:var(--text-color);font-weight:600;height:300px}.nocontent span[data-v-75a3ecec]{opacity:.5;font-style:italic}.header[data-v-75a3ecec]{color:var(--text-color);font-size:2rem}",""]),e.exports=r},631:function(e,t,n){"use strict";n.r(t);var r=n(477),o=n(516),c=n(625),l=n(9),h=(n(73),n(25),n(139),n(27),n(518),n(12),n(4),n(513),n(26),{data:function(){return{searchedValue:"",videoTypeOf:["search","multi"],accessKey:"575e447d3c3e2de9aa3104d937ebb4f1",lang:"en-US",page:1,include_adult:!1,searchedResult:[],loader:!0}},mounted:function(){var e;null!==(e=this.$route.query)&&void 0!==e&&e.query?this.search():this.$router.push({path:"/",replace:!0})},updated:function(){this.searchedValue!==this.$route.query.query&&this.search()},methods:{pageController:function(){this.search(!0),this.$router.push({path:"/search?query=".concat(this.searchedValue,"&page=").concat(this.page),replace:!0})},search:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.loader=!0,t.searchedResult=[],t.searchedValue=structuredClone(t.$route.query.query),e?r=t.page:(r=t.$route.query.page,t.page=Number(r)),o=[t.videoTypeOf[0],t.videoTypeOf[1],t.accessKey,t.lang,t.searchedValue,r,t.include_adult],n.next=8,t.$store.dispatch("startSearch",o);case 8:return n.next=10,t.$getSearchResult();case 10:return t.searchedResult=n.sent,t.loader=!1,n.next=14,t.$getSearchCount();case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))()}},head:function(){var e,t;return{title:(null===(e=this.$route)||void 0===e||null===(t=e.query)||void 0===t?void 0:t.query)+" - search",meta:[{hid:"description",name:"description",content:"Get all the latest streaming movies and series in theaters and online"},{hid:"keywords",name:"keywords",content:"movies, streaming, stream, tv series"}]}}}),d=(n(597),n(45)),component=Object(d.a)(h,(function(){var e,t=this,n=t._self._c;return null!==(e=t.$route.query)&&void 0!==e&&e.query?n("div",{attrs:{id:"search"}},[n(r.a,[n(c.a,{staticStyle:{margin:"0 0 25px 0"}},[n("div",{staticClass:"col-12"},[n("header",{staticClass:"header"},[t._v("\n          You searched for :\n          "),n("span",{staticStyle:{"font-style":"italic","font-weight":"600"}},[t._v(t._s(this.$route.query.query))])])]),t._v(" "),t.loader?n("div",{staticClass:"col-12",staticStyle:{height:"calc(100vh - 270px)",overflow:"hidden"}},[n("LoadingTwo")],1):t._e(),t._v(" "),t.searchedResult.length&&!t.loader?t._l(t.searchedResult,(function(e,t){return n("div",{key:t,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[n("SingleBlock",{attrs:{searched:e}})],1)})):t._e()],2),t._v(" "),t.searchedResult.length||t.loader?t._e():n("div",{staticClass:"nocontent flex_all_center"},[n("span",[t._v("Nothing matches your search!!")])]),t._v(" "),t.$getSearchCount()>1&&t.searchedResult.length?n("div",{staticClass:"pagination_container"},[n(o.a,{attrs:{color:"var(--primary-color)","total-visible":6,length:t.$getSearchCount()},on:{input:function(e){return t.pageController()}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1)],1):t._e()}),[],!1,null,"75a3ecec",null);t.default=component.exports;installComponents(component,{LoadingTwo:n(494).default,SingleBlock:n(564).default})}}]);
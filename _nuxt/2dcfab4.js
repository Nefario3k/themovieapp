(window.webpackJsonp=window.webpackJsonp||[]).push([[2,12,13,14,16],{482:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("708fb410",content,!0,{sourceMap:!1})},483:function(t,e,n){"use strict";e.a={data:function(){return{showLeftButton:!1,isDragging:!1,showRightButton:!0,startX:0,scrollLeft:0,count:0}},methods:{scrollLeftNav:function(){this.$refs.scrollContainer.scrollLeft-=360,this.updateButtonVisibility()},scrollRightNav:function(){this.$refs.scrollContainer.scrollLeft+=360,this.updateButtonVisibility()},updateButtonVisibility:function(){var t=this.$refs.scrollContainer;t&&(this.showLeftButton=t.scrollLeft>0,this.showRightButton=t.scrollLeft+t.clientWidth<t.scrollWidth)},handleMouseMove:function(t){if(this.isDragging){t.preventDefault();var e=this.$refs.scrollContainer,n=2*(t.pageX-e.offsetLeft-this.startX);this.$refs.scrollContainer.scrollLeft=this.scrollLeft-n}},handleMouseDown:function(t){this.isDragging=!0;var e=this.$refs.scrollContainer;this.startX=t.pageX-e.offsetLeft,this.scrollLeft=e.scrollLeft},handleMouseUp:function(){this.isDragging=!1}},watch:{loading:function(){var t=this;this.loading||this.$nextTick((function(){t.$refs.scrollContainer.scrollLeft=0}))}},mounted:function(){window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.updateButtonVisibility()},beforeDestroy:function(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)}}},491:function(t,e,n){"use strict";n(482)},492:function(t,e,n){var o=n(16)(!1);o.push([t.i,".loading[data-v-1eb89644]{height:100%;width:100%;min-height:300px;display:flex;justify-content:center;align-items:center}@keyframes circle-loading-1eb89644{to{transform:rotate(1turn)}}.loading span[data-v-1eb89644]{display:block;width:70px;height:70px;border-radius:50%;border:2px solid transparent;border-top:2px solid var(--loader-color);animation:circle-loading-1eb89644 1.2s ease infinite}",""]),t.exports=o},494:function(t,e,n){"use strict";n.r(e);var o={},r=(n(491),n(45)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"loading"},[t("span")])}],!1,null,"1eb89644",null);e.default=component.exports},505:function(t,e,n){"use strict";n.r(e);var o=n(169),r=(n(37),n(41),{props:{item:{type:Object}},data:function(){return{imageLink:"http://image.tmdb.org/t/p/",imgSize:"original/"}}}),l=n(45),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex_down"},[e("div",{staticClass:"relative imgContainer",class:{trending:!t.item.overview}},[e("nuxt-link",{attrs:{to:"/seasonal/".concat(t.item.id)}},[t.item.poster_path&&null!=t.item.poster_path?e(o.a,{attrs:{"lazy-src":"/images/broken-image.png",src:t.imageLink+t.imgSize+t.item.poster_path,alt:t.item.name}}):e(o.a,{attrs:{src:"/images/poster.png",alt:t.item.name}})],1),t._v(" "),e("div",{staticClass:"absolute flex_all_center video_ratings"},[t._v("\n      "+t._s(t.$refactorRatings(t.item.vote_average))+"\n    ")]),t._v(" "),t.item.overview?e("div",{staticClass:"absolute overview"},[t._v("\n      "+t._s(t.item.overview.slice(0,200))+"\n      "),t.item.overview.length>200?e("span",[t._v("...")]):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:"/seasonal/".concat(t.item.id)}},[t._v("Read more")])],1):t._e()],1),t._v(" "),e("div",{staticClass:"listingTag"},[e("nuxt-link",{attrs:{to:"/seasonal/".concat(t.item.id)}},[e("h3",[t._v(t._s(t.item.name))])]),t._v(" "),e("p",[t._v("\n      "+t._s(new Date(t.item.first_air_date).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}))+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},510:function(t,e,n){"use strict";n.r(e);var o=n(169),r=(n(41),{props:{item:{type:Object}},data:function(){return{imageLink:"http://image.tmdb.org/t/p/",imgSize:"original/"}}}),l=n(45),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex_down"},[e("div",{staticClass:"relative imgContainer",class:{trending:!t.item.overview}},[e("nuxt-link",{attrs:{to:"/movie/".concat(t.item.id)}},[t.item.poster_path&&null!=t.item.poster_path?e(o.a,{attrs:{"lazy-src":"/images/broken-image.png",src:t.imageLink+t.imgSize+t.item.poster_path,alt:t.item.original_title}}):e(o.a,{attrs:{src:"/images/poster.png",alt:t.item.original_title}})],1),t._v(" "),e("div",{staticClass:"absolute flex_all_center video_ratings"},[t._v("\n      "+t._s(t.$refactorRatings(t.item.vote_average))+"\n    ")]),t._v(" "),t.item.overview?e("div",{staticClass:"absolute overview"},[t._v("\n      "+t._s(t.item.overview.slice(0,200))+"\n      "),t.item.overview.length>200?e("span",[t._v("...")]):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:"/movie/".concat(t.item.id)}},[t._v("Read more")])],1):t._e()],1),t._v(" "),e("div",{staticClass:"listingTag"},[e("nuxt-link",{attrs:{to:"/movie/".concat(t.item.id)}},[e("h3",[t._v(t._s(t.item.original_title))])]),t._v(" "),e("p",[t._v("\n      "+t._s(new Date(t.item.release_date).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}))+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},515:function(t,e,n){"use strict";n.r(e);var o=n(169),r=(n(27),{props:{item:{type:Object},noRating:{type:Boolean,default:!1}},data:function(){return{imageLink:"http://image.tmdb.org/t/p/",imgSize:"original/"}}}),l=n(45),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex_down"},[e("div",{staticClass:"relative imgContainer",class:{trending:!t.item.overview}},[e("nuxt-link",{attrs:{to:"/persons/".concat(t.item.id)}},[t.item.profile_path&&null!=t.item.profile_path?e(o.a,{attrs:{"lazy-src":"/images/broken-image.png",src:t.imageLink+t.imgSize+t.item.profile_path,alt:t.item.original_name}}):e(o.a,{attrs:{src:"/images/poster.png",alt:t.item.original_name}})],1),t._v(" "),t.noRating?t._e():e("div",{staticClass:"absolute flex_all_center video_ratings"},[t._v("\n      "+t._s(t.$refactorRatings(t.item.popularity))+"\n    ")])],1),t._v(" "),e("div",{staticClass:"listingTag"},[e("nuxt-link",{attrs:{to:"/persons/".concat(t.item.id,"?query=").concat(t.item.original_name)}},[e("h3",[t._v(t._s(t.item.original_name))])]),t._v(" "),e("p",[t._v("\n      "+t._s(t.item.known_for_department)+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},547:function(t,e,n){"use strict";n.r(e);var o=n(207),r=n(197),l=n(127),c=n(83),d=n(627),v=n(516),m=(n(42),n(54),n(9)),_=(n(73),{mixins:[n(483).a],props:["movies","title","pagination","item","trendingParams"],data:function(){return{page:1,currentTrend:"all",currentTrendView:null,loading:!1,items:[{title:"all",type:null},{title:"movies",type:"movie"},{title:"tv shows",type:"tv"},{title:"persons",type:"persons"}]}},methods:{refactorRatings:function(t){return Math.ceil(10*t)/10},changeTrend:function(t){var e=this;return Object(m.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.currentTrend=t.title,e.currentTrendView=t.type,e.$getTrendingAll()[e.currentTrendView]){n.next=16;break}n.t0=e.currentTrendView,n.next="movie"===n.t0?6:"tv"===n.t0?9:"persons"===n.t0?12:15;break;case 6:return n.next=8,e.$store.dispatch("trendingMovies",e.trendingParams);case 8:case 11:case 14:case 15:return n.abrupt("break",16);case 9:return n.next=11,e.$store.dispatch("trendingSeries",e.trendingParams);case 12:return n.next=14,e.$store.dispatch("trendingPersons",e.trendingParams);case 16:case"end":return n.stop()}}),n)})))()},changeLoading:function(){this.loading=!this.loading}}}),h=n(45),component=Object(h.a)(_,(function(){var t=this,e=t._self._c;return e("div",["Trending"!=t.title&&"known for"!=t.title?e("div",[t.movies.length?e("div",{staticClass:"tabBarContainer"},[e("div",{staticClass:"tabHeader"},[e("div",{staticClass:"titleWrapper_cont"},[e("header",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"lineUnder"})]),t._v(" "),"Trending Movies"!==t.title?e("div",{staticClass:"pagination_container_videos"},[e(v.a,{attrs:{color:"var(--primary-color)",length:t.pagination.total_pages>15?15:t.pagination.total_pages,"total-visible":5,"aria-current":t.pagination.page},on:{input:function(e){return t.$emit("paginate",t.item)}},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1):t._e()]),t._v(" "),e("div",{staticClass:"tab_wrapper",attrs:{"data-aos":"fade-up","data-aos-duration":"500"}},[e("div",{staticClass:"d-flex justify-content-center"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"mt-3 tab__container relative"},[e("button",{staticClass:"testimonal__prev",class:{visibleButton:!t.showLeftButton},on:{click:t.scrollLeftNav}},[e("svg",{attrs:{width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7 12L2 6.5L7 1",stroke:"#000831","stroke-width":"2","stroke-linecap":"round"}})])]),t._v(" "),e("button",{staticClass:"testimonal__next",class:{visibleButton:!t.showRightButton},on:{click:t.scrollRightNav}},[e("svg",{attrs:{width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1 1L6 6.5L1 12",stroke:"#000831","stroke-width":"2","stroke-linecap":"round"}})])]),t._v(" "),e("div",{ref:"scrollContainer",staticClass:"tab__content scrollSnap01",class:{isDragging:t.isDragging},on:{scroll:t.updateButtonVisibility,mousedown:t.handleMouseDown}},t._l(t.movies,(function(t,n){return e("div",{key:n,staticClass:"listingTab personTab"},[e("ContentMovie",{attrs:{item:t}})],1)})),0)])]),t._v(" "),t.loading?e("LoadingTwo"):t._e()],1)]):t._e()]):t._e(),t._v(" "),"Trending"==t.title?e("div",[t.movies.length?e("div",{staticClass:"tabBarContainer"},[e("div",{staticClass:"tabHeader"},[e("div",{staticClass:"titleWrapper_cont"},[e("header",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"lineUnder"})]),t._v(" "),t.$route.path.includes("/movie")?t._e():e("div",{staticStyle:{"margin-right":"12px"}},[e(d.a,{attrs:{"nudge-bottom":5,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"Btns capital"},"v-btn",l,!1),r),[e("span",{staticStyle:{"text-transform":"capitalize"}},[t._v(t._s(t.currentTrend))]),t._v(" "),e("svg",{attrs:{height:"20",viewBox:"0 0 1792 1792",width:"20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"}})])])]}}],null,!1,3432883982)},[t._v(" "),e(r.a,{staticClass:"py-0"},t._l(t.items,(function(n,o){return e(l.a,{key:o,staticClass:"itemsListing capital",class:{active:n.title==t.currentTrend},on:{click:function(e){return t.changeTrend(n)}}},[e(c.c,{staticClass:"itemsList"},[t._v(t._s(n.title))])],1)})),1)],1)],1)]),t._v(" "),e("div",{staticClass:"tab_wrapper",attrs:{"data-aos":"fade-up","data-aos-duration":"500"}},[t.currentTrend==t.items[0].title?[e("div",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"mt-3 tab__container relative"},[e("button",{staticClass:"testimonal__prev",class:{visibleButton:!t.showLeftButton},on:{click:t.scrollLeftNav}},[e("svg",{attrs:{width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7 12L2 6.5L7 1",stroke:"#000831","stroke-width":"2","stroke-linecap":"round"}})])]),t._v(" "),e("button",{staticClass:"testimonal__next",class:{visibleButton:!t.showRightButton},on:{click:t.scrollRightNav}},[e("svg",{attrs:{width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1 1L6 6.5L1 12",stroke:"#000831","stroke-width":"2","stroke-linecap":"round"}})])]),t._v(" "),e("div",{ref:"scrollContainer",staticClass:"tab__content scrollSnap01",class:{isDragging:t.isDragging},on:{scroll:t.updateButtonVisibility,mousedown:t.handleMouseDown}},t._l(t.movies,(function(t,n){return e("div",{key:n,staticClass:"listingTab personTab"},["movie"==t.media_type?[e("ContentMovie",{attrs:{item:t}})]:"tv"==t.media_type?[e("ContentTv",{attrs:{item:t}})]:[e("ContentPerson",{attrs:{item:t}})]],2)})),0)])])]:[t.$getTrendingAll()[t.currentTrendView]?e("div",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"mt-3 tab__container relative"},[e("button",{staticClass:"testimonal__prev",class:{visibleButton:!t.showLeftButton},on:{click:t.scrollLeftNav}},[e("svg",{attrs:{width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7 12L2 6.5L7 1",stroke:"#000831","stroke-width":"2","stroke-linecap":"round"}})])]),t._v(" "),e("button",{staticClass:"testimonal__next",class:{visibleButton:!t.showRightButton},on:{click:t.scrollRightNav}},[e("svg",{attrs:{width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1 1L6 6.5L1 12",stroke:"#000831","stroke-width":"2","stroke-linecap":"round"}})])]),t._v(" "),e("div",{ref:"scrollContainer",staticClass:"tab__content scrollSnap01",class:{isDragging:t.isDragging},on:{scroll:t.updateButtonVisibility,mousedown:t.handleMouseDown}},t._l(t.$getTrendingAll()[t.currentTrendView],(function(t,n){return e("div",{key:n,staticClass:"listingTab personTab"},["movie"==t.media_type?[e("ContentMovie",{attrs:{item:t}})]:"tv"==t.media_type?[e("ContentTv",{attrs:{item:t}})]:[e("ContentPerson",{attrs:{item:t}})]],2)})),0)])]):e("LoadingTwo")]],2)]):t._e()]):t._e(),t._v(" "),"known for"==t.title?e("div",[t.movies.length?e("div",{staticClass:"tabBarContainer"},[e("div",{staticClass:"tab_wrapper",attrs:{"data-aos":"fade-up","data-aos-duration":"500"}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"mt-3 tab__container relative",staticStyle:{padding:"0"}},[e("div",{ref:"scrollContainer",staticClass:"tab__content scrollSnap01",class:{isDragging:t.isDragging},on:{scroll:t.updateButtonVisibility,mousedown:t.handleMouseDown}},t._l(t.movies[0].known_for,(function(n,o){return e("div",{key:o,staticClass:"listingTab noEffect"},["movie"==n.media_type?[e("ContentMovie",{attrs:{item:n}})]:"tv"==n.media_type?[e("ContentTv",{attrs:{item:n}})]:t._e()],2)})),0)])])])]):t._e()]):t._e()])}),[],!1,null,"4e3e5416",null);e.default=component.exports;installComponents(component,{ContentMovie:n(510).default,LoadingTwo:n(494).default,ContentTv:n(505).default,ContentPerson:n(515).default})}}]);
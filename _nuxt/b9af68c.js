(window.webpackJsonp=window.webpackJsonp||[]).push([[39,14,15,16,26],{479:function(t,e,n){var content=n(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("41144467",content,!0,{sourceMap:!1})},481:function(t,e,n){var content=n(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("3acb0736",content,!0,{sourceMap:!1})},482:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("708fb410",content,!0,{sourceMap:!1})},483:function(t,e,n){"use strict";e.a={data:function(){return{showLeftButton:!1,isDragging:!1,showRightButton:!0,startX:0,scrollLeft:0,count:0}},methods:{scrollLeftNav:function(){this.$refs.scrollContainer.scrollLeft-=360,this.updateButtonVisibility()},scrollRightNav:function(){this.$refs.scrollContainer.scrollLeft+=360,this.updateButtonVisibility()},updateButtonVisibility:function(){var t=this.$refs.scrollContainer;t&&(this.showLeftButton=t.scrollLeft>0,this.showRightButton=t.scrollLeft+t.clientWidth<t.scrollWidth)},handleMouseMove:function(t){if(this.isDragging){t.preventDefault();var e=this.$refs.scrollContainer,n=2*(t.pageX-e.offsetLeft-this.startX);this.$refs.scrollContainer.scrollLeft=this.scrollLeft-n}},handleMouseDown:function(t){this.isDragging=!0;var e=this.$refs.scrollContainer;this.startX=t.pageX-e.offsetLeft,this.scrollLeft=e.scrollLeft},handleMouseUp:function(){this.isDragging=!1}},watch:{loading:function(){var t=this;this.loading||this.$nextTick((function(){t.$refs.scrollContainer.scrollLeft=0}))}},mounted:function(){window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.updateButtonVisibility()},beforeDestroy:function(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)}}},484:function(t,e,n){"use strict";n(479)},485:function(t,e,n){var o=n(16)(!1);o.push([t.i,".loading[data-v-11bbab63]{height:100vh;width:100%;display:flex;justify-content:center;align-items:center}@keyframes circle-loading-11bbab63{to{transform:rotate(1turn)}}.loading span[data-v-11bbab63]{display:block;width:70px;height:70px;border-radius:50%;border:2px solid transparent;border-top:2px solid var(--loader-color);animation:circle-loading-11bbab63 1.2s ease infinite}",""]),t.exports=o},486:function(t,e,n){"use strict";n.r(e);var o={},r=(n(484),n(45)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"loading"},[t("span")])}],!1,null,"11bbab63",null);e.default=component.exports},489:function(t,e,n){"use strict";n(481)},490:function(t,e,n){var o=n(16)(!1);o.push([t.i,".img_header[data-v-20d12a25]{display:flex;align-items:center;justify-content:center;padding:0 21px 13px}.img_header p[data-v-20d12a25]{padding:0 30px 5px;border-bottom:2px solid #fff;color:#fff;font-weight:700;font-size:1.8rem;margin:0}.closeNavBtn[data-v-20d12a25]{position:absolute;display:block;top:15%;right:3%;padding:0;cursor:pointer}.closeNavBtn svg path[data-v-20d12a25]{stroke:var(--primary-color)}.closeNavBtn svg:hover circle[data-v-20d12a25]{fill:var(--primary-color);transition:all .2s linear}.closeNavBtn svg:hover path[data-v-20d12a25]{stroke:#fff!important;transition:all .2s linear}.modal_content[data-v-20d12a25]{padding-top:0;margin:-20px 0 0;padding-bottom:0}.modal_content .img_large_container[data-v-20d12a25]{height:90vh;background-size:contain;background-position:50%;background-repeat:no-repeat;width:65%;margin:auto;opacity:1;transition:all .5s linear;padding-bottom:0}iframe[data-v-20d12a25]{width:100%;height:100%}[data-v-20d12a25]::-webkit-scrollbar{width:10px;height:10px}[data-v-20d12a25]::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}[data-v-20d12a25]::-webkit-scrollbar-thumb{background:var(--secondary-color);border-radius:10px}[data-v-20d12a25]::-webkit-scrollbar-thumb:hover{background:var(--primary-color);-webkit-transition:all .5s linear;transition:all .5s linear}",""]),t.exports=o},491:function(t,e,n){"use strict";n(482)},492:function(t,e,n){var o=n(16)(!1);o.push([t.i,".loading[data-v-1eb89644]{height:100%;width:100%;min-height:300px;display:flex;justify-content:center;align-items:center}@keyframes circle-loading-1eb89644{to{transform:rotate(1turn)}}.loading span[data-v-1eb89644]{display:block;width:70px;height:70px;border-radius:50%;border:2px solid transparent;border-top:2px solid var(--loader-color);animation:circle-loading-1eb89644 1.2s ease infinite}",""]),t.exports=o},493:function(t,e,n){"use strict";n.r(e);var o=n(517),r=n(477),l=n(626),c=n(625),d=(n(37),{data:function(){return{showModal:!1,videoData:{}}},mounted:function(){},methods:{showImgModal:function(data){this.showModal=!0,this.videoData=data},closeModal:function(){this.showModal=!1,this.videoData={}}}}),v=(n(489),n(45)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"imgViewDilogue",attrs:{fullscreen:!0,origin:"center center",width:"460"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[e(o.a,{staticClass:"imgCard",staticStyle:{"box-shadow":"none",margin:"0","border-radius":"0"}},[e(c.a,{staticStyle:{margin:"0 !important"}},[e("div",{staticClass:"col-12 relative"},[e("div",{staticClass:"img_header"},[e("p",{staticClass:"goldText"},[t._v(t._s(t.videoData.name))])]),t._v(" "),e("div",{staticClass:"closeNavBtn"},[e("svg",{attrs:{width:"35",height:"35",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.closeModal()}}},[e("circle",{attrs:{cx:"25",cy:"25",r:"25",fill:"white"}}),t._v(" "),e("path",{attrs:{d:"M32.75 16.2498L16.25 32.7498",stroke:"#BF9001","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M16.25 16.2498L32.75 32.7498",stroke:"#BF9001","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),e(c.a,{staticClass:"modal_content col-12"},[e(r.a,{staticClass:"img_large_container"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(t.videoData.key,"?rel=0&showinfo=0&autohide=1&modestbranding=1"),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)],1)],1)],1)}),[],!1,null,"20d12a25",null);e.default=component.exports},494:function(t,e,n){"use strict";n.r(e);var o={},r=(n(491),n(45)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"loading"},[t("span")])}],!1,null,"1eb89644",null);e.default=component.exports},505:function(t,e,n){"use strict";n.r(e);var o=n(169),r=(n(37),n(41),{props:{item:{type:Object}},data:function(){return{imageLink:"http://image.tmdb.org/t/p/",imgSize:"original/"}}}),l=n(45),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex_down"},[e("div",{staticClass:"relative imgContainer",class:{trending:!t.item.overview}},[e("nuxt-link",{attrs:{to:"/seasonal/".concat(t.item.id)}},[t.item.poster_path&&null!=t.item.poster_path?e(o.a,{attrs:{"lazy-src":"/images/broken-image.png",src:t.imageLink+t.imgSize+t.item.poster_path,alt:t.item.name}}):e(o.a,{attrs:{src:"/images/poster.png",alt:t.item.name}})],1),t._v(" "),e("div",{staticClass:"absolute flex_all_center video_ratings"},[t._v("\n      "+t._s(t.$refactorRatings(t.item.vote_average))+"\n    ")]),t._v(" "),t.item.overview?e("div",{staticClass:"absolute overview"},[t._v("\n      "+t._s(t.item.overview.slice(0,200))+"\n      "),t.item.overview.length>200?e("span",[t._v("...")]):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:"/seasonal/".concat(t.item.id)}},[t._v("Read more")])],1):t._e()],1),t._v(" "),e("div",{staticClass:"listingTag"},[e("nuxt-link",{attrs:{to:"/seasonal/".concat(t.item.id)}},[e("h3",[t._v(t._s(t.item.name))])]),t._v(" "),e("p",[t._v("\n      "+t._s(new Date(t.item.first_air_date).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}))+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},523:function(t,e,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("3abf16dc",content,!0,{sourceMap:!1})},537:function(t,e,n){"use strict";n(523)},538:function(t,e,n){var o=n(16)(!1);o.push([t.i,".contentInfoWrapper[data-v-0befd786]{display:flex;align-items:center;height:100%}.contentInfoWrapper .contentRow .content_container[data-v-0befd786]{align-items:center}.contentInfoWrapper .contentRow .content_container .hero_content[data-v-0befd786]{display:flex;flex-direction:column;grid-gap:20px;gap:20px}.contentInfoWrapper .contentRow .content_container .hero_content .content_columns[data-v-0befd786]{padding-top:0}.contentInfoWrapper .contentRow .content_container .hero_content .content_columns header.content_title[data-v-0befd786]{font-size:5.5rem;text-shadow:#222;font-weight:600;color:#fff;line-height:normal}.contentInfoWrapper .contentRow .content_container .hero_content .content_columns .ratings_wrapper span[data-v-0befd786]{color:#fff;font-size:1.6rem}.contentInfoWrapper .contentRow .content_container .hero_content .content_columns .ratings_wrapper span.bold[data-v-0befd786]{font-weight:600;font-size:1.9rem}.contentInfoWrapper .contentRow .content_container .hero_content .content_columns .ratings_wrapper span.rating_percent[data-v-0befd786]{font-weight:600;font-size:1.6rem;position:relative;top:1px}.contentInfoWrapper .contentRow .content_container .hero_content .Btn[data-v-0befd786]{background-color:var(--btn-bg-color);width:120px;height:35px;border-radius:4px}.contentInfoWrapper .contentRow .content_container .hero_content .Btn.trailer[data-v-0befd786]{margin-left:12px}.contentInfoWrapper .contentRow .content_container .hero_content .Btn span[data-v-0befd786]{color:#fff;font-size:1.6rem;font-weight:400;text-transform:none}.contentInfoWrapper .contentRow .poster img[data-v-0befd786]{width:100%;-o-object-fit:contain;object-fit:contain;filter:drop-shadow(2px 4px 6px #222)}",""]),t.exports=o},554:function(t,e,n){var content=n(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("317335da",content,!0,{sourceMap:!1})},565:function(t,e,n){"use strict";n.r(e);var o=n(207),r=n(528),l=n(529),c=n(477),d=n(195),v=n(625),f=(n(37),n(41),n(4),n(10),{props:["sliderContent","title"],data:function(){return{content:"",cycle:!0,imageLink:"http://image.tmdb.org/t/p/",imgSize:"original/"}},watch:{sliderContent:function(){this.sliderContent.forEach((function(element){element.vote_average>=7.5?Object.assign(element,{color:"#43bd84"}):element.vote_average>=5.5&&element.vote_average<=7.4?Object.assign(element,{color:"#e6e36b"}):Object.assign(element,{color:"#bf1e22"})}))}},methods:{showModal:function(data){this.$refs.videoModal.showImgModal(data)}}}),h=(n(537),n(45)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,{attrs:{"hide-delimiter-background":"","delimiter-icon":"mdi-minus",interval:6e3,cycle:"cycle","show-arrows-on-hover":!0}},t._l(t.$getSeasonalTrailers(),(function(n,r){return e(l.a,{key:r,attrs:{gradient:"rgba(31.5, 31.5, 31.5, 0.5), rgba(31.5, 31.5, 31.5, 0.84)",src:t.imageLink+t.imgSize+n.backdrop_path}},[e(c.a,{staticClass:"contentInfoWrapper"},[e(v.a,{staticClass:"contentRow"},[e("div",{staticClass:"col-3 poster flex_all_center"},[n.poster_path&&null!=n.poster_path?e("img",{attrs:{src:t.imageLink+t.imgSize+n.poster_path,alt:n.name}}):e("img",{attrs:{src:"/images/poster.png",alt:n.name}})]),t._v(" "),e(v.a,{staticClass:"col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 content_container"},[e("div",{staticClass:"hero_content"},[e("div",{staticClass:"content_columns content_header"},[e("header",{staticClass:"content_title"},[t._v("\n                  "+t._s(n.name)+"\n                ")])]),t._v(" "),e("div",{staticClass:"content_columns content_ratings"},[e("div",{staticClass:"ratings_wrapper"},[e("span",{staticClass:"bold"},[t._v("Ratings: ")]),t._v(" "),e(d.a,{attrs:{color:n.color,width:4,size:50,rotate:-90,value:10*n.vote_average}},[e("span",{staticClass:"rating_percent"},[t._v(t._s(10*n.vote_average)),e("sup",[t._v("%")])])])],1)]),t._v(" "),n.overview?e("div",{staticClass:"content_columns content_ratings"},[e("div",{staticClass:"ratings_wrapper"},[e("span",{staticClass:"bold"},[t._v("Overview: ")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(n.overview.slice(0,250)))]),n.overview.length>250?e("span",[t._v("...\n                    "),e("nuxt-link",{staticStyle:{"text-decoration":"none",color:"#fff"},attrs:{to:"/seasonal/".concat(n.id)}},[t._v("Read more")])],1):t._e()])]):t._e(),t._v(" "),e("div",[e("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/seasonal/".concat(n.id)}},[e(o.a,{staticClass:"Btn"},[e("span",[t._v("View Info")])])],1),t._v(" "),n.video_link?e(o.a,{staticClass:"Btn trailer",on:{click:function(e){return t.showModal(n.video_link)}}},[e("span",[t._v("Play Trailer")])]):t._e()],1)])])],1)],1)],1)})),1),t._v(" "),e("VideoDialogue",{ref:"videoModal"})],1)}),[],!1,null,"0befd786",null);e.default=component.exports;installComponents(component,{VideoDialogue:n(493).default})},566:function(t,e,n){"use strict";n.r(e);var o=n(516),r={mixins:[n(483).a],props:["movies","title","pagination","item","trendingParams"],data:function(){return{page:1,loading:!1}},methods:{refactorRatings:function(t){return Math.ceil(10*t)/10},changeLoading:function(){this.loading=!this.loading}}},l=n(45),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.movies.length?e("div",{staticClass:"tabBarContainer"},[e("div",{staticClass:"tabHeader"},[e("div",{staticClass:"titleWrapper_cont"},[e("header",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"lineUnder"})]),t._v(" "),"Trending"!=t.title?e("div",{staticClass:"pagination_container_videos"},[e(o.a,{attrs:{color:"var(--primary-color)",length:t.pagination.total_pages>15?15:t.pagination.total_pages,"total-visible":5,"aria-current":t.pagination.page},on:{input:function(e){return t.$emit("paginate",t.item)}},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1):t._e()]),t._v(" "),e("div",{staticClass:"tab_wrapper",attrs:{"data-aos":"fade-up","data-aos-duration":"500"}},[e("div",{staticClass:"d-flex justify-content-center"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"mt-3 tab__container relative"},[e("button",{staticClass:"testimonal__prev",class:{visibleButton:!t.showLeftButton},on:{click:t.scrollLeftNav}},[e("svg",{attrs:{width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7 12L2 6.5L7 1",stroke:"#000831","stroke-width":"2","stroke-linecap":"round"}})])]),t._v(" "),e("button",{staticClass:"testimonal__next",class:{visibleButton:!t.showRightButton},on:{click:t.scrollRightNav}},[e("svg",{attrs:{width:"8",height:"13",viewBox:"0 0 8 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1 1L6 6.5L1 12",stroke:"#000831","stroke-width":"2","stroke-linecap":"round"}})])]),t._v(" "),e("div",{ref:"scrollContainer",staticClass:"tab__content scrollSnap01",class:{isDragging:t.isDragging},on:{scroll:t.updateButtonVisibility,mousedown:t.handleMouseDown}},t._l(t.movies,(function(t,n){return e("div",{key:n,staticClass:"listingTab personTab"},[e("ContentTv",{attrs:{item:t}})],1)})),0)])]),t._v(" "),t.loading?e("LoadingTwo"):t._e()],1)]):t._e()])}),[],!1,null,"f9afb352",null);e.default=component.exports;installComponents(component,{ContentTv:n(505).default,LoadingTwo:n(494).default})},599:function(t,e,n){"use strict";n(554)},600:function(t,e,n){var o=n(16)(!1);o.push([t.i,"#heroSection[data-v-8e8b57d6]{margin-top:-60px}",""]),t.exports=o},632:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(73),n(518),n(12),n(4),n(513),{data:function(){return{videoContent:[{title:"Top Rated",movies:[],pagination:{page:1,total_pages:1}},{title:"What's Popular",movies:[],pagination:{page:1,total_pages:1}},{title:"On The Air",movies:[],pagination:{page:1,total_pages:1}},{title:"Trending",movies:[],pagination:{page:1,total_pages:1}}],requetParams:{media:"tv",key:"575e447d3c3e2de9aa3104d937ebb4f1",lang:"en-US",page:1},trendingParams:{media:"trending",key:"575e447d3c3e2de9aa3104d937ebb4f1",format:"week",type:"tv"}}},mounted:function(){this.getTopRatedSeries(),this.getPopularSeries(),this.getOnAirSeries(),this.getTrending()},methods:{getTopRatedSeries:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,o=structuredClone(e.requetParams),t){n.next=16;break}if(Object.keys(e.$getTopRatedSeries()).length){n.next=11;break}return n.next=6,e.$store.dispatch("topRatedSeries",o);case 6:e.videoContent[0].movies=e.$getTopRatedSeries().results,e.videoContent[0].pagination.page=e.$getTopRatedSeries().page,e.videoContent[0].pagination.total_pages=e.$getTopRatedSeries().total_pages,n.next=14;break;case 11:e.videoContent[0].movies=e.$getTopRatedSeries().results,e.videoContent[0].pagination.page=e.$getTopRatedSeries().page,e.videoContent[0].pagination.total_pages=e.$getTopRatedSeries().total_pages;case 14:n.next=24;break;case 16:return e.$refs.videotab[0].changeLoading(),o.page=e.videoContent[0].pagination.page,n.next=20,e.$store.dispatch("topRatedSeries",o);case 20:e.videoContent[0].movies=e.$getTopRatedSeries().results,e.videoContent[0].pagination.page=e.$getTopRatedSeries().page,e.videoContent[0].pagination.total_pages=e.$getTopRatedSeries().total_pages,e.$refs.videotab[0].changeLoading();case 24:n.next=29;break;case 26:n.prev=26,n.t0=n.catch(0),console.log(n.t0);case 29:case"end":return n.stop()}}),n,null,[[0,26]])})))()},getPopularSeries:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,o=structuredClone(e.requetParams),t){n.next=16;break}if(Object.keys(e.$getPopularSeries()).length){n.next=11;break}return n.next=6,e.$store.dispatch("popularSeries",o);case 6:e.videoContent[1].movies=e.$getPopularSeries().results,e.videoContent[1].pagination.page=e.$getPopularSeries().page,e.videoContent[1].pagination.total_pages=e.$getPopularSeries().total_pages,n.next=14;break;case 11:e.videoContent[1].movies=e.$getPopularSeries().results,e.videoContent[1].pagination.page=e.$getPopularSeries().page,e.videoContent[1].pagination.total_pages=e.$getPopularSeries().total_pages;case 14:n.next=24;break;case 16:return e.$refs.videotab[1].changeLoading(),o.page=e.videoContent[1].pagination.page,n.next=20,e.$store.dispatch("popularSeries",o);case 20:e.videoContent[1].movies=e.$getPopularSeries().results,e.videoContent[1].pagination.page=e.$getPopularSeries().page,e.videoContent[1].pagination.total_pages=e.$getPopularSeries().total_pages,e.$refs.videotab[1].changeLoading();case 24:n.next=29;break;case 26:n.prev=26,n.t0=n.catch(0),console.log(n.t0);case 29:case"end":return n.stop()}}),n,null,[[0,26]])})))()},getOnAirSeries:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,o=structuredClone(e.requetParams),t){n.next=16;break}if(Object.keys(e.$getOnTheAir()).length){n.next=11;break}return n.next=6,e.$store.dispatch("onTheAir",o);case 6:e.videoContent[2].movies=e.$getOnTheAir().results,e.videoContent[2].pagination.page=e.$getOnTheAir().page,e.videoContent[2].pagination.total_pages=e.$getOnTheAir().total_pages,n.next=14;break;case 11:e.videoContent[2].movies=e.$getOnTheAir().results,e.videoContent[2].pagination.page=e.$getOnTheAir().page,e.videoContent[2].pagination.total_pages=e.$getOnTheAir().total_pages;case 14:n.next=24;break;case 16:return e.$refs.videotab[2].changeLoading(),o.page=e.videoContent[2].pagination.page,n.next=20,e.$store.dispatch("onTheAir",o);case 20:e.videoContent[2].movies=e.$getOnTheAir().results,e.videoContent[2].pagination.page=e.$getOnTheAir().page,e.videoContent[2].pagination.total_pages=e.$getOnTheAir().total_pages,e.$refs.videotab[2].changeLoading();case 24:n.next=29;break;case 26:n.prev=26,n.t0=n.catch(0),console.log(n.t0);case 29:case"end":return n.stop()}}),n,null,[[0,26]])})))()},getTrending:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.$getTrendingSeries().length){e.next=7;break}return e.next=4,t.$store.dispatch("trendingSeries",t.trendingParams);case 4:t.videoContent[3].movies=t.$getTrendingSeries(),e.next=8;break;case 7:t.videoContent[3].movies=t.$getTrendingSeries();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},paginate:function(t){switch(t){case 0:this.getTopRatedSeries(!0);break;case 1:this.getPopularSeries(!0);break;case 2:this.getOnAirSeries(!0)}}},head:function(){return{title:"Movie App - Latest Streaming Movies And series info",meta:[{hid:"description",name:"description",content:"Get all the latest streaming movies and series in theaters and online"},{hid:"keywords",name:"keywords",content:"movies, streaming, stream, tv series"}]}}}),l=(n(599),n(45)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.videoContent[0].movies.length?e("div",[e("section",{attrs:{id:"heroSection"}},[e("CarouselSeasonal",{attrs:{title:"seasonal"}})],1),t._v(" "),t._l(t.videoContent,(function(n,o){return e("SeriesVideoTab",{key:o,ref:"videotab",refInFor:!0,staticStyle:{overflow:"hidden"},attrs:{movies:n.movies,title:n.title,item:o,pagination:n.pagination,trendingParams:t.trendingParams},on:{paginate:t.paginate}})}))],2):e("div",{staticClass:"nothingLoaded"},[e("Loading")],1)}),[],!1,null,"8e8b57d6",null);e.default=component.exports;installComponents(component,{Loading:n(486).default,CarouselSeasonal:n(565).default,SeriesVideoTab:n(566).default})}}]);
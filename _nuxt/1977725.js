(window.webpackJsonp=window.webpackJsonp||[]).push([[8,26],{480:function(t,e,n){"use strict";var o=n(207);e.a=o.a},481:function(t,e,n){var content=n(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("3acb0736",content,!0,{sourceMap:!1})},489:function(t,e,n){"use strict";n(481)},490:function(t,e,n){var o=n(16)(!1);o.push([t.i,".img_header[data-v-20d12a25]{display:flex;align-items:center;justify-content:center;padding:0 21px 13px}.img_header p[data-v-20d12a25]{padding:0 30px 5px;border-bottom:2px solid #fff;color:#fff;font-weight:700;font-size:1.8rem;margin:0}.closeNavBtn[data-v-20d12a25]{position:absolute;display:block;top:15%;right:3%;padding:0;cursor:pointer}.closeNavBtn svg path[data-v-20d12a25]{stroke:var(--primary-color)}.closeNavBtn svg:hover circle[data-v-20d12a25]{fill:var(--primary-color);transition:all .2s linear}.closeNavBtn svg:hover path[data-v-20d12a25]{stroke:#fff!important;transition:all .2s linear}.modal_content[data-v-20d12a25]{padding-top:0;margin:-20px 0 0;padding-bottom:0}.modal_content .img_large_container[data-v-20d12a25]{height:90vh;background-size:contain;background-position:50%;background-repeat:no-repeat;width:65%;margin:auto;opacity:1;transition:all .5s linear;padding-bottom:0}iframe[data-v-20d12a25]{width:100%;height:100%}[data-v-20d12a25]::-webkit-scrollbar{width:10px;height:10px}[data-v-20d12a25]::-webkit-scrollbar-track{box-shadow:none;border-radius:10px}[data-v-20d12a25]::-webkit-scrollbar-thumb{background:var(--secondary-color);border-radius:10px}[data-v-20d12a25]::-webkit-scrollbar-thumb:hover{background:var(--primary-color);-webkit-transition:all .5s linear;transition:all .5s linear}",""]),t.exports=o},493:function(t,e,n){"use strict";n.r(e);var o=n(517),r=n(477),c=n(626),l=n(625),d=(n(37),{data:function(){return{showModal:!1,videoData:{}}},mounted:function(){},methods:{showImgModal:function(data){this.showModal=!0,this.videoData=data},closeModal:function(){this.showModal=!1,this.videoData={}}}}),v=(n(489),n(45)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"imgViewDilogue",attrs:{fullscreen:!0,origin:"center center",width:"460"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[e(o.a,{staticClass:"imgCard",staticStyle:{"box-shadow":"none",margin:"0","border-radius":"0"}},[e(l.a,{staticStyle:{margin:"0 !important"}},[e("div",{staticClass:"col-12 relative"},[e("div",{staticClass:"img_header"},[e("p",{staticClass:"goldText"},[t._v(t._s(t.videoData.name))])]),t._v(" "),e("div",{staticClass:"closeNavBtn"},[e("svg",{attrs:{width:"35",height:"35",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.closeModal()}}},[e("circle",{attrs:{cx:"25",cy:"25",r:"25",fill:"white"}}),t._v(" "),e("path",{attrs:{d:"M32.75 16.2498L16.25 32.7498",stroke:"#BF9001","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M16.25 16.2498L32.75 32.7498",stroke:"#BF9001","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),e(l.a,{staticClass:"modal_content col-12"},[e(r.a,{staticClass:"img_large_container"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(t.videoData.key,"?rel=0&showinfo=0&autohide=1&modestbranding=1"),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)],1)],1)],1)}),[],!1,null,"20d12a25",null);e.default=component.exports},495:function(t,e,n){"use strict";n(12),n(13),n(15),n(19),n(10),n(20);var o=n(2),r=(n(27),n(133),n(4),n(214),n(496),n(208)),c=n(480),l=n(132),d=n(135);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-window",directives:{Touch:r.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return h(h({},d.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var o,r,d,v=this,h={click:function(t){t.stopPropagation(),v.changedByDelimiters=!0,n()}},w={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},f=null!==(d=null===(r=(o=this.$scopedSlots)[t])||void 0===r?void 0:r.call(o,{on:h,attrs:w}))&&void 0!==d?d:[this.$createElement(c.a,{props:{icon:!0},attrs:w,on:h},[this.$createElement(l.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},f)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var o=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&o&&"string"==typeof o){var r=this.genIcon("next",o,this.next);r&&t.push(r)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,o=n-1;return n<=2?t<e:t===o&&0===e||(0!==t||e!==o)&&t<e}},render:function(t){var e=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:n})}return t("div",data,[this.genContainer()])}})},496:function(t,e,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0d135400",content,!0,{sourceMap:!1})},497:function(t,e,n){var o=n(16)(!1);o.push([t.i,".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}",""]),t.exports=o},507:function(t,e,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2d62e390",content,!0,{sourceMap:!1})},508:function(t,e,n){var o=n(16)(!1);o.push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=o},527:function(t,e,n){var content=n(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("146110fe",content,!0,{sourceMap:!1})},528:function(t,e,n){"use strict";n(12),n(13),n(15),n(4),n(19),n(10),n(20);var o=n(2),r=(n(26),n(61),n(507),n(495)),c=n(480),l=n(132),d=n(487),v=n(135),h=v.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return v.a.options.computed.classes.call(this)}},methods:{genData:v.a.options.methods.genData}}),w=n(0),f=n(7);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=r.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return _(_({},r.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(f.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:r.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var o=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)},key:i},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);n.push(o)}return this.$createElement(h,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=r.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(w.g)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},529:function(t,e,n){"use strict";n(12),n(13),n(15),n(4),n(19),n(10),n(20);var o=n(2),r=n(137),c=n(136),l=n(208),d=n(0),v=n(8),h=Object(v.a)(r.a,Object(c.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(d.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(d.g)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),w=n(169),f=n(84);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(v.a)(h,f.a);e.a=y.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(w.a,{staticClass:"v-carousel__item",props:_(_({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(d.m)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},545:function(t,e,n){"use strict";n(527)},546:function(t,e,n){var o=n(16)(!1);o.push([t.i,".contentInfoWrapper[data-v-c2a3a2b4]{display:flex;align-items:center;height:100%}.contentInfoWrapper .contentRow .content_container[data-v-c2a3a2b4]{align-items:center}.contentInfoWrapper .contentRow .content_container .hero_content[data-v-c2a3a2b4]{display:flex;flex-direction:column;grid-gap:20px;gap:20px}.contentInfoWrapper .contentRow .content_container .hero_content .content_columns[data-v-c2a3a2b4]{padding-top:0}.contentInfoWrapper .contentRow .content_container .hero_content .content_columns header.content_title[data-v-c2a3a2b4]{font-size:5.5rem;text-shadow:#222;font-weight:600;color:#fff;line-height:normal}.contentInfoWrapper .contentRow .content_container .hero_content .content_columns .ratings_wrapper span[data-v-c2a3a2b4]{color:#fff;font-size:1.6rem}.contentInfoWrapper .contentRow .content_container .hero_content .content_columns .ratings_wrapper span.bold[data-v-c2a3a2b4]{font-weight:600;font-size:1.9rem}.contentInfoWrapper .contentRow .content_container .hero_content .content_columns .ratings_wrapper span.rating_percent[data-v-c2a3a2b4]{font-weight:600;font-size:1.6rem;position:relative;top:1px}.contentInfoWrapper .contentRow .content_container .hero_content .Btn[data-v-c2a3a2b4]{background-color:var(--btn-bg-color);width:120px;height:35px;border-radius:4px}.contentInfoWrapper .contentRow .content_container .hero_content .Btn.trailer[data-v-c2a3a2b4]{margin-left:12px}.contentInfoWrapper .contentRow .content_container .hero_content .Btn span[data-v-c2a3a2b4]{color:#fff;font-size:1.6rem;font-weight:400;text-transform:none}.contentInfoWrapper .contentRow .poster img[data-v-c2a3a2b4]{width:100%;-o-object-fit:contain;object-fit:contain;filter:drop-shadow(2px 4px 6px #222)}",""]),t.exports=o},572:function(t,e,n){"use strict";n.r(e);var o=n(207),r=n(528),c=n(529),l=n(477),d=n(195),v=n(625),h=(n(41),n(37),n(4),n(10),{props:["sliderContent","title"],data:function(){return{content:"",cycle:!0,imageLink:"http://image.tmdb.org/t/p/",imgSize:"original/"}},watch:{sliderContent:function(){this.sliderContent.forEach((function(element){element.vote_average>=7.5?Object.assign(element,{color:"#43bd84"}):element.vote_average>=5.5&&element.vote_average<=7.4?Object.assign(element,{color:"#e6e36b"}):Object.assign(element,{color:"#bf1e22"})}))}},methods:{showModal:function(data){this.$refs.videoModal.showImgModal(data)}}}),w=(n(545),n(45)),component=Object(w.a)(h,(function(){var t=this,e=t._self._c;return e("div",["seasonal"!=t.title?e(r.a,{staticClass:"heroCarousel",attrs:{"hide-delimiter-background":"","delimiter-icon":"mdi-minus",interval:6e3,cycle:"cycle","show-arrows-on-hover":!0}},t._l(t.$getTrailers(),(function(n,r){return e(c.a,{key:r,attrs:{gradient:"rgba(31.5, 31.5, 31.5, 0.5), rgba(31.5, 31.5, 31.5, 0.84)",src:t.imageLink+t.imgSize+n.backdrop_path}},[e(l.a,{staticClass:"contentInfoWrapper"},[e(v.a,{staticClass:"contentRow"},[e("div",{staticClass:"col-3 poster flex_all_center"},[n.poster_path&&null!=n.poster_path?e("img",{attrs:{src:t.imageLink+t.imgSize+n.poster_path,alt:n.original_title}}):e("img",{attrs:{src:"/images/poster.png",alt:n.original_title}})]),t._v(" "),e(v.a,{staticClass:"col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 content_container"},[e("div",{staticClass:"hero_content"},[e("div",{staticClass:"content_columns content_header"},[e("header",{staticClass:"content_title"},[t._v("\n                  "+t._s(n.original_title)+"\n                ")])]),t._v(" "),e("div",{staticClass:"content_columns content_ratings"},[e("div",{staticClass:"ratings_wrapper"},[e("span",{staticClass:"bold"},[t._v("Ratings: ")]),t._v(" "),e(d.a,{attrs:{color:n.color,width:4,size:50,rotate:-90,value:10*n.vote_average}},[e("span",{staticClass:"rating_percent"},[t._v(t._s(10*n.vote_average)),e("sup",[t._v("%")])])])],1)]),t._v(" "),n.overview?e("div",{staticClass:"content_columns content_ratings"},[e("div",{staticClass:"ratings_wrapper"},[e("span",{staticClass:"bold"},[t._v("Overview: ")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(n.overview.slice(0,250)))]),n.overview.length>250?e("span",[t._v("...\n                    "),e("nuxt-link",{staticStyle:{"text-decoration":"none",color:"#fff"},attrs:{to:"/movie/".concat(n.id)}},[t._v("Read more")])],1):t._e()])]):t._e(),t._v(" "),e("div",[e("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/movie/".concat(n.id)}},[e(o.a,{staticClass:"Btn"},[e("span",[t._v("View Info")])])],1),t._v(" "),n.video_link?e(o.a,{staticClass:"Btn trailer",on:{click:function(e){return t.showModal(n.video_link)}}},[e("span",[t._v("Play Trailer")])]):t._e()],1)])])],1)],1)],1)})),1):e(r.a,{attrs:{"hide-delimiter-background":"","delimiter-icon":"mdi-minus",interval:6e3,cycle:"cycle","show-arrows-on-hover":!0}},t._l(t.sliderContent,(function(n,r){return e(c.a,{key:r,attrs:{gradient:"rgba(31.5, 31.5, 31.5, 0.5), rgba(31.5, 31.5, 31.5, 0.84)",src:t.imageLink+t.imgSize+n.backdrop_path}},[e(l.a,{staticClass:"contentInfoWrapper"},[e(v.a,{staticClass:"contentRow"},[e("div",{staticClass:"col-3 poster"},[n.poster_path&&null!=n.poster_path?e("img",{attrs:{src:t.imageLink+t.imgSize+n.poster_path,alt:n.name}}):e("img",{attrs:{src:"/images/poster.png",alt:n.name}})]),t._v(" "),e(v.a,{staticClass:"col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 content_container"},[e("div",{staticClass:"hero_content"},[e("div",{staticClass:"content_columns content_header"},[e("header",{staticClass:"content_title"},[t._v("\n                  "+t._s(n.name)+"\n                ")])]),t._v(" "),e("div",{staticClass:"content_columns content_ratings"},[e("div",{staticClass:"ratings_wrapper"},[e("span",{staticClass:"bold"},[t._v("Ratings: ")]),t._v(" "),e(d.a,{attrs:{color:n.color,width:4,size:50,rotate:-90,value:10*n.vote_average}},[e("span",{staticClass:"rating_percent"},[t._v(t._s(10*n.vote_average)),e("sup",[t._v("%")])])])],1)]),t._v(" "),n.overview?e("div",{staticClass:"content_columns content_ratings"},[e("div",{staticClass:"ratings_wrapper"},[e("span",{staticClass:"bold"},[t._v("Overview: ")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(n.overview.slice(0,250)))]),n.overview.length>250?e("span",[t._v("...\n                    "),e("nuxt-link",{staticStyle:{"text-decoration":"none",color:"#fff"},attrs:{to:"/seasonal/".concat(n.id)}},[t._v("Read more")])],1):t._e()])]):t._e(),t._v(" "),e("div",[e("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/seasonal/".concat(n.id)}},[e(o.a,{staticClass:"Btn"},[e("span",[t._v("View Info")])])],1),t._v(" "),n.video_link?e(o.a,{staticClass:"Btn trailer",on:{click:function(e){return t.showModal(n.video_link)}}},[e("span",[t._v("Play Trailer")])]):t._e()],1)])])],1)],1)],1)})),1),t._v(" "),e("VideoDialogue",{ref:"videoModal"})],1)}),[],!1,null,"c2a3a2b4",null);e.default=component.exports;installComponents(component,{VideoDialogue:n(493).default})}}]);
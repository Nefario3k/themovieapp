(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{510:function(t,e,n){"use strict";n.r(e);var r=n(169),o=(n(41),{props:{item:{type:Object}},data:function(){return{imageLink:"http://image.tmdb.org/t/p/",imgSize:"original/"}}}),l=n(45),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex_down"},[e("div",{staticClass:"relative imgContainer",class:{trending:!t.item.overview}},[e("nuxt-link",{attrs:{to:"/movie/".concat(t.item.id)}},[t.item.poster_path&&null!=t.item.poster_path?e(r.a,{attrs:{"lazy-src":"/images/broken-image.png",src:t.imageLink+t.imgSize+t.item.poster_path,alt:t.item.original_title}}):e(r.a,{attrs:{src:"/images/poster.png",alt:t.item.original_title}})],1),t._v(" "),e("div",{staticClass:"absolute flex_all_center video_ratings"},[t._v("\n      "+t._s(t.$refactorRatings(t.item.vote_average))+"\n    ")]),t._v(" "),t.item.overview?e("div",{staticClass:"absolute overview"},[t._v("\n      "+t._s(t.item.overview.slice(0,200))+"\n      "),t.item.overview.length>200?e("span",[t._v("...")]):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:"/movie/".concat(t.item.id)}},[t._v("Read more")])],1):t._e()],1),t._v(" "),e("div",{staticClass:"listingTag"},[e("nuxt-link",{attrs:{to:"/movie/".concat(t.item.id)}},[e("h3",[t._v(t._s(t.item.original_title))])]),t._v(" "),e("p",[t._v("\n      "+t._s(new Date(t.item.release_date).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}))+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
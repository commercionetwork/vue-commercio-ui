var t=function(t,e,i,n,s,o,r,a,c,d){"boolean"!=typeof r&&(c=a,a=r,r=!1);var l,u="function"==typeof i?i.options:i;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,s&&(u.functional=!0)),n&&(u._scopeId=n),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):e&&(l=r?function(){e.call(this,d(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(u.functional){var f=u.render;u.render=function(t,e){return l.call(e),f(t,e)}}else{var m=u.beforeCreate;u.beforeCreate=m?[].concat(m,l):[l]}return i},e=t({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.items.length>0?i("div",{attrs:{"data-test":"items"}},[i("ul",{staticClass:"list-group list-group-flush"},t._l(t.items,function(e,n){return i("li",{key:n,staticClass:"list-group-item"},[t._t("default",null,{data:e})],2)}),0)]):t._e(),t._v(" "),t.isFetching?i("div",{staticClass:"com-font-s14-w700",attrs:{"data-test":"loading"},domProps:{innerHTML:t._s(t.loadingMessage)}}):t._e(),t._v(" "),!t.isFetching&&t.items.length<=0?i("div",{staticClass:"py-3 com-font-s14-w700",attrs:{"data-test":"empty-list"},domProps:{innerHTML:t._s(t.emptyMessage)}}):t._e()])},staticRenderFns:[]},void 0,{name:"ListView",description:"Render a content as a list",props:{isFetching:{type:Boolean,default:!1},items:{type:Array,default:function(){return[]}},emptyMessage:{type:String,default:"Empty list",note:"The message showed if there is no item"},loadingMessage:{type:String,required:!0,note:"The message showed while loading"}},data:function(){return{bottomReached:!1}},watch:{bottomReached:function(t){t&&this.$emit("bottom-reached")}},methods:{bottomVisible:function(){if(!this.isFetching){var t=Math.ceil(window.scrollY),e=document.documentElement.clientHeight,i=document.documentElement.scrollHeight,n=e+t>=i;this.bottomReached=n||i<e}}},created:function(){window.addEventListener("scroll",this.bottomVisible)},beforeDestroy:function(){window.removeEventListener("scroll",this.bottomVisible)}},void 0,!1,void 0,void 0,void 0),i=t({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row py-1 d-flex flex-row align-items-center"},[i("div",{staticClass:"col-12 col-md-1 py-1 py-md-0"},[t._t("left-content")],2),t._v(" "),i("div",{class:t.mainContent},[t._t("main-content")],2),t._v(" "),t._m(0),t._v(" "),i("div",{class:t.rightContent},[t._t("right-content")],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 d-md-none"},[e("hr")])}]},void 0,{name:"ListViewItem",description:"display a ListView item",props:{cols:{type:String,default:"3",validator:function(t){return-1!==["3","4"].indexOf(t)}}},computed:{mainContent:function(){return"3"===this.cols?"col-12 col-md-8 py-1 py-md-0":"col-12 col-md-9 py-1 py-md-0"},rightContent:function(){return"3"===this.cols?"col-12 col-md-3 py-1 py-md-0":"col-12 col-md-2 py-1 py-md-0"}}},void 0,!1,void 0,void 0,void 0),n=t({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row my-3"},[e("div",{staticClass:"col-sm-12 offset-sm-0 col-md-10 offset-md-1 d-none d-sm-block"},[e("div",{staticClass:"btn-group d-flex"},[this._t("default")],2)]),this._v(" "),e("div",{staticClass:"col-12 d-block d-sm-none"},[e("div",{staticClass:"btn-group-vertical d-flex"},[this._t("default")],2)])])},staticRenderFns:[]},void 0,{name:"NavBar",description:"Display the navigation bar"},void 0,!1,void 0,void 0,void 0),s=t({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:function(e){return e.preventDefault(),t.onSearch(e)}}},[i("div",{staticClass:"row d-flex align-items-center"},[i("div",{staticClass:"col-2 col-sm-1 d-flex justify-content-center"},[t._t("left-content")],2),t._v(" "),i("div",{staticClass:"col-8 col-sm-10 d-flex justify-content-center"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"inputSearch",staticClass:"form-control bg-light rounded-pill com-font-s14-w300",attrs:{type:"text",placeholder:t.placeholderMessage,"aria-label":"Search","aria-describedby":"search-field"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-2 col-sm-1 d-flex justify-content-center"},[t._t("right-content")],2)])])},staticRenderFns:[]},void 0,{name:"SearchBar",description:"Display the search bar",props:{placeholderMessage:{type:String,default:"Search...",note:"The input search placeholder"}},data:function(){return{query:""}},methods:{onSearch:function(){this.$emit("search-bar",this.query)}},mounted:function(){this.$refs.inputSearch.focus()}},void 0,!1,void 0,void 0,void 0),o=Object.freeze({ListView:e,ListViewItem:i,NavBar:n,SearchBar:s});var r={install:function t(e){t.installed||(t.installed=!0,Object.keys(o).forEach(function(t){e.component(t,o[t])}))}},a=null;"undefined"!=typeof window?a=window.Vue:"undefined"!=typeof global&&(a=global.Vue),a&&a.use(r);export default r;export{e as ListView,i as ListViewItem,n as NavBar,s as SearchBar};

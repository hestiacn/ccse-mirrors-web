(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(t,e,s){},255:function(t,e,s){},259:function(t,e,s){"use strict";s.r(e);var n=s(403),a=s(401),r=s(252);var i={name:"SidebarLinks",components:{SidebarGroup:n.default,SidebarLink:a.default},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const n=e[s];if("group"===n.type&&n.children.some(e=>"page"===e.type&&Object(r.e)(t,e.path)))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(r.e)(this.$route,t.regularPath)}}},o=s(11),l=Object(o.a)(i,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(s,n){return e("li",{key:n},["group"===s.type?e("SidebarGroup",{attrs:{item:s,open:n===t.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(n)}}}):e("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:s}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=l.exports},262:function(t,e,s){"use strict";s(254)},263:function(t,e,s){},401:function(t,e,s){"use strict";s.r(e);var n=s(252);function a(t,e,s,n){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}},s)}function r(t,e,s,i,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(n.e)(i,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[a(t,s+"#"+e.slug,e.title,u),r(t,e.children,s,i,o,l+1)])}))}var i={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:i,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:c}}){const p=Object(n.e)(i,u.path),h="auto"===u.type?p||u.children.some(t=>Object(n.e)(i,u.basePath+"#"+t.slug)):p,d="external"===u.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,t("OutboundLink")])}(t,u.path,u.title||u.path):a(t,u.path,u.title||u.path,h),f=[e.frontmatter.sidebarDepth,c,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),g=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[d,r(t,u.children,u.basePath,i,f)];if((h||g)&&u.headers&&!n.d.test(u.path)){return[d,r(t,Object(n.c)(u.headers),u.path,i,f)]}return d}},o=(s(262),s(11)),l=Object(o.a)(i,void 0,void 0,!1,null,null,null);e.default=l.exports},402:function(t,e,s){"use strict";s(255)},403:function(t,e,s){"use strict";s.r(e);var n=s(252),a={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:s(256).default},beforeCreate(){this.$options.components.SidebarLinks=s(259).default},methods:{isActive:n.e}},r=(s(402),s(11)),i=Object(r.a)(a,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=i.exports},410:function(t,e,s){},412:function(t,e,s){"use strict";s(263)},416:function(t,e,s){"use strict";s.r(e);var n=s(259),a=s(413),r={name:"Sidebar",components:{SidebarLinks:n.default,NavLinks:a.default},props:["items"]},i=(s(412),s(11)),o=Object(i.a)(r,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},419:function(t,e,s){var n={"./af":264,"./af.js":264,"./ar":265,"./ar-dz":266,"./ar-dz.js":266,"./ar-kw":267,"./ar-kw.js":267,"./ar-ly":268,"./ar-ly.js":268,"./ar-ma":269,"./ar-ma.js":269,"./ar-ps":270,"./ar-ps.js":270,"./ar-sa":271,"./ar-sa.js":271,"./ar-tn":272,"./ar-tn.js":272,"./ar.js":265,"./az":273,"./az.js":273,"./be":274,"./be.js":274,"./bg":275,"./bg.js":275,"./bm":276,"./bm.js":276,"./bn":277,"./bn-bd":278,"./bn-bd.js":278,"./bn.js":277,"./bo":279,"./bo.js":279,"./br":280,"./br.js":280,"./bs":281,"./bs.js":281,"./ca":282,"./ca.js":282,"./cs":283,"./cs.js":283,"./cv":284,"./cv.js":284,"./cy":285,"./cy.js":285,"./da":286,"./da.js":286,"./de":287,"./de-at":288,"./de-at.js":288,"./de-ch":289,"./de-ch.js":289,"./de.js":287,"./dv":290,"./dv.js":290,"./el":291,"./el.js":291,"./en-au":292,"./en-au.js":292,"./en-ca":293,"./en-ca.js":293,"./en-gb":294,"./en-gb.js":294,"./en-ie":295,"./en-ie.js":295,"./en-il":296,"./en-il.js":296,"./en-in":297,"./en-in.js":297,"./en-nz":298,"./en-nz.js":298,"./en-sg":299,"./en-sg.js":299,"./eo":300,"./eo.js":300,"./es":301,"./es-do":302,"./es-do.js":302,"./es-mx":303,"./es-mx.js":303,"./es-us":304,"./es-us.js":304,"./es.js":301,"./et":305,"./et.js":305,"./eu":306,"./eu.js":306,"./fa":307,"./fa.js":307,"./fi":308,"./fi.js":308,"./fil":309,"./fil.js":309,"./fo":310,"./fo.js":310,"./fr":311,"./fr-ca":312,"./fr-ca.js":312,"./fr-ch":313,"./fr-ch.js":313,"./fr.js":311,"./fy":314,"./fy.js":314,"./ga":315,"./ga.js":315,"./gd":316,"./gd.js":316,"./gl":317,"./gl.js":317,"./gom-deva":318,"./gom-deva.js":318,"./gom-latn":319,"./gom-latn.js":319,"./gu":320,"./gu.js":320,"./he":321,"./he.js":321,"./hi":322,"./hi.js":322,"./hr":323,"./hr.js":323,"./hu":324,"./hu.js":324,"./hy-am":325,"./hy-am.js":325,"./id":326,"./id.js":326,"./is":327,"./is.js":327,"./it":328,"./it-ch":329,"./it-ch.js":329,"./it.js":328,"./ja":330,"./ja.js":330,"./jv":331,"./jv.js":331,"./ka":332,"./ka.js":332,"./kk":333,"./kk.js":333,"./km":334,"./km.js":334,"./kn":335,"./kn.js":335,"./ko":336,"./ko.js":336,"./ku":337,"./ku-kmr":338,"./ku-kmr.js":338,"./ku.js":337,"./ky":339,"./ky.js":339,"./lb":340,"./lb.js":340,"./lo":341,"./lo.js":341,"./lt":342,"./lt.js":342,"./lv":343,"./lv.js":343,"./me":344,"./me.js":344,"./mi":345,"./mi.js":345,"./mk":346,"./mk.js":346,"./ml":347,"./ml.js":347,"./mn":348,"./mn.js":348,"./mr":349,"./mr.js":349,"./ms":350,"./ms-my":351,"./ms-my.js":351,"./ms.js":350,"./mt":352,"./mt.js":352,"./my":353,"./my.js":353,"./nb":354,"./nb.js":354,"./ne":355,"./ne.js":355,"./nl":356,"./nl-be":357,"./nl-be.js":357,"./nl.js":356,"./nn":358,"./nn.js":358,"./oc-lnc":359,"./oc-lnc.js":359,"./pa-in":360,"./pa-in.js":360,"./pl":361,"./pl.js":361,"./pt":362,"./pt-br":363,"./pt-br.js":363,"./pt.js":362,"./ro":364,"./ro.js":364,"./ru":365,"./ru.js":365,"./sd":366,"./sd.js":366,"./se":367,"./se.js":367,"./si":368,"./si.js":368,"./sk":369,"./sk.js":369,"./sl":370,"./sl.js":370,"./sq":371,"./sq.js":371,"./sr":372,"./sr-cyrl":373,"./sr-cyrl.js":373,"./sr.js":372,"./ss":374,"./ss.js":374,"./sv":375,"./sv.js":375,"./sw":376,"./sw.js":376,"./ta":377,"./ta.js":377,"./te":378,"./te.js":378,"./tet":379,"./tet.js":379,"./tg":380,"./tg.js":380,"./th":381,"./th.js":381,"./tk":382,"./tk.js":382,"./tl-ph":383,"./tl-ph.js":383,"./tlh":384,"./tlh.js":384,"./tr":385,"./tr.js":385,"./tzl":386,"./tzl.js":386,"./tzm":387,"./tzm-latn":388,"./tzm-latn.js":388,"./tzm.js":387,"./ug-cn":389,"./ug-cn.js":389,"./uk":390,"./uk.js":390,"./ur":391,"./ur.js":391,"./uz":392,"./uz-latn":393,"./uz-latn.js":393,"./uz.js":392,"./vi":394,"./vi.js":394,"./x-pseudo":395,"./x-pseudo.js":395,"./yo":396,"./yo.js":396,"./zh-cn":397,"./zh-cn.js":397,"./zh-hk":398,"./zh-hk.js":398,"./zh-mo":399,"./zh-mo.js":399,"./zh-tw":400,"./zh-tw.js":400};function a(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id=419},428:function(t,e,s){"use strict";s(410)},434:function(t,e,s){"use strict";s.r(e);s(48);var n=s(252);function a(t,e,s){const n=[];!function t(e,s){for(let n=0,a=e.length;n<a;n++)"group"===e[n].type?t(e[n].children||[],s):s.push(e[n])}(e,n);for(let e=0;e<n.length;e++){const a=n[e];if("page"===a.type&&a.path===decodeURIComponent(t.path))return n[e+s]}}var r={props:["sidebarItems"],computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev(){const t=this.$page.frontmatter.prev;return!1===t?void 0:t?Object(n.k)(this.$site.pages,t,this.$route.path):(e=this.$page,s=this.sidebarItems,a(e,s,-1));var e,s},next(){const t=this.$page.frontmatter.next;return!1===t?void 0:t?Object(n.k)(this.$site.pages,t,this.$route.path):(e=this.$page,s=this.sidebarItems,a(e,s,1));var e,s},editLink(){if(!1===this.$page.frontmatter.editLink)return;const{repo:t,editLinks:e,docsDir:s="",docsBranch:n="master",docsRepo:a=t}=this.$site.themeConfig;return a&&e&&this.$page.relativePath?this.createEditLink(t,a,s,n,this.$page.relativePath):void 0},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,s,a,r){if(/bitbucket.org/.test(t)){return(n.i.test(e)?e:t).replace(n.a,"")+"/src"+`/${a}/`+(s?s.replace(n.a,"")+"/":"")+r+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}return(n.i.test(e)?e:"https://github.com/"+e).replace(n.a,"")+"/edit"+`/${a}/`+(s?s.replace(n.a,"")+"/":"")+r}}},i=(s(428),s(11)),o=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page"},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-default-content"}),t._v(" "),e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?e("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},[t.next?e("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},452:function(t,e,s){},453:function(t,e,s){},454:function(t,e,s){},483:function(t,e,s){"use strict";s(452)},484:function(t,e,s){"use strict";s(453)},485:function(t,e,s){var n=s(108),a=s(100),r=s(486),i=s(490);t.exports=function(t,e){if(null==t)return{};var s=n(i(t),(function(t){return[t]}));return e=a(e),r(t,s,(function(t,s){return e(t,s[0])}))}},486:function(t,e,s){var n=s(55),a=s(487),r=s(49);t.exports=function(t,e,s){for(var i=-1,o=e.length,l={};++i<o;){var u=e[i],c=n(t,u);s(c,u)&&a(l,r(u,t),c)}return l}},487:function(t,e,s){var n=s(488),a=s(49),r=s(53),i=s(26),o=s(18);t.exports=function(t,e,s,l){if(!i(t))return t;for(var u=-1,c=(e=a(e,t)).length,p=c-1,h=t;null!=h&&++u<c;){var d=o(e[u]),f=s;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(u!=p){var g=h[d];void 0===(f=l?l(g,d,h):void 0)&&(f=i(g)?g:r(e[u+1])?[]:{})}n(h,d,f),h=h[d]}return t}},488:function(t,e,s){var n=s(489),a=s(51),r=Object.prototype.hasOwnProperty;t.exports=function(t,e,s){var i=t[e];r.call(t,e)&&a(i,s)&&(void 0!==s||e in t)||n(t,e,s)}},489:function(t,e,s){var n=s(109);t.exports=function(t,e,s){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:s,writable:!0}):t[e]=s}},490:function(t,e,s){var n=s(101),a=s(491),r=s(493);t.exports=function(t){return n(t,r,a)}},491:function(t,e,s){var n=s(50),a=s(492),r=s(102),i=s(103),o=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,r(t)),t=a(t);return e}:i;t.exports=o},492:function(t,e,s){var n=s(106)(Object.getPrototypeOf,Object);t.exports=n},493:function(t,e,s){var n=s(104),a=s(494),r=s(54);t.exports=function(t){return r(t)?n(t,!0):a(t)}},494:function(t,e,s){var n=s(26),a=s(105),r=s(495),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return r(t);var e=a(t),s=[];for(var o in t)("constructor"!=o||!e&&i.call(t,o))&&s.push(o);return s}},495:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var s in Object(t))e.push(s);return e}},496:function(t,e,s){"use strict";s(454)},502:function(t,e,s){"use strict";s.r(e);var n=s(437),a=s(434),r=s(416),i=(s(48),{data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){s.e(12).then(s.t.bind(null,501,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}}),o=(s(483),s(11)),l=Object(o.a)(i,(function(){var t=this._self._c;return this.comp?t(this.comp,{tag:"component",attrs:{value:this.page,"page-count":this.$pagination.length,"click-handler":this.clickCallback,"prev-text":this.$pagination.prevText,"next-text":this.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):this._e()}),[],!1,null,null,null).exports,u=(s(484),Object(o.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,s(27)),c=s.n(u),p=s(485),h=s.n(p),d={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties(){return h()(this.$props,c.a)},commentProps(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=(Object(o.a)(d,(function(){var t=this._self._c;return"vssue"===this.$service.comment.service?t("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?t("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports,s(252)),g=s(251),v=s.n(g),j={components:{Page:a.default,Sidebar:r.default,Navbar:n.default,Pagination:l},data:()=>({isSidebarOpen:!1}),computed:{newsPosts(){return this.$pagination.pages},shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(f.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{displayDate:t=>v()(t).format("YYYY-MM-DD"),toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},m=(s(496),Object(o.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),e("main",{staticClass:"news-index-page"},[e("div",{staticClass:"page-content-container"},[e("h1",{staticClass:"page-title"},[e("v-icon",{attrs:{name:"radio"}}),t._v(" What's Up?\n      ")],1),t._v(" "),e("ul",t._l(t.$pagination.pages,(function(s){return e("li",[e("div",{staticClass:"news-preview"},[s.excerpt?e("div",{domProps:{innerHTML:t._s(s.excerpt)}}):e("Content",{attrs:{"page-key":s.key}})],1),t._v(" "),e("div",{staticClass:"post-meta"},[s.frontmatter.author?e("v-icon",{attrs:{name:"user"}}):t._e(),t._v(" "+t._s(s.frontmatter.author)+"\n            "),s.frontmatter.author?e("span",[t._v("  ")]):t._e(),t._v(" "),s.frontmatter.date?e("v-icon",{attrs:{name:"calendar"}}):t._e(),t._v(" "+t._s(t.displayDate(s.frontmatter.date))+"\n            "),e("router-link",{staticClass:"read-more",attrs:{to:s.path}},[t._v("Read More "),e("v-icon",{attrs:{name:"arrow-right-circle"}})],1)],1)])})),0)]),t._v(" "),e("div",{staticClass:"page-nav-container"},[e("Pagination")],1)])],1)}),[],!1,null,null,null));e.default=m.exports}}]);
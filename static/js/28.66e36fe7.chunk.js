(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1257:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(6),c=a(8),o=a(7),l=(a(575),a(576)),i=a(0),s=a.n(i),m=a(9),u=a(116),d=(a(547),a(549)),p=(a(115),a(54)),f=a(145),_=a.n(f),y=a(594),v=a(604),h=a(605),b=a(992),E=a.n(b),g=a(60),N=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.article,a=e.author;return s.a.createElement("section",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("div",{className:"clearfix"},s.a.createElement("div",{className:"pull-left mr-2"},s.a.createElement("div",{className:"".concat(E.a.commentAvatar)},s.a.createElement(y.a,{size:"50",author:a}))),s.a.createElement("div",{className:"pull-left"},s.a.createElement("a",{href:"/#/author/profile?id=".concat(a.id)},s.a.createElement("strong",null,"".concat(a.name," ").concat(a.surname))),s.a.createElement("br",null),s.a.createElement("span",{className:"text-muted"},_()(new Date(t.createdAt)).fromNow())),s.a.createElement("div",{className:"pull-right"},s.a.createElement(v.a,{articleId:t.id})))),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:E.a.blogFeed},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("main",null,s.a.createElement("article",{className:E.a.article,key:t.id},t.imageId&&s.a.createElement("div",{className:E.a.articleMedia},s.a.createElement("a",{href:"/#/article/details?id=".concat(t.id),className:E.a.link},s.a.createElement("img",{src:"".concat(g.a.apiUrl,"/images/").concat(t.imageId),alt:t.title}))),s.a.createElement("div",{className:E.a.information},s.a.createElement("div",{className:E.a.title},s.a.createElement("h1",null,s.a.createElement("a",{href:"/#/article/details?id=".concat(t.id)},t.title)))),s.a.createElement("div",{className:E.a.content},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.subtitle}}),s.a.createElement("div",{className:E.a.articleMore},s.a.createElement("a",{href:"/#/article/details?id=".concat(t.id)},s.a.createElement(p.a,{type:"default"},s.a.createElement(m.a,{id:"author.profile.feed.post.readMore"}),s.a.createElement("i",{className:"ml-2 fa fa-angle-right","aria-hidden":"true"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement(h.a,{article:t})),s.a.createElement("div",{className:"col-6"},s.a.createElement("ul",{className:E.a.share},s.a.createElement("li",{className:"".concat(E.a.shareItem," mr-3")},s.a.createElement("i",{className:"font-size-20 fa fa-comments-o mr-1"})," ",t.comments),s.a.createElement("li",{className:E.a.shareItem},s.a.createElement("i",{className:"font-size-20 fa fa-eye mr-1"})," ",t.views)))))))))))}}]),a}(s.a.Component),k=a(59),j=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={articles:[]},e.loadArticles=function(t,a){var n=e.props.type;"bookmarks"===n&&k.a.getSavedArticles(t,a).then(function(t){e.setState({articles:t.content,page:t})}),"clapped"===n&&k.a.getClappedArticles(t,a).then(function(t){e.setState({articles:t.content,page:t})})},e.onPageChanged=function(t,a){e.loadArticles(t-1,a)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.loadArticles()}},{key:"render",value:function(){var e=this.state,t=e.articles,a=e.page;return s.a.createElement("div",null,t.map(function(e){return s.a.createElement(N,{article:e,author:e.user,key:"article_".concat(e.id)})}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},a&&a.totalPages>1&&s.a.createElement("div",{className:"mb-5"},s.a.createElement(d.a,{defaultCurrent:1,current:a.number+1,total:a.totalElements,pageSize:10,onChange:this.onPageChanged})))))}}]),a}(s.a.Component),C=a(993),O=a.n(C),I=l.a.TabPane,A=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.intl;return s.a.createElement("div",null,s.a.createElement(u.Helmet,{title:e.formatMessage({id:"author.readingList"})}),s.a.createElement("div",{className:O.a.block},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"utils__title mb-3"},s.a.createElement("strong",null,s.a.createElement(m.a,{id:"author.readingList"})))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(l.a,{defaultActiveKey:"1"},s.a.createElement(I,{tab:s.a.createElement("span",null,s.a.createElement("i",{className:"icmn-bookmarks mr-1"}),s.a.createElement(m.a,{id:"author.readingList.bookmarks"})),key:"1"},s.a.createElement(j,{type:"bookmarks",updateUser:this.updateUser})),s.a.createElement(I,{tab:s.a.createElement("span",null,s.a.createElement("i",{className:"icmn-star-empty mr-1"}),s.a.createElement(m.a,{id:"author.readingList.clapped"})),key:"2"},s.a.createElement(j,{type:"clapped",updateUser:this.updateUser})))))))}}]),a}(s.a.Component);t.default=Object(m.d)(A)},420:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},421:function(e,t,a){var n=a(456),r="object"==typeof self&&self&&self.Object===Object&&self,c=n||r||Function("return this")();e.exports=c},425:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},428:function(e,t,a){var n=a(475),r=a(563),c=a(564),o="[object Null]",l="[object Undefined]",i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?l:o:i&&i in Object(e)?r(e):c(e)}},441:function(e,t,a){var n=a(420),r=a(482),c=NaN,o=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,m=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return c;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var a=i.test(e);return a||s.test(e)?m(e.slice(2),a?2:8):l.test(e)?c:+e}},456:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a(65))},475:function(e,t,a){var n=a(421).Symbol;e.exports=n},482:function(e,t,a){var n=a(428),r=a(425),c="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&n(e)==c}},483:function(e,t,a){"use strict";a(45),a(555)},484:function(e,t,a){"use strict";var n=a(0),r=a(184),c=a(26);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l,i,s,m,u=3,d=1,p="ant-message",f="move-up";var _={open:function(e){var t=void 0!==e.duration?e.duration:u,a={info:"info-circle",success:"check-circle",error:"close-circle",warning:"exclamation-circle",loading:"loading"}[e.type],o=e.key||d++,_=new Promise(function(u){var d=function(){return"function"===typeof e.onClose&&e.onClose(),u(!0)};!function(e){i?e(i):r.a.newInstance({prefixCls:p,transitionName:f,style:{top:l},getContainer:s,maxCount:m},function(t){i?e(i):(i=t,e(t))})}(function(r){var l=n.createElement(c.a,{type:a,theme:"loading"===a?"outlined":"filled"}),i=a?l:"";r.notice({key:o,duration:t,style:{},content:n.createElement("div",{className:"".concat(p,"-custom-content").concat(e.type?" ".concat(p,"-").concat(e.type):"")},e.icon?e.icon:i,n.createElement("span",null,e.content)),onClose:d})})}),y=function(){i&&i.removeNotice(o)};return y.then=function(e,t){return _.then(e,t)},y.promise=_,y},config:function(e){void 0!==e.top&&(l=e.top,i=null),void 0!==e.duration&&(u=e.duration),void 0!==e.prefixCls&&(p=e.prefixCls),void 0!==e.getContainer&&(s=e.getContainer),void 0!==e.transitionName&&(f=e.transitionName,i=null),void 0!==e.maxCount&&(m=e.maxCount,i=null)},destroy:function(){i&&(i.destroy(),i=null)}};["success","info","warning","error","loading"].forEach(function(e){_[e]=function(t,a,n){return function(e){return"[object Object]"===Object.prototype.toString.call(e)&&!!e.content}(t)?_.open(o(o({},t),{type:e})):("function"===typeof a&&(n=a,a=void 0),_.open({content:t,duration:a,type:e,onClose:n}))}}),_.warn=_.warning,t.a=_},555:function(e,t,a){},563:function(e,t,a){var n=a(475),r=Object.prototype,c=r.hasOwnProperty,o=r.toString,l=n?n.toStringTag:void 0;e.exports=function(e){var t=c.call(e,l),a=e[l];try{e[l]=void 0;var n=!0}catch(i){}var r=o.call(e);return n&&(t?e[l]=a:delete e[l]),r}},564:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},594:function(e,t,a){"use strict";var n=a(5),r=a(6),c=a(8),o=a(7),l=a(0),i=a.n(l),s=a(603),m=a.n(s),u=a(60),d=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.author,a=e.size,n=e.borderColor,r=e.border;return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement("a",{className:"".concat(m.a.avatar," ").concat(a?m.a["size".concat(a)]:""," ").concat(r?m.a.border:""),href:"/#/author/profile?id=".concat(t.id),style:{borderColor:n}},t.avatar&&i.a.createElement("img",{src:"".concat(u.a.apiUrl,"/users/").concat(t.id,"/avatar"),alt:t.name,onError:function(e){e.target.onerror=null,e.target.src="/resources/images/avatar.jpg"}}),!t.avatar&&i.a.createElement("img",{src:"/resources/images/avatar.jpg",alt:t.name})))}}]),a}(i.a.Component);d.defaultProps={size:!1,border:!1,borderColor:"#d2d9e5"},t.a=d},603:function(e,t,a){e.exports={avatar:"style_avatar__1e8oB",size20:"style_size20__27Eui",size25:"style_size25__2e4NS",size50:"style_size50__2hTa2",size70:"style_size70__230_s",size90:"style_size90__2Y4jt",size110:"style_size110__3CGMW",border:"style_border__2W9C5"}},604:function(e,t,a){"use strict";a(115);var n,r,c,o=a(54),l=(a(483),a(484)),i=a(5),s=a(6),m=a(8),u=a(7),d=a(0),p=a.n(d),f=a(19),_=Object(f.c)(function(e){return{bookmark:e.bookmark}})((c=r=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).save=function(t){var a=e.props.dispatch;t&&a({type:"bookmark/BOOKMARK_ARTICLE",payload:{articleId:t},callback:e.updateBookmark})},e.updateBookmark=function(){var t=e.props,a=t.articleId;t.bookmark.savedArticleIds.includes(a)?l.a.success({content:"Saved",icon:p.a.createElement("i",{className:"fa fa-bookmark mr-2"}),duration:.1}):l.a.success({content:"Unsaved",icon:p.a.createElement("i",{className:"fa fa-bookmark-o mr-2"}),duration:.1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.articleId,n=t.bookmark.savedArticleIds;return p.a.createElement(o.a,{type:"link",onClick:function(){return e.save(a)},shape:"circle"},n.includes(a)&&p.a.createElement("i",{className:"fa fa-bookmark font-size-20"}),!n.includes(a)&&p.a.createElement("i",{className:"fa fa-bookmark-o font-size-20"}))}}]),a}(p.a.Component),r.defaultProps={articleId:null},n=c))||n;t.a=_},605:function(e,t,a){"use strict";a(115);var n,r=a(54),c=(a(483),a(484)),o=a(5),l=a(6),i=a(8),s=a(7),m=a(0),u=a.n(m),d=a(19),p=Object(d.c)(function(e){return{clap:e.clap}})(n=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={clapCount:e.props.article.claps},e.clap=function(t){var a=e.props.dispatch;t&&a({type:"clap/CLAP_ARTICLE",payload:{articleId:t},callback:e.updateClaps})},e.updateClaps=function(){e.setState(function(e){return{clapCount:e.clapCount+1}}),c.a.success({content:"+ 1",icon:u.a.createElement("i",{className:"fa fa-thumbs-up mr-1"}),duration:.1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.article,n=t.clap,c=this.state.clapCount,o=n.clappedArticleIds;return a&&a.id?u.a.createElement(u.a.Fragment,null,u.a.createElement(r.a,{type:"link",onClick:function(){return e.clap(a.id)},shape:"circle"},o.includes(a.id)&&u.a.createElement("i",{className:"fa fa-thumbs-up font-size-24"}),!o.includes(a.id)&&u.a.createElement("i",{className:"fa fa-thumbs-o-up font-size-24"})),c):u.a.createElement(u.a.Fragment,null)}}]),a}(u.a.Component))||n;t.a=p},992:function(e,t,a){e.exports={blogFeed:"style_blogFeed__3kOME",article:"style_article__1Ie9Z",link:"style_link__r3M6v",information:"style_information__crB32",title:"style_title__ejSjR",meta:"style_meta__3rrpY",metaInf:"style_metaInf__31WEN",articleMedia:"style_articleMedia__3AHhA",content:"style_content__1gu9z",more:"style_more__3Vpba",footer:"style_footer__3BcVB",hashtags:"style_hashtags__2Vc2x",share:"style_share__1Bro7",shareItem:"style_shareItem__HKXql",sidebar:"style_sidebar__tgkNX",partition:"style_partition__2SHeF",partitionHead:"style_partitionHead__3dIjq",partitionName:"style_partitionName__2uOi1",categoriesList:"style_categoriesList__2owvz",categoriesItem:"style_categoriesItem__etH7T",categoriesLink:"style_categoriesLink__2pmBD",latestPost:"style_latestPost__3fw76",latestImg:"style_latestImg__3-PA4",latestData:"style_latestData__nzyy3",latestName:"style_latestName__3DDqg",latestArticleMeta:"style_latestArticleMeta__3UTCR",articleAuthor:"style_articleAuthor__2My2a",articleDate:"style_articleDate__DH_Af",groupAddon:"style_groupAddon__35Ne3",authorCard:"style_authorCard__3qy6v",authorPhoto:"style_authorPhoto__MyHqd",authorInf:"style_authorInf__CEJBG",authorName:"style_authorName__1B6nb",authorWords:"style_authorWords__qLuBg",commentsTitle:"style_commentsTitle__3aRgx",addCommentTitle:"style_addCommentTitle__1R69S",addCommentForm:"style_addCommentForm__3wGB3",articleMore:"style_articleMore__3PyK-",commentItem:"style_commentItem__2HWmC",commentAvatar:"style_commentAvatar__2orjt",commentContent:"style_commentContent__1PF7_",subcommentsContent:"style_subcommentsContent__12jIb"}},993:function(e,t,a){e.exports={login:"style_login__2P7mz",block:"style_block__2nJKD",inner:"style_inner__3g-FV",form:"style_form__2aBFL"}}}]);
//# sourceMappingURL=28.66e36fe7.chunk.js.map
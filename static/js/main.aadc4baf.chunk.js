(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{38:function(e,t,a){e.exports=a(76)},43:function(e,t,a){},45:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),l=a.n(o),s=(a(43),a(6)),c=a(7),i=a(9),m=a(8),u=a(16),h=a(34);function d(){var e=Object(h.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.50s linear;\n  }\n\n  "]);return d=function(){return e},e}var p=Object(u.b)(d(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),f={body:"#FFF",text:"#363537",toggleBorder:"#FFF",background:"#363537"},g={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"},E=(a(45),a(18)),y=a.n(E),v=(a(63),a(22)),b=(a(64),a(65),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){var e={transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:"Modal",style:e},this.props.children))}}]),a}(n.Component),k=(a(66),function(e){return r.a.createElement("span",{className:"Like",onClick:e.click,style:{color:e.colored}},r.a.createElement("i",{className:"fa fa-heart heart",style:{fontSize:"30px"}}))}),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={liked:!1,showZoomIn:!1,showZoomOut:!1,isZoomed:!1,styleScale:{x:0,y:0}},e.zoomIn=function(){var t=e.state.styleScale.x+.5,a=e.state.styleScale.y+.5;e.setState({isZoomed:!0,showZoomInstyleScale:{x:t,y:a}})},e.zoomOut=function(){var t=e.state.styleScale.x-.5,a=e.state.styleScale.y-.5;e.setState({isZoomed:!1,showZoomInstyleScale:{x:t,y:a}})},e.enableZoom=function(){var t=Object(v.a)({},e.state);e.setState({showZoomIn:!t.showZoomIn,showZoomOut:!t.showZoomOut})},e.likeHandler=function(){var t=Object(v.a)({},e.state);e.setState({liked:!t.liked})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.showZoomIn?r.a.createElement("span",{className:"zoomer-after",onClick:this.zoomIn},r.a.createElement("i",{className:" fa fa-search-plus ",style:{fontSize:"16px"},disabled:!this.state.showZoomIn})):r.a.createElement("span",{className:"zoomer-hide"});return r.a.createElement("li",null,r.a.createElement("div",{className:"img-wrap "},r.a.createElement(k,{click:this.likeHandler,colored:this.state.liked?"#ff0000":"#aaaaaa"}),r.a.createElement("img",{src:this.props.url,onClick:this.enableZoom,style:{cursor:"zoom-in"},alt:"Unsplash pictures here"}),e,this.state.isZoomed?r.a.createElement(w,{show:this.state.isZoomed,modalClicked:this.zoomOut},r.a.createElement("img",{src:this.props.url,alt:"Unsplash pictures here"}),r.a.createElement("span",{className:"zoomer-above",onClick:this.zoomOut},r.a.createElement("i",{className:" fa fa-search-minus ",style:{fontSize:"16px"},disabled:!this.state.showZoomOut}))):r.a.createElement(r.a.Fragment,null)),r.a.createElement("p",null,"Photo by",r.a.createElement("a",{href:this.props.user},this.props.name),r.a.createElement("a",{href:this.props.link},"Source")))}}]),a}(n.Component),O=function(e){return r.a.createElement("li",{className:"no-imgs"},r.a.createElement("i",{className:"icon-img"},"Nothing!!!"),r.a.createElement("h3",null,"No Images match your search."))},N=function(e){var t,a=e.data;return t=a.length>0?a.map((function(t){return r.a.createElement(S,{url:t.urls.thumb,user:t.user.links.html,name:t.user.name,link:t.links.html,modalOpen:e.clicked,key:t.id})})):r.a.createElement(O,null),r.a.createElement("ul",{className:"img-list"},t)},j=function(e,t){return function(a){Object(i.a)(o,a);var n=Object(m.a)(o);function o(){var e;Object(s.a)(this,o);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(c.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqIn=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resIn=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqIn),t.interceptors.response.eject(this.resIn)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(n.Component)},C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchText:""},e.onSearchChange=function(t){e.setState({searchText:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSearch(e.query.value),t.currentTarget.reset()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",onChange:this.onSearchChange,ref:function(t){return e.query=t},name:"search",placeholder:"Search..."}),r.a.createElement("button",{type:"submit",id:"submit",className:"search-button"},r.a.createElement("i",{className:"fa fa-search icn-search"})))}}]),a}(n.Component),x=(a(67),function(e){return r.a.createElement("div",{className:"Loader"},"Loading ... ")}),Z=(a(68),a(13)),I=(a(69),function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement(Z.b,{to:e.link,exact:e.exact,activeClassName:"active"},e.children))}),F=function(){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(I,{link:"/",exact:!0},"Home"),r.a.createElement(I,{link:"/gallery",exact:!0},"Gallery"))},z=(a(74),function(e){return r.a.createElement("header",{className:"Toolbar"},r.a.createElement("div",{className:"Logo"},"MyGallery"),r.a.createElement("nav",null,r.a.createElement(F,null)))}),A=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).performSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"night";y.a.get("https://api.unsplash.com/search/photos/?page=1&per_page=18&query=".concat(t,"&client_id=tuxLMZ3ZoydOfuVl9hjZFXqWjiStx91WADRWZgPtYqg")).then((function(t){e.setState({imgs:t.data.results,loadingState:!1})})).catch((function(t){e.setState({error:!0})}))},e.state={imgs:[],loadingState:!0,error:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.performSearch()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,{toggledrawer:this.sideDrawerHandler}),r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"inner-header"},r.a.createElement("h3",null,"Look for themed photographs"),r.a.createElement(C,{onSearch:this.performSearch}))),r.a.createElement("div",{className:"main-content"},this.state.loadingState?r.a.createElement(x,null):r.a.createElement(N,{data:this.state.imgs})))}}]),a}(n.Component),y.a),T=a(1),D=(a(75),function(){return r.a.createElement("div",{className:"home-main"},r.a.createElement("div",{className:"desc"},r.a.createElement("h1",null,"A Photo Exhibtion Place"),r.a.createElement("sub",null,"powered by photographers of UnSplash"),r.a.createElement("p",null,"This is a Gallery Application Build in React for showing themed photographs you search. The App starts with images of night as default case."),r.a.createElement("h4",null,"Go to Gallery on top Toolbar and please you eyes with mesmerising pictures of amzing photographers")),r.a.createElement("footer",null,"made with ",r.a.createElement("i",{className:"fa fa-heart red"})," By Jyoti Mishra"))}),H=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1,theme:"light"},e.themeToggler=function(){"light"===e.state.theme?e.setState({theme:"dark"}):e.setState({theme:"light"})},e.sideDrawerHandler=function(){e.setState({showSideDrawer:!0})},e.sideDrawerCloseHandler=function(){e.setState({showSideDrawer:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{theme:"light"===this.state.theme?f:g},r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("button",{onClick:this.themeToggler,className:"Theme"},"Switch Theme"),r.a.createElement(T.a,{path:"/",exact:!0,component:D}),r.a.createElement(T.a,{path:"/gallery",component:A}),r.a.createElement(z,{toggledrawer:this.sideDrawerHandler})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=r.a.createElement(Z.a,null,r.a.createElement(H,null));l.a.render(r.a.createElement(r.a.StrictMode,null,q),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.aadc4baf.chunk.js.map
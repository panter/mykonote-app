(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{130:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return s});var r=n(0),a=n.n(r);function o(e){return a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:u(e),className:"control-label"},e.label),a.a.createElement("input",{type:e.type,id:u(e),name:s(e),className:"string form-control",onChange:function(t){return e.onChange(s(e),t.target.value)}}))}function i(e){return a.a.createElement("div",{className:"form-group"},a.a.createElement("div",{className:"checkbox"},a.a.createElement("label",{htmlFor:u(e)},a.a.createElement("input",{type:"checkbox",id:u(e),name:s(e),onChange:function(t){return e.onChange(s(e),t.target.checked)}}),e.label)))}function c(e){return a.a.createElement("input",{type:"submit",className:"btn btn-raised btn-primary btn-info",value:e.label})}function l(){return a.a.createElement("input",{type:"hidden",value:"\u2713",name:"utf8"})}function u(e){return"".concat(e.model,"_").concat(e.attribute)}function s(e){return"".concat(e.model,"[").concat(e.attribute,"]")}},131:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(5),a=n.n(r);function o(){a()("html, body").animate({scrollTop:0},300)}},132:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(138),i=n(2),c=n.n(i),l=n(12),u=n.n(l),s=n(14),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var m=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=f(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!m(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},f(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(s.b)(t,null,null,o.location):t,c=o.createHref(i);return a.a.createElement("a",p({},r,{onClick:this.handleClick,href:c,ref:n}))},t}(a.a.Component);d.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired};var h=d;function b(){return a.a.createElement("div",null,a.a.createElement(o.a,{path:"/login",render:function(e){return a.a.createElement(h,{className:"btn btn-info btn-link btn-no-padding",to:"/register"},"Register")}}),a.a.createElement(o.a,{path:"/register",render:function(e){return a.a.createElement(h,{className:"btn btn-info btn-link btn-no-padding",to:"/login"},"Login")}}))}function y(e){return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-6 col-md-offset-3"},e.intro?a.a.createElement("div",{className:"jumbotron"},e.intro):null,a.a.createElement("div",{className:"well"},e.children,a.a.createElement(b,null))))}n.d(t,"a",function(){return y})},134:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n(3),o=n(4),i=n(7),c=n(6),l=n(8),u=n(0),s=n.n(u),p=n(5),f=n.n(p),m=n(11),d=n(15),h=n(130),b=n(131),y=n(132),v=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(y.a,{intro:this.renderIntro()},s.a.createElement("form",{onSubmit:this.handleFormSubmit.bind(this)},s.a.createElement(h.d,null),s.a.createElement("div",{className:"form-inputs"},this.renderTextInput("email","email","Email"),this.renderTextInput("password","password","Password"),this.renderTextInput("password","password_confirmation","Confirm password")),s.a.createElement("div",{className:"form-actions"},s.a.createElement(h.b,{label:"Register"}))))}},{key:"renderIntro",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"You can register for a ",s.a.createElement("strong",null,"free account")," which ",s.a.createElement("strong",null,"limits")," you to ",s.a.createElement("strong",null,"100 notes"),".",s.a.createElement("br",null),"This free hosting service is sponsored by ",s.a.createElement("a",{href:"https://www.panter.ch"},"Panter AG"),"."),s.a.createElement("p",null,"Alternatively you may ",s.a.createElement("a",{href:"https://github.com/panter/mykonote"},"get the source code from GitHub")," and install it on a server on your own."))}},{key:"renderTextInput",value:function(e,t,n){return s.a.createElement(h.c,{type:e,model:"user",attribute:t,label:n,onChange:this.setValue.bind(this)})}},{key:"setValue",value:function(e,t){this.setState(Object(r.a)({},e,t))}},{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault(),f.a.ajax({url:"/users",method:"POST",dataType:"json",data:this.state}).done(function(e){m.a.clear(),d.a.show("Great! Glad you made it!<br>You have been subscribed to the <strong>free plan</strong> which <strong>limits</strong> you to have <strong>100 notes</strong>."),t.props.onLoginSuccess(),t.props.history.push("/notes")}).fail(function(e){var t=e.responseJSON.errors.join("<br>");m.a.show("Sorry, that did not work. You need to fix your inputs:<br>"+t)}).always(b.a)}}]),t}(u.Component);t.default=v}}]);
//# sourceMappingURL=3.09b1a6c6.chunk.js.map
webpackJsonp([0x67ef26645b2a,60335399758886],{88:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/exercises/basic-starter/"},frontmatter:{title:"Create a Starter Repo",difficulty:1,categories:["Javascript","CSS","HTML","git"]}}},{node:{fields:{slug:"/exercises/using-ajax/"},frontmatter:{title:"Use AJAX to connect to an external API",difficulty:2,categories:["Javascript"]}}}]}},layoutContext:{}}},176:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(5),l=n(o),u=r(179),i=n(u),c=r(88),s=n(c);t.default=function(e){return l.default.createElement(i.default,a({},e,s.default))},e.exports=t.default},179:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.layoutQuery=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(5),c=n(i),s=r(7),f=(n(s),r(135)),p=(n(f),function(e){function t(r){a(this,t);var n=o(this,e.call(this,r));return n.state={filterValue:""},n.captureFilter=n.captureFilter.bind(n),n}return l(t,e),t.prototype.captureFilter=function(e){this.setState({filterValue:e.target.value})},t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement("header",null,c.default.createElement("h1",null,"Bosun"),c.default.createElement("p",null,"An interesting tagline describing the project"),c.default.createElement("input",{type:"text",value:this.state.filterValue,onChange:this.captureFilter})),c.default.createElement("section",null,this.props.children(u({},this.props))),c.default.createElement("footer",null,c.default.createElement("p",null,"Footer")))},t}(i.Component));t.default=p;t.layoutQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-577c1ab9d4e10d398929.js.map
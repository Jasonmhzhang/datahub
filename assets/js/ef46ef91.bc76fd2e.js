(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8201],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7898:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={title:"Demo",hide_title:!0,slug:"/demo",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/demo.md"},c={unversionedId:"docs/demo",id:"docs/demo",isDocsHomePage:!1,title:"DataHub Demo Environment",description:"We have a hosted demo environment available, kindly provided by Acryl.",source:"@site/genDocs/docs/demo.md",sourceDirName:"docs",slug:"/demo",permalink:"/docs/demo",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/demo.md",version:"current",frontMatter:{title:"Demo",hide_title:!0,slug:"/demo",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/demo.md"},sidebar:"overviewSidebar",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"DataHub Quickstart Guide",permalink:"/docs/quickstart"}},u=[],l={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We have a hosted demo environment available, kindly provided by ",(0,i.kt)("a",{parentName:"p",href:"https://acryl.io/"},"Acryl"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{class:"button button--primary button--lg",href:"https://demo.datahubproject.io/"},"Check out the demo")),(0,i.kt)("p",null,"The demo environment contains a number of sample datasets from BigQuery's public data project. We also added lineage and ownership information to showcase the full power of DataHub."))}s.isMDXComponent=!0}}]);
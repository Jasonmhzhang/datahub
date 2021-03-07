(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(158),o=n(159),a=(n(0),n(160)),c={title:"Deploying with Docker",hide_title:!0,slug:"/docker",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/README.md"},i={unversionedId:"docker/README",id:"docker/README",isDocsHomePage:!1,title:"Deploying with Docker",description:"Docker Images",source:"@site/genDocs/docker/README.md",slug:"/docker",permalink:"/docs/docker",editUrl:"https://github.com/linkedin/datahub/blob/master/docker/README.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Configuring Kafka",permalink:"/docs/how/kafka-config"},next:{title:"Deploying with Kubernetes",permalink:"/docs/contrib/kubernetes"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Quickstart",id:"quickstart",children:[{value:"Ingesting demo data.",id:"ingesting-demo-data",children:[]}]},{value:"Using Docker Images During Development",id:"using-docker-images-during-development",children:[]},{value:"Building And Deploying Docker Images",id:"building-and-deploying-docker-images",children:[{value:"Building images",id:"building-images",children:[]}]},{value:"React",id:"react",children:[{value:"Serving React Only",id:"serving-react-only",children:[]},{value:"Serving React + Ember",id:"serving-react--ember",children:[]}]}],b={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"docker-images"},"Docker Images"),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"You need to install ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"docker")," and\n",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")," (if using Linux; on Windows and Mac compose is included with\nDocker Desktop)."),Object(a.b)("p",null,"Make sure to allocate enough hardware resources for Docker engine. Tested & confirmed config: 2 CPUs, 8GB RAM, 2GB Swap\narea."),Object(a.b)("h2",{id:"quickstart"},"Quickstart"),Object(a.b)("p",null,"The easiest way to bring up and test DataHub is using DataHub ",Object(a.b)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," images\nwhich are continuously deployed to ",Object(a.b)("a",{parentName:"p",href:"https://hub.docker.com/u/linkedin"},"Docker Hub")," with every commit to repository."),Object(a.b)("p",null,"You can easily download and run all these images and their dependencies with our\n",Object(a.b)("a",{parentName:"p",href:"/docs/quickstart"},"quick start guide"),"."),Object(a.b)("p",null,"DataHub Docker Images:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://cloud.docker.com/repository/docker/linkedin/datahub-gms/"},"linkedin/datahub-gms")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://cloud.docker.com/repository/docker/linkedin/datahub-frontend/"},"linkedin/datahub-frontend")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://cloud.docker.com/repository/docker/linkedin/datahub-mae-consumer/"},"linkedin/datahub-mae-consumer")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://cloud.docker.com/repository/docker/linkedin/datahub-mce-consumer/"},"linkedin/datahub-mce-consumer"))),Object(a.b)("p",null,"Dependencies:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/docker/kafka-setup"},"Kafka, Zookeeper, and Schema Registry")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/docker/elasticsearch-setup"},"Elasticsearch")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/docker/mysql"},"MySQL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/docker/neo4j"},"Neo4j"))),Object(a.b)("h3",{id:"ingesting-demo-data"},"Ingesting demo data."),Object(a.b)("p",null,"If you want to test ingesting some data once DataHub is up, see ",Object(a.b)("a",{parentName:"p",href:"/docs/docker/ingestion"},"Ingestion")," for more details."),Object(a.b)("h2",{id:"using-docker-images-during-development"},"Using Docker Images During Development"),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"/docs/docker/development"},"Using Docker Images During Development"),"."),Object(a.b)("h2",{id:"building-and-deploying-docker-images"},"Building And Deploying Docker Images"),Object(a.b)("p",null,"We use GitHub Actions to build and continuously deploy our images. There should be no need to do this manually; a\nsuccessful release on Github will automatically publish the images."),Object(a.b)("h3",{id:"building-images"},"Building images"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This is ",Object(a.b)("strong",{parentName:"p"},"not")," our recommended development flow and most developers should be following the\n",Object(a.b)("a",{parentName:"p",href:"/docs/docker/development"},"Using Docker Images During Development")," guide.")),Object(a.b)("p",null,"To build the full images (that we are going to publish), you need to run the following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -p datahub build\n")),Object(a.b)("p",null,"This is because we're relying on builtkit for multistage builds. It does not hurt also set ",Object(a.b)("inlineCode",{parentName:"p"},"DATAHUB_VERSION")," to\nsomething unique."),Object(a.b)("h2",{id:"react"},"React"),Object(a.b)("p",null,"To serve the incubating React UI, follow the instructions below."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Before continuing"),": If you've already run a deploy script, don't forget to clear containers using ",Object(a.b)("inlineCode",{parentName:"p"},"docker container prune"))),Object(a.b)("h3",{id:"serving-react-only"},"Serving React Only"),Object(a.b)("h4",{id:"all-containers"},"All Containers"),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"quickstart-react.sh")," script to launch all containers in DataHub, including a frontend server that returns a React UI"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"./quickstart-react.sh\n")),Object(a.b)("h4",{id:"the-bare-minimum"},"The Bare Minimum"),Object(a.b)("p",null,"Run the following command to launch only the React server and its required dependencies"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker-compose -f docker-compose.react.yml -f docker-compose.yml -f docker-compose.override.yml up datahub-frontend-react\n")),Object(a.b)("p",null,"Once complete, navigate to ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:9002/")," in your browser to see the React app."),Object(a.b)("h3",{id:"serving-react--ember"},"Serving React + Ember"),Object(a.b)("p",null,"If you'd like to serve the React and Ember UIs side-by-side, you can deploy the ",Object(a.b)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container manually."),Object(a.b)("h4",{id:"all-containers-1"},"All Containers"),Object(a.b)("p",null,"To deploy all DataHub containers, run the quickstart script:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"./quickstart.sh\n")),Object(a.b)("p",null,"Next, deploy the container that serves the React UI:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker-compose -f docker-compose.react.yml -f docker-compose.yml -f docker-compose.override.yml up --no-deps datahub-frontend-react\n")),Object(a.b)("h4",{id:"the-bare-minimum-1"},"The Bare Minimum"),Object(a.b)("p",null,"First, start the Ember frontend server & its required dependencies:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker-compose up datahub-frontend\n")),Object(a.b)("p",null,"Then, start the React frontend server & its required dependencies: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"docker-compose -f docker-compose.react.yml -f docker-compose.yml -f docker-compose.override.yml up datahub-frontend-react\n")),Object(a.b)("p",null,"Navigate to ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:9001/")," to view the Ember app & ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:9002/")," to view the React app. "))}u.isMDXComponent=!0},158:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},159:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(c,".").concat(p)]||d[p]||s[p]||a;return n?o.a.createElement(m,i(i({ref:t},b),{},{components:n})):o.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<a;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
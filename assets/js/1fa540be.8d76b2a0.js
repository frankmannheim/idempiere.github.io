"use strict";(self.webpackChunkidempiere_id_github_io=self.webpackChunkidempiere_id_github_io||[]).push([[469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(6010),i=r(2466),l=r(6550),s=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),k=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var k=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(h,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},9005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),i=r(5162);const l={sidebar_position:2},s="Docker",u={unversionedId:"basic-installation/docker",id:"basic-installation/docker",title:"Docker",description:"Quick Start",source:"@site/docs/basic-installation/docker.md",sourceDirName:"basic-installation",slug:"/basic-installation/docker",permalink:"/docs/basic-installation/docker",draft:!1,editUrl:"https://github.com/idempiere/idempiere.github.io/tree/main/docs/basic-installation/docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Purpose",permalink:"/docs/basic-installation/introduction"},next:{title:"Scripted Installation",permalink:"/docs/basic-installation/scripted-installation"}},c={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Using Docker Commands",id:"using-docker-commands",level:3},{value:"Using Docker Commands With an External DB",id:"using-docker-commands-with-an-external-db",level:3},{value:"Using Docker Stack (Docker Swarm or Docker Compose)",id:"using-docker-stack-docker-swarm-or-docker-compose",level:3},{value:"Default Accounts",id:"default-accounts",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Default Ports",id:"default-ports",level:2},{value:"How does it work?",id:"how-does-it-work",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker"},"Docker"),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres:13\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name idempiere -p 8443:8443 --link postgres:postgres idempiereofficial/idempiere:10\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("h3",{id:"using-docker-commands"},"Using Docker Commands"),(0,a.kt)("p",null,"iDempiere Docker uses a postgres admin password and user to create a clean database, example ",(0,a.kt)("inlineCode",{parentName:"p"},"POSTGRES_PASSWORD=postgres"),", if you are using a different configuration you need to see ",(0,a.kt)("a",{parentName:"p",href:"#environment-variables"},"Environment Variables"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres:13\n")),(0,a.kt)("p",null,"Remember to change the postgres port in case you have one previously running, example -p 5433:5432. You could use any postgres version in the Prerequisites Page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name idempiere -p 8443:8443 --link postgres:postgres idempiereofficial/idempiere:10\n")),(0,a.kt)("p",null,"For persistent data see the section Volumes."),(0,a.kt)("p",null,"Starting containers automatically here."),(0,a.kt)("p",null,"Open in the browser: ",(0,a.kt)("a",{parentName:"p",href:"https://127.0.0.1:8443/webui/"},"https://127.0.0.1:8443/webui/")),(0,a.kt)("h3",{id:"using-docker-commands-with-an-external-db"},"Using Docker Commands With an External DB"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d --name idempiere -p 8443:8443 --network host\\\n  -e DB_HOST=127.0.0.1\\\n  -e DB_PORT=5432\\\n  -e DB_NAME=idempiere\\\n  -e DB_USER=adempiere\\\n  -e DB_PASS=adempiere\\\n  -e DB_ADMIN_PASS=postgres\\\n  idempiereofficial/idempiere:10\n"))),(0,a.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d --name idempiere -p 8443:8443 ^\n  -e DB_HOST=0.0.0.0 ^\n  -e DB_PORT=5432 ^\n  -e DB_NAME=idempiere ^\n  -e DB_USER=adempiere ^\n  -e DB_PASS=adempiere ^\n  -e DB_ADMIN_PASS=postgres ^\n  idempiereofficial/idempiere:10\n")))),(0,a.kt)("h3",{id:"using-docker-stack-docker-swarm-or-docker-compose"},"Using Docker Stack (Docker Swarm or Docker Compose)"),(0,a.kt)("h2",{id:"default-accounts"},"Default Accounts"),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("h2",{id:"default-ports"},"Default Ports"),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work?"))}f.isMDXComponent=!0}}]);
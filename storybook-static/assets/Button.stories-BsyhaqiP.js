import{p as y,r as me,c as g,i as O,a as u,b as q,s as ge,t as L,d as X,e as be,f as ve,m as he,u as ke,g as xe}from"./props-WUWPulho.js";import{G as we,H as _e,D as Ce,X as Se,Y as Ee,s as P,Z as Y,g as z,_ as A,i as x,j as T,E as _,u as R,O as Oe,$ as p,F as C,a0 as Ne,a1 as Ae,a2 as M}from"./context-Fj54d7iI.js";import{f as Te}from"./index-BB-DdCfE.js";import{y as je,g as K}from"./index-CfOrKyLd.js";function Pe(t,e,...n){var r=t,i=Se,s;we(()=>{i!==(i=e())&&(s&&(Ee(s),s=null),s=Ce(()=>i(r,...n)))},_e)}function J(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=J(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Fe(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=J(t))&&(r&&(r+=" "),r+=e);return r}function Be(t){return typeof t=="object"?Fe(t):t??""}const H=[...` 	
\r\f \v\uFEFF`];function De(t,e,n){var r=t==null?"":""+t;if(n){for(var i in n)if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,l=0;(l=r.indexOf(i,l))>=0;){var a=l+s;(l===0||H.includes(r[l-1]))&&(a===r.length||H.includes(r[a]))?r=(l===0?"":r.substring(0,l))+r.substring(a+1):l=a}}return r===""?null:r}function Me(t,e,n,r,i,s){var l=t.__className;if(l!==n){var a=De(n,r,s);a==null?t.removeAttribute("class"):t.className=a,t.__className=n}else if(s){i??(i={});for(var o in s){var c=!!s[o];c!==!!i[o]&&t.classList.toggle(o,c)}}return s}function Ie(t,e,n,r){var i=t.__styles??(t.__styles={});i[e]!==n&&(i[e]=n,n==null?t.style.removeProperty(e):t.style.setProperty(e,n,""))}var Re=Object.create,Z=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,qe=Object.getOwnPropertyNames,Le=Object.getPrototypeOf,Ye=Object.prototype.hasOwnProperty,ze=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),We=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of qe(e))!Ye.call(t,i)&&i!==n&&Z(t,i,{get:()=>e[i],enumerable:!(r=Ue(e,i))||r.enumerable});return t},Xe=(t,e,n)=>(n=t!=null?Re(Le(t)):{},We(!t||!t.__esModule?Z(n,"default",{value:t,enumerable:!0}):n,t)),Ke=ze(t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isEqual=function(){var e=Object.prototype.toString,n=Object.getPrototypeOf,r=Object.getOwnPropertySymbols?function(i){return Object.keys(i).concat(Object.getOwnPropertySymbols(i))}:Object.keys;return function(i,s){return function l(a,o,c){var f,b,d,m=e.call(a),B=e.call(o);if(a===o)return!0;if(a==null||o==null)return!1;if(c.indexOf(a)>-1&&c.indexOf(o)>-1)return!0;if(c.push(a,o),m!=B||(f=r(a),b=r(o),f.length!=b.length||f.some(function(S){return!l(a[S],o[S],c)})))return!1;switch(m.slice(8,-1)){case"Symbol":return a.valueOf()==o.valueOf();case"Date":case"Number":return+a==+o||+a!=+a&&+o!=+o;case"RegExp":case"Function":case"String":case"Boolean":return""+a==""+o;case"Set":case"Map":f=a.entries(),b=o.entries();do if(!l((d=f.next()).value,b.next().value,c))return!1;while(!d.done);return!0;case"ArrayBuffer":a=new Uint8Array(a),o=new Uint8Array(o);case"DataView":a=new Uint8Array(a.buffer),o=new Uint8Array(o.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(a.length!=o.length)return!1;for(d=0;d<a.length;d++)if((d in a||d in o)&&(d in a!=d in o||!l(a[d],o[d],c)))return!1;return!0;case"Object":return l(n(a),n(o),c);default:return!1}}(i,s,[])}}()});Xe(Ke());var He=t=>t.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");const Je=t=>t.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),Ze=t=>He(t.replace(/([A-Z])/g," $1").trim()),G=t=>Je(Ze(t)),j="storybook-stories-extractor-context";function V(t){let e=y(t.isExtracting),n=y(t.register);return{get isExtracting(){return e},get register(){return n}}}function Ge(t){const{stories:e}=t,n=V({isExtracting:!0,register:r=>{e.set(r.exportName??G(r.name),r)}});P(j,n)}function Ve(){return Y(j)||P(j,V({isExtracting:!1,register:()=>{}})),z(j)}const U="storybook-story-renderer-context";function Qe(t){let e=A(y(t.currentStoryExportName)),n=A(y(t.args)),r=A(y(t.storyContext));function i(s){T(e,y(s.currentStoryExportName)),T(n,y(s.args)),T(r,y(s.storyContext))}return{get args(){return x(n)},get storyContext(){return x(r)},get currentStoryExportName(){return x(e)},set:i}}function $e(){const t=Qe({currentStoryExportName:void 0,args:{},storyContext:{}});P(U,t)}function Q(){return Y(U)||$e(),z(U)}const I="storybook-stories-template-snippet-context";function et(){let t=A(void 0);function e(n){T(t,y(n))}return{get template(){return x(t)},set:e}}function tt(){return Y(I)||P(I,et()),z(I).template}var rt=L('<p>No story rendered. See <a href="https://github.com/storybookjs/addon-svelte-csf#defining-stories" target="_blank">the docs</a> on how to define stories.</p>');function $(t,e){_(e,!0);const n=me(e,["$$slots","$$events","$$legacy","children","name","exportName","play"]),r=e.exportName??G(e.name),i=Ve(),s=Q(),l=tt(),a=Oe(()=>!i.isExtracting&&s.currentStoryExportName===r);i.isExtracting&&i.register({children:e.children,name:e.name,exportName:r,play:e.play,...n});function o(d,m){m&&d.playFunction&&(d.playFunction.__play=m)}R(()=>{x(a)&&o(s.storyContext,e.play)});var c=g(),f=p(c);{var b=d=>{var m=g(),B=p(m);{var S=v=>{var w=g(),D=p(w);Pe(D,()=>e.children,()=>s.args,()=>s.storyContext),u(v,w)},se=v=>{var w=g(),D=p(w);{var oe=h=>{l(h,()=>s.args,()=>s.storyContext)},le=h=>{var W=g(),ce=p(W);{var de=k=>{var E=g(),fe=p(E);q(fe,()=>s.storyContext.component,(ye,pe)=>{pe(ye,ge(()=>s.args))}),u(k,E)},ue=k=>{var E=rt();u(k,E)};O(ce,k=>{s.storyContext.component?k(de):k(ue,!1)},!0)}u(h,W)};O(D,h=>{l?h(oe):h(le,!1)},!0)}u(v,w)};O(B,v=>{e.children?v(S):v(se,!1)})}u(d,m)};O(f,d=>{x(a)&&d(b)})}u(t,c),C()}$.__docgen={data:[{name:"decorators",visibility:"public",description:`Wrapper components or Storybook decorators that wrap a story.

Decorators defined in Meta will be applied to every story variation.`,keywords:[],kind:"let",static:!1,readonly:!1},{name:"parameters",visibility:"public",description:"Custom metadata for a story.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"args",visibility:"public",description:"Dynamic data that are provided (and possibly updated by) Storybook and its addons.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"argTypes",visibility:"public",description:"ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"loaders",visibility:"public",description:"Asynchronous functions which provide data for a story.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"beforeEach",visibility:"public",description:`Function to be called before each story. When the function is async, it will be awaited.

\`beforeEach\` can be added to preview, the default export and to a specific story.
They are run (and awaited) in the order: preview, default export, story

A cleanup function can be returned.`,keywords:[],kind:"let",static:!1,readonly:!1},{name:"experimental_afterEach",visibility:"public",description:`Function to be called after each play function for post-test assertions.
Don't use this function for cleaning up state.
You can use the return callback of \`beforeEach\` for that, which is run when switching stories.
When the function is async, it will be awaited.

\`afterEach\` can be added to preview, the default export and to a specific story.
They are run (and awaited) reverse order: preview, default export, story`,keywords:[],kind:"let",static:!1,readonly:!1},{name:"render",visibility:"public",description:"Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"tags",visibility:"public",description:"Named tags for a story, used to filter stories in different contexts.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"mount",visibility:"public",keywords:[],kind:"let",static:!1,readonly:!1},{name:"name",visibility:"public",description:"Override the display name in the UI (CSF v3)\nName of the story. Can be omitted if `exportName` is provided.",keywords:[],kind:"let",type:{kind:"type",type:"intersection",text:"string"},static:!1,readonly:!1},{name:"storyName",visibility:"public",description:"Override the display name in the UI (CSF v2)",keywords:[],kind:"let",static:!1,readonly:!1},{name:"play",visibility:"public",description:"Function that is executed after the story is rendered.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"globals",visibility:"public",description:"Override the globals values for this story",keywords:[],kind:"let",static:!1,readonly:!1},{name:"story",visibility:"public",keywords:[],kind:"let",static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"children",visibility:"public",description:`The content to render in the story, either as:
1. A snippet taking args and storyContext as parameters
2. Static markup

Can be omitted if a default template is set with [\`setTemplate()\`](https://github.com/storybookjs/addon-svelte-csf/blob/main/README.md#default-snippet)`,keywords:[],kind:"let",type:{kind:"function",text:'Snippet<[NonNullable<StoryAnnotations<TCmp>["args"]>, StoryContext<TCmp>]>'},static:!1,readonly:!1},{name:"exportName",visibility:"public",description:`exportName of the story.
If not provided, it will be generated from the 'name', by converting it to a valid, PascalCased JS variable name.
eg. 'My story!' -> 'MyStory'

Use this prop to explicitly set the export name of the story. This is useful if you have multiple stories with the names
that result in duplicate export names like "My story" and "My story!".
It's also useful for explicitly defining the export that can be imported in MDX docs.`,keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"autodocs",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"source",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1}],name:"Story.svelte"};function nt(t){return{Story:$}}var it=L('<button type="button"> </button>');function ee(t,e){_(e,!0);const n=X(e,"primary",3,!1),r=X(e,"size",3,"medium");var i=it();let s;i.__click=function(...a){var o;(o=e.onClick)==null||o.apply(this,a)};var l=Ae(i);Ne(a=>{s=Me(i,1,Be(a),null,s,{"storybook-button--primary":n(),"storybook-button--secondary":!n()}),Ie(i,"background-color",e.backgroundColor),be(l,e.label)},[()=>["storybook-button",`storybook-button--${r()}`].join(" ")]),u(t,i),C()}ve(["click"]);ee.__docgen={data:[{name:"primary",visibility:"public",description:"Is this the principal call to action on the page?",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"backgroundColor",visibility:"public",description:"What background color to use",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"size",visibility:"public",description:"How large should the button be?",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"small",text:'"small"'},{kind:"const",type:"string",value:"medium",text:'"medium"'},{kind:"const",type:"string",value:"large",text:'"large"'}],text:'"small" | "medium" | "large"'},static:!1,readonly:!1,defaultValue:'"medium"'},{name:"label",visibility:"public",description:"Button contents",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"onClick",visibility:"public",description:"The onclick event handler",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1}],name:"Button.svelte"};function te(t,e){_(e,!0),Ge(e.repository());var n=g(),r=p(n);q(r,()=>e.Stories,(i,s)=>{s(i,{})}),u(t,n),C()}te.__docgen={data:[{name:"Stories",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Component<{}, {}, string>"},static:!1,readonly:!1},{name:"repository",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"() => StoriesRepository<Cmp>"},static:!1,readonly:!1}],name:"StoriesExtractor.svelte"};function at(t){switch(typeof t){case"number":case"symbol":return!1;case"string":return t.includes(".")||t.includes("[")||t.includes("]")}}function st(t){return Object.is(t,-0)?"-0":t.toString()}function ot(t){const e=[],n=t.length;if(n===0)return e;let r=0,i="",s="",l=!1;for(t.charCodeAt(0)===46&&(e.push(""),r++);r<n;){const a=t[r];s?a==="\\"&&r+1<n?(r++,i+=t[r]):a===s?s="":i+=a:l?a==='"'||a==="'"?s=a:a==="]"?(l=!1,e.push(i),i=""):i+=a:a==="["?(l=!0,i&&(e.push(i),i="")):a==="."?i&&(e.push(i),i=""):i+=a,r++}return i&&e.push(i),e}function re(t,e,n){if(t==null)return n;switch(typeof e){case"string":{const r=t[e];return r===void 0?at(e)?re(t,ot(e),n):n:r}case"number":case"symbol":{typeof e=="number"&&(e=st(e));const r=t[e];return r===void 0?n:r}default:{if(Array.isArray(e))return lt(t,e,n);Object.is(e==null?void 0:e.valueOf(),-0)?e="-0":e=String(e);const r=t[e];return r===void 0?n:r}}}function lt(t,e,n){if(e.length===0)return n;let r=t;for(let i=0;i<e.length;i++){if(r==null)return n;r=r[e[i]]}return r===void 0?n:r}const{addons:ct}=__STORYBOOK_MODULE_PREVIEW_API__,dt=ct.getChannel(),ut=t=>{const{storyContext:e}=t;if(ft(e))return;const n=yt({code:e.parameters.__svelteCsf.rawCode,args:t.args});setTimeout(()=>{dt.emit(je,{id:e.id,args:e.unmappedArgs,source:n})})},ft=t=>{var i;const e=(i=t==null?void 0:t.parameters.docs)==null?void 0:i.source,n=t==null?void 0:t.parameters.__isArgsStory;return(t==null?void 0:t.parameters.__svelteCsf.rawCode)?(e==null?void 0:e.type)===K.DYNAMIC?!1:!n||(e==null?void 0:e.code)||(e==null?void 0:e.type)===K.CODE:!0},yt=({code:t,args:e})=>{const n=Object.entries(e??{}).map(([s,l])=>mt(s,l)).filter(s=>s);let r=n.join(" ");return r.length>50&&(r=`
  ${n.join(`
  `)}
`),t.replaceAll("{...args}",r).replace(/args(?:[\w\d_$\.\?\[\]"'])+/g,s=>{const l=s.replaceAll("?",""),a=re({args:e},l);return ne(a)})},pt=t=>{var n;const e=((n=t.getMockName)==null?void 0:n.call(t))??t.name;return e&&e!=="spy"?e:"() => {}"},ne=t=>{var e;return typeof t=="object"&&t[Symbol.for("svelte.snippet")]?"snippet":typeof t=="function"?pt(t):(e=JSON.stringify(t,null,1))==null?void 0:e.replace(/\n/g,"").replace(new RegExp("(?<!\\s)([}\\]])$")," $1")},mt=(t,e)=>{if(e==null)return null;if(e===!0)return t;const n=ne(e);return typeof e=="string"?`${t}=${n}`:`${t}={${n}}`};function ie(t,e){_(e,!0);const n=Q();R(()=>{n.set({currentStoryExportName:e.exportName,args:e.args,storyContext:e.storyContext})}),R(()=>{ut({args:e.args,storyContext:e.storyContext})});var r=g(),i=p(r);q(i,()=>e.Stories,(s,l)=>{l(s,{})}),u(t,r),C()}ie.__docgen={data:[{name:"Stories",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Component<{}, {}, string>"},static:!1,readonly:!1},{name:"exportName",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"args",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"intersection",text:"Partial<any> & Partial<{ [x: string]: any; }>"},static:!1,readonly:!1},{name:"storyContext",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"StoryContext<Cmp>"},static:!1,readonly:!1}],name:"StoryRenderer.svelte"};const gt=document.createDocumentFragment?()=>document.createDocumentFragment():()=>document.createElement("div"),bt=(t,e)=>{const n={stories:new Map};try{const i=he(te,{target:gt(),props:{Stories:t,repository:()=>n}});ke(i)}catch(i){console.error(`Error in mounting stories ${i.toString()}`,i)}const r={};for(const[i,s]of n.stories){const l={...s,render:(o,c)=>({Component:ie,props:{exportName:i,Stories:t,storyContext:c,args:o}})},a=e.play??s.play;a&&(l.play=o=>{var f;const c=(f=o.playFunction)==null?void 0:f.__play;return c?c(o):a(o)}),r[i]=l}return r},vt={title:"Example/Button",component:ee,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},size:{control:{type:"select"},options:["small","medium","large"]}},args:{onClick:Te()},parameters:{docs:{description:{component:""}}}},{Story:N}=nt();var ht=L("<!> <!> <!> <!>",1);function ae(t,e){_(e,!1),xe();var n=ht(),r=p(n);N(r,{name:"Primary",args:{primary:!0,label:"Button"},parameters:{docs:{description:{story:"More on writing stories with args: https://storybook.js.org/docs/writing-stories/args"}},__svelteCsf:{rawCode:"<Button {...args} />"}}});var i=M(r,2);N(i,{name:"Secondary",args:{label:"Button"},parameters:{__svelteCsf:{rawCode:"<Button {...args} />"}}});var s=M(i,2);N(s,{name:"Large",args:{size:"large",label:"Button"},parameters:{__svelteCsf:{rawCode:"<Button {...args} />"}}});var l=M(s,2);N(l,{name:"Small",args:{size:"small",label:"Button"},parameters:{__svelteCsf:{rawCode:"<Button {...args} />"}}}),u(t,n),C()}ae.__docgen={version:3,name:"Button.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const F=bt(ae,vt),Ct=["Primary","Secondary","Large","Small"],St=F.Primary,Et=F.Secondary,Ot=F.Large,Nt=F.Small;export{Ot as Large,St as Primary,Et as Secondary,Nt as Small,Ct as __namedExportsOrder,vt as default};

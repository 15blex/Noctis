let U=!1,Yt=!1;function En(){U=!0}const at=!1,E=2,ct=4,X=8,Z=16,b=32,N=64,Y=128,g=256,I=512,v=1024,A=2048,F=4096,O=8192,G=16384,It=32768,vt=65536,mn=1<<17,Mt=1<<19,pt=1<<20,st=Symbol("$state"),Tn=Symbol("legacy props");var kn=Array.isArray,Bt=Array.prototype.indexOf,bn=Array.from,An=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Lt=Object.getOwnPropertyDescriptors,Cn=Object.prototype,Dn=Array.prototype,Vt=Object.getPrototypeOf;function Fn(t){return typeof t=="function"}const On=()=>{};function Rn(t){return t()}function Nn(t){for(var n=0;n<t.length;n++)t[n]()}function Sn(t,n,r=!1){return t===void 0?r?n():n:t}function ht(t){return t===this.v}function Ht(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Ht(t,this.v)}function Ut(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Gt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Kt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function $t(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Pn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Wt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function zt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function tt(t,n){var r={f:0,v:t,reactions:null,equals:ht,rv:0,wv:0};return r}function Yn(t){return wt(tt(t))}function Jt(t,n=!1){var e;const r=tt(t);return n||(r.equals=dt),U&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function In(t,n=!1){return wt(Jt(t,n))}function wt(t){return s!==null&&!x&&s.f&E&&(m===null?rn([t]):m.push(t)),t}function Qt(t,n){return s!==null&&!x&&z()&&s.f&(E|Z)&&(m===null||!m.includes(t))&&zt(),Xt(t,n)}function Xt(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=At(),yt(t,A),z()&&o!==null&&o.f&v&&!(o.f&(b|N))&&(k===null?en([t]):k.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=z(),l=r.length,u=0;u<l;u++){var a=r[u],i=a.f;i&A||!e&&a===o||(T(a,n),i&(v|g)&&(i&E?yt(a,F):W(a)))}}function gt(t){var n=E|A,r=s!==null&&s.f&E?s:null;return o===null||r!==null&&r.f&g?n|=g:o.f|=pt,{ctx:f,deps:null,effects:null,equals:ht,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function Mn(t){const n=gt(t);return n.equals=dt,n}function xt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)D(n[r])}}function Zt(t){for(var n=t.parent;n!==null;){if(!(n.f&E))return n;n=n.parent}return null}function tn(t){var n,r=o;L(Zt(t));try{xt(t),n=Dt(t)}finally{L(r)}return n}function Et(t){var n=tn(t),r=(C||t.f&g)&&t.deps!==null?F:v;T(t,r),t.equals(n)||(t.v=n,t.wv=At())}var ot,nn,mt,Tt;function Bn(){if(ot===void 0){ot=window,nn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;mt=ft(n,"firstChild").get,Tt=ft(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Ln(t=""){return document.createTextNode(t)}function kt(t){return mt.call(t)}function nt(t){return Tt.call(t)}function Vn(t,n){return kt(t)}function Hn(t,n){{var r=kt(t);return r instanceof Comment&&r.data===""?nt(r):r}}function Un(t,n=1,r=!1){let e=t;for(;n--;)e=nt(e);return e}let q=!1,J=!1,M=null,j=!1,rt=!1;function it(t){rt=t}let P=[];let s=null,x=!1;function B(t){s=t}let o=null;function L(t){o=t}let m=null;function rn(t){m=t}let c=null,w=0,k=null;function en(t){k=t}let bt=1,V=0,C=!1;function At(){return++bt}function R(t){var h;var n=t.f;if(n&A)return!0;if(n&F){var r=t.deps,e=(n&g)!==0;if(r!==null){var l,u,a=(n&I)!==0,i=e&&o!==null&&!C,_=r.length;if(a||i){var p=t,y=p.parent;for(l=0;l<_;l++)u=r[l],(a||!((h=u==null?void 0:u.reactions)!=null&&h.includes(p)))&&(u.reactions??(u.reactions=[])).push(p);a&&(p.f^=I),i&&y!==null&&!(y.f&g)&&(p.f^=g)}for(l=0;l<_;l++)if(u=r[l],R(u)&&Et(u),u.wv>t.wv)return!0}(!e||o!==null&&!C)&&T(t,v)}return!1}function ln(t,n){for(var r=n;r!==null;){if(r.f&Y)try{r.fn(t);return}catch{r.f^=Y}r=r.parent}throw q=!1,t}function un(t){return(t.f&G)===0&&(t.parent===null||(t.parent.f&Y)===0)}function K(t,n,r,e){if(q){if(r===null&&(q=!1),un(n))throw t;return}r!==null&&(q=!0);{ln(t,n);return}}function Ct(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var u=e[l];u.f&E?Ct(u,n,!1):n===u&&(r?T(u,A):u.f&v&&T(u,F),W(u))}}function Dt(t){var ut;var n=c,r=w,e=k,l=s,u=C,a=m,i=f,_=x,p=t.f;c=null,w=0,k=null,C=(p&g)!==0&&(x||!j||s===null),s=p&(b|N)?null:t,m=null,_t(t.ctx),x=!1,V++;try{var y=(0,t.fn)(),h=t.deps;if(c!==null){var d;if(H(t,w),h!==null&&w>0)for(h.length=w+c.length,d=0;d<c.length;d++)h[w+d]=c[d];else t.deps=h=c;if(!C)for(d=w;d<h.length;d++)((ut=h[d]).reactions??(ut.reactions=[])).push(t)}else h!==null&&w<h.length&&(H(t,w),h.length=w);if(z()&&k!==null&&!x&&h!==null&&!(t.f&(E|F|A)))for(d=0;d<k.length;d++)Ct(k[d],t);return l!==null&&V++,y}finally{c=n,w=r,k=e,s=l,C=u,m=a,_t(i),x=_}}function an(t,n){let r=n.reactions;if(r!==null){var e=Bt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&E&&(c===null||!c.includes(n))&&(T(n,F),n.f&(g|I)||(n.f^=I),xt(n),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)an(t,r[e])}function $(t){var n=t.f;if(!(n&G)){T(t,v);var r=o,e=f,l=j;o=t,j=!0;try{n&Z?dn(t):St(t),Nt(t);var u=Dt(t);t.teardown=typeof u=="function"?u:null,t.wv=bt;var a=t.deps,i;at&&Yt&&t.f&A}catch(_){K(_,t,r,e||t.ctx)}finally{j=l,o=r}}}function sn(){try{$t()}catch(t){if(M!==null)K(t,M,null);else throw t}}function fn(){try{for(var t=0;P.length>0;){t++>1e3&&sn();var n=P,r=n.length;P=[];for(var e=0;e<r;e++){var l=n[e];l.f&v||(l.f^=v);var u=_n(l);on(u)}}}finally{J=!1,M=null}}function on(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(G|O)))try{R(e)&&($(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){K(l,e,null,e.ctx)}}}function W(t){J||(J=!0,queueMicrotask(fn));for(var n=M=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(N|b)){if(!(r&v))return;n.f^=v}}P.push(n)}function _n(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,l=(e&b)!==0,u=l&&(e&v)!==0,a=r.next;if(!u&&!(e&O)){if(e&ct)n.push(r);else if(l)r.f^=v;else{var i=s;try{s=r,R(r)&&$(r)}catch(y){K(y,r,null,r.ctx)}finally{s=i}}var _=r.first;if(_!==null){r=_;continue}}if(a===null){let y=r.parent;for(;y!==null;){if(t===y)break t;var p=y.next;if(p!==null){r=p;continue t}y=y.parent}}r=a}return n}function Ft(t){var n=t.f,r=(n&E)!==0;if(s!==null&&!x){m!==null&&m.includes(t)&&Wt();var e=s.deps;t.rv<V&&(t.rv=V,c===null&&e!==null&&e[w]===t?w++:c===null?c=[t]:(!C||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,u=l.parent;u!==null&&!(u.f&g)&&(l.f^=g)}return r&&(l=t,R(l)&&Et(l)),t.v}function cn(t){var n=x;try{return x=!0,t()}finally{x=n}}const vn=-7169;function T(t,n){t.f=t.f&vn|n}function Gn(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(st in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&st in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Lt(r);for(let l in e){const u=e[l].get;if(u)try{u.call(t)}catch{}}}}}function Ot(t){o===null&&s===null&&Kt(),s!==null&&s.f&g&&o===null&&Gt(),rt&&Ut()}function pn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function S(t,n,r,e=!0){var l=(t&N)!==0,u=o,a={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:l?null:u,prev:null,teardown:null,transitions:null,wv:0};if(r)try{$(a),a.f|=It}catch(p){throw D(a),p}else n!==null&&W(a);var i=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(pt|Y))===0;if(!i&&!l&&e&&(u!==null&&pn(a,u),s!==null&&s.f&E)){var _=s;(_.effects??(_.effects=[])).push(a)}return a}function Kn(t){Ot();var n=o!==null&&(o.f&b)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:s})}else{var e=Rt(t);return e}}function $n(t){return Ot(),et(t)}function Wn(t){const n=S(N,t,!0);return(r={})=>new Promise(e=>{r.outro?wn(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function Rt(t){return S(ct,t,!1)}function zn(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=et(()=>{t(),!e.ran&&(e.ran=!0,Qt(r.l.r2,!0),cn(n))})}function Jn(){var t=f;et(()=>{if(Ft(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&v&&T(r,F),R(r)&&$(r),n.ran=!1}t.l.r2.v=!1}})}function et(t){return S(X,t,!0)}function Qn(t,n=[],r=gt){const e=n.map(r);return hn(()=>t(...e.map(Ft)))}function hn(t,n=0){return S(X|Z|n,t,!0)}function Xn(t,n=!0){return S(X|b,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=rt,e=s;it(!0),B(null);try{n.call(null)}finally{it(r),B(e)}}}function St(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;D(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&b||D(n),n=r}}function D(t,n=!0){var r=!1;if((n||t.f&Mt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var u=e===l?null:nt(e);e.remove(),e=u}r=!0}St(t,n&&!r),H(t,0),T(t,G);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function wn(t,n){var r=[];jt(t,r,!0),yn(r,()=>{D(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function jt(t,n,r){if(!(t.f&O)){if(t.f^=O,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,u=(e.f&vt)!==0||(e.f&b)!==0;jt(e,n,u?r:!1),e=l}}}function Zn(t){Pt(t,!0)}function Pt(t,n){if(t.f&O){t.f^=O,t.f&v||(t.f^=v),R(t)&&(T(t,A),W(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&vt)!==0||(r.f&b)!==0;Pt(r,l?n:!1),r=e}if(t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&u.in()}}function gn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let f=null;function _t(t){f=t}function tr(t){return lt().get(t)}function nr(t,n){return lt().set(t,n),n}function rr(t){return lt().has(t)}function er(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},U&&!n&&(f.l={s:null,u:null,r1:[],r2:tt(!1)})}function lr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=o,e=s;n.e=null;try{for(var l=0;l<a.length;l++){var u=a[l];L(u.effect),B(u.reaction),Rt(u.fn)}}finally{L(r),B(e)}}f=n.p,n.m=!0}return{}}function z(){return!U||f!==null&&f.l===null}function lt(t){return f===null&&gn(),f.c??(f.c=new Map(xn(f)||void 0))}function xn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}export{Fn as $,An as A,B,L as C,s as D,kt as E,Ln as F,nn as G,Bn as H,bn as I,Wn as J,Xn as K,hn as L,vt as M,Zn as N,wn as O,$n as P,Nn as Q,Rn as R,st as S,Gn as T,gt as U,qn as V,mn as W,Mn as X,dt as Y,Jt as Z,Tn as _,U as a,On as a0,D as a1,rr as a2,Rt as a3,et as a4,zn as a5,Jn as a6,In as a7,Sn as a8,cn as b,f as c,lr as d,Vn as e,Hn as f,tr as g,nr as h,Qt as i,Yn as j,Ft as k,gn as l,En as m,Dn as n,Cn as o,er as p,tt as q,Pn as r,Un as s,Qn as t,Kn as u,ft as v,o as w,jn as x,Vt as y,kn as z};

import{a as _,t as h}from"../chunks/disclose-version.BtIrAeYt.js";import{C as $,D as i,A as x,F as k,G as f,I as d,J as w,K as y,n as a,L as A,M as C,N as D,p as E,f as F,O as G,e as I,P as b,Q as p,R as J}from"../chunks/runtime.CfSKfMM7.js";import{s as l}from"../chunks/render.Bqsea3Pc.js";import{s as K}from"../chunks/entry.CpiQzlrd.js";function L(){const s=x,e=s.l.u;e&&(e.b.length&&$(()=>{g(s),f(e.b)}),i(()=>{const r=k(()=>e.m.map(y));return()=>{for(const t of r)typeof t=="function"&&t()}}),e.a.length&&i(()=>{g(s),f(e.a)}))}function g(s){if(s.l.s)for(const e of s.l.s)d(e);w(s.s)}function M(s,e,r){if(s==null)return e(void 0),a;const t=s.subscribe(e,r);return t.unsubscribe?()=>t.unsubscribe():t}function N(s,e,r){const t=r[e]??(r[e]={store:null,source:C(void 0),unsubscribe:a});if(t.store!==s)if(t.unsubscribe(),t.store=s??null,s==null)t.source.v=void 0,t.unsubscribe=a;else{var u=!0;t.unsubscribe=M(s,n=>{u?t.source.v=n:D(t.source,n)}),u=!1}return d(t.source)}function O(){const s={};return A(()=>{for(var e in s)s[e].unsubscribe()}),s}const P=()=>{const s=K;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},Q={subscribe(s){return P().page.subscribe(s)}};var R=h("<h1> </h1> <p> </p>",1);function B(s,e){E(e,!1);const r=O(),t=()=>N(Q,"$page",r);L();var u=R(),n=F(u),m=b(n);p(n);var o=J(n,2),v=b(o);p(o),G(()=>{var c;l(m,t().status),l(v,(c=t().error)==null?void 0:c.message)}),_(s,u),I()}export{B as component};

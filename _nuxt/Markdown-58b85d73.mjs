import{A as p,D as g,G as h,E as a,H as w,I as y}from"./entry-8de62aae.mjs";var M=p({name:"Markdown",functional:!0,props:{use:{type:[String,Function],default:"default"},unwrap:{type:[Boolean,String],default:!1}},setup(n){const{parent:o}=y(),{between:s}=g();return{tags:h(()=>typeof n.unwrap=="string"?n.unwrap.split(" "):["*"]),between:s,parent:o}},render({use:n,unwrap:o,between:s,tags:l,parent:r}){var f;try{const u=typeof n=="string"?(r==null?void 0:r.slots[n])||((f=r==null?void 0:r.parent)==null?void 0:f.slots[n]):n;if(!u)return a("div");if(!o)return[u()];const{flatUnwrap:d}=w(),i=d(u(),l);return s?i.flatMap((t,e)=>e===0?[t]:[s(),t]):i.reduce((t,e)=>(typeof e.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=e.children:t.push(e.children):t.push(e),t),[])}catch{return a("div")}}});export{M as default};

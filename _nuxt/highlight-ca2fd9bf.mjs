import{a as l,o as n,b as c,e as t,q as a,r,m as o}from"./entry-01cdff04.mjs";const h={props:{src:{type:String,required:!0},bgsrc:{type:[String,void 0],default:void 0},alt:{type:String,default:""},florish:{type:Boolean,default:!1}},computed:{bgsrc_(){var e;return(e=this.bgsrc)!=null?e:this.src}}},g={class:"content-highlight grid"},d={class:"content-highlight-bg"},_=t("div",{class:"content-highlight-bg-color"},null,-1),u=t("div",{class:"content-highlight-imgbacking"},null,-1),f=["src","alt"];function m(e,b,s,v,p,i){return n(),c("div",g,[t("div",d,[t("div",{class:"content-highlight-bg-img",style:a({backgroundImage:`url(${i.bgsrc_})`})},null,4),_]),t("div",{class:o(["content-highlight-content",{florish:s.florish}])},[r(e.$slots,"default")],2),u,t("img",{class:"content-highlight-img",src:s.src,alt:s.alt},null,8,f)])}var S=l(h,[["render",m]]);export{S as default};
import{s as g,v as h,x as m,a as l,o as a,b as c,l as d,f as r,y as p,z as f,r as _,q as y,e as S}from"./entry-8d0090fa.mjs";const v=g({name:"NuxtPicture",mixins:[h],props:{legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},head(){if(this.preload===!0){const s=typeof this.nSources[1]!="undefined"?1:0,t={rel:"preload",as:"image",imagesrcset:this.nSources[s].srcset};return typeof this.nSources[s].sizes!="undefined"&&(t.imagesizes=this.nSources[s].sizes),{link:[t]}}return{}},computed:{isTransparent(){return["png","webp","gif"].includes(this.originalFormat)},originalFormat(){return m(this.src)},nFormat(){return this.format?this.format:this.originalFormat==="svg"?"svg":"webp"},nLegacyFormat(){return this.legacyFormat?this.legacyFormat:{webp:this.isTransparent?"png":"jpeg",svg:"png"}[this.nFormat]||this.originalFormat},nSources(){return this.nFormat==="svg"?[{srcset:this.src}]:(this.nLegacyFormat!==this.nFormat?[this.nLegacyFormat,this.nFormat]:[this.nFormat]).map(e=>{const{srcset:n,sizes:o,src:i}=this.$img.getSizes(this.src,{...this.nOptions,sizes:this.sizes||this.$img.options.screens,modifiers:{...this.nModifiers,format:e}});return{src:i,type:`image/${e}`,sizes:o,srcset:n}})}},created(){}}),z=["type","srcset","sizes"],F=["src","srcset","sizes"];function b(s,t,e,n,o,i){return a(),c("picture",{key:s.nSources[0].src},[s.nSources[1]?(a(),c("source",{key:0,type:s.nSources[1].type,srcset:s.nSources[1].srcset,sizes:s.nSources[1].sizes},null,8,z)):d("",!0),r("img",p({...s.nImgAttrs,...s.imgAttrs},{src:s.nSources[0].src,srcset:s.nSources[0].srcset,sizes:s.nSources[0].sizes}),null,16,F)])}var $=l(v,[["render",b]]);const k={props:{src:{type:String,required:!0},bgsrc:{type:[String,void 0],default:void 0},alt:{type:String,default:""},florish:{type:Boolean,default:!1}},computed:{bgsrc_(){var s;return(s=this.bgsrc)!=null?s:this.src}}},w={class:"content-highlight grid"},B={class:"content-highlight-bg"},N=r("div",{class:"content-highlight-bg-color"},null,-1);function A(s,t,e,n,o,i){const u=$;return a(),c("div",w,[r("div",B,[r("div",{class:"content-highlight-bg-img",style:f({backgroundImage:`url(${i.bgsrc_})`})},null,4),N]),r("div",{class:y(["content-highlight-content",{florish:e.florish}])},[_(s.$slots,"default")],2),S(u,{class:"content-highlight-img",src:e.src,alt:e.alt,placeholder:"",sizes:"sm:100vw md:50vw lg:600px"},null,8,["src","alt"])])}var L=l(k,[["render",A]]);export{L as default};

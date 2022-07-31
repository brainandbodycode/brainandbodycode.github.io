import{q as n,s as g,v as h,a as l,o as c,b as d,j as p,e as i,x as m,y as f,r as y,m as v,z as S}from"./entry-c8dfbb5e.mjs";const _={props:{src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)},loading:{type:String,default:void 0},decoding:{type:String,default:void 0,validator:t=>["async","auto","sync"].includes(t)}},computed:{nImgAttrs(){return{width:n(this.width),height:n(this.height),alt:this.alt,referrerpolicy:this.referrerpolicy,usemap:this.usemap,longdesc:this.longdesc,ismap:this.ismap,crossorigin:this.crossorigin===!0?"anonymous":this.crossorigin||void 0,loading:this.loading,decoding:this.decoding}},nModifiers(){return{...this.modifiers,width:n(this.width),height:n(this.height),format:this.format,quality:this.quality,background:this.background,fit:this.fit}},nOptions(){return{provider:this.provider,preset:this.preset}}}},b=g({name:"NuxtPicture",mixins:[_],props:{legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},head(){if(this.preload===!0){const t=typeof this.nSources[1]!="undefined"?1:0,s={rel:"preload",as:"image",imagesrcset:this.nSources[t].srcset};return typeof this.nSources[t].sizes!="undefined"&&(s.imagesizes=this.nSources[t].sizes),{link:[s]}}return{}},computed:{isTransparent(){return["png","webp","gif"].includes(this.originalFormat)},originalFormat(){return h(this.src)},nFormat(){return this.format?this.format:this.originalFormat==="svg"?"svg":"webp"},nLegacyFormat(){return this.legacyFormat?this.legacyFormat:{webp:this.isTransparent?"png":"jpeg",svg:"png"}[this.nFormat]||this.originalFormat},nSources(){return this.nFormat==="svg"?[{srcset:this.src}]:(this.nLegacyFormat!==this.nFormat?[this.nLegacyFormat,this.nFormat]:[this.nFormat]).map(e=>{const{srcset:o,sizes:a,src:r}=this.$img.getSizes(this.src,{...this.nOptions,sizes:this.sizes||this.$img.options.screens,modifiers:{...this.nModifiers,format:e}});return{src:r,type:`image/${e}`,sizes:a,srcset:o}})}},created(){}}),z=["type","srcset","sizes"],F=["src","srcset","sizes"];function $(t,s,e,o,a,r){return c(),d("picture",{key:t.nSources[0].src},[t.nSources[1]?(c(),d("source",{key:0,type:t.nSources[1].type,srcset:t.nSources[1].srcset,sizes:t.nSources[1].sizes},null,8,z)):p("",!0),i("img",m({...t.nImgAttrs,...t.imgAttrs},{src:t.nSources[0].src,srcset:t.nSources[0].srcset,sizes:t.nSources[0].sizes}),null,16,F)])}var k=l(b,[["render",$]]);const w={props:{src:{type:String,required:!0},bgsrc:{type:[String,void 0],default:void 0},alt:{type:String,default:""},florish:{type:Boolean,default:!1}},computed:{bgsrc_(){var t;return(t=this.bgsrc)!=null?t:this.src}}},B={class:"content-highlight grid"},N={class:"content-highlight-bg"},q=i("div",{class:"content-highlight-bg-color"},null,-1);function j(t,s,e,o,a,r){const u=k;return c(),d("div",B,[i("div",N,[i("div",{class:"content-highlight-bg-img",style:f({backgroundImage:`url(${r.bgsrc_})`})},null,4),q]),i("div",{class:v(["content-highlight-content",{florish:e.florish}])},[y(t.$slots,"default")],2),S(u,{class:"content-highlight-img",src:e.src,alt:e.alt,placeholder:"",sizes:"sm:100vw md:50vw lg:600px"},null,8,["src","alt"])])}var A=l(w,[["render",j]]);export{A as default};

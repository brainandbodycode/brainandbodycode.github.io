import{a as c,o as e,b as t,e as s,j as m,k as d,l as p}from"./entry-c8dfbb5e.mjs";const u={data(){return{loading:!1,submitted:!1}},methods:{async onSubmit(){this.loading=!0;const n=this.$refs.form;(await(await fetch("https://script.google.com/macros/s/AKfycbwayz36om-CC08N2L3gMvb8aFx2q7j75VCIT4MgRbOnkPSITC8UCNKiC0EotFF6WNJa/exec",{method:"POST",body:new FormData(n)})).json()).result==="success"?this.submitted=!0:this.loading=!1}}},b={class:"grid",ref:"contact"},_={class:"contact-form"},h={key:0,class:"contact-heading"},f={key:1},y=s("h2",null,"Thank you for you submission.",-1),g=s("p",null,"We will get back to you shortly.",-1),k=[y,g],v=p('<label for="fname"><span>First Name</span><input type="text" name="fname" placeholder="First name" required></label><label for="lname"><span>Last Name</span><input type="text" name="lname" placeholder="Last name" required></label><label for="email"><span>Email</span><input type="email" name="email" placeholder="Email" required></label><label for="subject"><span>Subject</span><input type="text" name="subject" placeholder="Subject" required></label><label for="travel"><span>What area will we be traveling to?</span><input type="text" name="travel" placeholder="Downtown Spokane, Spokane Valley, Deer Park, Liberty Lake" required></label><label for="message"><span>Message</span><textarea required name="message" cols="30" rows="10" placeholder="I would like more information on how to relieve tension, help my kiddo, receive an in-home massage\u2026"></textarea></label>',6),w=["disabled"],S={key:0},x={key:1};function F(n,o,r,N,a,l){return e(),t("div",b,[s("div",_,[a.submitted?m("",!0):(e(),t("h2",h,"Lets start our conversation")),a.submitted?(e(),t("div",f,k)):(e(),t("form",{key:2,ref:"form",class:"contact-form-form",onSubmit:o[0]||(o[0]=d((...i)=>l.onSubmit&&l.onSubmit(...i),["prevent"]))},[v,s("button",{type:"submit",disabled:a.loading},[a.loading?(e(),t("span",S,"Sending Message")):(e(),t("span",x,"Send Message"))],8,w)],544))])],512)}var q=c(u,[["render",F]]);export{q as default};

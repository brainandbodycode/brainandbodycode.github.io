import{a as c,o as e,b as t,e as a,j as m,k as d,l as p}from"./entry-0fe981e4.mjs";const u={data(){return{loading:!1,submitted:!1}},methods:{async onSubmit(){this.loading=!0;const n=this.$refs.form;(await(await fetch("https://script.google.com/macros/s/AKfycbwJKyKiYuD5h7N3acq6wHOT3b_ZrGDoKz-UjmK-jcbC-izepEde9k9SmWFoK3vrr5WY/exec",{method:"POST",body:new FormData(n)})).json()).result==="success"?this.submitted=!0:this.loading=!1}}},h={class:"grid",ref:"contact"},b={class:"contact-form"},_={key:0,class:"contact-heading"},f={key:1},y=a("h2",null,"Thank you for you submission.",-1),g=a("p",null,"We will get back to you shortly.",-1),v=[y,g],k=p('<label for="fname"><span>First Name</span><input type="text" name="fname" placeholder="First name" required></label><label for="lname"><span>Last Name</span><input type="text" name="lname" placeholder="Last name" required></label><label for="email"><span>Email</span><input type="email" name="email" placeholder="Email" required></label><label for="phone"><span>Phone Number</span><input type="tel" name="phone" placeholder="Phone" required></label><label for="subject"><span>Subject</span><input type="text" name="subject" placeholder="Subject" required></label><label for="travel"><span>What area will we be traveling to?</span><input type="text" name="travel" placeholder="Downtown Spokane, Spokane Valley, Deer Park, Liberty Lake" required></label><label for="message"><span>Message</span><textarea required name="message" cols="30" rows="10" placeholder="I would like more information on how to relieve tension, help my kiddo, receive an in-home massage\u2026"></textarea></label>',7),w=["disabled"],S={key:0},x={key:1},j=a("input",{type:"text",name:"travelmsg",placeholder:"Travel Message",class:"contact-form-form-travel"},null,-1);function q(n,o,r,N,s,l){return e(),t("div",h,[a("div",b,[s.submitted?m("",!0):(e(),t("h2",_,"Lets start our conversation")),s.submitted?(e(),t("div",f,v)):(e(),t("form",{key:2,ref:"form",class:"contact-form-form",onSubmit:o[0]||(o[0]=d((...i)=>l.onSubmit&&l.onSubmit(...i),["prevent"]))},[k,a("button",{type:"submit",disabled:s.loading},[s.loading?(e(),t("span",S,"Sending Message")):(e(),t("span",x,"Send Message"))],8,w),j],544))])],512)}var K=c(u,[["render",q]]);export{K as default};
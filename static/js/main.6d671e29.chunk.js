(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{103:function(e,t,n){},352:function(e,t,n){},354:function(e,t,n){},355:function(e,t,n){},356:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),s=n(53),o=n.n(s),r=(n(103),n(24)),c=n(25),l=n(27),d=n(26),h=n(97),u=n.n(h),b=n(54),m=n.n(b),g=(n(352),n(2)),p=function(e){var t=e.imageUrl,n=e.box;return Object(g.jsx)("div",{className:"center ma",children:Object(g.jsxs)("div",{className:"absolute mt2",children:[Object(g.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),Object(g.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})},j=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(g.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(g.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(g.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(g.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(g.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://hidden-taiga-21277.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(g.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(g.jsx)("main",{className:"pa4 black-80",children:Object(g.jsxs)("div",{className:"measure",children:[Object(g.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(g.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(g.jsxs)("div",{className:"mt3",children:[Object(g.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(g.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(g.jsxs)("div",{className:"mv3",children:[Object(g.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(g.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(g.jsx)("div",{className:"",children:Object(g.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(g.jsx)("div",{className:"lh-copy mt3",children:Object(g.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(i.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://hidden-taiga-21277.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(g.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(g.jsx)("main",{className:"pa4 black-80",children:Object(g.jsxs)("div",{className:"measure",children:[Object(g.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(g.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(g.jsxs)("div",{className:"mt3",children:[Object(g.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(g.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(g.jsxs)("div",{className:"mt3",children:[Object(g.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(g.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(g.jsxs)("div",{className:"mv3",children:[Object(g.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(g.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(g.jsx)("div",{className:"",children:Object(g.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(i.a.Component),w=n(98),v=n.n(w),x=(n(354),function(){return Object(g.jsx)("div",{className:"ma4 mt0",children:Object(g.jsx)(v.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(g.jsx)("div",{className:"Tilt-inner pa3",children:Object(g.jsx)("img",{style:{paddingTop:"5px"},alt:"logo",src:"data:image/png;base64,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"})})})})}),N=(n(355),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Git it a try."}),Object(g.jsx)("div",{className:"center",children:Object(g.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(g.jsx)("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),Object(g.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),A=function(e){var t=e.name,n=e.entries;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"white f3",children:"".concat(t,", your current entry count is...")}),Object(g.jsx)("div",{className:"white f1",children:n})]})},C=(n(356),new m.a.App({apiKey:"e8c616aec8a34b73adfd146d2db4b387"})),k={particles:{number:{value:30,density:{enable:!0,value_area:800}}}},y={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),i=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*i,rightCol:a-t.right_col*a,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),C.models.predict(m.a.FACE_DETECT_MODEL,e.state.input).then((function(t){console.log("hi",t),t&&fetch("https://hidden-taiga-21277.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(y):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=y,e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,i=e.box;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(u.a,{className:"particles",params:k}),Object(g.jsx)(j,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?Object(g.jsxs)("div",{children:[Object(g.jsx)(x,{}),Object(g.jsx)(A,{name:this.state.user.name,entries:this.state.user.entries}),Object(g.jsx)(N,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(g.jsx)(p,{box:i,imageUrl:n})]}):"signin"===a?Object(g.jsx)(f,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(g.jsx)(O,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(357);o.a.render(Object(g.jsx)(R,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/face",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/face","/service-worker.js");S?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):I(e)}))}}()}},[[358,1,2]]]);
//# sourceMappingURL=main.6d671e29.chunk.js.map
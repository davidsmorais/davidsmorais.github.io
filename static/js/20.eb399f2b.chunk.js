(this.webpackJsonpdsmorais=this.webpackJsonpdsmorais||[]).push([[20],{192:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(122),i=t(123),r=t(167),s=t.n(r),o=t(121),d=t(61),l=t(36),u=t(30),b=t(196),m=t(168),j=t.n(m),h=function(e){var n=Object(a.useState)({}),t=Object(u.a)(n,2),c=t[0],i=t[1],r=Object(a.useState)({}),s=Object(u.a)(r,2),o=s[0],m=s[1],h=Object(a.useState)(!1),p=Object(u.a)(h,2),O=p[0],x=p[1];Object(a.useEffect)((function(){var e;0===Object.keys(o).length&&O&&(i(""),e="success",b.a[e]({message:"Success",description:"Your message has been sent!"}))}),[o,O]);return{handleChange:function(e){e.persist(),i((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(d.a)({},e.target.name,e.target.value))})),m((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(d.a)({},e.target.name,""))}))},handleSubmit:function(n){n.preventDefault(),m(e(c));3===Object.keys(c).length&&j.a.post("",Object(l.a)({},c)).then((function(){x(!0)}))},values:c,errors:o}};function p(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var O,x,g,f,v,y,w,S,k,C,E=t(4),Y=t(3),q=t(126),z=Object(Y.c)(q.h)(O||(O=Object(E.a)(["\nposition: relative;\nbottom: calc(72px * 1.75);\ncolor:",""])),(function(e){return e.theme.background})),M=Object(Y.c)(q.h)(x||(x=Object(E.a)(["\n  color: ",";\n  position: relative;\n  bottom: calc(72px);\n"])),(function(e){return e.theme.text})),N=Object(Y.c)(q.c)(g||(g=Object(E.a)(["\nheight: 100%;\nflex: 1;\nmax-width: 50%;\njustify-content: space-between"]))),J=Y.c.div(f||(f=Object(E.a)(["\n  padding: 5rem 0;\n  height: 100%;\n"]))),D=Y.c.section(v||(v=Object(E.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n"]))),U=(Y.c.div(y||(y=Object(E.a)(["\n  @media only screen and (min-width: 980px) {\n    padding: 10rem 7rem;\n  }\n"]))),Y.c.form(w||(w=Object(E.a)(["\n  width: 100%;\n  background: ",";\n  padding: ","px;\n  padding-bottom: ","px;\n  max-width: 520px;\n  border: 1px solid ",";\n  transition: all 0.5s;\n  box-shadow: none;\n  &:hover {\n    box-shadow: 0px -2px 10px ",";\n    border: 1px solid ",";\n  }\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"])),(function(e){return e.theme.background}),(function(e){return 2*e.theme.margin}),(function(e){return 4*e.theme.margin}),(function(e){return e.theme.accent.secondary}),(function(e){return e.theme.accent.main}),(function(e){return e.theme.accent.main}))),A=Object(Y.c)(q.g)(S||(S=Object(E.a)(["\n  color: ",";\n  margin: ","px;\n"])),(function(e){return e.theme.accent.secondary}),(function(e){return e.theme.margin})),B=Y.c.span(k||(k=Object(E.a)(["\n  display: block;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),F=Y.c.div(C||(C=Object(E.a)(["\n  text-align: end;\n  position: relative;\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),G=t(1),H=Object(a.lazy)((function(){return t.e(16).then(t.bind(null,197))})),I=Object(a.lazy)((function(){return t.e(5).then(t.bind(null,146))})),K=Object(a.lazy)((function(){return t.e(18).then(t.bind(null,198))}));n.default=Object(o.a)()((function(e){var n=e.title,t=e.id,a=e.t,r=e.subtitle,o=h(p),d=o.values,l=o.errors,u=o.handleChange,b=o.handleSubmit,m=function(e){var n=e.type,t=l[n];return l[n]?Object(G.jsx)(s.a,{cascade:!0,children:Object(G.jsx)(B,{children:t})}):Object(G.jsx)(B,{})},j=function(){var e=n.split("\n");return{top:(null===e||void 0===e?void 0:e[0])||"",bottom:(null===e||void 0===e?void 0:e[1])||""}}();return Object(G.jsx)(J,{id:t,children:Object(G.jsx)(D,{children:Object(G.jsxs)(c.a,{type:"flex",justify:"space-between",align:"middle",children:[Object(G.jsxs)(N,{children:[Object(G.jsx)(z,{children:j.top}),Object(G.jsx)(M,{children:j.bottom})]}),Object(G.jsx)(i.a,{children:Object(G.jsxs)(U,{autoComplete:"off",onSubmit:b,children:[Object(G.jsx)(A,{children:r}),Object(G.jsxs)(i.a,{span:24,children:[Object(G.jsx)(H,{type:"text",name:"name",id:"Name",placeholder:"Your Name",value:d.name||"",onChange:u}),Object(G.jsx)(m,{type:"name"})]}),Object(G.jsxs)(i.a,{span:24,children:[Object(G.jsx)(H,{type:"text",name:"email",id:"Email",placeholder:"Your Email",value:d.email||"",onChange:u}),Object(G.jsx)(m,{type:"email"})]}),Object(G.jsxs)(i.a,{span:24,children:[Object(G.jsx)(K,{placeholder:"Your Message",value:d.message||"",name:"message",id:"Message",onChange:u}),Object(G.jsx)(m,{type:"message"})]}),Object(G.jsx)(F,{children:Object(G.jsx)(I,{name:"submit",type:"submit",children:a("Submit")})})]})})]})})})}))}}]);
//# sourceMappingURL=20.eb399f2b.chunk.js.map
(this["webpackJsonpapp-vacinas"]=this["webpackJsonpapp-vacinas"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),s=a.n(i);a(95),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,169)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))},o=a(35),l=a(11),j=a(150),d=a(147),b=a(149),u=a(53),h=a(156),p=a(151),x=a(165),O=a(144),v=a(3),m=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var f=function(){var e=m(),t=Object(l.f)();return Object(v.jsxs)("div",{children:[Object(v.jsx)(d.a,{position:"static",children:Object(v.jsx)(b.a,{children:Object(v.jsx)(u.a,{variant:"h6",className:e.title,children:"Vacinas"})})}),Object(v.jsxs)(j.a,{children:[Object(v.jsx)(p.a,{}),Object(v.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var a=e.target.elements.user.value,n=e.target.elements.password.value;console.log(a+n),t.push("/vacinas/selecao")},children:[Object(v.jsx)(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"user",label:"Usu\xe1rio",name:"user",autoComplete:"user",autoFocus:!0}),Object(v.jsx)(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",id:"password",autoComplete:"current-password"}),Object(v.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Entrar"})]})]})]})},g=a(63),C=a(34),w=a(167),N=a(158),S=a(164),y=a(166),k=a(157),D=a(154),V=a(163),I=Object(O.a)((function(e){return{stepper:{position:"fixed",bottom:0,width:"100%"},buttons:{position:"fixed",bottom:100,right:20},formControl:{margin:e.spacing(1),minWidth:200},buttonConfirmar:{position:"fixed",bottom:100,left:"50%",width:120,"margin-left":"-60px"}}}));var P=function(){var e=I(),t=c.a.useState(0),a=Object(C.a)(t,2),n=a[0],i=a[1],s=["Selecione o grupo","Selecione a vacina","Selecione o lote"],r=c.a.useState(""),o=Object(C.a)(r,2),x=o[0],O=o[1],m=c.a.useState(""),f=Object(C.a)(m,2),P=f[0],T=f[1],A=c.a.useState(""),F=Object(C.a)(A,2),L=F[0],W=F[1],B=["Trabalhadores de Sa\xfade","Pessoas de 80 anos ou mais"],J=["Coronavac","Pfizer","Oxford"],G=["45604654","70546Z5646","4654546"],q=[x,P,L],E=Object(l.f)(),M=function(e){O(e.target.value)},U=function(e){T(e.target.value)},z=function(e){W(e.target.value)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(d.a,{position:"static",children:Object(v.jsx)(b.a,{children:Object(v.jsx)(u.a,{variant:"h6",className:e.title,children:"Vacinas"})})}),n===s.length?Object(v.jsxs)(j.a,{children:[Object(v.jsxs)("p",{children:["Grupo: ",x]}),Object(v.jsxs)("p",{children:["Vacina: ",P]}),Object(v.jsxs)("p",{children:["Lote: ",L]}),Object(v.jsx)("div",{className:e.centerDiv,children:Object(v.jsx)(h.a,{variant:"contained",color:"primary",className:e.buttonConfirmar,onClick:function(e){E.push("/vacinas/listavacinados",{grupo:x,vacina:P,lote:L})},children:"Confirmar"})})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{textAlign:"center"},children:function(t){switch(t){case 0:return Object(v.jsxs)(D.a,{className:e.formControl,children:[Object(v.jsx)(y.a,{id:"grupo-select-label",children:"Grupo"}),Object(v.jsx)(V.a,{labelId:"grupo-select-label",id:"grupo-select",value:x,onChange:M,children:B.map((function(e){return Object(v.jsx)(k.a,{value:e,children:e},e)}))})]});case 1:return Object(v.jsxs)(D.a,{className:e.formControl,children:[Object(v.jsx)(y.a,{id:"vacina-select-label",children:"Vacina"}),Object(v.jsx)(V.a,{labelId:"vacina-select-label",id:"vacina-select",value:P,onChange:U,children:J.map((function(e){return Object(v.jsx)(k.a,{value:e,children:e},e)}))})]});case 2:return Object(v.jsxs)(D.a,{className:e.formControl,children:[Object(v.jsx)(y.a,{id:"lote-select-label",children:"Lote"}),Object(v.jsx)(V.a,{labelId:"lote-select-label",id:"lote-select",value:L,onChange:z,children:G.map((function(e){return Object(v.jsx)(k.a,{value:e,children:e},e)}))})]});default:return"Unknown step"}}(n)}),Object(v.jsxs)("div",{className:e.buttons,children:[Object(v.jsx)(h.a,{disabled:0===n,onClick:function(){i((function(e){return e+-1}))},children:"Voltar"}),Object(v.jsx)(h.a,{disabled:""===q[n],variant:"contained",color:"primary",onClick:function(){i((function(e){return e+1}))},children:"Pr\xf3ximo"})]})]}),Object(v.jsx)("div",{className:e.stepper,children:Object(v.jsx)(w.a,{activeStep:n,children:s.map((function(e,t){return Object(v.jsx)(N.a,Object(g.a)(Object(g.a)({},{}),{},{children:Object(v.jsx)(S.a,{children:e})}),e)}))})})]})},T=a(159),A=a(160),F=a(161),L=a(155),W=a(113),B=a(162),J=Object(O.a)((function(e){return{card:{marginTop:"20px"},buttonDiv:{position:"fixed",bottom:20,textAlign:"center",width:"100%"},buttonAdd:{width:"100px"}}}));var G=function(e){var t=J(),a=e.location.state.grupo,n=e.location.state.vacina,c=e.location.state.lote,i=[{nome:"Jo\xe3o da Silva",cpf:"12312512412"},{nome:"Pedro dos Santos",cpf:"64525625655"},{nome:"Maria da Silva",cpf:"21412421487"}],s=Object(l.f)();return Object(v.jsxs)("div",{children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(d.a,{position:"static",children:Object(v.jsx)(b.a,{children:Object(v.jsx)(u.a,{variant:"h6",children:"Vacinas"})})}),Object(v.jsx)(T.a,{className:t.card,children:Object(v.jsxs)(A.a,{children:[Object(v.jsxs)("p",{children:["Grupo: ",a]}),Object(v.jsxs)("p",{children:["Vacina: ",n]}),Object(v.jsxs)("p",{children:["Lote: ",c]})]})}),Object(v.jsx)(F.a,{variant:"middle"}),Object(v.jsx)(u.a,{variant:"h6",children:"Registros de vacina\xe7ao"}),Object(v.jsx)(L.a,{dense:!0,children:i.map((function(e){return Object(v.jsx)(W.a,{button:!0,divider:!0,children:Object(v.jsx)(B.a,{primary:e.nome,secondary:e.cpf})},e.cpf)}))}),Object(v.jsx)("div",{className:t.buttonDiv,children:Object(v.jsx)(h.a,{variant:"contained",color:"primary",className:t.buttonAdd,onClick:function(){s.push("/vacinas/vacinar")},children:"Adicionar"})})]})},q=a(73),E=a.n(q),M=Object(O.a)((function(e){return{divCpf:{width:"100%",textAlign:"center"},tfCpf:{width:"90%"},button:{marginTop:"20px"},pacienteDiv:{paddingLeft:"20px"}}}));var U=function(e){var t=M(),a=c.a.useState(!1),n=Object(C.a)(a,2),i=n[0],s=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(d.a,{position:"static",children:Object(v.jsx)(b.a,{children:Object(v.jsx)(u.a,{variant:"h6",children:"Vacinas"})})}),Object(v.jsxs)("div",{className:t.divCpf,children:[Object(v.jsx)(u.a,{variant:"h6",children:"Buscar paciente"}),Object(v.jsx)(x.a,{className:t.tfCpf,id:"cpf",label:"CPF"}),Object(v.jsx)(h.a,{variant:"contained",color:"primary",className:t.button,startIcon:Object(v.jsx)(E.a,{}),onClick:function(){s(!0)},children:"Buscar"})]}),i?Object(v.jsxs)("div",{className:t.pacienteDiv,children:[Object(v.jsx)("p",{children:"Jo\xe3o da Silva"}),Object(v.jsx)("p",{children:"Data de nascimento: 01/01/1980"}),Object(v.jsx)("p",{children:"Sexo Masculino"})]}):null]})},z=function(){return Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{path:"/vacinas/",component:f,exact:!0}),Object(v.jsx)(l.a,{path:"/vacinas/selecao",component:P}),Object(v.jsx)(l.a,{path:"/vacinas/listavacinados",component:G}),Object(v.jsx)(l.a,{path:"/vacinas/vacinar",component:U})]})};s.a.render(Object(v.jsx)(o.a,{children:Object(v.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),r()},95:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.fe8424c9.chunk.js.map
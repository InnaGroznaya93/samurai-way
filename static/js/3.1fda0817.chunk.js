"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[3],{8003:function(s,e,a){a.r(e),a.d(e,{default:function(){return h}});var i=a(8281),n=a(1413),t=(a(2791),{dialogs:"Dialogs_dialogs__U6hkX",dialogsItems:"Dialogs_dialogsItems__o0Fa6",active:"Dialogs_active__ZDsTW",messages:"Dialogs_messages__GB9tN",message:"Dialogs_message__ao-i8",input:"Dialogs_input__ODqfs",btn:"Dialogs_btn__vM1Bv"}),r=a(1523),l=a(184),d=function(s){var e="/dialogs/"+s.id;return(0,l.jsx)("div",{className:t.dialog+" "+t.active,children:(0,l.jsx)(r.OL,{to:e,children:s.name})})},o=function(s){return(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:t.message,children:s.message})})},g=a(5705),m=function(s){var e=(0,g.TA)({initialValues:{message:""},validate:function(s){var e={};return s.message||(e.message="enter your message"),e},onSubmit:function(a){console.log(JSON.stringify(a)),s.sendMessage(a.message),e.resetForm()}});return(0,l.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("input",(0,n.Z)((0,n.Z)({type:"text",placeholder:"Enter your message"},e.getFieldProps("message")),{},{className:t.input})),e.touched.message&&e.errors.message?(0,l.jsx)("div",{style:{color:"red",margin:"3px"},children:e.errors.message}):(0,l.jsx)("div",{style:{height:"38px"}})]}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{className:t.btn,type:"submit",children:"send"})})]})},u=function(s){var e=s.dialogsPage.dialogsData.map((function(s){return(0,l.jsx)(d,{id:s.id,name:s.userName},s.id)})),a=s.dialogsPage.messagesData.map((function(s){return(0,l.jsx)(o,{message:s.message},s.id)}));return(0,l.jsxs)("div",{className:t.dialogs,children:[(0,l.jsx)("div",{className:t.dialogsItems,children:e}),(0,l.jsx)("div",{className:t.messages,children:(0,l.jsx)("div",{children:a})}),(0,l.jsx)(m,(0,n.Z)({},s))]})},c=a(364),_=a(2932),h=(0,a(7781).qC)((0,c.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{sendMessage:function(e){s((0,i.d)(e))}}})),_.e)(u)}}]);
//# sourceMappingURL=3.1fda0817.chunk.js.map
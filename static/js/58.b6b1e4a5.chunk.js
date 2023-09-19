"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[58],{3058:function(e,s,t){t.r(s),t.d(s,{default:function(){return K}});var i=t(5671),n=t(3144),o=t(136),r=t(5716),a=t(2791),l=t(5861),c=t(885),u=t(7757),d=t.n(u),h="ProfileInfo_descriptionBlock__FuPwT",p="ProfileInfo_mainBlock__bJasl",f="ProfileInfo_mainPhoto__-3sBu",x="ProfileInfo_btn__k0VGu",j="ProfileInfo_dataBlock__hyDE0",v="ProfileInfo_infoBlock__Xo9y6",m="ProfileInfo_contact__tdDAa",b=t(4374),P=t(184),_=function(e){var s=(0,a.useState)(!1),t=(0,c.Z)(s,2),i=t[0],n=t[1],o=(0,a.useState)(e.status),r=(0,c.Z)(o,2),l=r[0],u=r[1];(0,a.useEffect)((function(){u(e.status)}),[e.status]);return(0,P.jsxs)("div",{children:[!i&&(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Status: "}),(0,P.jsx)("span",{onDoubleClick:function(){e.isOwner&&n(!0)},children:l||e.status||"----"})]}),i&&(0,P.jsx)("div",{children:(0,P.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatusTC(l),u(e.status)},value:l})})]})},g=t(4353),k=t(5987),y=t(1413),w=t(5705),C=["value"],S=function(e){var s,t,i,n,o,r=e.profile,l=e.onSubmit,u=(0,a.useState)(""),d=(0,c.Z)(u,2),h=d[0],p=d[1],f=(0,a.useState)(""),j=(0,c.Z)(f,2),b=j[0],_=j[1],g=(0,w.TA)({initialValues:{fullName:null!==(s=r.fullName)&&void 0!==s?s:"",lookingForAJob:null!==(t=r.lookingForAJob)&&void 0!==t?t:"",lookingForAJobDescription:null!==(i=r.lookingForAJobDescription)&&void 0!==i?i:"",aboutMe:null!==(n=r.aboutMe)&&void 0!==n?n:"",contacts:null!==(o=r.contacts)&&void 0!==o?o:""},onSubmit:function(e,s){var t;l(e).then((function(e){p(e),e&&(t=e.split("Invalid url format (Contacts->")[1].slice(0,-1).toLowerCase(),_(t),s.setFieldError(b,e+""))})).catch((function(e){s.setFieldError(t,e)}))}});return(0,P.jsxs)("form",{onSubmit:g.handleSubmit,children:[(0,P.jsx)("div",{children:(0,P.jsx)("button",{className:x,type:"submit",children:"Save"})}),(0,P.jsxs)("div",{className:v,children:[(0,P.jsx)("b",{children:"Full name:"}),(0,P.jsx)("div",{children:(0,P.jsx)("input",(0,y.Z)({placeholder:"Full name"},g.getFieldProps("fullName")))})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Looking for a job:"}),(0,P.jsx)("input",(0,y.Z)({type:"checkbox"},g.getFieldProps("lookingForAJob")))]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"My professional skills:"}),(0,P.jsx)("textarea",(0,y.Z)({placeholder:"lookingForAJobDescription"},g.getFieldProps("lookingForAJobDescription")))]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"About me:"}),(0,P.jsx)("div",{children:(0,P.jsx)("textarea",(0,y.Z)({placeholder:"About me"},g.getFieldProps("aboutMe")))})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(r.contacts).map((function(e){var s=g.getFieldProps("contacts."+e),t=s.value,i=(0,k.Z)(s,C);return(0,P.jsxs)("div",{className:m,children:[(0,P.jsxs)("b",{children:[e,": ",(0,P.jsx)("div",{children:(0,P.jsx)("input",(0,y.Z)({placeholder:e,value:null!==t&&void 0!==t?t:""},i))})]}),b===e&&(0,P.jsx)("div",{style:{margin:"10px",color:"red",fontWeight:"bold"},children:h})]},e)}))]})]})},F=function(e){var s=e.profile,t=e.isOwner,i=e.goToEditMode;return(0,P.jsxs)("div",{children:[t&&(0,P.jsx)("div",{children:(0,P.jsx)("button",{className:x,onClick:i,children:"Edit"})}),(0,P.jsxs)("div",{className:v,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Full name"}),": ",s.fullName]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Looking for a job"}),": ",s.lookingForAJob?"yes":"no"]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"My professional skills"}),": ",s.lookingForAJobDescription]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"About me"}),": ",s.aboutMe]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(s.contacts).map((function(e){return(0,P.jsx)(N,{contactTitle:e,contactValue:s.contacts[e]},e)}))]})]})]})},N=function(e){var s=e.contactTitle,t=e.contactValue;return(0,P.jsxs)("div",{className:m,children:[(0,P.jsx)("b",{children:s}),": ",t]})},T=function(e){var s=e.profile,t=e.status,i=e.updateStatusTC,n=e.isOwner,o=e.savePhoto,r=e.saveProfile,u=(0,a.useState)(!1),v=(0,c.Z)(u,2),m=v[0],k=v[1],y=(0,a.useState)(!1),w=(0,c.Z)(y,2),C=w[0],N=w[1];if(!e.profile)return(0,P.jsx)(b.Z,{});var T=function(){var e=(0,l.Z)(d().mark((function e(s){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(s);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t);case 5:k(!1);case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,P.jsx)("div",{children:(0,P.jsxs)("div",{className:h,children:[(0,P.jsxs)("div",{className:p,children:[(0,P.jsx)("img",{src:s.photos.large||g,className:f}),n&&(0,P.jsx)("div",{children:(0,P.jsx)("button",{className:x,onClick:function(){return N(!C)},children:"change photo"})}),C?(0,P.jsx)("div",{children:(0,P.jsx)("input",{type:"file",onChange:function(e){return function(e){var s;null!==(s=e.target.files)&&void 0!==s&&s.length&&(o(e.target.files[0]),N(!1))}(e)}})}):(0,P.jsx)("div",{style:{height:"32px"}}),(0,P.jsx)(_,{status:t,updateStatusTC:i,isOwner:n})]}),(0,P.jsx)("div",{className:j,children:m?(0,P.jsx)(S,{profile:s,onSubmit:T}):(0,P.jsx)(F,{profile:s,isOwner:n,goToEditMode:function(){k(!0)}})})]})})},Z=t(81),A="MyPosts_postsBlock__d2dc2",M="MyPosts_addPostField__EQBcs",D="MyPosts_textarea__fTFTH",I="MyPosts_posts__5Qse7",E="MyPosts_btn__zqEEY",O="Post_item__2p4N0",J="Post_postText__F8Pe9",B="Post_like__4jYz0",V=function(e){return(0,P.jsxs)("div",{className:O,children:[(0,P.jsx)("div",{children:(0,P.jsx)("img",{src:"https://avatars.mds.yandex.net/i?id=a4e67ec8966163d185ea5a5b908a9fc8_l-5236752-images-thumbs&n=13"})}),(0,P.jsxs)("div",{children:[(0,P.jsx)("span",{className:J,children:e.message}),(0,P.jsx)("div",{children:(0,P.jsxs)("span",{className:B,children:["like ","\u2665"," ",e.likesCount]})})]})]})},G=a.memo((function(e){var s=e.postsData.map((function(e){return(0,P.jsx)(V,{message:e.message,likesCount:e.likesCount},e.id)}));(0,a.useRef)(null);return(0,P.jsxs)("div",{className:A,children:[(0,P.jsx)("h3",{children:"My posts"}),(0,P.jsx)("div",{children:(0,P.jsx)(L,{addPost:e.addPost})}),(0,P.jsx)("div",{className:I,children:s})]})})),L=function(e){var s=(0,w.TA)({initialValues:{newPost:""},validate:function(e){var s={};return e.newPost||(s.newPost="enter your post text"),s},onSubmit:function(t){console.log(t),e.addPost(t.newPost),s.resetForm()}});return(0,P.jsx)("div",{children:(0,P.jsxs)("form",{action:"",onSubmit:s.handleSubmit,className:M,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("textarea",(0,y.Z)((0,y.Z)({},s.getFieldProps("newPost")),{},{className:D,onKeyDown:function(e){"Enter"===e.code&&s.handleSubmit()}})),s.touched.newPost&&s.errors.newPost&&(0,P.jsx)("div",{style:{color:"red",margin:"5px"},children:s.errors.newPost})]}),(0,P.jsx)("div",{children:(0,P.jsx)("button",{className:E,type:"submit",disabled:!!s.errors.newPost,children:"Add new post"})})]})})},U=G,$=t(364),q=(0,$.$j)((function(e){return{postsData:e.profilePage.postsData}}),(function(e){return{addPost:function(s){e((0,Z.Wl)(s))}}}))(U),z=function(e){return(0,P.jsxs)("div",{children:[(0,P.jsx)(T,{profile:e.profile,status:e.status,updateStatusTC:e.updateStatusTC,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),e.isOwner&&(0,P.jsx)(q,{})]})},Q=t(9271),W=t(7781),Y=t(2932),H=function(e){(0,o.Z)(t,e);var s=(0,r.Z)(t);function t(){return(0,i.Z)(this,t),s.apply(this,arguments)}return(0,n.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=""+this.props.id)||this.props.history.push("/login"),this.props.getUserProfileTC(e),this.props.getStatusTC(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,P.jsx)("div",{children:(0,P.jsx)(z,{profile:this.props.profile,status:this.props.status,updateStatusTC:this.props.updateStatusTC,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})})}}]),t}(a.Component),K=(0,W.qC)((0,$.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,id:e.auth.data.id}}),{getUserProfileTC:Z.d$,getStatusTC:Z.GP,updateStatusTC:Z.OG,savePhoto:Z.Ju,saveProfile:Z.Ii}),Q.EN,Y.e)(H)}}]);
//# sourceMappingURL=58.b6b1e4a5.chunk.js.map
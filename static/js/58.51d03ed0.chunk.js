"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[58],{3058:function(e,s,t){t.r(s),t.d(s,{default:function(){return K}});var n=t(5671),i=t(3144),o=t(136),r=t(5716),a=t(2791),l=t(5861),u=t(885),c=t(7757),d=t.n(c),h="ProfileInfo_descriptionBlock__FuPwT",f="ProfileInfo_mainBlock__bJasl",p="ProfileInfo_mainPhoto__-3sBu",x="ProfileInfo_btn__k0VGu",j="ProfileInfo_dataBlock__hyDE0",v="ProfileInfo_infoBlock__Xo9y6",m="ProfileInfo_contact__tdDAa",b=t(4374),P=t(184),g=function(e){var s=(0,a.useState)(!1),t=(0,u.Z)(s,2),n=t[0],i=t[1],o=(0,a.useState)(e.status),r=(0,u.Z)(o,2),l=r[0],c=r[1];(0,a.useEffect)((function(){c(e.status)}),[e.status]);return(0,P.jsxs)("div",{children:[!n&&(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Status: "}),(0,P.jsx)("span",{onDoubleClick:function(){e.isOwner&&i(!0)},children:l||e.status||"----"})]}),n&&(0,P.jsx)("div",{children:(0,P.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),e.updateStatusTC(l),c(e.status)},value:l})})]})},_=t(4353),k=t(5987),y=t(1413),w=t(5705),S=["value"],C=function(e){var s,t,n,i,o,r=e.profile,l=e.onSubmit,c=(0,a.useState)(""),d=(0,u.Z)(c,2),h=d[0],f=d[1],p=(0,a.useState)(""),j=(0,u.Z)(p,2),b=j[0],g=j[1],_=(0,w.TA)({initialValues:{fullName:null!==(s=r.fullName)&&void 0!==s?s:"",lookingForAJob:null!==(t=r.lookingForAJob)&&void 0!==t?t:"",lookingForAJobDescription:null!==(n=r.lookingForAJobDescription)&&void 0!==n?n:"",aboutMe:null!==(i=r.aboutMe)&&void 0!==i?i:"",contacts:null!==(o=r.contacts)&&void 0!==o?o:""},onSubmit:function(e,s){var t;l(e).then((function(e){f(e),e&&(t=e.split("Invalid url format (Contacts->")[1].slice(0,-1).toLowerCase(),g(t),s.setFieldError(b,e+""))})).catch((function(e){s.setFieldError(t,e)}))}});return(0,P.jsxs)("form",{onSubmit:_.handleSubmit,children:[(0,P.jsx)("div",{children:(0,P.jsx)("button",{className:x,type:"submit",children:"Save"})}),(0,P.jsxs)("div",{className:v,children:[(0,P.jsx)("b",{children:"Full name:"}),(0,P.jsx)("div",{children:(0,P.jsx)("input",(0,y.Z)({placeholder:"Full name"},_.getFieldProps("fullName")))})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Looking for a job:"}),(0,P.jsx)("input",(0,y.Z)({type:"checkbox"},_.getFieldProps("lookingForAJob")))]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"My professional skills:"}),(0,P.jsx)("textarea",(0,y.Z)({placeholder:"lookingForAJobDescription"},_.getFieldProps("lookingForAJobDescription")))]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"About me:"}),(0,P.jsx)("div",{children:(0,P.jsx)("textarea",(0,y.Z)({placeholder:"About me"},_.getFieldProps("aboutMe")))})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(r.contacts).map((function(e){var s=_.getFieldProps("contacts."+e),t=s.value,n=(0,k.Z)(s,S);return(0,P.jsxs)("div",{className:m,children:[(0,P.jsxs)("b",{children:[e,": ",(0,P.jsx)("div",{children:(0,P.jsx)("input",(0,y.Z)({placeholder:e,value:null!==t&&void 0!==t?t:""},n))})]}),b===e&&(0,P.jsx)("div",{style:{margin:"10px",color:"red",fontWeight:"bold"},children:h})]},e)}))]})]})},F=function(e){var s=e.profile,t=e.isOwner,n=e.goToEditMode;return(0,P.jsxs)("div",{children:[t&&(0,P.jsx)("div",{children:(0,P.jsx)("button",{className:x,onClick:n,children:"Edit"})}),(0,P.jsxs)("div",{className:v,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Full name"}),": ",s.fullName]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Looking for a job"}),": ",s.lookingForAJob?"yes":"no"]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"My professional skills"}),": ",s.lookingForAJobDescription]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"About me"}),": ",s.aboutMe]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Contacts"}),":"," ",Object.keys(s.contacts).map((function(e){return(0,P.jsx)(N,{contactTitle:e,contactValue:s.contacts[e]},e)}))]})]})]})},N=function(e){var s=e.contactTitle,t=e.contactValue;return(0,P.jsxs)("div",{className:m,children:[(0,P.jsx)("b",{children:s}),": ",t]})},Z=function(e){var s=e.profile,t=e.status,n=e.updateStatusTC,i=e.isOwner,o=e.savePhoto,r=e.saveProfile,c=(0,a.useState)(!1),v=(0,u.Z)(c,2),m=v[0],k=v[1],y=(0,a.useState)(!1),w=(0,u.Z)(y,2),S=w[0],N=w[1];if(!e.profile)return(0,P.jsx)(b.Z,{});var Z=function(){var e=(0,l.Z)(d().mark((function e(s){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(s);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t);case 5:k(!1);case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,P.jsx)("div",{children:(0,P.jsxs)("div",{className:h,children:[(0,P.jsxs)("div",{className:f,children:[(0,P.jsx)("img",{src:s.photos.large||_,className:p}),i&&(0,P.jsx)("div",{children:(0,P.jsx)("button",{className:x,onClick:function(){return N(!S)},children:"change photo"})}),S?(0,P.jsx)("div",{children:(0,P.jsx)("input",{type:"file",onChange:function(e){return function(e){var s;null!==(s=e.target.files)&&void 0!==s&&s.length&&(o(e.target.files[0]),N(!1))}(e)}})}):(0,P.jsx)("div",{style:{height:"32px"}}),(0,P.jsx)(g,{status:t,updateStatusTC:n,isOwner:i})]}),(0,P.jsx)("div",{className:j,children:m?(0,P.jsx)(C,{profile:s,onSubmit:Z}):(0,P.jsx)(F,{profile:s,isOwner:i,goToEditMode:function(){k(!0)}})})]})})},T=t(81),A="MyPosts_postsBlock__d2dc2",O="MyPosts_addPostField__EQBcs",M="MyPosts_textarea__fTFTH",D="MyPosts_posts__5Qse7",I="MyPosts_btn__zqEEY",E="Post_item__2p4N0",J="Post_postText__F8Pe9",B="Post_like__4jYz0",V=function(e){return(0,P.jsxs)("div",{className:E,children:[(0,P.jsx)("div",{children:(0,P.jsx)("img",{src:"https://avatars.mds.yandex.net/i?id=a4e67ec8966163d185ea5a5b908a9fc8_l-5236752-images-thumbs&n=13"})}),(0,P.jsxs)("div",{children:[(0,P.jsx)("span",{className:J,children:e.message}),(0,P.jsx)("div",{children:(0,P.jsxs)("span",{className:B,children:["like ","\u2665"," ",e.likesCount]})})]})]})},$=a.memo((function(e){var s=e.postsData.map((function(e){return(0,P.jsx)(V,{message:e.message,likesCount:e.likesCount},e.id)}));(0,a.useRef)(null);return(0,P.jsxs)("div",{className:A,children:[(0,P.jsx)("h3",{children:"My posts"}),(0,P.jsx)("div",{children:(0,P.jsx)(G,{addPost:e.addPost})}),(0,P.jsx)("div",{className:D,children:s})]})})),G=function(e){var s=(0,w.TA)({initialValues:{newPost:""},validate:function(e){var s={};return e.newPost||(s.newPost="enter your post text"),s},onSubmit:function(t){console.log(t),e.addPost(t.newPost),s.resetForm()}});return(0,P.jsx)("div",{children:(0,P.jsxs)("form",{action:"",onSubmit:s.handleSubmit,className:O,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("textarea",(0,y.Z)((0,y.Z)({},s.getFieldProps("newPost")),{},{className:M,onKeyDown:function(e){"Enter"===e.code&&s.handleSubmit()}})),s.touched.newPost&&s.errors.newPost&&(0,P.jsx)("div",{style:{color:"red",margin:"5px"},children:s.errors.newPost})]}),(0,P.jsx)("div",{children:(0,P.jsx)("button",{className:I,type:"submit",disabled:!!s.errors.newPost,children:"Add new post"})})]})})},L=$,U=t(364),q=(0,U.$j)((function(e){return{postsData:e.profilePage.postsData}}),(function(e){return{addPost:function(s){e((0,T.Wl)(s))}}}))(L),z=function(e){return(0,P.jsxs)("div",{children:[(0,P.jsx)(Z,{profile:e.profile,status:e.status,updateStatusTC:e.updateStatusTC,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),(0,P.jsx)(q,{})]})},Q=t(9271),W=t(7781),Y=t(2932),H=function(e){(0,o.Z)(t,e);var s=(0,r.Z)(t);function t(){return(0,n.Z)(this,t),s.apply(this,arguments)}return(0,i.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=""+this.props.id)||this.props.history.push("/login"),this.props.getUserProfileTC(e),this.props.getStatusTC(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,P.jsx)("div",{children:(0,P.jsx)(z,{profile:this.props.profile,status:this.props.status,updateStatusTC:this.props.updateStatusTC,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})})}}]),t}(a.Component),K=(0,W.qC)((0,U.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,id:e.auth.data.id}}),{getUserProfileTC:T.d$,getStatusTC:T.GP,updateStatusTC:T.OG,savePhoto:T.Ju,saveProfile:T.Ii}),Q.EN,Y.e)(H)},2932:function(e,s,t){t.d(s,{e:function(){return c}});var n=t(1413),i=t(5987),o=(t(2791),t(9271)),r=t(364),a=t(184),l=["isAuth"],u=function(e){return{isAuth:e.auth.isAuth}};function c(e){return(0,r.$j)(u)((function(s){var t=s.isAuth,r=(0,i.Z)(s,l);return t?(0,a.jsx)(e,(0,n.Z)({},r)):(0,a.jsx)(o.l_,{to:"/login"})}))}},5987:function(e,s,t){t.d(s,{Z:function(){return i}});var n=t(3366);function i(e,s){if(null==e)return{};var t,i,o=(0,n.Z)(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}}}]);
//# sourceMappingURL=58.51d03ed0.chunk.js.map
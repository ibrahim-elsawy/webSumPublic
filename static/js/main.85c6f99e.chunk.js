(this.webpackJsonppegasus_react_styled_front=this.webpackJsonppegasus_react_styled_front||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":"http://localhost:5005"}')},92:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(20),a=n.n(o),i=n(17),s=n(7),l=n.n(s),u=n(13),d=n(11),b=n(16),f=n(14),p=n.n(f);var j={init:function(){},log:function(e){console.error(e)}};p.a.interceptors.response.use(void 0,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||j.log(e),Promise.reject(e)}));var h={get:p.a.get,post:p.a.post,put:p.a.put,delete:p.a.delete,setJwt:function(e,t){p.a.defaults.headers.common.token=e,p.a.defaults.headers.common.refreshToken=t}},g=n(18);function x(e){return h.post(g.a+"/sum/file",e,{headers:{"content-type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":!0}})}var m,O,C,v,y,w,k,E,z,M,S,L,I,A,D,F,H=n(4),B=n(5),P=n(1),T=function(e){var t=e.className,n=e.children;return Object(P.jsx)("span",{className:t,children:n})},_=function(e){var t=e.className,n=e.children;return Object(P.jsx)("div",{className:t,children:n})},J=B.b.div(m||(m=Object(H.a)(["\n\theight: 100vh;\n\tpadding: .3em;\n\tbackground-color: #330033;\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n\n"]))),N=B.b.form(O||(O=Object(H.a)(["\n\tbackground-color:transparent;\n"]))),U=B.b.input.attrs({type:"file",accept:".txt"})(C||(C=Object(H.a)(["\n\tbackground-color: transparent;\n\tcolor:white;\n\t"]))),$=B.b.textarea.attrs((function(e){return{type:"input",placeholder:e.placeholder?e.placeholder:"",readOnly:e.readOnly?e.readOnly:"",rows:10}}))(v||(v=Object(H.a)(["\n\tbackground-color: black;\n\tcolor: #d3c7c7;\n\tborder: ",";\n\tresize: ",";\n"])),(function(e){return e.border?e.border:""}),(function(e){return e.resize?e.resize:"none"})),q=Object(B.b)(_)(y||(y=Object(H.a)(["\n\tdisplay:flex;\n\twidth:50%;\n\tflex-direction: ",";\n        align-items:  ",";\n\talign-content: center;\n        padding: .2em 0;\n"])),(function(e){return e.flexDirection?e.flexDirection:"column"}),(function(e){return e.alignItems?e.alignItems:"flex=start"})),G=Object(B.b)(T)(w||(w=Object(H.a)(["\n\tcolor: ",";\n\tfont-size: ",";\n"])),(function(e){return e.color?e.color:"#000000f"}),(function(e){return e.fontSize?e.fontSize:".9em"})),K=B.b.button(k||(k=Object(H.a)(["\n\tmargin: 1rem;\n\twidth: 10em;\n\tpadding: .3rem;\n\tbackground-color: #e2a779;\n\tborder:0;\n\tborder-radius: .3em;\n\tcolor: #0a0a0a;\n\tcursor:pointer;\n\tborder: 1px solid #000000;\n\t&:hover{\n\t\tborder:1px solid #ffffff;\n\t\tborder-radius: .4em;\n        }\n\t@media(max-width:850px){\n\t\twidth:7em;\n        }\n"]))),Q=(n(66),n(39)),R=n.n(Q),V=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(),a=Object(d.a)(o,2),i=a[0],s=a[1],f=Object(r.useState)(),p=Object(d.a)(f,2),j=p[0],m=p[1],O=Object(r.useState)(!1),C=Object(d.a)(O,2),v=C[0],y=C[1],w=function(){var e=Object(u.a)(l.a.mark((function e(){var t,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==i){e.next=11;break}return y(!0),(t=new FormData).append("file",i),e.next=6,x(t);case 6:r=e.sent,m(r),y(!1),e.next=24;break;case 11:if(null==n){e.next=22;break}return(c=new FormData).append("text",n||i),e.next=16,a=c,h.post(g.a+"/sum/text",a,{headers:{"Acces-Control-Allow-Origin":!0}});case 16:o=e.sent,m(o),y(!1),console.log(o),e.next=24;break;case 22:console.log("empty"),b.b.error("Empty Input !",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 24:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)(J,{children:[Object(P.jsx)(G,{color:"#e2a779",fontSize:"2em",children:"Pegasus Summarizer"}),Object(P.jsx)("br",{}),Object(P.jsx)(G,{color:"#a48167",children:"is the fastest online Summarizer, it summarize all types of documents and paragraphs giving the best and accurate results"}),Object(P.jsx)(N,{children:Object(P.jsxs)(q,{children:[Object(P.jsx)($,{onChange:function(e){c(e.target.value)},placeholder:"Enter the text "}),Object(P.jsx)(U,{onChange:function(e){s(e.target.files[0])}})]})}),Object(P.jsxs)(q,{children:[Object(P.jsx)(K,{onClick:w,children:"Summarize "}),j&&Object(P.jsx)($,{border:"none",readOnly:"none",children:j.data.data}),v&&Object(P.jsx)(R.a,{type:"TailSpin",color:"#9b9b9b",height:50,width:80})]})]})},W=B.b.div(E||(E=Object(H.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tcolor: white;\n\t/* background-color: #799abf; */\n\tbackground-color: #ac86d0;\n\t"]))),X=Object(B.b)(T)(z||(z=Object(H.a)(["\n\tcolor: ",";\n\tfont-weight: ",";\n\tfont-style: ",";\n\tfont-size: ",";\n"])),(function(e){return e.color?e.color:"#000000f"}),(function(e){return e.weight?e.weight:"none"}),(function(e){return e.style?e.style:"normal"}),(function(e){return e.fontSize?e.fontSize:".9em"})),Y=Object(B.b)(_)(M||(M=Object(H.a)(["\n\tdisplay: flex;\n\tflex-direction: ",";\n        align-items:  ",";\n        padding: .1em;\n        cursor:pointer;\n        border:1px solid transparent;\n\n        &:hover{\n\t\tborder:1px solid #cec3e1;\n\t\tborder-radius: .2em;\n        }\n\t@media(max-width:850px){\n\t\tdisplay: none;\n        }\n\t"])),(function(e){return e.flexDirection?e.flexDirection:"column"}),(function(e){return e.alignItems?e.alignItems:"flex-start"})),Z=B.b.img(S||(S=Object(H.a)(["\n    width: 3em;\n    height: 3em;\n    border:1px solid transparent;\n    padding: .2em .1em;\n    margin-right: 1rem;\n    /* cursor:pointer; */\n    \n    /* &:hover{\n\t    border:1px solid #020202;\n\t    border-radius: .2em;\n\t} */\n\t"]))),ee=B.b.button(L||(L=Object(H.a)(["\n\tmargin: .5rem;\n\tpadding: .2rem;\n\theight: 2em;\n\t/* background-color: #1271b5; */\n\tbackground-color: #e2a779;\n\t/* color: #f7e1e1; */\n\tcolor: #0a0a0a;\n\tborder:0;\n\tborder-radius: .3em;\n\tcursor:pointer;\n\t/* border: 1px solid #66a1e4; */\n\tborder: 1px solid #000000;\n\t&:hover{\n\t\tborder:1px solid #ffffff;\n\t\tborder-radius: .4em;\n        }\n\t/* @media(max-width:850px){\n\t\tdisplay: none;\n        } */\n"]))),te=B.b.div(I||(I=Object(H.a)(["\n\t/* background-color: #aa3333; */\n\tbackground-color: #e4e3c2;\n\tbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='800' viewBox='0 0 1600 800'%3E%3Cpath fill='%23FF7' d='M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5C1123.3 752.1 1107.5 739.5 1102.5 734.8zM1226.3 229.1c0-.1-4.9-9.4-7-14.2-.1-.3-.3-1.1-.4-1.6-.1-.4-.3-.7-.6-.9-.3-.2-.6-.1-.8.1l-13.1 12.3c0 0 0 0 0 0-.2.2-.3.5-.4.8 0 .3 0 .7.2 1 .1.1 1.4 2.5 2.1 3.6 2.4 3.7 6.5 12.1 6.5 12.2.2.3.4.5.7.6.3 0 .5-.1.7-.3 0 0 1.8-2.5 2.7-3.6 1.5-1.6 3-3.2 4.6-4.7 1.2-1.2 1.6-1.4 2.1-1.6.5-.3 1.1-.5 2.5-1.9C1226.5 230.4 1226.6 229.6 1226.3 229.1zM33 770.3C33 770.3 33 770.3 33 770.3c0-.7-.5-1.2-1.2-1.2-.1 0-.3 0-.4.1-1.6.2-14.3.1-22.2 0-.3 0-.6.1-.9.4-.2.2-.4.5-.4.9 0 .2 0 4.9.1 5.9l.4 13.6c0 .3.2.6.4.9.2.2.5.3.8.3 0 0 .1 0 .1 0 7.3-.7 14.7-.9 22-.6.3 0 .7-.1.9-.3.2-.2.4-.6.4-.9C32.9 783.3 32.9 776.2 33 770.3z'/%3E%3Cpath fill='%235ff' d='M171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1C198.1 384.2 177.9 384 171.1 383.4zM596.4 711.8c-.1-.1-6.7-8.2-9.7-12.5-.2-.3-.5-1-.7-1.5-.2-.4-.4-.7-.7-.8-.3-.1-.6 0-.8.3L574 712c0 0 0 0 0 0-.2.2-.2.5-.2.9 0 .3.2.7.4.9.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6.2.3.5.4.8.4.3 0 .5-.2.6-.5 0 0 1.2-2.8 2-4.1 1.1-1.9 2.3-3.7 3.5-5.5.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4C596.9 713.1 596.8 712.3 596.4 711.8zM727.5 179.9C727.5 179.9 727.5 179.9 727.5 179.9c.6.2 1.3-.2 1.4-.8 0-.1 0-.2 0-.4.2-1.4 2.8-12.6 4.5-19.5.1-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.5-.2 0-4.7-1.1-5.7-1.3l-13.4-2.7c-.3-.1-.7 0-.9.2-.2.2-.4.4-.5.6 0 0 0 .1 0 .1-.8 6.5-2.2 13.1-3.9 19.4-.1.3 0 .6.2.9.2.3.5.4.8.5C714.8 176.9 721.7 178.5 727.5 179.9zM728.5 178.1c-.1-.1-.2-.2-.4-.2C728.3 177.9 728.4 178 728.5 178.1z'/%3E%3Cg fill='%23FFF'%3E%3Cpath d='M699.6 472.7c-1.5 0-2.8-.8-3.5-2.3-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5 1.6-3.8 1.7-8.1.2-11.9-.3-.9-.8-1.8-1.2-2.8-.8-1.7-1.8-3.7-2.3-5.9-.9-4.1-.2-8.6 2-12.8 1.7-3.1 4.1-6.1 7.6-9.1 1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3-2.8 2.5-4.7 4.7-5.9 7-1.4 2.6-1.9 5.3-1.3 7.6.3 1.4 1 2.8 1.7 4.3.5 1.1 1 2.2 1.5 3.3 2.1 5.6 2 12-.3 17.6-2.3 5.5-6.8 10.1-12.3 12.5C700.6 472.6 700.1 472.7 699.6 472.7zM740.4 421.4c1.5-.2 3 .5 3.8 1.9 1.1 1.8.4 4.2-1.4 5.3-3.7 2.1-6.4 5.6-7.6 9.5-1.2 4-.8 8.4 1.1 12.1.4.9 1 1.7 1.6 2.7 1 1.7 2.2 3.5 3 5.7 1.4 4 1.2 8.7-.6 13.2-1.4 3.4-3.5 6.6-6.8 10.1-1.5 1.6-3.9 1.7-5.5.2-1.6-1.4-1.7-3.9-.2-5.4 2.6-2.8 4.3-5.3 5.3-7.7 1.1-2.8 1.3-5.6.5-7.9-.5-1.3-1.3-2.7-2.2-4.1-.6-1-1.3-2.1-1.9-3.2-2.8-5.4-3.4-11.9-1.7-17.8 1.8-5.9 5.8-11 11.2-14C739.4 421.6 739.9 421.4 740.4 421.4zM261.3 590.9c5.7 6.8 9 15.7 9.4 22.4.5 7.3-2.4 16.4-10.2 20.4-3 1.5-6.7 2.2-11.2 2.2-7.9-.1-12.9-2.9-15.4-8.4-2.1-4.7-2.3-11.4 1.8-15.9 3.2-3.5 7.8-4.1 11.2-1.6 1.2.9 1.5 2.7.6 3.9-.9 1.2-2.7 1.5-3.9.6-1.8-1.3-3.6.6-3.8.8-2.4 2.6-2.1 7-.8 9.9 1.5 3.4 4.7 5 10.4 5.1 3.6 0 6.4-.5 8.6-1.6 4.7-2.4 7.7-8.6 7.2-15-.5-7.3-5.3-18.2-13-23.9-4.2-3.1-8.5-4.1-12.9-3.1-3.1.7-6.2 2.4-9.7 5-6.6 5.1-11.7 11.8-14.2 19-2.7 7.7-2.1 15.8 1.9 23.9.7 1.4.1 3.1-1.3 3.7-1.4.7-3.1.1-3.7-1.3-4.6-9.4-5.4-19.2-2.2-28.2 2.9-8.2 8.6-15.9 16.1-21.6 4.1-3.1 8-5.1 11.8-6 6-1.4 12 0 17.5 4C257.6 586.9 259.6 588.8 261.3 590.9z'/%3E%3Ccircle cx='1013.7' cy='153.9' r='7.1'/%3E%3Ccircle cx='1024.3' cy='132.1' r='7.1'/%3E%3Ccircle cx='1037.3' cy='148.9' r='7.1'/%3E%3Cpath d='M1508.7 297.2c-4.8-5.4-9.7-10.8-14.8-16.2 5.6-5.6 11.1-11.5 15.6-18.2 1.2-1.7.7-4.1-1-5.2-1.7-1.2-4.1-.7-5.2 1-4.2 6.2-9.1 11.6-14.5 16.9-4.8-5-9.7-10-14.7-14.9-1.5-1.5-3.9-1.5-5.3 0-1.5 1.5-1.5 3.9 0 5.3 4.9 4.8 9.7 9.8 14.5 14.8-1.1 1.1-2.3 2.2-3.5 3.2-4.1 3.8-8.4 7.8-12.4 12-1.4 1.5-1.4 3.8 0 5.3 0 0 0 0 0 0 1.5 1.4 3.9 1.4 5.3-.1 3.9-4 8.1-7.9 12.1-11.7 1.2-1.1 2.3-2.2 3.5-3.3 4.9 5.3 9.8 10.6 14.6 15.9.1.1.1.1.2.2 1.4 1.4 3.7 1.5 5.2.2C1510 301.2 1510.1 298.8 1508.7 297.2zM327.6 248.6l-.4-2.6c-1.5-11.1-2.2-23.2-2.3-37 0-5.5 0-11.5.2-18.5 0-.7 0-1.5 0-2.3 0-5 0-11.2 3.9-13.5 2.2-1.3 5.1-1 8.5.9 5.7 3.1 13.2 8.7 17.5 14.9 5.5 7.8 7.3 16.9 5 25.7-3.2 12.3-15 31-30 32.1L327.6 248.6zM332.1 179.2c-.2 0-.3 0-.4.1-.1.1-.7.5-1.1 2.7-.3 1.9-.3 4.2-.3 6.3 0 .8 0 1.7 0 2.4-.2 6.9-.2 12.8-.2 18.3.1 12.5.7 23.5 2 33.7 11-2.7 20.4-18.1 23-27.8 1.9-7.2.4-14.8-4.2-21.3l0 0C347 188.1 340 183 335 180.3 333.6 179.5 332.6 179.2 332.1 179.2zM516.3 60.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C517.3 60.4 516.8 60.8 516.3 60.8zM506.1 70.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C506.4 70.5 506.2 70.5 506.1 70.5zM494.1 64.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C494.7 64.3 494.4 64.4 494.1 64.4zM500.5 55.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C500.9 55.3 500.7 55.3 500.5 55.3zM506.7 55c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C507.4 54.8 507.1 55 506.7 55zM1029.3 382.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C1030.3 382.4 1029.8 382.8 1029.3 382.8zM1019.1 392.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C1019.4 392.5 1019.2 392.5 1019.1 392.5zM1007.1 386.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C1007.7 386.3 1007.4 386.4 1007.1 386.4zM1013.5 377.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C1013.9 377.3 1013.7 377.3 1013.5 377.3zM1019.7 377c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C1020.4 376.8 1020.1 377 1019.7 377zM1329.7 573.4c-1.4 0-2.9-.2-4.5-.7-8.4-2.7-16.6-12.7-18.7-20-.4-1.4-.7-2.9-.9-4.4-8.1 3.3-15.5 10.6-15.4 21 0 1.5-1.2 2.7-2.7 2.8 0 0 0 0 0 0-1.5 0-2.7-1.2-2.7-2.7-.1-6.7 2.4-12.9 7-18 3.6-4 8.4-7.1 13.7-8.8.5-6.5 3.1-12.9 7.4-17.4 7-7.4 18.2-8.9 27.3-10.1l.7-.1c1.5-.2 2.9.9 3.1 2.3.2 1.5-.9 2.9-2.3 3.1l-.7.1c-8.6 1.2-18.4 2.5-24 8.4-3 3.2-5 7.7-5.7 12.4 7.9-1 17.7 1.3 24.3 5.7 4.3 2.9 7.1 7.8 7.2 12.7.2 4.3-1.7 8.3-5.2 11.1C1335.2 572.4 1332.6 573.4 1329.7 573.4zM1311 546.7c.1 1.5.4 3 .8 4.4 1.7 5.8 8.7 14.2 15.1 16.3 2.8.9 5.1.5 7.2-1.1 2.7-2.1 3.2-4.8 3.1-6.6-.1-3.2-2-6.4-4.8-8.3C1326.7 547.5 1317.7 545.6 1311 546.7z'/%3E%3C/g%3E%3C/svg%3E\");\n\tbackground-attachment: fixed;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n        padding: .1em;\n\theight: 100vh;\n\t"]))),ne=B.b.div(A||(A=Object(H.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\t/* margin: 5em; */\n\t/* max-width: 30%; */\n\n"]))),re=B.b.form(D||(D=Object(H.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\t/* height: 50vh; */\n\tflex-direction: column;\n\tbackground-color:transparent;\n\tmargin: .5em;\n\tpadding: 1em;\n\t"]))),ce=B.b.input.attrs((function(e){return{type:e.type?e.type:"email"}}))(F||(F=Object(H.a)(["\n\tpadding: .5em; \n\tmargin: .2em;\n\tborder-radius: .3em;\n\tbackground-color: #d3eef1;\n\tborder-color: grey;\n"]))),oe=n.p+"static/media/p.b78caccb.svg",ae=function(e){b.b.error(e,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},ie=g.a+"/auth",se="token",le="refreshToken",ue=ge();function de(e){return be.apply(this,arguments)}function be(){return(be=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.post(ie+"/register",{username:t.username,email:t.email,password:t.password},{headers:{"Acces-Control-Allow-Origin":!0},maxBodyLength:4e3,maxContentLength:4e3}).then((function(e){var t=e.data;return je(null===t||void 0===t?void 0:t.token,null===t||void 0===t?void 0:t.refreshToken),t.success})).catch((function(e){var t,n=e.response,r="";return null===(t=n.data.errors.$values)||void 0===t||t.forEach((function(e){r+=e})),ae(r),n.data.success}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),ae(e.t0);case 9:case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function fe(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.post(ie+"/login",{email:t.email,password:t.password},{headers:{"Acces-Control-Allow-Origin":!0},maxBodyLength:4e3,maxContentLength:4e3}).then((function(e){var t=e.data;return console.log(t),je(null===t||void 0===t?void 0:t.token,null===t||void 0===t?void 0:t.refreshToken),t.success})).catch((function(e){var t,n=e.response,r="";return null===(t=n.data.errors.$values)||void 0===t||t.forEach((function(e){r+=e})),ae(r),n.data.success}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),ae(e.t0);case 9:case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function je(e,t){localStorage.setItem(se,e),localStorage.setItem(le,t)}function he(){localStorage.removeItem(se),localStorage.removeItem(le)}function ge(){return{jwt:localStorage.getItem(se),refreshToken:localStorage.getItem(le)}}h.setJwt(ue.jwt,ue.refreshToken);var xe,me=function(e){var t=e.History;return Object(P.jsxs)(W,{children:[Object(P.jsx)(i.b,{to:"/main",style:{textDecoration:"none"},children:Object(P.jsxs)(Y,{flexDirection:"row",alignItems:"center",children:[Object(P.jsx)(Z,{src:oe}),Object(P.jsx)(X,{color:"#000000",weight:900,style:"italic",fontSize:"1.1em",children:"Pegasus Summary"})]})}),null==ge().jwt&&Object(P.jsxs)("div",{children:[Object(P.jsx)(ee,{onClick:function(){return t.push("/login")},children:"Login"}),Object(P.jsx)(ee,{onClick:function(){return t.push("/register")},children:"Sign Up"})]}),null!=ge().jwt&&Object(P.jsx)("div",{children:Object(P.jsx)(ee,{onClick:he,children:"Logout"})})]})},Oe=Object(B.a)(xe||(xe=Object(H.a)(["\n*{\n        margin: 0;\n        padding: 0;\n        outline:0;\n        box-sizing:border-box;\n        font-family: 'Open Sans', sans-serif;\n}\n#root{\n        margin:0 auto;\n}\n"]))),Ce=n(3),ve=function(e){e.History;var t=Object(r.useState)(),n=Object(d.a)(t,2),c=n[0],o=n[1],a=Object(r.useState)(),i=Object(d.a)(a,2),s=i[0],b=i[1],f=Object(r.useState)(),p=Object(d.a)(f,2),j=p[0],h=p[1],g=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de({username:s,email:c,password:j});case 3:e.sent?window.location.assign("/main"):console.log("error has been occured"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&ae(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(P.jsx)(te,{children:Object(P.jsxs)(ne,{children:[Object(P.jsxs)(re,{children:[Object(P.jsx)("label",{color:"#fffff",children:"Username"}),Object(P.jsx)(ce,{type:"text",onChange:function(e){return b(e.target.value)}}),Object(P.jsx)("label",{color:"#fffff",children:"Email"}),Object(P.jsx)(ce,{type:"email",onChange:function(e){return o(e.target.value)}}),Object(P.jsx)("label",{color:"#fffff",children:"Password"}),Object(P.jsx)(ce,{type:"password",onChange:function(e){return h(e.target.value)}})]}),Object(P.jsx)(ee,{onClick:g,children:"Submit"})]})})},ye=function(e){e.History;var t=Object(r.useState)(),n=Object(d.a)(t,2),c=n[0],o=n[1],a=Object(r.useState)(),i=Object(d.a)(a,2),s=i[0],b=i[1],f=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe({email:c,password:s});case 3:e.sent?window.location.assign("/main"):console.log("error has been occured"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&ae(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(P.jsx)(te,{children:Object(P.jsxs)(ne,{children:[Object(P.jsxs)(re,{children:[Object(P.jsx)("label",{color:"#fffff",children:"Email"}),Object(P.jsx)(ce,{type:"email",onChange:function(e){return o(e.target.value)}}),Object(P.jsx)("label",{color:"#fffff",children:"Password"}),Object(P.jsx)(ce,{type:"password",onChange:function(e){return b(e.target.value)}})]}),Object(P.jsx)(ee,{onClick:f,children:"Login"})]})})},we=(n(91),function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(b.a,{}),Object(P.jsx)(Oe,{}),Object(P.jsx)(me,{History:Object(Ce.g)()}),Object(P.jsxs)(Ce.d,{children:[Object(P.jsx)(Ce.b,{path:"/register",children:Object(P.jsx)(ve,{History:Object(Ce.g)()})}),Object(P.jsx)(Ce.b,{path:"/login",children:Object(P.jsx)(ye,{History:Object(Ce.g)()})}),Object(P.jsx)(Ce.b,{path:"/main",children:Object(P.jsx)(V,{})}),Object(P.jsx)(Ce.a,{to:"/main"})]})]})});a.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(i.a,{children:Object(P.jsx)(we,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.85c6f99e.chunk.js.map
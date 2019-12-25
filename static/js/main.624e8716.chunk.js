(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{193:function(n,e,t){},194:function(n,e,t){},195:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(20),l=t.n(a),c=t(36),i=t(49),u=t(14),d=t(4),b=t(5);function f(){var n=Object(d.a)(["\n  border: none;\n  outline: none;\n  overflow: hidden;\n  background-color: ",";\n  :hover {\n    background-color: pink;\n  }\n  :active {\n    background-color: red;\n  }\n"]);return f=function(){return n},n}var h=b.a.button(f(),(function(n){return n.i&&"inherit"}));function s(){var n=Object(d.a)(["\n  width: 25%;\n  @media(max-width: 800px) {\n    display: none;\n  }\n"]);return s=function(){return n},n}function m(){var n=Object(d.a)(["\n  font-weight: 800;\n  background-color: black;\n  color: white;\n  :hover {\n    background-color: white;\n    color: black;\n  }\n  :active {\n    background-color: #29B6F6;\n    color: black;\n  }\n"]);return m=function(){return n},n}function g(){var n=Object(d.a)(["\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 500;\n  padding: 10%;\n  width: 100%;\n  background-color: ",";\n  :hover {\n    background-color: white;\n  }\n  :active {\n    background-color: #29B6F6;\n  }\n  z-index: 1000;\n"]);return g=function(){return n},n}function v(){var n=Object(d.a)(["\n  margin: 0;\n  border: none;\n  background-color: black;\n  height: .3%\n"]);return v=function(){return n},n}function y(){var n=Object(d.a)(["\n  background-color: #ccc;\n  min-width: 20%;\n  max-width: 20%;\n  height: 100%;\n  overflow: auto;\n  ::-webkit-scrollbar {\n    width: 5%;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: #fff;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: #000;\n  }\n"]);return y=function(){return n},n}var k=b.a.nav(y()),p=b.a.hr(v()),E=b.a.button(g(),(function(n){return n.i?"white":"inherit"})),w=Object(b.a)(E)(m()),O=Object(b.a)(h)(s()),j=function(n){var e=n.selectedNoteIndex,t=n.noteTitles,r=n.changeCurrentNote,a=n.addNote,l=n.deleteNote;return o.a.createElement(k,null,o.a.createElement(w,{style:{fontWeight:800},onClick:a},"Add a note"),o.a.createElement(p,null),t.map((function(n,t){return o.a.createElement("div",{key:t,style:{display:"flex"}},o.a.createElement(O,{i:e===t,onClick:function(n){return l(n,t)}},"Delete"),o.a.createElement(E,{i:e===t,onClick:function(n){return r(n,t)}},""===n?"*no title*":n))})))};t(193);function x(){var n=Object(d.a)(["\n  display: none;\n  background-color: #ccc;\n  border: 1px solid black;\n  float: right;\n  width: 5em;\n  @media(max-width: 800px) {\n    display: inline-block;\n  }\n"]);return x=function(){return n},n}function C(){var n=Object(d.a)(["\n  display: none;\n  flex-direction: column;\n  overflow: hidden;\n  position: absolute;\n  width: inherit;\n  max-width: 15%;\n  z-index: 99;\n  ",":hover & {\n    display: flex;\n  }\n"]);return C=function(){return n},n}function N(){var n=Object(d.a)(["\n  border: 1px solid #000;\n  outline: none;\n  background-color: #ccc;\n  padding: 5%;\n  overflow: hidden;\n  :hover {\n    background-color: white;\n  }\n  :active {\n    background-color: #29B6F6;\n  }\n"]);return N=function(){return n},n}function B(){var n=Object(d.a)(["\n  width: 15%;\n"]);return B=function(){return n},n}function S(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  align-content: stretch;\n  padding: 1%;\n"]);return S=function(){return n},n}function T(){var n=Object(d.a)(["\n  border: none;\n  width: 95%;\n  padding: 1%;\n  font-size: 3em;\n  outline: none;\n  border-bottom-style: solid;\n  border-bottom-color: black;\n"]);return T=function(){return n},n}function H(){var n=Object(d.a)(["\n  text-align: center;\n  margin: 2%;\n  padding: 1%;\n  width: 100%;\n"]);return H=function(){return n},n}var I=b.a.div(H()),z=b.a.input(T()),F=b.a.div(S()),J=b.a.div(B()),D=b.a.div(N()),L=b.a.div(C(),J),U=Object(b.a)(h)(x()),q=function(n){var e=n.onToggle,t=function(n,t){n.preventDefault(),e(t)};return o.a.createElement(F,null,o.a.createElement(J,null,o.a.createElement(D,{onClick:function(n){return t(n,"unstyled")}},"Clear Fmt")),o.a.createElement(J,null,o.a.createElement(D,null,"Headings"),o.a.createElement(L,null,[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"}].map((function(n){return o.a.createElement(D,{key:n.label,onClick:function(e){return t(e,n.style)}},n.label)})))),o.a.createElement(J,null,o.a.createElement(D,null,"Lists"),o.a.createElement(L,null,[{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"}].map((function(n){return o.a.createElement(D,{key:n.label,onClick:function(e){return t(e,n.style)}},n.label)})))),o.a.createElement(J,null,o.a.createElement(D,null,"Other"),o.a.createElement(L,null,[{label:"Blockquote",style:"blockquote"},{label:"Code Block",style:"code-block"}].map((function(n){return o.a.createElement(D,{key:n.label,onClick:function(e){return t(e,n.style)}},n.label)})))))},K=function(n){var e=n.selectedNoteIndex,t=n.note,r=n.handleChangeTitle,a=n.handleChangeBody,l=n.deleteNote;return o.a.createElement(I,null,o.a.createElement(U,{onClick:function(n){return l(n,e)}},"Delete"),o.a.createElement(z,{type:"text",placeholder:"Your note title...",value:t.title,onChange:r}),o.a.createElement(q,{onToggle:function(n){a(u.RichUtils.toggleBlockType(t.body,n))}}),o.a.createElement(u.Editor,{style:{color:"red"},editorState:t.body,handleKeyCommand:function(n,e){var t=u.RichUtils.handleKeyCommand(e,n);return t?(a(t),"handled"):"not-handled"},onChange:a,placeholder:"Your note information..."}))},M=function(){var n=Object(r.useState)([]),e=Object(i.a)(n,2),t=e[0],a=e[1],l=Object(r.useState)(0),d=Object(i.a)(l,2),b=d[0],f=d[1];Object(r.useEffect)((function(){var n=[{title:"My first note!!",body:u.EditorState.createEmpty()},{title:"Journal 1",body:u.EditorState.createEmpty()},{title:"Journal 2",body:u.EditorState.createEmpty()}];a(n),f(0)}),[]);var h=function(n,e){console.log(e),a((function(n){return n.splice(e,1),Object(c.a)(n)})),f(Math.max(0,b-1))};return o.a.createElement("div",{style:{display:"flex",height:"100vh"}},o.a.createElement(j,{selectedNoteIndex:b,noteTitles:t.map((function(n){return n.title})),changeCurrentNote:function(n,e){f(e)},addNote:function(n){a((function(n){return n.concat([{title:"",body:u.EditorState.createEmpty()}])})),f(t.length)},deleteNote:h}),t.length>0&&o.a.createElement(K,{selectedNoteIndex:b,note:t[b],handleChangeTitle:function(n){var e=n.target.value;a((function(n){return n[b].title=e,Object(c.a)(n)}))},handleChangeBody:function(n){a((function(e){return e[b].body=n,Object(c.a)(e)}))},deleteNote:h}))};t(194);l.a.render(o.a.createElement(M,null),document.getElementById("root"))},90:function(n,e,t){n.exports=t(195)}},[[90,1,2]]]);
//# sourceMappingURL=main.624e8716.chunk.js.map
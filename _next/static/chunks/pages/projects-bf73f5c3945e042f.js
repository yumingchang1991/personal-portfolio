(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9182:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(1734)}])},1734:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return K}});var t=r(5893),o=r(9008),i=r.n(o),a=r(2159),s=r.n(a),c=r(7462),l=r(3366),u=r(7294),d=r(6010),m=r(561),p=r(6523),h=r(9707),f=r(6682);const x=["className","component"];var g=r(7078);const v=function(e={}){const{defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:o,styleFunctionSx:i=p.Z}=e,a=(0,m.ZP)("div")(i);return u.forwardRef((function(e,i){const s=(0,f.Z)(n),u=(0,h.Z)(e),{className:m,component:p="div"}=u,g=(0,l.Z)(u,x);return(0,t.jsx)(a,(0,c.Z)({as:p,ref:i,className:(0,d.Z)(m,o?o(r):r),theme:s},g))}))}({defaultTheme:(0,r(1265).Z)(),defaultClassName:"MuiBox-root",generateClassName:g.Z.generate});var b=v,y=r(5113),j=r(5408),Z=r(8700),k=r(9766),w=r(1496),C=r(1657);const S=["component","direction","spacing","divider","children"];function A(e,n){const r=u.Children.toArray(e).filter(Boolean);return r.reduce(((e,t,o)=>(e.push(t),o<r.length-1&&e.push(u.cloneElement(n,{key:`separator-${o}`})),e)),[])}const N=(0,w.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>[n.root]})((({ownerState:e,theme:n})=>{let r=(0,c.Z)({display:"flex"},(0,j.k9)({theme:n},(0,j.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const t=(0,Z.hB)(n),o=Object.keys(n.breakpoints.values).reduce(((n,r)=>(null==e.spacing[r]&&null==e.direction[r]||(n[r]=!0),n)),{}),i=(0,j.P$)({values:e.direction,base:o}),a=(0,j.P$)({values:e.spacing,base:o}),s=(n,r)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${o=r?i[r]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,Z.NA)(t,n)}};var o};r=(0,k.Z)(r,(0,j.k9)({theme:n},a,s))}return r})),_=u.forwardRef((function(e,n){const r=(0,C.Z)({props:e,name:"MuiStack"}),o=(0,h.Z)(r),{component:i="div",direction:a="column",spacing:s=0,divider:u,children:d}=o,m=(0,l.Z)(o,S),p={direction:a,spacing:s};return(0,t.jsx)(N,(0,c.Z)({as:i,ownerState:p,ref:n},m,{children:u?A(d,u):d}))}));var R=_,M=r(8396),D=r(3289),F=r(5861),B=r(4780),E=r(4844),P=r(1796),T=r(8216),$=r(8791),H=r(1705),O=r(4867);function V(e){return(0,O.Z)("MuiLink",e)}var I=(0,r(1588).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);const L=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],U={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},W=(0,w.ZP)(F.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`underline${(0,T.Z)(r.underline)}`],"button"===r.component&&n.button]}})((({theme:e,ownerState:n})=>{const r=(0,E.D)(e,`palette.${(e=>U[e]||e)(n.color)}`)||n.color;return(0,c.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,P.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${I.focusVisible}`]:{outline:"auto"}})}));var z=u.forwardRef((function(e,n){const r=(0,C.Z)({props:e,name:"MuiLink"}),{className:o,color:i="primary",component:a="a",onBlur:s,onFocus:m,TypographyClasses:p,underline:h="always",variant:f="inherit",sx:x}=r,g=(0,l.Z)(r,L),{isFocusVisibleRef:v,onBlur:b,onFocus:y,ref:j}=(0,$.Z)(),[Z,k]=u.useState(!1),w=(0,H.Z)(n,j),S=(0,c.Z)({},r,{color:i,component:a,focusVisible:Z,underline:h,variant:f}),A=(e=>{const{classes:n,component:r,focusVisible:t,underline:o}=e,i={root:["root",`underline${(0,T.Z)(o)}`,"button"===r&&"button",t&&"focusVisible"]};return(0,B.Z)(i,V,n)})(S);return(0,t.jsx)(W,(0,c.Z)({color:i,className:(0,d.Z)(A.root,o),classes:p,component:a,onBlur:e=>{b(e),!1===v.current&&k(!1),s&&s(e)},onFocus:e=>{y(e),!0===v.current&&k(!0),m&&m(e)},ref:w,ownerState:S,variant:f,sx:[...Object.keys(U).includes(i)?[]:[{color:i}],...Array.isArray(x)?x:[x]]},g))}));function G(e){var n=e.project,r=(0,M.Z)("(max-Width: 800px)"),o={textAlign:"left",fontFamily:"Roboto Mono, monospace, Monaco, Courier",fontSize:"0.7rem"};return(0,t.jsx)(b,{sx:{padding:"1rem",borderRadius:"0.5rem",backgroundColor:"#CDD4DF",boxShadow:"0 4px 7px 5px #e6e6e6",transition:"all 0.5s ease",textAlign:"center",img:{transition:"all 0.7s ease",borderRadius:"0.3rem"},"&:hover":{transform:"scale(1.01)",img:{transform:"scale(0.97)"}}},children:(0,t.jsx)(y.Z,{elevation:0,sx:{width:"80vw",maxHeight:"70vh",backgroundColor:"transparent"},children:(0,t.jsx)(b,{children:(0,t.jsxs)(R,{justifyContent:"space-between",alignItems:"flex-start",maxHeight:"70vh",maxWidth:"100%",spacing:2,children:[(0,t.jsx)(D.Z,{title:"click to open demo in new tab",followCursor:!0,placement:"right-end",children:(0,t.jsxs)(R,{direction:r?"column-reverse":"row",spacing:2,justifyContent:"space-between",alignItems:"center",onClick:function(e){window.open(n.link,"_blank")},sx:{"&:hover":{cursor:"pointer"}},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(F.Z,{sx:{color:"#252525",fontFamily:"Gloria Hallelujah",fontSize:"2rem"},children:n.name}),(0,t.jsx)(F.Z,{sx:{fontFamily:"Roboto"},children:n.description})]}),(0,t.jsx)(b,{sx:{maxWidth:"40%",padding:0},children:(0,t.jsx)("img",{src:n.imgUrl,width:"100%"})})]})}),(0,t.jsxs)("div",{children:[(0,t.jsx)(F.Z,{sx:o,children:n.language}),(0,t.jsx)(F.Z,{sx:o,children:n.technologies}),(0,t.jsx)(z,{href:"https://github.com/yumingchang1991/expense-tracker",children:(0,t.jsx)(F.Z,{sx:o,children:"GitHub & Readme"})})]})]})})})})}var X=r(3647),q=r.n(X);function J(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function Y(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return J(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return J(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(){var e=q().map((function(e){return(0,t.jsx)(G,{project:e})})).reduce((function(e,n){return Y(e).concat([n])}),[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i(),{children:(0,t.jsx)("title",{children:"Backend Developer Portfolio by Yu-Ming Chang"})}),(0,t.jsx)("div",{className:s()["projects-container"],children:e})]})}},3647:function(e){"use strict";e.exports=[{id:0,name:"Expense Tracker",description:"Expense tracker with user management system implemented",language:"#JavaScript",technologies:"Express + MongoDB Atlas",imgUrl:"thumbnails/ExpenseTracker.png",link:"https://dry-plateau-72468.herokuapp.com/users/login",githubUrl:"https://github.com/yumingchang1991/expense-tracker",mediumUrl:"https://yumingchang1991.medium.com/portfolio-sharing-expense-tracker-ce4c54c1a91d"}]},2159:function(e){e.exports={"projects-container":"Projects_projects-container__GwC__"}},9008:function(e,n,r){e.exports=r(3121)}},function(e){e.O(0,[774,888,179],(function(){return n=9182,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
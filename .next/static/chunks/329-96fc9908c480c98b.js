(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{7199:function(e,t){"use strict";t.Z={src:"/_next/static/media/Leaves.933949aa.svg",height:432,width:250}},5638:function(e,t){"use strict";t.Z={src:"/_next/static/media/bird_1.59db4ff8.svg",height:149,width:227}},5355:function(e,t){"use strict";t.Z={src:"/_next/static/media/bird_2.97356f78.svg",height:73,width:138}},6130:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(5893),s=n(7294),i=n(5675),a=n.n(i),l=n(1163),c=n(7771),o=n(5697),x=n.n(o),d={src:"/_next/static/media/sreLogo.3e9be75a.png",height:397,width:1122,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPElEQVR42gXAsQmAMBAAwB/MPSycQBAtJQhapBEstBLBOiNkvSOEIpm8VoNPDski+11OnT1sHrfeaFYdDZYbI63JVWWYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},m={src:"/_next/static/media/iyrefLogo.a2b05062.png",height:561,width:1080,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAPElEQVR42mP4F/PP9x8DAjL82/jP6Z/ev+R/2f8q/xX8K2X45/Jvyr/0f47/gv4V/iv+58/wj/9fC7IWAFCZJ09uEeqHAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},p=function(e){var t=e.state,n=e.onToggle,i=(0,s.useState)(t),a=i[0],l=i[1],c=function(){var e=!a;l(e),n(e)};return(0,r.jsxs)("label",{htmlFor:"toggle",className:"flex items-center cursor-pointer ".concat(a?"bg-green6":"bg-green8"," w-[110px] h-[40px] rounded-full p-1 transition-all duration-300"),children:[(0,r.jsx)("img",{src:a?d.src:m.src,alt:a?"SRE Logo":"IYREF Logo",className:"w-14 mr-2 transition-all duration-300 transform ".concat(a?"translate-x-[38px]":"translate-x-[10px]")}),(0,r.jsx)("div",{className:"bg-white w-7 h-7 rounded-full shadow-md transform transition-all duration-300 ".concat(a?"translate-x-[-61px]":"translate-x-[7px]")}),(0,r.jsx)("input",{type:"checkbox",id:"toggle",className:"hidden",checked:a,onChange:c})]})},u=n(1799),h=n(9396),f=n(9534),g={white:"#FFFFFF",black:"#000000",gray200:"#F9F9F9",gray300:"#C4C4C4",gray400:"#9B9B9B",gray500:"#777676",gray600:"#535252",gray700:"#2F2E2E",yellow200:"#FFD271",yellow300:"#FEB20E",yellow400:"#DF9800",red200:"#FF634B",red300:"#F43518",red400:"#B71800",green200:"#E6FEED",green300:"#069154",green400:"#01703F",blue200:"#6979BE",blue300:"#1F307C",blue400:"#0B1A5C",cream200:"#FFF2EB",cream300:"#FFEADF",cream400:"#F5D5C4",pink200:"#FEE9E6",pink300:"#E28281",pink400:"#C86564"},v=function(e){var t=e.size,n=void 0===t?16:t,s=e.title,i=(0,f.Z)(e,["size","title"]);return(0,r.jsxs)("svg",(0,h.Z)((0,u.Z)({fill:"currentColor",stroke:"currentColor",strokeWidth:"0",height:n,width:n,color:g.black},i),{children:[!!s&&(0,r.jsx)("title",{children:s}),e.children]}))},w=function(e){var t=e.color,n=(0,f.Z)(e,["color"]);return(0,r.jsx)(v,(0,h.Z)((0,u.Z)({viewBox:"0 0 1024 1024"},n),{children:(0,r.jsx)("path",{d:"M768.686 350.007l-205.471 193.251-205.472-193.251-63.119 59.495 268.591 253.17 268.59-253.17-63.119-59.495z",fill:void 0===t?"black":t})}))},b=[{text:"Home",href:"/"},{text:"About",href:"/about"},{text:"Activity",href:"/activity"},{text:"Student",href:"/student"},{text:"Merchandise",href:"/merchandise"},{text:"REFWON",href:"/iyref/refwon"},{text:"Competitions",href:"/iyref",contents:[{text:"Business Case Competition",href:"/iyref/bcc"},{text:"Business Plan Competition",href:"/iyref/bpc"},{text:"National Essay Competition",href:"/iyref"}]},{text:"NEX STEP",href:"/iyref/pcc",contents:[{text:"Policy Case Competition",href:"/iyref/pcc"},{text:"Policy Workshop",href:"/iyref/pw"}]},{text:"Comvis",href:"/iyref/comvis"},{text:"Summit",href:"/iyref/summit"}];function j(e){var t=e.open,n=e.setOpen,s=e.contents,i=e.dropdownIdx,a=e.idx;return(0,r.jsx)("div",{className:"".concat(i===a?"":"hidden"," flex flex-col text-left"),children:s.map(function(e,s){return(0,r.jsx)("a",{className:"py-2 pl-5 text-white opacity-90 hover:opacity-70 font-bold cursor-pointer",onClick:function(){n(!t)},href:e.href,children:e.text},s)})})}function N(e){var t=e.contents;return(0,r.jsx)("div",{className:"hidden peer-hover:absolute peer-hover:flex hover:absolute hover:flex flex-col w-64 py-3 top-20 left-1/2 transform -translate-x-1/2 border-solid border-2 border-green rounded-lg bg-white z-50",children:t.map(function(e,t){return(0,r.jsx)("a",{className:"px-5 py-3 hover:bg-green5 text-green2 hover:text-white font-bold cursor-pointer",href:e.href,children:e.text},t)})})}function y(e){var t=e.open,n=e.setOpen,i=e.dropdownIdx,a=e.setDropdownIdx,l=e.handleToggle,c=e.menuList,o=e.page,x=(0,s.useState)(!0),d=x[0],m=x[1];return(0,s.useEffect)(function(){var e=function(){m(window.innerWidth>1024)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),(0,r.jsx)("div",{className:"fixed overflow-y-auto top-0 left-0 z-10 h-screen w-screen xl:hidden bg-green5 transform ".concat(t?"-translate-x-0":"-translate-x-full"," transition-transform duration-300 ease-in-out"),children:(0,r.jsxs)("div",{className:"flex flex-col h-screen justify-center",children:[c.map(function(e,s){return(0,r.jsxs)("div",{className:"w-40 text-center mx-auto",onClick:function(){a(i===s?-1:s)},children:[(0,r.jsx)("a",{className:"cursor-pointer hover:opacity-80 inline-block py-2 text-white font-bold",onClick:function(){e.contents||n(!t)},href:e.contents?void 0:e.href,children:(0,r.jsxs)("div",{className:"py-2 inline-flex items-center",children:[e.text,e.contents?(0,r.jsx)(w,{color:"white",className:"ml-1"}):""]})}),e.contents?(0,r.jsx)(j,{open:t,setOpen:n,contents:e.contents,dropdownIdx:i,idx:s}):""]},s)}),d?null:(0,r.jsx)("div",{className:"flex justify-center mt-[15px] px-6 mx-2",children:(0,r.jsx)(p,{state:"iyref"===o,onToggle:l})})]})})}var F=function(e){var t=e.e,n=(0,s.useState)(!1),i=n[0],o=n[1],x=(0,s.useState)(-1),u=x[0],h=x[1],f=(0,s.useState)(!1),g=f[0],v=f[1],j=(0,s.useState)(b),F=j[0],A=j[1],E=(0,l.useRouter)(),C=E.pathname.split("/")[1]||"home",R=E.pathname.split("/")[2]||"nec";(0,s.useEffect)(function(){"iyref"===C?A(b.filter(function(e){return"iyref"===e.href.split("/")[1]})):A(b.filter(function(e){return"iyref"!==e.href.split("/")[1]}))},[C]);var k=function(e){e?setTimeout(function(){E.push("/iyref")},200):setTimeout(function(){E.push("/")},200)};return(0,s.useEffect)(function(){var e=function(){0!==window.scrollY?v(!0):v(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),(0,r.jsx)(c.E.nav,{className:"fixed flex top-0 w-full justify-center z-50 font-montserrat",initial:{backgroundColor:t?"#2C9A7F":"rgba(0, 0, 0, 0)"},animate:{backgroundColor:g||t?"#2C9A7F":"rgba(0, 0, 0, 0)"},transition:{duration:.3,ease:"easeInOut"},children:(0,r.jsxs)("div",{className:"".concat(i?"h-screen":""," w-full h-[80px] flex"),children:[(0,r.jsx)(y,{open:i,setOpen:o,dropdownIdx:u,setDropdownIdx:h,handleToggle:k,menuList:F,page:C}),(0,r.jsx)("div",{className:"w-[70px] sm:w-[90px] ml-[30px] sm:ml-[5vw] flex items-center",children:"iyref"===C?(0,r.jsx)(a(),{src:m,alt:"IYREF logo"}):(0,r.jsx)(a(),{src:d,alt:"SRE logo"})}),(0,r.jsxs)("div",{className:"flex fixed z-20 w-full justify-end",children:[(0,r.jsxs)("div",{className:"".concat(i?"fixed right-0":""," right-0 top-0 mr-[15px] z-50 flex flex-col w-10 h-6 justify-between cursor-pointer xl:hidden mt-[30px]"),onClick:function(){o(!i)},children:[(0,r.jsx)("span",{className:"h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ".concat(i?"w-7 bg-white rotate-45 translate-y-2.5":"")}),(0,r.jsx)("span",{className:"h-1 w-6 bg-white rounded-lg transition-all duration-300 ease-in-out ".concat(i?"h-0 w-0":"w-6")}),(0,r.jsx)("span",{className:"h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ".concat(i?"w-7 bg-white -rotate-45 -translate-y-2.5":"")})]}),(0,r.jsxs)("div",{className:"hidden xl:flex",children:[F.map(function(e,t){return(0,r.jsxs)("div",{className:"relative inline-flex items-center mt-[-7px]",children:[(0,r.jsx)("a",{className:"active px-6 mx-2 py-8 ".concat(e.contents?"peer":"inline-block"," text-white hover:opacity-80 cursor-pointer"),href:e.href,children:(0,r.jsxs)("div",{className:"".concat(0===t&&"home"===C||1===t&&"about"===C||2===t&&"activity"===C||3===t&&"student"===C||4===t&&"merchandise"===C||0===t&&"refwon"===R||1===t&&("bpc"===R||"iyref"===C&&"nec"===R||"bcc"===R)||2===t&&("pcc"===R||"pw"===R)||3===t&&"comvis"===R||4===t&&"summit"===R?"rounded-[20px] bg-green7 py-[4px] px-[15px] font-bold":""," inline-flex items-center"),children:[e.text,e.contents?(0,r.jsx)(w,{color:"white"}):""]})}),e.contents?(0,r.jsx)(N,{contents:e.contents}):""]},t)}),(0,r.jsx)("div",{className:"inline-flex items-center mt-[-7px] px-6 mx-2",children:(0,r.jsx)(p,{state:"iyref"===C,onToggle:k})})]})]})]})})};F.propTypes={e:x().string};var A=F},5905:function(e,t,n){"use strict";var r=n(5893);n(7294);var s=n(9008),i=n.n(s),a=function(e){var t=e.title,n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),n]})};t.Z=a},9377:function(e,t,n){"use strict";var r=n(5893),s=n(7294),i=n(5675),a=n.n(i),l=n(1163),c=function(e){var t=e.title,n=e.desc,i=e.background,c=e.linkRegister,o=(0,s.useState)(!1),x=o[0],d=o[1];(0,s.useEffect)(function(){var e=function(){d(window.innerWidth>540)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]);var m=(0,l.useRouter)().pathname.split("iyref/")[1];return(0,r.jsx)("div",{className:"h-screen flex flex-col justify-center items-center overflow-x-hidden",children:(0,r.jsxs)("div",{className:"relative w-full h-full",children:[(0,r.jsx)(a(),{src:i,alt:"Background",layout:"fill",objectFit:"cover",placeholder:"blur"}),(0,r.jsx)("div",{className:"w-full h-full opacity-30 bg-[#000000]"}),(0,r.jsx)("div",{className:"absolute inset-0 justify-center items-center flex flex-col",children:(0,r.jsxs)("div",{className:"font-montserrat text-center text-white",children:[(0,r.jsx)("h1",{className:"xl:text-[48px] md:text-[38px] text-[28px] font-bold leading-[40px] md:leading-[60px] px-5 animate__animated animate__fadeInUp",children:x?(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)("br",{}),"pcc"===m?"IYREF 2024 x New Energy Nexus Indonesia":"IYREF 2024"]}):(0,r.jsxs)(r.Fragment,{children:[t," ",(0,r.jsx)("br",{})," ","pcc"===m?"IYREF 2024 x New Energy Nexus Indonesia":"IYREF 2024"]})}),(0,r.jsx)("h2",{className:"xl:text-[20px] md:text-[16px] text-[13px] px-[10vw] mt-[30px] animate__animated animate__fadeInUp",children:n}),(0,r.jsxs)("div",{className:"translate-y-[15px] flex flex-col justify-center",children:[(0,r.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:(0,r.jsxs)("button",{className:"font-normal mt-[50px] outline outline-1 text-[#FFFFFF] xl:text-[20px] md:text-[18px] text-[16px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer animate-bounce",children:["Join Now ","bpc"===m?"(FREE)":""]})}),"bcc"===m&&(0,r.jsx)("a",{href:"https://bit.ly/WebinarBCCIYREF2024",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("button",{className:"font-normal mt-[10px] outline outline-1 text-[#FFFFFF] xl:text-[20px] md:text-[18px] text-[16px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer",children:"Join Webinar"})})]})]})})]})})};t.Z=c},2782:function(e,t,n){"use strict";var r=n(5893),s=n(1163),i=n(5697),a=n.n(i),l=function(e){var t=e.title,n=e.subtitle,s=e.desc;return(0,r.jsxs)("div",{className:"bg-white bg-opacity-25 py-[5vh] px-[6vw] xl:px-[3vw] rounded-xl",children:[(0,r.jsx)("h1",{className:"font-semibold md:font-bold text-[20px]",children:t}),(0,r.jsx)("p",{className:"mt-[4vh] text-[16px] font-semibold",children:n}),(0,r.jsx)("p",{className:"mt-[4vh] font-light text-[14px] md:text-[16px]",children:s})]})};l.propTypes={title:a().string.isRequired,subtitle:a().string.isRequired,desc:a().string.isRequired};var c=function(e){var t=e.title,n=e.desc,i=e.cards,a=(0,s.useRouter)().pathname.split("iyref/")[1];return(0,r.jsx)("div",{className:"overflow-x-hidden font-montserrat",children:(0,r.jsxs)("div",{className:"relative w-screen bg-gradient p-[5vw] pb-[10vw] text-center items-center text-white",children:[(0,r.jsx)("h1",{className:"font-bold text-[28px] xl:text-[48px] p-[3vw]",children:t}),(0,r.jsx)("p",{className:"px-[6vw] text-[15px] xl:text-[20px] mt-[4vh]",children:n}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-[4vh] mx-[4vw] mt-[5vw] ".concat("pcc"===a?"xl:grid-cols-2":"xl:grid-cols-3"),children:i.map(function(e){return(0,r.jsx)(l,{title:e.title,subtitle:e.subtitle,desc:e.desc},e.title)})})]})})};c.propTypes={title:a().string.isRequired,desc:a().string.isRequired,cards:a().arrayOf(a().shape({title:a().string.isRequired,subtitle:a().string.isRequired,desc:a().string.isRequired})).isRequired},t.Z=c},7766:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893);n(7294);var s=n(5675),i=n.n(s),a=n(1163),l=function(e){var t=e.text;return(0,r.jsx)("div",{className:"z-10 relative w-[380px] py-[5vw] max-h-[200px] bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[2%] rounded-[10px] flex items-center justify-center drop-shadow mb-10",children:(0,r.jsx)("p",{className:"font-montserrat text-[20px] text-white px-5 text-center font-medium",children:t})})},c=function(e){var t=e.title,n=e.contents;return(0,r.jsxs)("div",{className:"h-auto w-full sm:w-[500px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col items-center text-green11 text-center rounded-2xl drop-shadow",children:[(0,r.jsx)("h3",{className:"w-full text-[20px] lg:text-[24px] text-green7 font-semibold mb-[30px]",children:t}),n.map(function(e,t){return(0,r.jsx)("div",{className:"relative mb-2 py-[15px] w-full bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow",children:(0,r.jsx)("p",{className:"font-montserrat text-[17px] text-white px-[30px] text-center font-medium",children:e})},t)})]})},o=n(5638),x=n(5355),d=n(7199),m={src:"/_next/static/media/Hexagon.93827147.svg",height:432,width:229},p=function(e){var t=e.type,n=e.theme,s=e.subtheme,p=e.addText,u=e.benefits,h=e.themeDesc,f=(0,a.useRouter)().pathname.split("iyref/")[1];return(0,r.jsxs)("div",{className:"relative font-montserrat h-auto flex flex-col justify-center items-center overflow-y-hidden",children:[(0,r.jsxs)("div",{className:"relative w-full z-10 mt-20",children:[(0,r.jsxs)("div",{className:"my-[50px] space-y-3 mx-[10vw]",children:["pcc"!==f?(0,r.jsxs)("p",{className:"text-green11 text-center text-[16px]",children:[t," IYREF 2024's THEME"]}):"",(0,r.jsxs)("h2",{className:"font-gradient text-[24px] lg:text-[30px] xl:text-[32px] text-center font-bold px-5 lg:px-0 leading-[30px] sm:leading-normal",children:['"',n,'"']}),"pcc"===f?(0,r.jsx)("h3",{className:"text-center font-semibold text-[16px]",children:h}):""]}),(0,r.jsx)("div",{className:"flex-wrap flex mt-[10px] justify-center mb-[5vw] mx-[10vw] z-10",children:null==s?void 0:s.map(function(e,t){return(0,r.jsx)(l,{text:e},t)})}),(0,r.jsx)("div",{className:"w-[300px] bottom-0 absolute left-0 z-[-5]",children:(0,r.jsx)(i(),{src:d.Z,alt:"leaves",className:""})}),(0,r.jsx)("div",{className:"w-[250px] hidden lg:block bottom-0 right-[70px] absolute z-[-5]",children:(0,r.jsx)(i(),{src:o.Z,alt:"bird1",className:""})})]}),(0,r.jsxs)("div",{className:"space-y-5 mb-[80px] lg:mb-[100px] z-10 mt-[5vw] mx-[5vw]",children:[(0,r.jsx)("h2",{className:"text-green11 text-center text-[20px] md:text-[28px] lg:text-[32px] font-bold",children:"Total Competition Prize Up To"}),(0,r.jsx)("p",{className:"font-gradient text-[48px] md:text-[72px] lg:text-[96px] text-center font-bold leading-[50px] sm:leading-normal",children:"pcc"===f?"IDR 14.000.000":"IDR 30.000.000"})]}),(0,r.jsxs)("div",{className:"mb-[100px] lg:mb-[300px] px-[5vw] w-full relative",children:[(0,r.jsx)("div",{className:"mb-[20px]",children:(0,r.jsx)("p",{className:"text-green11 text-[16px] text-center",children:p})}),(0,r.jsxs)("div",{className:"gap-5 ".concat(u.some(function(e){return e.contents&&e.contents.length>0})?"flex-wrap flex justify-center":"mx-[10vw] flex flex-col"),children:[u.map(function(e,t){return e.contents&&e.contents.length>0?(0,r.jsx)(c,{title:e.title,contents:e.contents},t):(0,r.jsx)("div",{className:"w-auto py-5 bg-white border-[2px] border-green9 px-[25px] rounded-2xl text-center flex justify-center items-center drop-shadow-green",children:e.title})}),(0,r.jsx)("div",{className:"w-[280px] hidden lg:flex justify-end bottom-0 right-[10vw] absolute z-[-5]",children:(0,r.jsx)(i(),{src:m,alt:"hexagon",className:""})})]})]}),(0,r.jsx)("div",{className:"w-[70px] lg:w-[340px] bottom-[5vw] left-[20vw] absolute",children:(0,r.jsx)(i(),{src:x.Z,alt:"bird2",className:""})})]})}},8614:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(5893),s=n(5675),i=n.n(s),a=n(5697),l=n.n(a),c={src:"/_next/static/media/Pot.e6d0373e.svg",height:1488,width:1e3},o=function(e){var t=e.timeline,n=new Date,s=n.getDate(),a=n.getMonth()+1,l=n.getFullYear(),o="".concat(l,"-").concat(a<10?"0":"").concat(a,"-").concat(s<10?"0":"").concat(s),x=function(e,t,n){var r=new Date(e),s=new Date(t),i=new Date(n);return r>=s&&r<=i};return(0,r.jsxs)("div",{className:"overflow-x-hidden font-montserrat relative",children:[(0,r.jsxs)("div",{className:"md:grid grid-cols-2 gap-[8vw] p-[5vw] pb-0",children:[(0,r.jsx)("p",{className:"row-start-1 col-start-1 text-transparent font-bold bg-clip-text ml-auto md:mr-[3vw] text-center bg-gradient-to-r from-green1 to-green8 text-[36px] md:text-[64px]",children:"Timeline"}),(0,r.jsxs)("div",{className:"row-start-1 col-start-2 mt-[4vh] md:mt-0 ml-[5vw] md:ml-0 relative mb-[10vw]",children:[t.map(function(e,t){var n=x(o,e.startDate,e.endDate);return(0,r.jsxs)("div",{className:"flex relative items-center",children:[(0,r.jsx)("div",{className:"w-5 h-5 aspect-square bg-green8 rounded-full"}),(0,r.jsxs)("div",{className:"ml-[3vw] p-5 ".concat(n?"bg-green8 rounded-r-xl":""),children:[(0,r.jsx)("p",{className:"text-transparent font-bold bg-clip-text text-[18px] md:text-[24px] ".concat(n?"text-[#FFFFFF]":"text-green8"),children:e.title}),(0,r.jsx)("p",{className:"text-transparent bg-clip-text bg-green1 text-[16px] md:text-[22px]",children:e.desc})]})]},t)}),(0,r.jsx)("div",{className:"absolute h-full w-[4px] ml-[8px] bg-green8 top-0 rounded-full"})]})]}),(0,r.jsx)("div",{className:"hidden md:block absolute w-[35vw] max-w-[450px] bottom-0",children:(0,r.jsx)(i(),{src:c,alt:"Pot-Image"})})]})};o.propTypes={timeline:l().arrayOf(l().shape({title:l().string.isRequired,desc:l().string.isRequired})).isRequired};var x=o},9008:function(e,t,n){e.exports=n(5443)}}]);
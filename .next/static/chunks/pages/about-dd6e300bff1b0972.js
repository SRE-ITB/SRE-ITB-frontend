(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8318:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a(785)}])},3568:function(e,t){"use strict";t.Z={src:"/_next/static/media/Header.e2157caf.webp",height:959,width:1705,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAQAgCdASoIAAQAAkA4JbACdLoAAzeZHWygAP6sK/9xLBszy3/0cCZ69+USH5WVB1ue3kpkrs1u35Gkp54PninQVlr+AAAA",blurWidth:8,blurHeight:4}},4157:function(e,t){"use strict";t.Z={src:"/_next/static/media/Bohlm.cf26f66c.svg",height:250,width:250}},1555:function(e,t){"use strict";t.Z={src:"/_next/static/media/Leaf.5efe5deb.png",height:1060,width:1060,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAk0lEQVR42mPABUr2aTOW7tdmBHOCp5gwRswyYoJJFu8BSsCAX48JmAMDySsMmGHsisNawmBGyBQTcaAJqglLDNlgkvnbdfqLdutUMPj2mEoFTjKxC59pHBoz3zAJqMgwabkhT85m3cq8bbplDD7dphwwXdFzjeTjFxuap6w0UGEgBhTs0GGCsWEmMAJNYAKaAHc4ANbZJ2EWYoecAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},1210:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,l,s){var n=a(8875).normalizeLocalePath,r=a(8748).detectDomainLocale,o=t||n(e,l).detectedLocale,i=r(s,void 0,o);if(i){var c="http".concat(i.http?"":"s","://"),d=o===i.defaultLocale?"":"/".concat(o);return"".concat(c).concat(i.domain).concat("").concat(d).concat(e)}return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(4941).Z;a(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(2648).Z,n=a(7273).Z,r=s(a(7294)),o=a(6273),i=a(2725),c=a(3462),d=a(1018),x=a(7190),u=a(1210),p=a(8684),m={};function f(e,t,a,l){if(e&&o.isLocalURL(t)){Promise.resolve(e.prefetch(t,a,l)).catch(function(e){});var s=l&&void 0!==l.locale?l.locale:e&&e.locale;m[t+"%"+a+(s?"%"+s:"")]=!0}}var h=r.default.forwardRef(function(e,t){var a,s,h=e.href,v=e.as,g=e.children,w=e.prefetch,b=e.passHref,j=e.replace,y=e.shallow,N=e.scroll,A=e.locale,E=e.onClick,_=e.onMouseEnter,C=e.onTouchStart,R=e.legacyBehavior,L=void 0===R?!0!==Boolean(!1):R,T=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);a=g,L&&("string"==typeof a||"number"==typeof a)&&(a=r.default.createElement("a",null,a));var S=!1!==w,B=r.default.useContext(c.RouterContext),M=r.default.useContext(d.AppRouterContext);M&&(B=M);var k=r.default.useMemo(function(){var e=l(o.resolveHref(B,h,!0),2),t=e[0],a=e[1];return{href:t,as:v?o.resolveHref(B,v):a||t}},[B,h,v]),P=k.href,O=k.as,I=r.default.useRef(P),z=r.default.useRef(O);L&&(s=r.default.Children.only(a));var U=L?s&&"object"==typeof s&&s.ref:t,H=l(x.useIntersection({rootMargin:"200px"}),3),Z=H[0],F=H[1],D=H[2],G=r.default.useCallback(function(e){(z.current!==O||I.current!==P)&&(D(),z.current=O,I.current=P),Z(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[O,U,P,D,Z]);r.default.useEffect(function(){var e=F&&S&&o.isLocalURL(P),t=void 0!==A?A:B&&B.locale,a=m[P+"%"+O+(t?"%"+t:"")];e&&!a&&f(B,P,O,{locale:t})},[O,P,F,A,S,B]);var W={ref:G,onClick:function(e){L||"function"!=typeof E||E(e),L&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,t,a,l,s,n,i,c,d,x){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(u=e).currentTarget.target)||"_self"===p)&&!u.metaKey&&!u.ctrlKey&&!u.shiftKey&&!u.altKey&&(!u.nativeEvent||2!==u.nativeEvent.which)&&o.isLocalURL(a)){e.preventDefault();var u,p,m=function(){"beforePopState"in t?t[s?"replace":"push"](a,l,{shallow:n,locale:c,scroll:i}):t[s?"replace":"push"](a,{forceOptimisticNavigation:!x})};d?r.default.startTransition(m):m()}}(e,B,P,O,j,y,N,A,Boolean(M),S)},onMouseEnter:function(e){L||"function"!=typeof _||_(e),L&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),!(!S&&M)&&o.isLocalURL(P)&&f(B,P,O,{priority:!0})},onTouchStart:function(e){L||"function"!=typeof C||C(e),L&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),!(!S&&M)&&o.isLocalURL(P)&&f(B,P,O,{priority:!0})}};if(!L||b||"a"===s.type&&!("href"in s.props)){var J=void 0!==A?A:B&&B.locale,K=B&&B.isLocaleDomain&&u.getDomainLocale(O,J,B.locales,B.domainLocales);W.href=K||p.addBasePath(i.addLocale(O,J,B&&B.defaultLocale))}return L?r.default.cloneElement(s,W):r.default.createElement("a",Object.assign({},T,W),a)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8875:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0;var l=function(e,t){return a(4317).normalizeLocalePath(e,t)};t.normalizeLocalePath=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var l=(0,a(2648).Z)(a(7294)),s=l.default.createContext(null);t.AppRouterContext=s;var n=l.default.createContext(null);t.LayoutRouterContext=n;var r=l.default.createContext(null);t.GlobalLayoutRouterContext=r;var o=l.default.createContext(null);t.TemplateContext=o},785:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var l=a(5893),s=a(5905),n=a(6130),r=a(7294),o=a(5675),i=a.n(o),c=a(3568),d=function(){var e=function(e){var t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop-110,behavior:"smooth"})},t=(0,r.useState)(!1),a=t[0],s=t[1];return(0,r.useEffect)(function(){var e=function(){s(window.innerWidth>540)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),(0,l.jsx)("div",{className:"h-screen flex flex-col justify-center items-center overflow-x-hidden",children:(0,l.jsxs)("div",{className:"relative w-full h-full",children:[(0,l.jsx)(i(),{src:c.Z,alt:"About Us",layout:"fill",objectFit:"cover",placeholder:"blur"}),(0,l.jsx)("div",{className:"w-full h-full opacity-50 bg-[#000000]"}),(0,l.jsx)("div",{className:"absolute inset-0 justify-center items-center md:items-start flex flex-col md:ml-[15vw]",children:(0,l.jsxs)("div",{className:"font-montserrat text-center md:text-left text-white sm:px-0 px-[6vw]",children:[(0,l.jsx)("h1",{className:"italic xl:text-[48px] md:text-[40px] text-[32px] font-bold leading-[60px] animate__animated animate__fadeInUp",children:"About Us"}),(0,l.jsx)("h2",{className:"italic xl:text-[24px] md:text-[22px] font-normal text-[20px] animate__animated animate__fadeInUp",children:a?(0,l.jsxs)(l.Fragment,{children:["A youth organization that focused in",(0,l.jsx)("br",{}),"Renewable Energy sector."]}):"A youth organization that focused in Renewable Energy sector."}),(0,l.jsx)("h3",{className:"italic font-normal text-[18px] mt-[30px] animate__animated animate__fadeInUp",children:"#RElevatingSREITB"}),(0,l.jsx)("button",{className:"font-extrabold mt-[50px] bg-[#169470] text-[#FFFFFF] xl:text-[24px] md:text-[22px] text-[20px] px-[50px] py-[5px] rounded-full hover:outline hover:outline-3 transition-all cursor-pointer",onClick:function(){return e("about")},children:"See More"})]})})]})})},x=a(1555),u=a(4157),p={src:"/_next/static/media/Happy.c78ae611.svg",height:24,width:24},m={src:"/_next/static/media/Flash.c3b2d97f.svg",height:24,width:24},f={src:"/_next/static/media/Star.52bd9b63.svg",height:24,width:24},h={src:"/_next/static/media/Share.8e058fe1.svg",height:24,width:24},v={src:"/_next/static/media/Circle1.0e10b349.svg",height:60,width:39},g={src:"/_next/static/media/Circle2.0e0fece6.svg",height:65,width:45},w=function(){return(0,l.jsxs)("div",{id:"about",className:"font-montserrat relative w-full",children:[(0,l.jsxs)("div",{className:"relative m-[10vw] xl:m-[5vw] text-center xl:text-left",children:[(0,l.jsx)("span",{className:"text-[48px] xl:text-[60px] font-gradient font-extrabold",children:"VISION"}),(0,l.jsxs)("p",{className:"text-[16px] xl:text-[20px] font-normal mt-[2vh]",children:[(0,l.jsx)("span",{className:"font-gradient font-bold opacity-100",children:"SRE ITB as a renewable-energy-based community"})," that will accommodate youth's interests and maximize spanotential to generate real-world impact."]})]}),(0,l.jsxs)("div",{className:"xl:flex mb-[5vw]",children:[(0,l.jsxs)("div",{className:"mx-[10vw] xl:mx-[5vw] xl:w-[500px] mb-[10vw]",children:[(0,l.jsxs)("div",{className:"text-center xl:text-left xl:col-span-1 col-span-3 font-extrabold",children:[(0,l.jsx)("p",{className:"text-[30px] xl:text-[40px] text-green2",children:"OUR"}),(0,l.jsx)("p",{className:"text-[48px] xl:text-[60px] mt-[-15px] xl:mt-[-20px] font-gradient",children:"MISSION"}),(0,l.jsx)("div",{className:"h-[5px] xl:h-[10px] w-[150px] xl:w-[250px] bg-gradient rounded-full mx-auto xl:mx-0"})]}),(0,l.jsx)("div",{className:"hidden xl:block absolute left-0 mt-[50px]",children:(0,l.jsx)(i(),{src:u.Z,alt:"bohlm"})})]}),(0,l.jsxs)("div",{className:"xl:w-full px-[6vw] xl:px-[5vw] xl:flex xl:flex-col xl:items-end text-[15px] sm:text-[17px]",children:[(0,l.jsxs)("div",{className:"xl:translate-x-[-30%] xl:w-[600px] xl:mx-0 flex py-2 pr-4 border-solid border-2 border-green8 bg-white rounded-full mx-auto mb-[20px]",children:[(0,l.jsx)("div",{className:"my-auto mx-[15px] xl:mx-[25px]",children:(0,l.jsx)("img",{src:m.src,alt:"flash-logo",className:"w-[60px]"})}),(0,l.jsx)("p",{className:"align-middle items-center",children:"Enhancing renewable energy knowledge through basic and advance learning program"})]}),(0,l.jsx)("div",{className:"hidden xl:block absolute translate-x-[-725px] translate-y-[75px] z-20",children:(0,l.jsx)(i(),{src:v,alt:"circle1"})}),(0,l.jsxs)("div",{className:"xl:translate-x-[-20%] xl:w-[600px] xl:mx-0 flex py-2 pr-4 border-solid border-2 border-green8 bg-white rounded-full mx-auto mb-[20px]",children:[(0,l.jsx)("div",{className:"my-auto mx-[15px] xl:mx-[25px]",children:(0,l.jsx)("img",{src:f.src,alt:"star-logo",className:"w-[60px]"})}),(0,l.jsx)("p",{className:"align-middle items-center",children:"Providing exclusive portfolio through hands-on project based on each individuals interests"})]}),(0,l.jsx)("div",{className:"hidden xl:block absolute translate-x-[-70px] translate-y-[115px] z-20",children:(0,l.jsx)(i(),{src:g,alt:"circle2"})}),(0,l.jsxs)("div",{className:"xl:translate-x-[-10%] xl:w-[600px] xl:mx-0 flex py-2 pr-4 border-solid border-2 border-green8 bg-white rounded-full mx-auto mb-[20px]",children:[(0,l.jsx)("div",{className:"my-auto mx-[15px] xl:mx-[25px]",children:(0,l.jsx)("img",{src:p.src,alt:"happy-logo",className:"w-[60px]"})}),(0,l.jsx)("p",{className:"align-middle items-center",children:"Maximizing individuals skills through various projects and development programs"})]}),(0,l.jsx)("div",{className:"hidden xl:block absolute translate-x-[-605px] translate-y-[258px] z-20",children:(0,l.jsx)(i(),{src:v,alt:"circle1"})}),(0,l.jsxs)("div",{className:"xl:w-[600px] xl:mx-0 flex py-2 pr-4 border-solid border-2 border-green8 bg-white rounded-full mx-auto",children:[(0,l.jsx)("div",{className:"my-auto mx-[15px] xl:mx-[25px]",children:(0,l.jsx)("img",{src:h.src,alt:"share-logo",className:"w-[60px]"})}),(0,l.jsx)("p",{className:"align-middle items-center",children:"Building and maintaining supportive internal relationship to generate significant output"})]}),(0,l.jsx)("div",{className:"flex",children:(0,l.jsx)("div",{className:"mx-auto",children:(0,l.jsx)("img",{src:x.Z.src,alt:"leaf-icon",className:"w-[100px] h-[100px]"})})})]})]})]})},b=function(){return(0,l.jsxs)("div",{className:"bg-gradient h-[550px] flex items-center justify-center overflow-y-hidden",children:[(0,l.jsxs)("h1",{className:"overflow-x-hidden absolute text-center font-montserrat text-stroke-white text-transparent font-bold white-text-shadow opacity-25 text-[60px] md:text-[75px] lg:text-[90px] max-w-full px-4",children:["SOCIETY OF ",(0,l.jsx)("br",{})," RENEWABLE  ENERGY"]}),(0,l.jsx)("p",{className:"text-5xl font-montserrat font-bold text-white md:text-[80px] white-text-shadow lg:text-[96px]",children:"#RElevatingSRE"})]})},j={src:"/_next/static/media/Gradient1.329c1ec9.svg",height:860,width:613},y={src:"/_next/static/media/Gradient2.2d7a9e0e.svg",height:860,width:504},N={src:"/_next/static/media/Plant.e111ad37.svg",height:125,width:125},A=function(){return(0,l.jsx)("div",{className:"font-montserrat",children:(0,l.jsxs)("div",{className:"mt-[10vw] sm:mt-[5vw] mb-[30vw]",children:[(0,l.jsx)("h1",{className:"text-center font-gradient font-extrabold text-[24px] md:text-[36px] xl:text-[48px] mx-[6vw]",children:"WHO'S THE PEOPLE BEHIND SRE ITB?"}),(0,l.jsx)("div",{className:"mt-[20px] h-[5px] xl:h-[10px] w-[125px] bg-gradient rounded-full mx-auto"}),(0,l.jsxs)("div",{className:"grid grid-rows-2 gap-[6vw] mt-[8vw]",children:[(0,l.jsx)("div",{className:"absolute mt-[-15vw] z-10 w-[40vw]",children:(0,l.jsx)(i(),{src:j,alt:"gradient1"})}),(0,l.jsxs)("div",{className:"relative z-30 border-[#89C190] border-[3px] bg-white py-[7vw] p-[5vw] sm:p-[3vw] w-[80vw] sm:w-[60vw] rounded-3xl mx-auto sm:ml-[10vw]",children:[(0,l.jsx)("h1",{className:"text-center font-gradient font-extrabold text-[24px] md:text-[36px] xl:text-[48px] relative top-[-2vw]",children:"MANAGEMENT TEAM"}),(0,l.jsx)("p",{className:"text-center text-[16px] xl:text-[20px]",children:"The management team of SRE ITB is composed of dedicated individuals who oversee the organization's operations and drive its mission forward. The team also includes various directors responsible for specific areas of focus within SRE ITB."})]}),(0,l.jsx)("div",{className:"absolute z-10 mt-[40vh] sm:mt-[8vw] right-0 w-[40vw] flex justify-end",children:(0,l.jsx)(i(),{src:y,alt:"gradient2"})}),(0,l.jsxs)("div",{className:"relative z-30 border-[#89C190] border-[3px] bg-white py-[7vw] p-[5vw] sm:p-[3vw] w-[80vw] sm:w-[60vw] rounded-3xl mx-auto sm:ml-auto sm:mr-[10vw]",children:[(0,l.jsx)("div",{className:"absolute top-[-6vw] right-[5vw] w-[8vw] hidden sm:block",children:(0,l.jsx)(i(),{src:N,alt:"pucuk-logo"})}),(0,l.jsx)("h1",{className:"text-center font-gradient font-extrabold text-[24px] md:text-[36px] xl:text-[48px] relative top-[-2vw]",children:"SRE MEMBER"}),(0,l.jsx)("p",{className:"text-center text-[16px] xl:text-[20px]",children:"SRE ITB members are individuals who have participated in the learning programs provided by the SRE ITB focused on renewable energy. As SRE ITB members, they will engaged in various learning activities, such as training sessions, and research projects."})]})]})]})})},E=a(3406),_=function(){return(0,l.jsxs)(s.Z,{title:"SRE ITB | About Us",children:[(0,l.jsx)(n.Z,{}),(0,l.jsx)(d,{}),(0,l.jsx)(w,{}),(0,l.jsx)(b,{}),(0,l.jsx)(A,{}),(0,l.jsx)(E.Z,{})]})}},9008:function(e,t,a){e.exports=a(5443)},1664:function(e,t,a){e.exports=a(8418)}},function(e){e.O(0,[189,785,774,888,179],function(){return e(e.s=8318)}),_N_E=e.O()}]);
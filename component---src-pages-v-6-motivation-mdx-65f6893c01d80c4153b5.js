(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{BKZm:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return c}));n("rGqo"),n("q1tI");var a=n("7ljp"),o=n("7oih");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={},l={_frontmatter:p},s=o.a;function c(e){let{components:t}=e,n=r(e,["components"]);return Object(a.b)(s,i({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",null,"Why tooltips and popovers?"),Object(a.b)("p",null,'Both are elements positioned near a "reference" element, and are hidden until\nthey are triggered. They help conserve space by hiding secondary information or\nfunctionality behind a hover or click. They are positioned outside the normal\nflow of the document so when they are triggered, they are overlaid on top of the\nexisting UI without disrupting the flow of content.'),Object(a.b)("p",null,"Tippy.js distinguishes them in the following way:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("strong",{parentName:"li"},"tooltip")," is an element containing simple text content describing a\nparticular element. It's hidden until the user desires more information from\nthe element, e.g. before deciding to click a button."),Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("strong",{parentName:"li"},"popover")," is an interactive HTML tooltip. It can be a dropdown, menu, or\nany other kind of box that pops out from the normal flow of the document. This\ntype of element contains non-vital functionality and can be hidden behind a\nclick or hover to conserve space.")),Object(a.b)("p",null,'Both of these are called a "tippy" when using Tippy.js!'),Object(a.b)("h3",null,"Tippy.js"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Size: 4.5 kB minzip (core)")," (including Popper: 10.5 kB)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note")),Object(a.b)("p",{parentName:"blockquote"},"(core) means the core JS & CSS. If importing more themes, animations, plugins,\nor addons, the size will increase.")),Object(a.b)("p",null,"Tippy is an abstraction over Popper and provides a set of features and defaults\nthat make creating tooltip and popover elements easy."),Object(a.b)("p",null,"But, how does Tippy compare to other solutions?"),Object(a.b)("h3",null,"Comparison with Popper.js"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Size: 6 kB minzip")," (full)"),Object(a.b)("p",null,"Popper.js is a positioning engine, not a tooltip library. Popper's only goal is\nto position an absolutely positioned element (the tooltip) near another element\n(the reference)."),Object(a.b)("p",null,'If you want to build the appearance and behavior of your popper elements from\nscratch, this is a fantastic library. If you want "out of the box" (abstracted)\nbehavior, then using Tippy might be better.'),Object(a.b)("p",null,"Tippy takes advantage of Popper as a dependency, so you can use them together\nwithout incurring additional cost:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(a.b)("pre",i({parentName:"div"},{className:"language-js"}),Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),Object(a.b)("span",i({parentName:"code"},{className:"token module keyword"}),"import")," ",Object(a.b)("span",i({parentName:"code"},{className:"token block"}),"{"),"createPopper",Object(a.b)("span",i({parentName:"code"},{className:"token block"}),"}")," ",Object(a.b)("span",i({parentName:"code"},{className:"token module keyword"}),"from")," ",Object(a.b)("span",i({parentName:"code"},{className:"token string"}),Object(a.b)("span",i({parentName:"span"},{className:"token punctuation"}),"'"),"@popperjs/core",Object(a.b)("span",i({parentName:"span"},{className:"token punctuation"}),"'")),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(a.b)("span",i({parentName:"code"},{className:"token module keyword"}),"import")," tippy ",Object(a.b)("span",i({parentName:"code"},{className:"token module keyword"}),"from")," ",Object(a.b)("span",i({parentName:"code"},{className:"token string"}),Object(a.b)("span",i({parentName:"span"},{className:"token punctuation"}),"'"),"tippy.js",Object(a.b)("span",i({parentName:"span"},{className:"token punctuation"}),"'")),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),";")))),Object(a.b)("p",null,"If you're using the CDN, the ",Object(a.b)("code",i({parentName:"p"},{className:"language-text"}),"Popper.createPopper()")," constructor will already be\navailable."),Object(a.b)("h3",null,"Comparison with CSS tooltip libraries like Microtip or Balloon.css"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Size: 1 kB minzip")),Object(a.b)("p",null,"CSS tooltips can be tiny in size, but come with some drawbacks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Lack of positioning engine means overflow prevention & flipping are not\npossible"),Object(a.b)("li",{parentName:"ul"},"Interactivity can be complicated or inaccessible"),Object(a.b)("li",{parentName:"ul"},"Using HTML content within them is cumbersome (especially with UI libraries\nlike React), with limited dynamism for updating content or reacting to state"),Object(a.b)("li",{parentName:"ul"},"No dynamic arrow positioning or features like ",Object(a.b)("code",i({parentName:"li"},{className:"language-text"}),"followCursor"))),Object(a.b)("h3",null,"Comparison with Tooltipster"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Size: 10 kB minzip")," (including jQuery: 40 kB)"),Object(a.b)("p",null,"Tooltipster is a fantastic library with very similar functionality, but requires\na jQuery dependency, unlike Tippy. To many people these days, this is a\ndeal-breaker! jQuery's minzipped size is about 30 KB, and Tooltipster including\nCSS is about 10 KB. To people using frameworks like React, Vue, or Angular, it\ncan be hard to deal with such a large dependency."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-6-motivation-mdx-65f6893c01d80c4153b5.js.map
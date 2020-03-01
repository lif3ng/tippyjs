(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{WpI6:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return l}));t("rGqo"),t("q1tI");var n=t("7ljp"),s=t("7oih");t("qKvR");function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}const o={},b={_frontmatter:o},m=s.a;function l(e){let{components:a}=e,t=p(e,["components"]);return Object(n.b)(m,c({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Give elements you would like to give tooltips to a ",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"data-tippy-content"),"\nattribute:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(n.b)("pre",c({parentName:"div"},{className:"language-html"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-html"}),Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(n.b)("span",c({parentName:"span"},{className:"token attr-name"}),"data-tippy-content"),Object(n.b)("span",c({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"'),"Tooltip",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),"Text",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(n.b)("span",c({parentName:"span"},{className:"token attr-name"}),"data-tippy-content"),Object(n.b)("span",c({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"'),"Another Tooltip",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),"Text",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">"))))),Object(n.b)("p",null,"To give them a tippy tooltip, call the ",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"tippy()")," function with a CSS selector\nmatching these elements:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",c({parentName:"div"},{className:"language-js"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token string"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'"),"[data-tippy-content]",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"The ",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"data-tippy-content")," attribute allows you to give different tooltip content\nto many different elements, while only needing to initialize once."),Object(n.b)("p",null,"If targeting a single element, you can use the ",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"content")," prop instead of the\nattribute:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",c({parentName:"div"},{className:"language-js"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token string"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'"),"#singleElement",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"{"),"\n  content",Object(n.b)("span",c({parentName:"code"},{className:"token operator"}),":")," ",Object(n.b)("span",c({parentName:"code"},{className:"token string"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'"),"Tooltip",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'")),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"Tippy will create tooltips for elements even if you forget to give them content,\nwhich creates an odd shape with no content, so ensure your CSS selector is\nspecific enough to guarantee their content."),Object(n.b)("h3",null,"Target types"),Object(n.b)("p",null,"The first argument you pass to ",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"tippy()")," is the targets you want to give\ntooltips to. This can represent one or many different elements."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",c({parentName:"div"},{className:"language-js"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",c({parentName:"code"},{className:"token comment"}),"// String (CSS selector matching elements on the document)"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token string"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'"),"#id",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token string"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'"),".class",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token string"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'"),"[data-tippy-content]",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",c({parentName:"code"},{className:"token comment"}),"// Element"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token dom variable"}),"document"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",c({parentName:"code"},{className:"token func method"}),"getElementById"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token string"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'"),"my-element",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",c({parentName:"code"},{className:"token comment"}),"// Element[]"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"["),"element1",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," element2",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," element3",Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"]"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",c({parentName:"code"},{className:"token comment"}),"// NodeList"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token dom variable"}),"document"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",c({parentName:"code"},{className:"token func method"}),"querySelectorAll"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token string"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'"),".my-elements",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"'")),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h3",null,"Disabled elements"),Object(n.b)("p",null,"If an element is disabled, you will need to use a wrapper element (",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"<span>")," or\n",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"<div>"),") in order for the tippy to work. Elements with the disabled attribute\naren't interactive, meaning users cannot focus, hover, or click them to trigger\na tippy."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(n.b)("pre",c({parentName:"div"},{className:"language-html"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-html"}),Object(n.b)("span",c({parentName:"code"},{className:"token comment"}),"\x3c!-- Won't work! --\x3e"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(n.b)("span",c({parentName:"span"},{className:"token attr-name"}),"data-tippy-content"),Object(n.b)("span",c({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"'),"Tooltip",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(n.b)("span",c({parentName:"span"},{className:"token attr-name"}),"disabled"),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),"Text",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",Object(n.b)("span",c({parentName:"code"},{className:"token comment"}),"\x3c!-- Wrapper <span> will work --\x3e"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",Object(n.b)("span",c({parentName:"span"},{className:"token attr-name"}),"data-tippy-content"),Object(n.b)("span",c({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"'),"Tooltip",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(n.b)("span",c({parentName:"span"},{className:"token attr-name"}),"tabindex"),Object(n.b)("span",c({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"'),"0",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(n.b)("span",c({parentName:"span"},{className:"token attr-name"}),"disabled"),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),"Text",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"</"),"span"),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">"))))),Object(n.b)("p",null,"Please note that this has accessibility concerns and should be avoided if\npossible."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-6-creation-mdx-48b59e48d261a622a10a.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var o=n(2),a=n(6),r=(n(0),n(92)),i={id:"counter",title:"Micropayment Counter",sidebar_label:"Micropayment counter"},c={unversionedId:"counter",id:"counter",isDocsHomePage:!1,title:"Micropayment Counter",description:"Web Monetization lets you count exactly how much you made from a given visitor. The amount updates in real-time as more micropayments come in. Like any animated effect it should be used sparingly, but it can be a cool way to show your visitors exactly how much they're supporting you!",source:"@site/docs/counter.md",slug:"/counter",permalink:"/docs/counter",editUrl:"https://github.com/WICG/webmonetization/tree/master/docs/counter.md",version:"current",sidebar_label:"Micropayment counter",sidebar:"docs",previous:{title:"Remove Ads",permalink:"/docs/remove-ads"},next:{title:"Probabilistic Revenue Sharing",permalink:"/docs/probabilistic-rev-sharing"}},s=[{value:"Code",id:"code",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Interactive example",id:"interactive-example",children:[]}],l={rightToc:s};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Web Monetization lets you count exactly how much you made from a given visitor. The amount updates in real-time as more micropayments come in. Like any animated effect it should be used sparingly, but it can be a cool way to show your visitors exactly how much they're supporting you!"),Object(r.b)("p",null,"This example shows you how to use the ",Object(r.b)("inlineCode",{parentName:"p"},"monetizationprogress")," event to count how much you've made off of micropayments from a given visitor."),Object(r.b)("h2",{id:"code"},"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),'<head>\n  \x3c!-- this should be set to your own payment pointer --\x3e\n  <meta name="monetization" content="$wallet.example.com/alice">\n\n  <script>\n    let total = 0\n    let scale\n\n    if (document.monetization) {\n      document.monetization.addEventListener(\'monetizationprogress\', ev => {\n        // initialize currency and scale on first progress event\n        if (total === 0) {\n          scale = ev.detail.assetScale\n          document.getElementById(\'currency\').innerText = ev.detail.assetCode\n        }\n\n        total += Number(ev.detail.amount)\n\n        const formatted = (total * Math.pow(10, -scale)).toFixed(scale)\n        document.getElementById(\'total\').innerText = formatted\n      })\n    }\n  <\/script>\n</head>\n\n<body>\n  <p>\n    Thanks to you, I\'ve made\n    <span id="total">nothing (yet)</span>\n    <span id="currency"></span>\n  </p>\n</body>\n')),Object(r.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(r.b)("p",null,"If the visitor is web monetized (",Object(r.b)("inlineCode",{parentName:"p"},"document.monetization")," is defined), we're\nbinding the ",Object(r.b)("inlineCode",{parentName:"p"},"monetizationprogress")," event. ",Object(r.b)("inlineCode",{parentName:"p"},"monetizationprogress")," contains\ndetails about the micropayments that occur."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"if (document.monetization) {\n  document.monetization.addEventListener('monetizationprogress', ev => {\n")),Object(r.b)("p",null,"This is different from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./exclusive-content"}),"the exclusive content")," and\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./remove-ads"}),"remove ads")," examples, where we bound ",Object(r.b)("inlineCode",{parentName:"p"},"monetizationstart"),".\n",Object(r.b)("inlineCode",{parentName:"p"},"monetizationstart")," fires when Web Monetization initializes.\n",Object(r.b)("inlineCode",{parentName:"p"},"monetizationprogress")," fires every time there's a micropayment from the Web\nMonetization provider to the site."),Object(r.b)("p",null,"There's some attributes of the micropayments that don't change, like currency details. We set these currency details on the very first micropayment."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// initialize currency and scale on first progress event\nif (total === 0) {\n  scale = ev.detail.assetScale\n  document.getElementById('currency').innerText = ev.detail.assetCode\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ev.detail.assetCode")," is a three-letter code that describes the currency of the micropayment, like ",Object(r.b)("inlineCode",{parentName:"p"},"USD"),", ",Object(r.b)("inlineCode",{parentName:"p"},"EUR"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"XRP"),"."),Object(r.b)("p",null,"The asset code describes the asset the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./glossary#web-monetization-receiver"}),"Web Monetization\nreceiver")," is\ndenominating their incoming payments in. This often matches the currency your wallet account uses, but not always."),Object(r.b)("p",null,"The asset code will stay the same for a given payment pointer (your wallet provider should warn you if they change it). It is not affected by the currency that the Web Monetization provider uses."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ev.detail.assetScale")," defines how small the units of amount will be on this payment pointer. A bigger scale means smaller units. If your scale is 2 and your asset code is USD, then it means you need 100 (",Object(r.b)("inlineCode",{parentName:"p"},"10 ** 2"),") units to get one dollar."),Object(r.b)("p",null,"The amount in ",Object(r.b)("inlineCode",{parentName:"p"},"ev.detail.amount")," is an integer, which we add to our total."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"total += Number(ev.detail.amount)\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Even though ",Object(r.b)("inlineCode",{parentName:"p"},"ev.detail.amount")," is a string that can represent a number up to\n64 bits long in theory (too big for a JavaScript number), it's OK for us to\nconvert it to a JavaScript number here. The micropayment amounts in Web\nMonetization are far from pushing the limits. With USD and a scale of 9, for\ninstance, it would take around 500,000 years to overflow this number.")),Object(r.b)("p",null,"Finally, we update the text on the page with our new total. Our total is an\ninteger with the total number of indivisible units. We want it to be a more\nreadable decimal number, though, so we apply the scale to format it. This\nformatted version of the amount gets written to the ",Object(r.b)("inlineCode",{parentName:"p"},"total")," span on the page."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const formatted = (total * Math.pow(10, -scale)).toFixed(scale)\ndocument.getElementById('total').innerText = formatted\n")),Object(r.b)("h2",{id:"interactive-example"},"Interactive example"),Object(r.b)("p",null,"This example simulates showing the amount being streamed from a web monetized visitor. The example doesn't require you to have Web Monetization enabled in your browser. No real payments are occurring."),Object(r.b)("p",null,"Click the ",Object(r.b)("strong",{parentName:"p"},"View as Web Monetized/non-Web Monetized visitor")," button to toggle your monetization state."),Object(r.b)("p",null,"If you see the source files instead of the example, click ",Object(r.b)("strong",{parentName:"p"},"View App")," in the bottom right."),Object(r.b)("div",{class:"glitch-embed-wrap",style:{height:"420px",width:"100%"}},Object(r.b)("iframe",{src:"https://glitch.com/embed/#!/embed/wm-count-revenue?path=README.md&previewSize=100",title:"wm-count-revenue on Glitch",allow:"geolocation; microphone; camera; midi; vr; encrypted-media",style:{height:"100%",width:"100%",border:"0"}})))}m.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(n),b=o,d=u["".concat(i,".").concat(b)]||u[b]||p[b]||r;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),r=a("u9kb"),l=a("aOgs"),o=a("q1tI"),c=a.n(o),i=a("7ljp"),b=a("pD55"),m=a("8Aig"),p=a("ReZb"),d=a("GCVy"),s=a("+6vE");var g=function(e){var t=e.children;return c.a.createElement(r.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(r.s,{fontFamily:"mono",fontSize:1},t))};var u=function(e){var t=e.children;return c.a.createElement("strong",null,t)},O=a("gnlW"),j=a("mwnC"),N=a("/Rw0"),f=a("dVM4"),h=Object(n.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,a=e.depth;return c.a.createElement(h,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(r.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(r.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(y,{items:e.items,depth:a+1}):null)})))}y.defaultProps={depth:0};var E=y,v=a("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),l=[],o=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(o=e),l.push(c.a.createElement(r.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(r.i,{overlay:e.overlay},c.a.createElement(r.i.Button,null,o.variant.title),c.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},l)))}w.Menu=Object(n.f)(r.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,k=Object(n.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),z=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),X=Object(n.f)(r.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,o=a.frontmatter,h=o.title,y=o.description,w=o.status,M=o.source,A=o.additionalContributors,S=void 0===A?[]:A,R=v.a.getVariantRoot(n.pathname);return c.a.createElement(i.a,{components:{Index:p.a,Note:d.a,Prompt:g,PromptReply:u,Screenshot:O.a}},c.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(b.a,{title:h,description:y}),c.a.createElement(m.b,{location:n}),c.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(r.e,{display:["none",null,null,"block"]},c.a.createElement(j.a,{location:n})),c.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(r.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(r.e,null,c.a.createElement(r.e,null,c.a.createElement(r.m,{as:"h1"},h),y))),null!=R?c.a.createElement(z,null,c.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:R,location:n})):null),a.tableOfContents.items?c.a.createElement(X,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},c.a.createElement(r.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(E,{items:a.tableOfContents.items})):null,c.a.createElement(I,null,w||M?c.a.createElement(r.k,{mb:3,alignItems:"center"},w?c.a.createElement(f.a,{status:w}):null,c.a.createElement(r.e,{mx:"auto"}),M?c.a.createElement(N.a,{href:M}):null):null,a.tableOfContents.items?c.a.createElement(r.e,{display:["block",null,"none"],mb:3},c.a.createElement(r.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(r.r,{icon:l.b,mr:2}):c.a.createElement(r.r,{icon:l.c,mr:2}),"Table of contents"),c.a.createElement(r.e,{pt:1},c.a.createElement(E,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(s.a,{editUrl:a.editUrl,contributors:a.contributors.concat(S.map((function(e){return{login:e}})))}))))))}},hYde:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var n,r=a("8o2o"),l=a("q1tI"),o=a("7ljp"),c=a("O6H6"),i=a("4LHR"),b={},m=(n="Note",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={_frontmatter:b},d=c.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(d,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are three roles in an organization:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Owner:")," Users who manage organization members and billing."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Admin:")," Users who manage team membership and package access."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Member:")," Users who create and publish packages in the organization scope.")),Object(o.b)(l.Fragment,null,Object(o.b)("strong",null,"On the public registry, you cannot remove the last owner from an organization.")," To delete an organization, ",i.a["contact-support"].text,"."),Object(o.b)(m,{mdxType:"Note"},Object(o.b)(l.Fragment,null,Object(o.b)("strong",null,"npm Enterprise users:")," If you are using npm Enterprise, deactivating the only owner of an organization will cause that organization to be ownerless. If you have deactivated the last owner of an organization on an npm Enterprise instance, ",i.a["contact-enterprise-support"].text,".")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Action"),Object(o.b)("th",{parentName:"tr",align:"center"},Object(o.b)("strong",{parentName:"th"},"Owner")),Object(o.b)("th",{parentName:"tr",align:"center"},Object(o.b)("strong",{parentName:"th"},"Admin")),Object(o.b)("th",{parentName:"tr",align:"center"},Object(o.b)("strong",{parentName:"th"},"Member")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Manage organization billing"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Add members to the organization"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Remove members from the organization"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Rename an organization"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Delete an organization"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Change any organization member's role"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Create teams"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Delete teams"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Add any member to any team"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Remove any member from any team"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Manage team package access"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"Create and publish packages in the organization scope"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"},"X"),Object(o.b)("td",{parentName:"tr",align:"center"},"X")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-organizations-managing-organization-members-organization-roles-and-permissions-mdx-1889f73398a49c1520aa.js.map
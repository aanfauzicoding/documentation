(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),o=n("q1tI"),c=n.n(o),r=n("7ljp"),p=n("pD55"),m=n("8Aig"),s=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return c.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return c.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return c.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},c.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var k=N,w=n("MfeC");function E(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),l.push(c.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(i.i,{overlay:e.overlay},c.a.createElement(i.i.Button,null,o.variant.title),c.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},l)))}E.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=E,x=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),v=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,E=o.status,A=o.source,G=o.additionalContributors,M=void 0===G?[]:G,H=w.a.getVariantRoot(a.pathname);return c.a.createElement(r.a,{components:{Index:s.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:f.a}},c.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(p.a,{title:y,description:N}),c.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),c.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(i.e,{display:["none",null,null,"block"]},c.a.createElement(g.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),c.a.createElement(v,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(i.e,null,c.a.createElement(i.e,null,c.a.createElement(i.m,{as:"h1"},y),N))),null!=H?c.a.createElement(I,null,c.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?c.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},c.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(k,{items:n.tableOfContents.items})):null,c.a.createElement(z,null,E||A?c.a.createElement(i.k,{mb:3,alignItems:"center"},E?c.a.createElement(j.a,{status:E}):null,c.a.createElement(i.e,{mx:"auto"}),A?c.a.createElement(O.a,{href:A}):null):null,n.tableOfContents.items?c.a.createElement(i.e,{display:["block",null,"none"],mb:3},c.a.createElement(i.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(i.r,{icon:l.b,mr:2}):c.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),c.a.createElement(i.e,{pt:1},c.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,c.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},yYOM:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),o={},c={_frontmatter:o},r=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(r,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm init [--force|-f|--yes|-y|--scope]\nnpm init <@scope> (same as `npx <@scope>/create`)\nnpm init [<@scope>/]<name> (same as `npx [<@scope>/]create-<name>`)\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm init <initializer>")," can be used to set up a new or existing npm\npackage."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"initializer")," in this case is an npm package named ",Object(i.b)("inlineCode",{parentName:"p"},"create-<initializer>"),",\nwhich will be installed by ",Object(i.b)("a",{parentName:"p",href:"https://npm.im/npx"},Object(i.b)("inlineCode",{parentName:"a"},"npx")),", and then have its\nmain bin executed -- presumably creating or updating ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," and\nrunning any other initialization-related operations."),Object(i.b)("p",null,"The init command is transformed to a corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"npx")," operation as\nfollows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm init foo")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"npx create-foo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm init @usr/foo")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"npx @usr/create-foo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm init @usr")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"npx @usr/create"))),Object(i.b)("p",null,"Any additional options will be passed directly to the command, so ",Object(i.b)("inlineCode",{parentName:"p"},"npm init\nfoo -- --hello")," will map to ",Object(i.b)("inlineCode",{parentName:"p"},"npx create-foo --hello"),"."),Object(i.b)("p",null,"If the initializer is omitted (by just calling ",Object(i.b)("inlineCode",{parentName:"p"},"npm init"),"), init will fall\nback to legacy init behavior. It will ask you a bunch of questions, and\nthen write a package.json for you. It will attempt to make reasonable\nguesses based on existing fields, dependencies, and options selected. It is\nstrictly additive, so it will keep any fields and values that were already\nset. You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"-y"),"/",Object(i.b)("inlineCode",{parentName:"p"},"--yes")," to skip the questionnaire altogether. If\nyou pass ",Object(i.b)("inlineCode",{parentName:"p"},"--scope"),", it will create a scoped package."),Object(i.b)("h3",null,"Examples"),Object(i.b)("p",null,"Create a new React-based project using\n",Object(i.b)("a",{parentName:"p",href:"https://npm.im/create-react-app"},Object(i.b)("inlineCode",{parentName:"a"},"create-react-app")),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ npm init react-app ./my-react-app\n")),Object(i.b)("p",null,"Create a new ",Object(i.b)("inlineCode",{parentName:"p"},"esm"),"-compatible package using\n",Object(i.b)("a",{parentName:"p",href:"https://npm.im/create-esm"},Object(i.b)("inlineCode",{parentName:"a"},"create-esm")),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ mkdir my-esm-lib && cd my-esm-lib\n$ npm init esm --yes\n")),Object(i.b)("p",null,"Generate a plain old package.json using legacy init:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ mkdir my-npm-pkg && cd my-npm-pkg\n$ git init\n$ npm init\n")),Object(i.b)("p",null,"Generate it without having it ask any questions:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ npm init -y\n")),Object(i.b)("h3",null,"A note on caching"),Object(i.b)("p",null,"The npm cli utilizes its internal package cache when using the package\nname specified.  You can use the following to change how and when the\ncli uses this cache. See ",Object(i.b)("a",{parentName:"p",href:"/cli/v7/commands/npm-cache"},Object(i.b)("inlineCode",{parentName:"a"},"npm cache"))," for more on\nhow the cache works."),Object(i.b)("h4",null,"prefer-online"),Object(i.b)("p",null,"Forces staleness checks for packages, making the cli look for updates\nimmediately even if the package is already in the cache."),Object(i.b)("h4",null,"prefer-offline"),Object(i.b)("p",null,"Bypasses staleness checks for packages.  Missing data will still be\nrequested from the server. To force full offline mode, use ",Object(i.b)("inlineCode",{parentName:"p"},"offline"),"."),Object(i.b)("h4",null,"offline"),Object(i.b)("p",null,"Forces full offline mode. Any packages not locally cached will result in\nan error."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://npm.im/init-package-json"},"init-package-json module")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/package-json"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-version"},"npm version")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/scope"},"npm scope")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-exec"},"npm exec"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-init-md-71cecb81b311fdc684a5.js.map
"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[7973],{5294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var s=n(5893),i=n(1151);const d={title:"Collapse Text",sidebar_position:3},r="CollapseText -Text folding component",o={id:"components/interactive-components/CollapseText",title:"Collapse Text",description:"Effect demonstration",source:"@site/docs/components/interactive-components/CollapseText.md",sourceDirName:"components/interactive-components",slug:"/components/interactive-components/CollapseText",permalink:"/docs/components/interactive-components/CollapseText",draft:!1,unlisted:!1,editUrl:"https://github.com/kbqdev/docs/components/interactive-components/CollapseText.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Collapse Text",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Button Group",permalink:"/docs/components/interactive-components/ButtonGroup"},next:{title:"FloatButton",permalink:"/docs/components/interactive-components/FloatButton"}},l={},c=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Default effect",id:"1-default-effect",level:3},{value:"2. Custom style",id:"2-custom-style",level:3},{value:"API",id:"api",level:2}];function x(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"collapsetext--text-folding-component",children:"CollapseText -Text folding component"}),"\n",(0,s.jsx)(t.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,s.jsx)(t.h3,{id:"1-default-effect",children:"1. Default effect"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"const text = `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:\n  \u201cLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\u201d`;\n\n<CollapseText text={text} defaultNumberOfLines={3} lineHeight={px(20)} />;\n"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("figure",{children:(0,s.jsx)("img",{alt:"collapseText-ios1.gif",src:"https://iili.io/JzjFU2p.gif",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,s.jsx)(t.h3,{id:"2-custom-style",children:"2. Custom style"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"const text = `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:\n  \u201cLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\u201d`;\n\n<CollapseText\n  text={text}\n  defaultNumberOfLines={3}\n  lineHeight={px(20)}\n  textStyle={{ color: 'red', fontSize: px(16) }}\n  textContainerStyle={{ marginHorizontal: px(10) }}\n  expandStyle={{ color: 'green', fontSize: px(16) }}\n/>;\n"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("figure",{children:(0,s.jsx)("img",{alt:"collapseText-ios2.gif",src:"https://iili.io/JzjqTrv.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Properties"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"text"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})}),(0,s.jsx)(t.td,{children:"text"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"defaultNumberOfLines"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Default number of displayed lines"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"2"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lineHeight"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"The height of each line of text"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"18"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textStyle"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"text style"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TextStyle"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textContainerStyle"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Text container style"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ViewStyle"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expandText"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Text when expanded"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"expand"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"unExpandText"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Text when collapsed"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Collapse"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expandStyle"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Expand/collapse text style"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TextStyle"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"activeOpacity"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Opacity when pressed"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0.6"})})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[2471],{9726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(5893),s=t(1151);const i={title:"ScrollNumber",sidebar_position:6},c=void 0,l={id:"components/other-compoents/ScrollNumber",title:"ScrollNumber",description:"Effect demonstration",source:"@site/docs/components/other-compoents/ScrollNumber.md",sourceDirName:"components/other-compoents",slug:"/components/other-compoents/ScrollNumber",permalink:"/docs/components/other-compoents/ScrollNumber",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/other-compoents/ScrollNumber.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"ScrollNumber",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Link",permalink:"/docs/components/other-compoents/Link"},next:{title:"Timeline",permalink:"/docs/components/other-compoents/Timeline"}},d={},o=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Default effect",id:"1-default-effect",level:3},{value:"2. Modify style",id:"2-modify-style",level:3},{value:"3. Modify animation type",id:"3-modify-animation-type",level:3},{value:"4. Custom numbers",id:"4-custom-numbers",level:3},{value:"API",id:"api",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"#ScrollNumber scrolling number component"}),"\n",(0,r.jsx)(n.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,r.jsx)(n.h3,{id:"1-default-effect",children:"1. Default effect"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:"<ScrollNumber value={value} />\n"})}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643249493948238930.gif"})})}),"\n",(0,r.jsx)(n.h3,{id:"2-modify-style",children:"2. Modify style"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:"<ScrollNumber\n  value={value}\n  height={100}\n  containerStyle={{\n    width: 100,\n    marginRight: 10,\n    borderWidth: 1,\n    borderColor: 'red',\n  }}\n  textStyle={{ fontSize: 80, color: '#0000ff' }}\n/>\n"})}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643249734059808402.gif"})})}),"\n",(0,r.jsx)(n.h3,{id:"3-modify-animation-type",children:"3. Modify animation type"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:"<ScrollNumber\n  value={value}\n  height={100}\n  animationType=\"spring\"\n  containerStyle={{\n    width: 100,\n    marginRight: 10,\n    borderWidth: 1,\n    borderColor: 'red',\n  }}\n  textStyle={{ fontSize: 80, color: '#0000ff' }}\n/>\n"})}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643249831745364916.gif"})})}),"\n",(0,r.jsx)(n.h3,{id:"4-custom-numbers",children:"4. Custom numbers"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:"<ScrollNumber\n  numberRange={['zero', 'one', 'two', 'three', 'four', 'five', 'Lu', '\u65df', 'eight', '\u4e5d']}\n  value={value2}\n  textStyle={{ fontSize: 80, color: '#ff0000' }}\n/>\n"})}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643249981055369644.gif"})})}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Properties"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numberRange"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"Scrollable text range. The default is a number from 0-9"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[0-9]"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:"current value"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"height"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"Display height (if not passed, the height of the text will be calculated by default)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"0"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"containerStyle"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"container style"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ViewStyle"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"textStyle"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"Text style"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"TextStyle"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"animationType"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"Scroll animation type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"timing | spring"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"timing"})})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var r=t(7294);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
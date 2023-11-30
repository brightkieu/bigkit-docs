"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[2599],{6813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var d=n(5893),r=n(1151);const i={title:"Card",sidebar_position:2},s="Card card component",a={id:"components/basic-components/card",title:"Card",description:"Cards contain content and actions about a single subject.",source:"@site/docs/components/basic-components/card.md",sourceDirName:"components/basic-components",slug:"/components/basic-components/card",permalink:"/docs/components/basic-components/card",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/basic-components/card.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Card",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Box",permalink:"/docs/components/basic-components/box"},next:{title:"Center",permalink:"/docs/components/basic-components/center"}},o={},c=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Standard Card",id:"1-standard-card",level:3},{value:"2. Card without footer",id:"2-card-without-footer",level:3},{value:"3. Customize Header Card",id:"3-customize-header-card",level:3},{value:"4. Card with only body",id:"4-card-with-only-body",level:3},{value:"API",id:"api",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"card-card-component",children:"Card card component"}),"\n",(0,d.jsx)(t.p,{children:"Cards contain content and actions about a single subject."}),"\n",(0,d.jsx)(t.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,d.jsx)(t.h3,{id:"1-standard-card",children:"1. Standard Card"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<Card\n  icon={<SvgIcon name="bells" size={24} color={theme.colors.primary200} />}\n  title={"I am the title"}\n  extra="Description text"\n  footer={\n    <Box>\n      <Text variant="h4">Bottom text</Text>\n    </Box>\n  }\n>\n  <Text variant="d3">\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n    Lorem Ipsum has been the industry\'s standard dummy text ever since the\n    1500s, when an unknown printer took a galley of type and scrambled it to\n    make a type specimen book.\n  </Text>\n</Card>\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"card-ios1",src:"https://i.ibb.co/gr4CcJr/Card-1.png",alt:"Card-1",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(t.h3,{id:"2-card-without-footer",children:"2. Card without footer"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<Card title="I am the title" extra="description text">\n  <Text variant="h4">\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n    Lorem Ipsum has been the industry\'s standard dummy text ever since the\n    1500s, when an unknown printer took a galley of type and scrambled it to\n    make a type specimen book.\n  </Text>\n</Card>\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"card-ios2",src:"https://iili.io/JxXvw1R.png",alt:"BoxDemo 2",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(t.h3,{id:"3-customize-header-card",children:"3. Customize Header Card"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<Card\n  renderHeader={() => (\n    <Box flexDirection={"row"} justifyContent={"space-between"}>\n      <Text variant="h3">Custom title</Text>\n      <SvgIcon name="bells" size={24} color={theme.colors.primary200} />\n    </Box>\n  )}\n>\n  <Text variant="h4">\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n    Lorem Ipsum has been the industry\'s standard dummy text ever since the\n    1500s, when an unknown printer took a galley of type and scrambled it to\n    make a type specimen book.\n  </Text>\n</Card>\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"card-ios3",src:"https://iili.io/JxXvNgp.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(t.h3,{id:"4-card-with-only-body",children:"4. Card with only body"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<Card\n  renderHeader={() => <Text variant="primaryBody">Custom title</Text>}\n  hideHeader\n>\n  <Text variant="secondaryBodyReverse">\n    I am the main text I am the main text I am the main text I am the main text\n    I am the main text I am the main text I am the main text I am the main text\n    I am the main text I am the main text I am the main text I am the main text\n    I am the main text I am the main text I am the main text I am the main text\n    I am text\n  </Text>\n</Card>\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"card-ios4",src:"https://iili.io/JxXv8mX.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Properties"}),(0,d.jsx)(t.th,{children:"Required"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Default Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"icon"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"The icon to the left of the header"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ReactNode"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"title"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"header text"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ReactNode"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"extra"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"icon to the right of header"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ReactNode"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"renderHeader"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"Custom rendering header"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"() => ReactNode"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"hideHeader"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"Whether to hide the title"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"footer"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"Bottom container. Don\u2019t render if not passed"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ReactNode"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"containerStyle"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"Container style"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ViewStyle"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"contentStyle"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"The style of the container body"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"ViewStyle"})}),(0,d.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var d=n(7294);const r={},i=d.createContext(r);function s(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);
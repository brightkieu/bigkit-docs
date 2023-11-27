"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[4402],{2608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(5893),l=n(1151);const s={title:"List",sidebar_position:7},r="List list component",d={id:"components/presentation-components/list",title:"List",description:"Effect demonstration",source:"@site/docs/components/presentation-components/list.md",sourceDirName:"components/presentation-components",slug:"/components/presentation-components/list",permalink:"/docs/components/presentation-components/list",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/presentation-components/list.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"List",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"ImageHeader",permalink:"/docs/components/presentation-components/image-header"},next:{title:"ListItem",permalink:"/docs/components/presentation-components/list-item"}},o={},c=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Only one input box",id:"1-only-one-input-box",level:3},{value:"2. Set background color",id:"2-set-background-color",level:3},{value:"3. Override the background color",id:"3-override-the-background-color",level:3},{value:"4. Custom header",id:"4-custom-header",level:3},{value:"5. Use alone ListHeader",id:"5-use-alone-listheader",level:3},{value:"6. Customize the right side of the title",id:"6-customize-the-right-side-of-the-title",level:3},{value:"List API",id:"list-api",level:2},{value:"ListHeader API",id:"listheader-api",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"list-list-component",children:"List list component"}),"\n",(0,i.jsx)(t.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,i.jsx)(t.h3,{id:"1-only-one-input-box",children:"1. Only one input box"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"<List\n  header=\"Basic usage\"\n  items={[\n    { title: 'Main title main label', extra: <Input placeholder=\"Please enter\" style={{ height: px(32) }} /> },\n    {\n      title: 'Main title main title main title main title main title main title',\n      brief: 'Subtitle below the main title Subtitle below the main title',\n      arrow: 'horizontal',\n      onPress: () => console.log('onPress'),\n    },\n  ]}\n/>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"2-set-background-color",children:"2. Set background color"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"<List\n  header=\"Set background color\"\n  itemBackgroundColor=\"primary200\"\n  items={[\n    { title: 'Main title main label', extra: <Input placeholder=\"Please enter\" style={{ height: px(32) }} /> },\n    {\n      title: 'Main title main title main title main title main title main title',\n      brief: 'Subtitle below the main title Subtitle below the main title',\n      arrow: 'horizontal',\nonPress: () => console.log('onPress'),\n    },\n  ]}\n/>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"3-override-the-background-color",children:"3. Override the background color"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"<List\n  header=\"Override background color\"\n  itemBackgroundColor=\"primary200\"\n  items={[\n{ title: 'Main title main label', extra: <Input placeholder=\"Please enter\" style={{ height: px(32) }} /> },\n    {\n      title: 'Main title main title main title main title main title main title',\n      brief: 'Subtitle below the main title Subtitle below the main title',\n      backgroundColor: 'func200',\n      arrow: 'horizontal',\n      onPress: () => console.log('onPress'),\n    },\n  ]}\n/>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"4-custom-header",children:"4. Custom header"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"<List\n  header={<CustomHeader />}\n  items={[\n    { title: 'Main title main label', extra: <Input placeholder=\"Please enter\" style={{ height: px(32) }} /> },\n    {\n      title: 'Main title main title main title main title main title main title',\n      brief: 'Subtitle below the main title Subtitle below the main title',\n      arrow: 'horizontal',\n      onPress: () => console.log('onPress'),\n    },\n  ]}\n/>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"5-use-alone-listheader",children:"5. Use alone ListHeader"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<ListHeader text="Only title" />\n'})}),"\n",(0,i.jsx)(t.h3,{id:"6-customize-the-right-side-of-the-title",children:"6. Customize the right side of the title"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<List\n  header="only header"\n  extra={<SvgIcon name="left" />}\n  items={[{ title: \'Main title main label\', extra: <Input placeholder="Please enter" style={{ height: px(32) }} /> }]}\n/>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"list-api",children:"List API"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Properties"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"header"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:"header"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ReactNode"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"extra"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:"Content to the right of the title"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ReactNode"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"items"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsx)(t.td,{children:"list items"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ListItemProps[]"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemHeight"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:"List item height"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"number"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"32\xcf"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemBackgroundColor"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:"Set the background color of list items uniformly"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Theme Color"})}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"listheader-api",children:"ListHeader API"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Properties"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"text"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsx)(t.td,{children:"title text"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"extra"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:"Content to the right of the title"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ReactNode"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"textStyle"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:"Title text style"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"StyleProp<TextStyle>"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"headerStyle"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:"The style of the header container"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"StyleProp<ViewStyle>"})}),(0,i.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var i=n(7294);const l={},s=i.createContext(l);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
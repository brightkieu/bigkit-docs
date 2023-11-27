"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[7215],{3165:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var n=t(5893),r=t(1151);const d={title:"Pressable",sidebar_position:6},c="Pressable -clickable component",i={id:"components/interactive-components/Pressable",title:"Pressable",description:"Based on React Native Pressable package.",source:"@site/docs/components/interactive-components/Pressable.md",sourceDirName:"components/interactive-components",slug:"/components/interactive-components/Pressable",permalink:"/docs/components/interactive-components/Pressable",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/interactive-components/Pressable.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Pressable",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Menu",permalink:"/docs/components/interactive-components/Menu"},next:{title:"Search Bar",permalink:"/docs/components/interactive-components/SearchBar"}},l={},o=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Default effect",id:"1-default-effect",level:3},{value:"API",id:"api",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"pressable--clickable-component",children:"Pressable -clickable component"}),"\n",(0,n.jsxs)(s.p,{children:["Based on ",(0,n.jsx)(s.a,{href:"https://reactnative.dev/docs/pressable",children:"React Native Pressable"})," package."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Note: Pressable is a new feature introduced by react-native in version 0.63, which also means that if your project is lower than version 0.63, the Pressable component cannot be used"})}),"\n",(0,n.jsx)(s.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,n.jsx)(s.h3,{id:"1-default-effect",children:"1. Default effect"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",metastring:"| pure",children:'<Pressable onPress={handlePress} onLongPress={handleLongPress}>\n  <Box width={90} height={90} backgroundColor="gray300" />\n</Pressable>\n'})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{alt:"default effect ios",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643190132405185135.gif"})})}),"\n",(0,n.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Properties"}),(0,n.jsx)(s.th,{children:"Required"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default Value"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"onPress"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Click event"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"(event: GestureResponderEvent) => void"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"onPressIn"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Before the click event is executed"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"(event: GestureResponderEvent) => void"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"onPressOut"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"After the click event is executed"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"(event: GestureResponderEvent) => void"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"onLongPress"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Long press event"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"(event: GestureResponderEvent) => void"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"disabled"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Whether to disable"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"delayLongPress"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Delay time from click state to long press state"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"number"})}),(0,n.jsx)(s.td,{children:"1000"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"activeOpacity"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Opacity on click"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"number"})}),(0,n.jsx)(s.td,{children:"0.5"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"pressOffset"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"The distance the finger moves out of the component but holds the clicked state"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"number"})}),(0,n.jsx)(s.td,{children:"20"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hitOffset"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"The distance from the component to trigger onPressIn"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"number"})}),(0,n.jsx)(s.td,{children:"20"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"style"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Custom style"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"ViewStyle"})}),(0,n.jsx)(s.td,{})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>c});var n=t(7294);const r={},d=n.createContext(r);function c(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);
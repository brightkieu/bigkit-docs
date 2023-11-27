"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[9171],{5606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(5893),c=n(1151);const i={title:"Notify",sidebar_position:3},o="Notify Prompt component",r={id:"components/feedback-components/Notify",title:"Notify",description:"Effect demonstration",source:"@site/docs/components/feedback-components/Notify.md",sourceDirName:"components/feedback-components",slug:"/components/feedback-components/Notify",permalink:"/docs/components/feedback-components/Notify",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/feedback-components/Notify.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Notify",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/docs/components/feedback-components/Modal"},next:{title:"NumberKeyboard",permalink:"/docs/components/feedback-components/NumberKeyboard"}},d={},l=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Message prompt",id:"1-message-prompt",level:3},{value:"2. With closing effect",id:"2-with-closing-effect",level:3},{value:"3. With click jump effect",id:"3-with-click-jump-effect",level:3},{value:"4. Success Tips",id:"4-success-tips",level:3},{value:"5. Failure prompt",id:"5-failure-prompt",level:3},{value:"API",id:"api",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"notify-prompt-component",children:"Notify Prompt component"}),"\n",(0,s.jsx)(t.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,s.jsx)(t.h3,{id:"1-message-prompt",children:"1. Message prompt"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"<Button \n  title=\"info\" \n  onPress={() => Notify.info({ content: 'You have received a rush sale message, please check it' })} />\n"})}),"\n",(0,s.jsx)(t.h3,{id:"2-with-closing-effect",children:"2. With closing effect"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"<Button\n  title=\"close\"\n  onPress={() =>\n    Notify.info({\n      content: 'You have received a rush purchase message, please check it carefully',\n      autoClose: false,\n      onClose: () => console.log(222),\n    })\n  }\n/>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"3-with-click-jump-effect",children:"3. With click jump effect"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"<Button\n  title=\"press\"\n  onPress={() =>\n  Notify.info({\n      content: 'You have received a rush purchase message, please check it carefully',\n      onPress: () => navigation.navigate('BoxDemo'),\n      autoClose: false,\n    })\n  }\n/>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"4-success-tips",children:"4. Success Tips"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"<Button title=\"success\" onPress={() => Notify.success({ content: 'Purchase successful' })} />\n"})}),"\n",(0,s.jsx)(t.h3,{id:"5-failure-prompt",children:"5. Failure prompt"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"<Button title=\"fail\" onPress={() => Notify.fail({ content: 'Sorry, the operation failed' })} />\n"})}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Properties"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"autoClose"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Whether to automatically close the prompt"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"duration"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Prompt display duration (milliseconds)"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"3000"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"content"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Prompt box content"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ReactNode"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"activeOpacity"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Opacity when pressed"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0.6"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onClose"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Callback after the prompt box is closed"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"() => void"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onPress"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Callback after clicking the prompt box"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"() => void"})}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"duration"})," has two constant values:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Notify.SHORT=3000"}),"\n",(0,s.jsx)(t.li,{children:"Notify.LONG = 5000"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const c={},i=s.createContext(c);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
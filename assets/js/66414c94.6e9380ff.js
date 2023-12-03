"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[6814],{2213:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var o=n(5893),i=n(1151);const r={title:"Toast",sidebar_position:7},s="Toast-Prompt component",d={id:"components/feedback-components/Toast",title:"Toast",description:"Effect demonstration",source:"@site/docs/components/feedback-components/Toast.md",sourceDirName:"components/feedback-components",slug:"/components/feedback-components/Toast",permalink:"/docs/components/feedback-components/Toast",draft:!1,unlisted:!1,editUrl:"https://github.com/kbqdev/docs/components/feedback-components/Toast.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Toast",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Progress",permalink:"/docs/components/feedback-components/Progress"},next:{title:"Form components",permalink:"/docs/category/form-components"}},c={},a=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Show at top",id:"1-show-at-top",level:3},{value:"2. Display in the middle",id:"2-display-in-the-middle",level:3},{value:"3. Display at the bottom",id:"3-display-at-the-bottom",level:3},{value:"4. Show loading effect",id:"4-show-loading-effect",level:3},{value:"5. Prompt pops up again in the pop-up window",id:"5-prompt-pops-up-again-in-the-pop-up-window",level:3},{value:"6. Modify the prompt display duration",id:"6-modify-the-prompt-display-duration",level:3},{value:"API",id:"api",level:2},{value:"<code>Toast.top({ duration, content}: { duration: number, content: string })</code>",id:"toasttop-duration-content--duration-number-content-string-",level:4},{value:"<code>Toast.middle({ duration, content}: { duration: number, content: string })</code>",id:"toastmiddle-duration-content--duration-number-content-string-",level:4},{value:"<code>Toast.bottom({ duration, content}: { duration: number, content: string })</code>",id:"toastbottom-duration-content--duration-number-content-string-",level:4},{value:"<code>Toast.process(content: string)</code>",id:"toastprocesscontent-string",level:4},{value:"<code>Toast.hide()</code>",id:"toasthide",level:4}];function l(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"toast-prompt-component",children:"Toast-Prompt component"}),"\n",(0,o.jsx)(e.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,o.jsx)(e.h3,{id:"1-show-at-top",children:"1. Show at top"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:"| pure",children:"<Button title=\"top\" onPress={() => (keyRef.current = Toast.top({ content: 'Prompt content 1111' }))} />\n"})}),"\n",(0,o.jsx)("center",{children:(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"https://iili.io/JxDPol4.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}}),(0,o.jsx)(e.p,{children:"/>"})]})}),"\n",(0,o.jsx)(e.h3,{id:"2-display-in-the-middle",children:"2. Display in the middle"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:"| pure",children:"<Button title=\"middle\" onPress={() => (keyRef.current = Toast.middle({ content: 'Prompt content 222222' }))} />\n"})}),"\n",(0,o.jsx)("center",{children:(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"https://iili.io/JxDPxUl.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}}),(0,o.jsx)(e.p,{children:"/>"})]})}),"\n",(0,o.jsx)(e.h3,{id:"3-display-at-the-bottom",children:"3. Display at the bottom"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:"| pure",children:"<Button title=\"bottom\" onPress={() => (keyRef.current = Toast.bottom({ content: 'Prompt content 333333333' }))} />\n"})}),"\n",(0,o.jsx)("center",{children:(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"https://iili.io/JxDsBa4.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}}),(0,o.jsx)(e.p,{children:"/>"})]})}),"\n",(0,o.jsx)(e.h3,{id:"4-show-loading-effect",children:"4. Show loading effect"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:"| pure",children:'<Button title="loading" onPress={() => (keyRef.current = Toast.process())} />\n'})}),"\n",(0,o.jsx)("center",{children:(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"https://iili.io/JxDipvp.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}}),(0,o.jsx)(e.p,{children:"/>"})]})}),"\n",(0,o.jsx)(e.h3,{id:"5-prompt-pops-up-again-in-the-pop-up-window",children:"5. Prompt pops up again in the pop-up window"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:"| pure",children:'<Button title="Content at bottom" onPress={() => setVisible1(true)} />\n<Modal visible={visible1} onClose={() => setVisible1(false)} position="bottom">\n  <Box height={190}>\n    <Text variant="p0" color="gray500">\n      I am the content\n    </Text>\n    <WhiteSpace />\n    <Button title="submitting" onPress={() => (keyRef.current = Toast.process(\'Submitting...\'))} />\n  </Box>\n</Modal>\n'})}),"\n",(0,o.jsx)("center",{children:(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"https://iili.io/JxDiwT7.gif",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}}),(0,o.jsx)(e.p,{children:"/>"})]})}),"\n",(0,o.jsx)(e.h3,{id:"6-modify-the-prompt-display-duration",children:"6. Modify the prompt display duration"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:"| pure",children:"<Button title=\"top\" onPress={() => (keyRef.current = Toast.top({ content: 'Prompt content 1111', duration: Toast.LONG }))} />\n"})}),"\n",(0,o.jsx)("center",{children:(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643254765688963868.gif",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}}),(0,o.jsx)(e.p,{children:"/>"})]})}),"\n",(0,o.jsx)(e.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(e.h4,{id:"toasttop-duration-content--duration-number-content-string-",children:(0,o.jsx)(e.code,{children:"Toast.top({ duration, content}: { duration: number, content: string })"})}),"\n",(0,o.jsx)(e.h4,{id:"toastmiddle-duration-content--duration-number-content-string-",children:(0,o.jsx)(e.code,{children:"Toast.middle({ duration, content}: { duration: number, content: string })"})}),"\n",(0,o.jsx)(e.h4,{id:"toastbottom-duration-content--duration-number-content-string-",children:(0,o.jsx)(e.code,{children:"Toast.bottom({ duration, content}: { duration: number, content: string })"})}),"\n",(0,o.jsx)(e.h4,{id:"toastprocesscontent-string",children:(0,o.jsx)(e.code,{children:"Toast.process(content: string)"})}),"\n",(0,o.jsx)(e.h4,{id:"toasthide",children:(0,o.jsx)(e.code,{children:"Toast.hide()"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"duration"})," There are three constant values:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Toast.SHORT = 1500"}),"\n",(0,o.jsx)(e.li,{children:"Toast.LONG = 3000"}),"\n",(0,o.jsx)(e.li,{children:"Toast.INFINITY = INFINITY"}),"\n"]})]})}function p(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>d,a:()=>s});var o=n(7294);const i={},r=o.createContext(i);function s(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);
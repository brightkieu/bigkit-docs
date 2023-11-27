"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[4170],{3345:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var n=s(5893),r=s(1151);const i={title:"Slider",sidebar_position:6},l="Slider component",t={id:"components/form-components/Slider",title:"Slider",description:"Effect demonstration",source:"@site/docs/components/form-components/Slider.md",sourceDirName:"components/form-components",slug:"/components/form-components/Slider",permalink:"/docs/components/form-components/Slider",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-components/Slider.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Slider",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Radio",permalink:"/docs/components/form-components/Radio"},next:{title:"Stepper",permalink:"/docs/components/form-components/Stepper"}},c={},o=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Default effect",id:"1-default-effect",level:3},{value:"2. Default value 45",id:"2-default-value-45",level:3},{value:"3. Maximum and minimum values",id:"3-maximum-and-minimum-values",level:3},{value:"4. Custom colors",id:"4-custom-colors",level:3},{value:"5. Do not display slider numbers",id:"5-do-not-display-slider-numbers",level:3},{value:"6. Numbers are on the right",id:"6-numbers-are-on-the-right",level:3},{value:"API",id:"api",level:2}];function h(e){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"slider-component",children:"Slider component"}),"\n",(0,n.jsx)(d.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,n.jsx)(d.h3,{id:"1-default-effect",children:"1. Default effect"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:"<Slider />\n"})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{alt:"slider-ios1.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608032620330195137.gif"})})}),"\n",(0,n.jsx)(d.h3,{id:"2-default-value-45",children:"2. Default value 45"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:"<Slider value={45} />\n"})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{alt:"slider-io21.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608032749566957647.gif"})})}),"\n",(0,n.jsx)(d.h3,{id:"3-maximum-and-minimum-values",children:"3. Maximum and minimum values"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:"<Slider min={20} max={80} />\n"})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{alt:"slider-ios3.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608032808179563288.gif"})})}),"\n",(0,n.jsx)(d.h3,{id:"4-custom-colors",children:"4. Custom colors"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:'<Slider value={45} foregroundColor="gold" backgroundColor="red" borderColor="blue" handleBackground="pink" />\n'})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{alt:"slider-ios4.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608032929313069066.gif"})})}),"\n",(0,n.jsx)(d.h3,{id:"5-do-not-display-slider-numbers",children:"5. Do not display slider numbers"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:"<Slider value={45} showLabel={false} />\n"})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{alt:"slider-ios5.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608033028156894177.gif"})})}),"\n",(0,n.jsx)(d.h3,{id:"6-numbers-are-on-the-right",children:"6. Numbers are on the right"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:'<Slider value={45} labelPosition="right" />\n'})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{alt:"slider-ios6.gif",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608033111344004697.gif"})})}),"\n",(0,n.jsx)(d.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Properties"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Default Value"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"min"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"minimum value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"0"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"max"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"maximum value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"100"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"current value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"0"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"width"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"width"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"deviceWidth -100"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"height"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"height"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"20"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onChange"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Event triggered after the slider is dragged"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"(value: number) => void"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"foregroundColor"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"The color of the left side of the slider"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"theme color"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"backgroundColor"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Color of the right side of the slider"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"#fff"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"handleBackground"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Slider background color"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"#fff"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"showLabel"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Whether to display the slider number"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"boolean"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"true"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"labelPosition"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Slider number display position"}),(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"top"})," | ",(0,n.jsx)(d.code,{children:"left"})," | ",(0,n.jsx)(d.code,{children:"right"})," | ",(0,n.jsx)(d.code,{children:"bottom"})]}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"top"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"labelStyle"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"text style"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"TextStyle"})}),(0,n.jsx)(d.td,{})]})]})]})]})}function a(e={}){const{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,d,s)=>{s.d(d,{Z:()=>t,a:()=>l});var n=s(7294);const r={},i=n.createContext(r);function l(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);
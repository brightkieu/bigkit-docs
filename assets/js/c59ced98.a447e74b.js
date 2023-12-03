"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[2712],{4292:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=l(5893),s=l(1151);const i={title:"Picker",sidebar_position:5},d="Picker - Selector",c={id:"components/select-compoents/Picker",title:"Picker",description:"Effect demonstration",source:"@site/docs/components/select-compoents/Picker.md",sourceDirName:"components/select-compoents",slug:"/components/select-compoents/Picker",permalink:"/docs/components/select-compoents/Picker",draft:!1,unlisted:!1,editUrl:"https://github.com/kbqdev/docs/components/select-compoents/Picker.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Picker",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"DatePickerItem",permalink:"/docs/components/select-compoents/DatePickerItem"},next:{title:"PickerInput",permalink:"/docs/components/select-compoents/PickerInput"}},r={},o=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Single column pop-up window",id:"1-single-column-pop-up-window",level:3},{value:"2. Multi-column pop-up window",id:"2-multi-column-pop-up-window",level:3},{value:"3. Cascading pop-up windows",id:"3-cascading-pop-up-windows",level:3},{value:"API",id:"api",level:2},{value:"Picker properties",id:"picker-properties",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"picker---selector",children:"Picker - Selector"}),"\n",(0,t.jsx)(n.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,t.jsx)(n.h3,{id:"1-single-column-pop-up-window",children:"1. Single column pop-up window"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:"const [visible, setVisible] = React.useState(false);\nconst [value, setValue] = React.useState<Array<string | number>>();\n const singleData = [\n    {label: 'One', value: 1},\n    {label: 'Two', value: 2},\n    {label: 'Three', value: 3},\n  ];\n...\n<Button title=\"Open\" onPress={() => setVisible(true)} />\n<Text variant={'h3'}>{value}</Text>\n<Picker\n  title=\"Please select\"\n  visible={visible}\n  cols={1}\n  onClose={() => setVisible(false)}\n  data={singleData}\n  value={value}\n  onChange={val => setValue(val)}\n/>\n"})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"picker-ios1.png",src:"https://iili.io/JzNADsR.gif",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,t.jsx)(n.h3,{id:"2-multi-column-pop-up-window",children:"2. Multi-column pop-up window"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:" const multiData = [\n    [\n      {label: 'One', value: 1},\n      {label: 'Two', value: 2},\n      {label: 'Three', value: 3},\n    ],\n    [\n      {label: 'Four', value: 4},\n      {label: 'Five', value: 5},\n      {label: 'Six', value: 6},\n    ],\n  ];\n...\n<Button title=\"Open\" onPress={() => setVisible(true)} />\n<Text variant={'h3'}>{value?.map(e=> `${e} value `)}</Text>\n<Picker\n  title=\"Please select\"\n  visible={visible}\n  cols={1}\n  onClose={() => setVisible(false)}\n  data={multiData}\n  value={value}\n  onChange={val => setValue(val)}\n/>\n"})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"picker-ios2.png",src:"https://iili.io/JzN7oNe.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,t.jsx)(n.h3,{id:"3-cascading-pop-up-windows",children:"3. Cascading pop-up windows"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:" const cascadeData = [\n    [\n      {label: 'One', value: 1},\n      {label: 'Two', value: 2},\n      {label: 'Three', value: 3},\n    ],\n    [\n      {label: 'Four', value: 4},\n      {label: 'Five', value: 5},\n      {label: 'Six', value: 6},\n    ],\n    [\n      {label: 'Seven', value: 7},\n      {label: 'Eight', value: 8},\n      {label: 'Nine', value: 9},\n    ],\n  ];\n...\n<Picker\n  title=\"Please select a number\"\n  visible={visible}\n  cols={3}\n  cascade\n  onClose={() => setVisible(false)}\n  data={cascadeData}\n  value={value}\n  onChange={(val) => setValue(val)}\n/>\n"})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"picker-ios3.gif",src:"https://iili.io/JzN7xDu.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.h3,{id:"picker-properties",children:"Picker properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Properties"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"data"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsx)(n.td,{children:"Selection data"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"CascadePickerItemProps[]"})," | ",(0,t.jsx)(n.code,{children:"Array<CascadePickerItemProps[]>"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cascade"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Whether to cascade selection"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cols"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Select the number of columns"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"3"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"selected value"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ItemValue[]"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onChange"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Selection callback"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"(value?: ItemValue[]) => void"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"title"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Selector title"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"displayType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Selector display type"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"view"})," | ",(0,t.jsx)(n.code,{children:"modal"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"modal"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"visible"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Control pop-up window display"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onClose"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Pop-up window closing event"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"() => void"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cancelText"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Cancel button text"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Cancel"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"okText"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Confirm button text"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OK"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"activeOpacity"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Opacity when pressed"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0.6"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["_",(0,t.jsx)(n.code,{children:"CascadePickerItemProps"})," Inherited from ",(0,t.jsx)(n.code,{children:"@react-native-picker/picker"})," of ",(0,t.jsx)(n.code,{children:"PickerItemProps"})," Attributes"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface CascadePickerItemProps extends PickerItemProps {\n  children?: CascadePickerItemProps[];\n}\n\nexport interface PickerItemProps {\n  label?: string;\n  value: ItemValue;\n  color?: string;\n  testID?: string;\n}\n\nexport type ItemValue = number | string;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>c,a:()=>d});var t=l(7294);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
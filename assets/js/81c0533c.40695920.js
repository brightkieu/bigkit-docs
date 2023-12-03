"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[8958],{5624:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=r(5893),s=r(1151);const i={title:"NumberKeyboard",sidebar_position:3},t="NumberKeyboard - Numeric keypad component",l={id:"components/feedback-components/NumberKeyboard",title:"NumberKeyboard",description:"Effect demonstration",source:"@site/docs/components/feedback-components/NumberKeyboard.md",sourceDirName:"components/feedback-components",slug:"/components/feedback-components/NumberKeyboard",permalink:"/docs/components/feedback-components/NumberKeyboard",draft:!1,unlisted:!1,editUrl:"https://github.com/kbqdev/docs/components/feedback-components/NumberKeyboard.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"NumberKeyboard",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Notify",permalink:"/docs/components/feedback-components/Notify"},next:{title:"Pagination",permalink:"/docs/components/feedback-components/Pagination"}},c={},h=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Default numeric keyboard",id:"1-default-numeric-keyboard",level:3},{value:"2. ID card keyboard",id:"2-id-card-keyboard",level:3},{value:"3. Integer keyboard",id:"3-integer-keyboard",level:3},{value:"4. Keyboard pop-up window",id:"4-keyboard-pop-up-window",level:3},{value:"5. NumberKeyboardItem",id:"5-numberkeyboarditem",level:3},{value:"6. NumberKeyboardInput",id:"6-numberkeyboardinput",level:3},{value:"API",id:"api",level:2},{value:"NumberKeyboardView \u7ec4\u4ef6",id:"numberkeyboardview-\u7ec4\u4ef6",level:3},{value:"NumberKeyboardModal component",id:"numberkeyboardmodal-component",level:3},{value:"NumberKeyboardItem component",id:"numberkeyboarditem-component",level:3},{value:"NumberKeyboardInput component",id:"numberkeyboardinput-component",level:3}];function x(e){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"numberkeyboard---numeric-keypad-component",children:"NumberKeyboard - Numeric keypad component"}),"\n",(0,n.jsx)(d.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,n.jsx)(d.h3,{id:"1-default-numeric-keyboard",children:"1. Default numeric keyboard"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:'<NumberKeyboard.NumberKeyboardView\n  onPress={(e) => {\n    Alert.alert(e);\n  }}\n  onDelete={() => {\n    Alert.alert("delete");\n  }}\n  onSubmit={() => {\n    Alert.alert("submit");\n  }}\n/>\n'})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{alt:"numeric keyboard ios",src:"https://iili.io/JxsxGUB.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,n.jsx)(d.h3,{id:"2-id-card-keyboard",children:"2. ID card keyboard"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:'<NumberKeyboard.NumberKeyboardInput label="Label" value={value} />\n<NumberKeyboard.NumberKeyboardView\n  type="idcard"\n  onPress={(e) => {\n    Alert.alert(e);\n  }}\n  onDelete={() => {\n    Alert.alert("delete");\n  }}\n  onSubmit={() => {\n    Alert.alert("submit");\n  }}\n/>\n'})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{alt:"ID card keyboard ios",src:"https://iili.io/Jxsx1KQ.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,n.jsx)(d.h3,{id:"3-integer-keyboard",children:"3. Integer keyboard"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:'<NumberKeyboard.NumberKeyboardInput label="Label" value={value} />\n<NumberKeyboard.NumberKeyboardView\n  type="integer"\n  onPress={(e) => {\n    Alert.alert(e);\n  }}\n  onDelete={() => {\n    Alert.alert("delete");\n  }}\n  onSubmit={() => {\n    Alert.alert("submit");\n  }}\n/>\n'})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{src:"https://iili.io/Jxsxlix.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,n.jsx)(d.h3,{id:"4-keyboard-pop-up-window",children:"4. Keyboard pop-up window"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:'<Button title="Open" onPress={() => setVisible(true)} />\n<NumberKeyboard.NumberKeyboardModal\n  visible={visible}\n  onClose={() => setVisible(true)}\n/>\n'})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{alt:"keyboard popup ios",src:"https://iili.io/JxsxElV.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,n.jsx)(d.h3,{id:"5-numberkeyboarditem",children:"5. NumberKeyboardItem"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:'<NumberKeyboardItem type="number" digit={2} />\n'})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{src:"https://iili.io/JxszKgV.gif",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,n.jsx)(d.h3,{id:"6-numberkeyboardinput",children:"6. NumberKeyboardInput"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:'<NumberKeyboardInput label="Waybill quantity" type="number" digit={2} />\n'})}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("figure",{children:(0,n.jsx)("img",{src:"https://iili.io/Jxsz7dN.gif",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,n.jsx)(d.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(d.h3,{id:"numberkeyboardview-\u7ec4\u4ef6",children:"NumberKeyboardView \u7ec4\u4ef6"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Properties"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Default Value"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"type"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Keyboard type (number, ID card, integer)"}),(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"number"})," | ",(0,n.jsx)(d.code,{children:"IdCard"})," | ",(0,n.jsx)(d.code,{children:"integer"})]}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onPress"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Key callback event"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"(key: string) => void"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onDelete"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Callback event for deleting a key"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"() => void"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onSubmit"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Submit key press callback event"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"() => void"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"submitText"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"The text of the submit button"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"OK"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"activeOpacity"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Opacity when pressed"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"0.6"})})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"numberkeyboardmodal-component",children:"NumberKeyboardModal component"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Properties"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Default Value"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"type"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Keyboard type (number, ID card, integer)"}),(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"number"})," | ",(0,n.jsx)(d.code,{children:"IdCard"})," | ",(0,n.jsx)(d.code,{children:"integer"})]}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onPress"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Key callback event"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"(key: string) => void"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onDelete"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Callback event for deleting a key"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"() => void"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onSubmit"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Submit key press callback event"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"(value: string) => void"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"submitText"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"The text of the submit button"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"OK"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"activeOpacity"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Opacity when pressed"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"0.6"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"input value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"visible"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"true"})}),(0,n.jsx)(d.td,{children:"Whether to open the pop-up window"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"boolean"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onClose"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"true"})}),(0,n.jsx)(d.td,{children:"Callback event to close the pop-up window"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"() => void"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"prefixLabel"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Prefix text for the entered value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"current value"})})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"numberkeyboarditem-component",children:"NumberKeyboardItem component"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Properties"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Default Value"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"type"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Keyboard type (number, ID card, integer)"}),(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"number"})," | ",(0,n.jsx)(d.code,{children:"IdCard"})," | ",(0,n.jsx)(d.code,{children:"integer"})]}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"input value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onChange"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Callback after value modification"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"(value: string) => void"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onCheck"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Callback to verify the value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"(value: string) => Promise<any>"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"placeholder"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"prompt"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"please enter"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"style"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Custom style"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"ViewStyle"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"inputStyle"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Input box custom style"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"TextStyle"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"extra"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Right content"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"ReactNode"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"arrowClear"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Whether to allow clearing"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"boolean"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"true"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"disabled"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Whether to disable"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"boolean"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"digit"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Number of decimal places to retain"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"0"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"minHeight"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Minimum height"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"32"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"activeOpacity"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Opacity when pressed"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"0.6"})})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"numberkeyboardinput-component",children:"NumberKeyboardInput component"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Properties"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Default Value"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"type"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Keyboard type (number, ID card, integer)"}),(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"number"})," | ",(0,n.jsx)(d.code,{children:"IdCard"})," | ",(0,n.jsx)(d.code,{children:"integer"})]}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"input value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onChange"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Callback after value modification"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"(value: string) => void"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"onCheck"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Callback to verify the value"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"(value: string) => Promise<any>"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"placeholder"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"prompt"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"please enter"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"style"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Custom style"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"ViewStyle"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"inputStyle"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Input box custom style"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"TextStyle"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"extra"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Right content"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"ReactNode"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"arrowClear"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Whether to allow clearing"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"boolean"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"true"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"disabled"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Whether to disable"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"boolean"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"digit"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Number of decimal places to retain"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"0"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"minHeight"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Minimum height"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"32"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"activeOpacity"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Opacity when pressed"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"0.6"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"label"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"label text"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"ReactNode"})}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"brief"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"false"})}),(0,n.jsx)(d.td,{children:"Other content"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"ReactNode"})}),(0,n.jsx)(d.td,{})]})]})]})]})}function o(e={}){const{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},1151:(e,d,r)=>{r.d(d,{Z:()=>l,a:()=>t});var n=r(7294);const s={},i=n.createContext(s);function t(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);
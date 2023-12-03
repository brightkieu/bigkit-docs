"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[9023],{6154:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=d(5893),r=d(1151);const o={title:"Count Down",sidebar_position:2},s=void 0,i={id:"components/form-components/CountDown",title:"Count Down",description:"The part of the countdown component that calls the backend interface to send the request is implemented by the developer (including mobile phone number verification, etc.).",source:"@site/docs/components/form-components/CountDown.md",sourceDirName:"components/form-components",slug:"/components/form-components/CountDown",permalink:"/docs/components/form-components/CountDown",draft:!1,unlisted:!1,editUrl:"https://github.com/kbqdev/docs/components/form-components/CountDown.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Count Down",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Check box",permalink:"/docs/components/form-components/CheckBox"},next:{title:"Form",permalink:"/docs/components/form-components/Form"}},c={},l=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Default configuration",id:"1-default-configuration",level:3},{value:"2. Configure codeType",id:"2-configure-codetype",level:3},{value:"API",id:"api",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"#CountDown component"}),"\n",(0,t.jsx)(n.p,{children:"The part of the countdown component that calls the backend interface to send the request is implemented by the developer (including mobile phone number verification, etc.)."}),"\n",(0,t.jsx)(n.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,t.jsx)(n.h3,{id:"1-default-configuration",children:"1. Default configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'import { Form, CountDown, InputItem } from "packages/components";\nconst { FormItem, useForm } = Form;\nconst [form] = useForm();\n\n<Form onFinish={handleFinish} form={form}>\n  <Form.FormListItem\n    title="Phone number"\n    required\n    name="useCharacter"\n    rules={[\n      {\n        required: true,\n        message: "Please enter your phone number",\n      },\n    ]}\n  >\n    <InputItem\n      keyboardType="number-pad"\n      border={false}\n      placeholder="Please enter your phone number"\n      inputStyle={{ textAlign: "right" }}\n    />\n  </Form.FormListItem>\n  <WhiteSpace size="x4" />\n  <FormItem\n    type={bordered ? "all" : "bottom"}\n    name="sms"\n    rules={[{ required: true, message: "Please enter verification code" }]}\n  >\n    <CountDown\n      bordered={false}\n      onSend={() => {\n        // Send code\n        console.log(form.getFieldValue("useCharacter"));\n      }}\n    />\n  </FormItem>\n  <WhiteSpace size="x4" />\n  <Button title="Login" onPress={() => {}} />\n</Form>;\n'})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"",src:"https://iili.io/Jz74swX.gif",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,t.jsx)(n.h3,{id:"2-configure-codetype",children:"2. Configure codeType"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'<Form onFinish={handleFinish} form={form}>\n  <FormListItem\n    title="Mobile phone number"\n    required\n    name="useCharacter"\n    rules={[\n      { required: true, message: "Please enter your mobile phone number" },\n    ]}\n  >\n    <InputItem\n      border={false}\n      placeholder="Please enter your mobile phone number"\n      inputStyle={{ textAlign: "right" }}\n    />\n  </FormListItem>\n  <WhiteSpace size="x4" />\n  <FormItem\n    type={bordered ? "all" : "bottom"}\n    name="sms"\n    rules={[{ required: true, message: "Please enter the verification code" }]}\n  >\n    <CountDown\n      bordered={bordered}\n      codeType="border"\n      onSend={() => {\n        console.log("123");\n      }}\n    />\n  </FormItem>\n</Form>\n'})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"",src:"https://iili.io/Jz761RI.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Properties"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"label"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Countdown text"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Get verification code"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resendLabel"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Resend text"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Resend"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"count"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Countdown duration"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"60"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onBefore"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Callback before sending verification code"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"() => Promise<boolean>"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onSend"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsx)(n.td,{children:"Send verification code"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"() => void"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onEnd"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Callback after countdown ends"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"() => void"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bordered"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Whether to display the outer border"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"codeType"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Whether the verification code style has a border"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"normal"})," | ",(0,t.jsx)(n.code,{children:"border"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"normal"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"brief"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Extras"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"style"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Input box custom style"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ViewStyle"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"activeOpacity"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Opacity when pressed"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0.6"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"placeholder"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"default prompt"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"leftIcon"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"left icon"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Verification code value"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onChange"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Input change event"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"(value: string) => void"})}),(0,t.jsx)(n.td,{})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,d)=>{d.d(n,{Z:()=>i,a:()=>s});var t=d(7294);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
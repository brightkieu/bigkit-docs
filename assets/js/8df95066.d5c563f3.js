"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[7309],{1070:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>a});var t=r(5893),o=r(1151);const i={title:"Form",sidebar_position:3},s="Form form",m={id:"components/form-components/Form",title:"Form",description:"Encapsulation of rc-field-form, providing effects similar to antd Form",source:"@site/docs/components/form-components/Form.md",sourceDirName:"components/form-components",slug:"/components/form-components/Form",permalink:"/docs/components/form-components/Form",draft:!1,unlisted:!1,editUrl:"https://github.com/kbqdev/docs/components/form-components/Form.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Form",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Count Down",permalink:"/docs/components/form-components/CountDown"},next:{title:"Input - TextArea",permalink:"/docs/components/form-components/Input"}},l={},a=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. FormItem usage",id:"1-formitem-usage",level:3},{value:"2. FormListItem use",id:"2-formlistitem-use",level:3},{value:"3. Verification failure prompt effect",id:"3-verification-failure-prompt-effect",level:3},{value:"API",id:"api",level:2},{value:"Form API",id:"form-api",level:3},{value:"FormItem API",id:"formitem-api",level:3},{value:"FormListItem API",id:"formlistitem-api",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"form-form",children:"Form form"}),"\n",(0,t.jsxs)(n.p,{children:["Encapsulation of ",(0,t.jsx)(n.code,{children:"rc-field-form"}),", providing effects similar to antd Form"]}),"\n",(0,t.jsx)(n.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,t.jsx)(n.h3,{id:"1-formitem-usage",children:"1. FormItem usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'import { Form } from "packages";\n\n//...other imports\nconst { FormItem, FormListItem, useForm } = Form;\n\nexport default function FormDemo() {\n  const [form] = useForm();\n\n  return (\n    <Form onFinish={handleFinish} form={form}>\n      <FormItem\n        name="useCharacter2"\n        rules={[{ required: true, message: "Please enter your name" }]}\n      >\n        <InputItem\n          required\n          label="Name"\n          placeholder="Please enter your name"\n          inputStyle={{ textAlign: "right" }}\n        />\n      </FormItem>\n      <FormItem\n        name="vehicleLoad2"\n        rules={[{ required: true, message: "Please enter your password" }]}\n      >\n        <InputItem\n          required\n          label="Password"\n          placeholder="Please enter password"\n          inputStyle={{ textAlign: "right" }}\n        />\n      </FormItem>\n    </Form>\n  );\n}\n'})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"Customize line style ios",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"},src:"https://iili.io/Jz7yZes.png"})})}),"\n",(0,t.jsx)(n.h3,{id:"2-formlistitem-use",children:"2. FormListItem use"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'import { Form } from "packages";\n\n//...other imports\n\nconst { FormItem, FormListItem, useForm } = Form;\n\nexport default function FormDemo() {\n  const [form] = useForm();\n\n  return (\n    <Form onFinish={handleFinish} form={form}>\n      <FormListItem\n        title="Gender"\n        required\n        name="gender"\n        rules={[{ required: true, message: "Please select gender" }]}\n      >\n        <Radio\n          options={[\n            { label: "Male", value: "1" },\n            { label: "Female", value: "0" },\n          ]}\n        />\n      </FormListItem>\n      <FormListItem\n        title="Gender"\n        required\n        name="gender"\n        rules={[{ required: true, message: "Please select gender" }]}\n      >\n        <Checkbox\n          showCheckAll={false}\n          options={[\n            { label: "Male", value: "1" },\n            { label: "Female", value: "0" },\n          ]}\n        />\n      </FormListItem>\n      <FormListItem\n        title="Quantity"\n        required\n        name="count"\n        minHeight={48}\n        rules={[{ required: true, message: "Please select the quantity" }]}\n      >\n        <Stepper />\n      </FormListItem>\n      <FormListItem\n        title="Quantity"\n        required\n        name="count"\n        minHeight={48}\n        rules={[{ required: true, message: "Please select the quantity" }]}\n      >\n        <Switch />\n      </FormListItem>\n      <FormListItem\n        title="Quantity"\n        required\n        name="count"\n        minHeight={48}\n        rules={[{ required: true, message: "Please select the quantity" }]}\n      >\n        <NumberKeyboard.NumberKeyboardInput\n          type="number"\n          placeholder="Quality"\n        />\n      </FormListItem>\n    </Form>\n  );\n}\n'})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{src:"https://iili.io/Jz7ytmG.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,t.jsx)(n.h3,{id:"3-verification-failure-prompt-effect",children:"3. Verification failure prompt effect"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'import { Form } from "packages";\n\n//...other imports\n\nconst { FormItem, FormListItem, useForm } = Form;\n\nexport default function FormDemo() {\n  const [form] = useForm();\n\n  return (\n    <Form onFinish={handleFinish} form={form}>\n      <FormItem\n        type="all"\n        name="name"\n        rules={[{ required: true, message: "Please enter your username" }]}\n      >\n        <Input\n          required\n          label="Username"\n          labelPosition="top"\n          placeholder="Please enter username"\n        />\n      </FormItem>\n      <FormItem\n        type="all"\n        name="password"\n        rules={[{ required: true, message: "Please enter your password" }]}\n      >\n        <Input\n          required\n          label="Password"\n          labelPosition="top"\n          placeholder="Please enter password"\n        />\n      </FormItem>\n      <FormItem type="all" name="count2">\n        <NumberKeyboard.NumberKeyboardInput\n          label="Approved download quality"\n          type="number"\n          placeholder="Please enter the approved download quality"\n        />\n      </FormItem>\n    </Form>\n  );\n}\n'})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"Customize line style ios",src:"https://iili.io/JzY2rlV.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.h3,{id:"form-api",children:"Form API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { FormProps as RcFormProps } from "rc-field-form/es/Form";\n\nexport type FormProps = Omit<RcFormProps, "component">;\n'})}),"\n",(0,t.jsx)(n.h3,{id:"formitem-api",children:"FormItem API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import type { FieldProps } from "rc-field-form/lib/Field";\n\ntype RcFieldProps = Omit<FieldProps, "children">;\nexport interface FormItemProps extends RcFieldProps {\n  type?: "bottom" | "all";\n  children: ReactElement;\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"formlistitem-api",children:"FormListItem API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import type { FieldProps } from "rc-field-form/lib/Field";\n\nimport { ListItemProps } from "../list-item";\n\ntype RcFieldProps = Omit<FieldProps, "children">;\nexport interface FormListItemProps\n  extends RcFieldProps,\n    Pick<\n      ListItemProps,\n      | "title"\n      | "required"\n      | "style"\n      | "thumb"\n      | "onPress"\n      | "minHeight"\n      | "arrow"\n    > {\n  children: ReactElement;\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>m,a:()=>s});var t=r(7294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
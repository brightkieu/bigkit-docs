"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[2234],{7198:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>r,contentTitle:()=>l,default:()=>a,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var t=s(5893),c=s(1151);const n={title:"Check box",sidebar_position:1},l="Checkbox",i={id:"components/form-components/CheckBox",title:"Check box",description:"Effect demonstration",source:"@site/docs/components/form-components/CheckBox.md",sourceDirName:"components/form-components",slug:"/components/form-components/CheckBox",permalink:"/docs/components/form-components/CheckBox",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/form-components/CheckBox.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Check box",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Form components",permalink:"/docs/category/form-components"},next:{title:"Count Down",permalink:"/docs/components/form-components/CountDown"}},r={},h=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Default effect",id:"1-default-effect",level:3},{value:"2. A checkbox is selected by default",id:"2-a-checkbox-is-selected-by-default",level:3},{value:"3. Do not display select all",id:"3-do-not-display-select-all",level:3},{value:"4. Disable a checkbox",id:"4-disable-a-checkbox",level:3},{value:"5. Checkbox list",id:"5-checkbox-list",level:3},{value:"API",id:"api",level:2},{value:"Checkbox /CheckboxList",id:"checkbox-checkboxlist",level:3},{value:"CheckboxItem",id:"checkboxitem",level:3}];function o(e){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,t.jsx)(d.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,t.jsx)(d.h3,{id:"1-default-effect",children:"1. Default effect"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:"<Checkbox\n  options={[\n    { label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange' },\n  ]}\n/>\n"})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"card-ios1",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643097541850634284.gif"})})}),"\n",(0,t.jsx)(d.h3,{id:"2-a-checkbox-is-selected-by-default",children:"2. A checkbox is selected by default"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:"<Checkbox\n  options={[\n    { label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange' },\n  ]}\n  defaultValue={['Pear']}\n/>\n"})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"card-ios1",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643097612076589222.png"})})}),"\n",(0,t.jsx)(d.h3,{id:"3-do-not-display-select-all",children:"3. Do not display select all"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:"<Checkbox\n  options={[\n    { label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange' },\n  ]}\n  showCheckAll={false}\n/>\n"})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"card-ios1",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643097712505780986.png"})})}),"\n",(0,t.jsx)(d.h3,{id:"4-disable-a-checkbox",children:"4. Disable a checkbox"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:"<Checkbox\n  options={[\n{ label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange' },\n  ]}\n  showCheckAll={false}\n/>\n"})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"card-ios1",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643097869657649774.gif"})})}),"\n",(0,t.jsx)(d.h3,{id:"5-checkbox-list",children:"5. Checkbox list"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",metastring:"| pure",children:"<CheckboxList\n  options={[\n{ label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange' },\n  ]}\n/>\n"})}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("figure",{children:(0,t.jsx)("img",{alt:"card-ios1",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1643097786018078990.gif"})})}),"\n",(0,t.jsx)(d.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(d.h3,{id:"checkbox-checkboxlist",children:"Checkbox /CheckboxList"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Properties"}),(0,t.jsx)(d.th,{children:"Required"}),(0,t.jsx)(d.th,{children:"Description"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Default Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"options"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"true"})}),(0,t.jsx)(d.td,{children:"Specify options"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"RadioOption[]"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"value"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"selected item"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ReactText[]"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"onChange"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"The callback function triggered by selecting the radio button"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"(value: ReactText[]) => void"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"defaultValue"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"Default selected items"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ReactText[]"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"size"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"icon size"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"number"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"disabledValue"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"Set disabled items"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ReactText[]"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"containerStyle"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"Custom container style"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ViewStyle"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"itemStyle"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"Customize the style of a single radio button"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ViewStyle"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"labelStyle"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"Custom text style"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"TextStyle"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"showCheckAll"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"Whether to display the select box"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"boolean"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"true"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"activeOpacity"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"Opacity when not disabled"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"number"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"0.6"})})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"checkboxitem",children:"CheckboxItem"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Properties"}),(0,t.jsx)(d.th,{children:"Required"}),(0,t.jsx)(d.th,{children:"Description"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Default Value"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"itemStyle"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"Customize the style of a single radio button"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ViewStyle"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"labelStyle"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"Custom text style"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"TextStyle"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"size"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"icon size"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"number"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"label"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"true"})}),(0,t.jsx)(d.td,{children:"radio button text"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ReactNode"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"value"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"true"})}),(0,t.jsx)(d.td,{children:"The value of the radio button"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ReactText"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"status"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"true"})}),(0,t.jsx)(d.td,{children:"Radio button checked status"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"'checked' | 'unchecked' | 'halfchecked'"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"disabled"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"true"})}),(0,t.jsx)(d.td,{children:"Radio button disabled state"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"boolean"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"mode"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"Radio button mode, list means display in a list"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"'list' | 'row'"})}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"onChange"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})}),(0,t.jsx)(d.td,{children:"The callback function triggered by selecting the radio button"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"(value: ReactText, status: RadioStatus) => void"})}),(0,t.jsx)(d.td,{})]})]})]})]})}function a(e={}){const{wrapper:d}={...(0,c.a)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,d,s)=>{s.d(d,{Z:()=>i,a:()=>l});var t=s(7294);const c={},n=t.createContext(c);function l(e){const d=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(n.Provider,{value:d},e.children)}}}]);
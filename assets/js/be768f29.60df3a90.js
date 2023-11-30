"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[655],{3712:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var d=s(5893),n=s(1151);const r={title:"Text",sidebar_position:6},i="Text component",c={id:"components/basic-components/text",title:"Text",description:"The text component is mainly based on the restyle package, replacing the react-native default Text component.",source:"@site/docs/components/basic-components/text.md",sourceDirName:"components/basic-components",slug:"/components/basic-components/text",permalink:"/docs/components/basic-components/text",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/basic-components/text.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Text",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Flex",permalink:"/docs/components/basic-components/flex"},next:{title:"White Space",permalink:"/docs/components/basic-components/whitespace"}},l={},x=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Font size 32",id:"1-font-size-32",level:3},{value:"2. The color is blue and the font is bold.",id:"2-the-color-is-blue-and-the-font-is-bold",level:3},{value:"3. Variant usage example",id:"3-variant-usage-example",level:3},{value:"API",id:"api",level:2},{value:"Unique properties",id:"unique-properties",level:3},{value:"Text attributes",id:"text-attributes",level:3},{value:"Padding and margin related properties",id:"padding-and-margin-related-properties",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"text-component",children:"Text component"}),"\n",(0,d.jsxs)(t.p,{children:["The text component is mainly based on the ",(0,d.jsx)(t.code,{children:"restyle"})," package, replacing the ",(0,d.jsx)(t.code,{children:"react-native"})," default ",(0,d.jsx)(t.code,{children:"Text"})," component."]}),"\n",(0,d.jsxs)(t.p,{children:["**Note: The Text component has removed the properties ",(0,d.jsx)(t.code,{children:"onLongPress"}),"/",(0,d.jsx)(t.code,{children:"onPress"}),"/",(0,d.jsx)(t.code,{children:"onPressIn"}),"/",(0,d.jsx)(t.code,{children:"onPressOut"})," (",(0,d.jsx)(t.a,{href:"https://twitter.com/fernandotherojo/status/1707762822015267219?s=42",children:"Why"}),") . Therefore, you cannot use click events directly on the Text component. If necessary, please use components such as ",(0,d.jsx)(t.code,{children:"Pressable"})," or ",(0,d.jsx)(t.code,{children:"Touchable*"})," to wrap the Text component to achieve the same effect. **"]}),"\n",(0,d.jsx)(t.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,d.jsx)(t.h3,{id:"1-font-size-32",children:"1. Font size 32"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"<Text fontSize={32}>\n  Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n</Text>\n"})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"text-ios1",src:"https://iili.io/Jxh39ne.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(t.h3,{id:"2-the-color-is-blue-and-the-font-is-bold",children:"2. The color is blue and the font is bold."}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<Text fontSize={32} color="primaryColor" fontWeight="bold">\n  Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n</Text>\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"text-ios2",src:"https://iili.io/Jxh2pt9.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(t.h3,{id:"3-variant-usage-example",children:"3. Variant usage example"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<Text variant="primaryBody">Hello, I am text</Text>\n'})}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"primaryBody"})," is defined in ",(0,d.jsx)(t.code,{children:"src/themes"})," as:"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:"const extraVariants = {\n  ...\n  primaryBody: {\n    fontSize: 16,\n    color: 'primaryTextColor',\n  }\n}\nexport const lightTheme = {\n  ...theme.lightTheme,\n  colors: {\n    ...theme.lightTheme.colors,\n    ...\n    primaryTextColor: theme.lightTheme.colors.primary200,\n  },\n  ...\n};\nexport const darkTheme: AppTheme = {\n  ...theme.darkTheme,\n  colors: {\n    ...theme.darkTheme.colors,\n    ...\n    primaryTextColor: theme.lightTheme.colors.primary100,\n  },\n  ...\n};\n"})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"text-ios3",src:"https://iili.io/Jxh2mw7.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,d.jsxs)(t.p,{children:["Except for the style attributes, other attributes are consistent with ",(0,d.jsx)(t.code,{children:"TextProps"}),". Style attributes are based on ",(0,d.jsx)(t.code,{children:"restyle"}),", which flattens the properties originally wrapped in ",(0,d.jsx)(t.code,{children:"style"})," and adopts the constraints defined in ",(0,d.jsx)(t.code,{children:"Theme"}),"."]}),"\n",(0,d.jsx)(t.h3,{id:"unique-properties",children:"Unique properties"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Properties"}),(0,d.jsx)(t.th,{children:"Required"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Default Value"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"variant"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsxs)(t.td,{children:["The value is the key value in the ",(0,d.jsx)(t.code,{children:"textVariants"})," object defined in ",(0,d.jsx)(t.code,{children:"Theme"})]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{})]})})]}),"\n",(0,d.jsx)(t.h3,{id:"text-attributes",children:"Text attributes"}),"\n",(0,d.jsxs)(t.p,{children:["For the definition, see: ",(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:"https://reactnative.dev/docs/text-style-props"})]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Properties"}),(0,d.jsx)(t.th,{children:"Required"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Default Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"color"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsxs)(t.td,{children:["Text color. The value is ",(0,d.jsx)(t.code,{children:"colors"})]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"opacity"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"Transparency. Value 0 -1"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"number"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"1"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"visible"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"Whether it is visible"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"true"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fontFamily"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fontSize"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fontStyle"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fontWeight"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"letterSpacing"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"lineHeight"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"textAlign"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"textDecorationLine"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"textDecorationStyle"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"textTransform"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"textShadowOffset"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"textShadowRadius"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"textShadowColor"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsxs)(t.td,{children:["Text shadow color. The value is ",(0,d.jsx)(t.code,{children:"colors"})," in Theme"]}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"padding-and-margin-related-properties",children:"Padding and margin related properties"}),"\n",(0,d.jsxs)(t.p,{children:["The value is ",(0,d.jsx)(t.code,{children:"spacing"})," in Theme.\nFor definition, see: ",(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/layout-props",children:"https://reactnative.dev/docs/layout-props"})]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Properties"}),(0,d.jsx)(t.th,{children:"Required"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Default Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"margin"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marginStart"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marginEnd"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marginHorizontal"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marginVertical"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marginLeft"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marginRight"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marginBottom"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"marginTop"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"padding"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"paddingStart"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"paddingEnd"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"paddingHorizontal"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"paddingVertical"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"paddingLeft"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"paddingRight"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"paddingBottom"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"paddingTop"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var d=s(7294);const n={},r=d.createContext(n);function i(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);
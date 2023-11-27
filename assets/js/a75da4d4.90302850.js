"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[1774],{5293:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=t(5893),r=t(1151);const o={title:"BoxShadow",sidebar_position:2},i="BoxShadow box component",d={id:"components/other-compoents/BoxShadow",title:"BoxShadow",description:"Expose the properties of react-native-shadow-2 as they are, and you can customize the shadow style.",source:"@site/docs/components/other-compoents/BoxShadow.md",sourceDirName:"components/other-compoents",slug:"/components/other-compoents/BoxShadow",permalink:"/docs/components/other-compoents/BoxShadow",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/other-compoents/BoxShadow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"BoxShadow",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Accordion",permalink:"/docs/components/other-compoents/Accordion"},next:{title:"Flow",permalink:"/docs/components/other-compoents/Flow"}},a={},h=[{value:"\ud83d\udcbf Installation",id:"-installation",level:2},{value:"1. First install react-native-svg.",id:"1-first-install-react-native-svg",level:4},{value:"2. Then install react-native-shadow-2:",id:"2-then-install-react-native-shadow-2",level:4},{value:"\ud83d\udcd6 Usage",id:"-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"All properties are optional.",id:"all-properties-are-optional",level:4},{value:"Notes",id:"notes",level:2},{value:"\u2049\ufe0f FAQ",id:"\ufe0f-faq",level:2},{value:"How to set the Shadow opacity?",id:"how-to-set-the-shadow-opacity",level:4},{value:"My component is no longer using the available parent width after applying the Shadow! What to do?",id:"my-component-is-no-longer-using-the-available-parent-width-after-applying-the-shadow-what-to-do",level:4},{value:"I want a preset for my Shadows!",id:"i-want-a-preset-for-my-shadows",level:4},{value:"The <code>offset</code> and <code>size</code> properties are throwing Typescript errors!",id:"the-offset-and-size-properties-are-throwing-typescript-errors",level:4}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"boxshadow-box-component",children:"BoxShadow box component"}),"\n",(0,n.jsxs)(s.p,{children:["Expose the properties of ",(0,n.jsx)(s.a,{href:"https://github.com/SrBrahma/react-native-shadow-2",children:"react-native-shadow-2"})," as they are, and you can customize the shadow style."]}),"\n",(0,n.jsx)(s.h2,{id:"-installation",children:"\ud83d\udcbf Installation"}),"\n",(0,n.jsxs)(s.h4,{id:"1-first-install-react-native-svg",children:["1. First install ",(0,n.jsx)(s.a,{href:"https://github.com/react-native-svg/react-native-svg#installation",children:"react-native-svg"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["The latest ",(0,n.jsx)(s.code,{children:"react-native-svg"})," version is recommended."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"2-then-install-react-native-shadow-2",children:"2. Then install react-native-shadow-2:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm i react-native-shadow-2\n# or\nyarn add react-native-shadow-2\n"})}),"\n",(0,n.jsx)(s.h2,{id:"-usage",children:"\ud83d\udcd6 Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",children:'import { Shadow } from "react-native-shadow-2";\n\n<Shadow>\n  <Text style={{ margin: 20, fontSize: 20 }}>\ud83d\ude42</Text>\n</Shadow>;\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Example 1",src:t(4107).Z+"",width:"104",height:"109"})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",children:'<Shadow\n  distance={15}\n  startColor={"#eb9066d8"}\n  endColor={"#ff00ff10"}\n  offset={[3, 4]}\n>\n  <View\n    style={{\n      borderTopStartRadius: 24,\n      borderBottomEndRadius: 0,\n      borderRadius: 10,\n      backgroundColor: "#c454f0dd",\n    }}\n  >\n    <Text style={{ margin: 20, fontSize: 20 }}>\ud83e\udd2f</Text>\n  </View>\n</Shadow>\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Example 2",src:t(2228).Z+"",width:"110",height:"116"})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h4,{id:"all-properties-are-optional",children:"All properties are optional."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Property"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"startColor"})}),(0,n.jsx)(s.td,{children:"The initial gradient color of the shadow."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"'#00000020'"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"endColor"})}),(0,n.jsx)(s.td,{children:"The final gradient color of the shadow."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsxs)(s.td,{children:["Transparent startColor. ",(0,n.jsx)(s.a,{href:"https://github.com/SrBrahma/react-native-shadow-2/issues/31#issuecomment-985578972",children:"Explanation"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"distance"})}),(0,n.jsx)(s.td,{children:"How far the shadow goes."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"number"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"10"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"offset"})}),(0,n.jsxs)(s.td,{children:["Moves the shadow. Negative ",(0,n.jsx)(s.code,{children:"x"})," moves it left/start, negative ",(0,n.jsx)(s.code,{children:"y"})," moves it up.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Accepts ",(0,n.jsx)(s.code,{children:"'x%'"})," values.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Defining this will default ",(0,n.jsx)(s.code,{children:"paintInside"})," to ",(0,n.jsx)(s.strong,{children:"true"}),", as it's the usual desired behaviour."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"[x: string | number, y: string | number]"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"[0, 0]"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"paintInside"})}),(0,n.jsxs)(s.td,{children:["Apply the shadow below/inside the content. ",(0,n.jsx)(s.code,{children:"startColor"})," is used as fill color, without a gradient.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Useful when using ",(0,n.jsx)(s.code,{children:"offset"})," or if your child has some transparency."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"false"}),", but ",(0,n.jsx)(s.code,{children:"true"})," if ",(0,n.jsx)(s.code,{children:"offset"})," is defined"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"sides"})}),(0,n.jsxs)(s.td,{children:["The sides that will have their shadows drawn. Doesn't include corners. Undefined sides fallbacks to ",(0,n.jsx)(s.strong,{children:"true"}),". ",(0,n.jsx)(s.a,{href:"https://github.com/SrBrahma/react-native-shadow-2/issues/76#issuecomment-1563276588",children:"Explanation"}),"."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Record<'start' | 'end' | 'top' | 'bottom', boolean>"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undefined"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"corners"})}),(0,n.jsxs)(s.td,{children:["The corners that will have their shadows drawn. Undefined corners fallbacks to ",(0,n.jsx)(s.strong,{children:"true"}),". ",(0,n.jsx)(s.a,{href:"https://github.com/SrBrahma/react-native-shadow-2/issues/76#issuecomment-1563276588",children:"Explanation"}),"."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Record<'topStart' | 'topEnd' | 'bottomStart' | 'bottomEnd', boolean>"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undefined"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"style"})}),(0,n.jsxs)(s.td,{children:["The style of the View that wraps your children. Read the ",(0,n.jsx)(s.a,{href:"https://github.com/SrBrahma/react-native-shadow-2/edit/main/README.md#notes",children:"Notes"})," below."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"StyleProp<ViewStyle>"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undefined"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"containerStyle"})}),(0,n.jsx)(s.td,{children:"The style of the View that wraps the Shadow and your children. Useful for margins."}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"StyleProp<ViewStyle>"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undefined"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"stretch"})}),(0,n.jsxs)(s.td,{children:["Make your children ocuppy all available horizontal space. ",(0,n.jsx)(s.a,{href:"https://github.com/SrBrahma/react-native-shadow-2/issues/7#issuecomment-899784537",children:"Explanation"}),"."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"safeRender"})}),(0,n.jsxs)(s.td,{children:["Won't use the relative sizing and positioning on the 1st render but on the following renders with the exact onLayout sizes. Useful if dealing with radii greater than the sides sizes (like a circle) to avoid visual artifacts on the 1st render.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"If ",(0,n.jsx)(s.code,{children:"true"}),", the Shadow won't appear on the 1st render."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"disabled"})}),(0,n.jsxs)(s.td,{children:["Disables the Shadow. Useful for easily reusing components as sometimes shadows are not desired.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.code,{children:"containerStyle"})," and ",(0,n.jsx)(s.code,{children:"style"})," are still applied."]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["If the Shadow has a single child, it will get the ",(0,n.jsx)(s.code,{children:"width"}),", ",(0,n.jsx)(s.code,{children:"height"})," and all of the ",(0,n.jsx)(s.code,{children:"borderRadius"})," properties from the children's ",(0,n.jsx)(s.code,{children:"style"})," property, if defined."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["You may also define those properties in the Shadow's ",(0,n.jsx)(s.code,{children:"style"}),". The defined properties here will have priority over the ones defined in the child's ",(0,n.jsx)(s.code,{children:"style"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["If the ",(0,n.jsx)(s.code,{children:"width"})," ",(0,n.jsx)(s.strong,{children:"and"})," ",(0,n.jsx)(s.code,{children:"height"})," are defined in any of those, there will be only a single render, as the first automatic sizing won't happen, only the precise render."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["You can use either the ",(0,n.jsx)(s.code,{children:"'borderTopLeftRadius'"})," or ",(0,n.jsx)(s.code,{children:"'borderTopStartRadius'"})," and their variations to define the corners radii, although I recommend the latter as it's the RTL standard."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/SrBrahma/react-native-shadow-2/issues/15",children:"Having a radius greater than its side will mess the shadow if the sizes aren't defined"}),". ",(0,n.jsxs)(s.strong,{children:["You can use the ",(0,n.jsx)(s.code,{children:"safeRender"})," property"]})," to only show the shadow on the 2nd render and beyond, when we have the exact component size and the radii are properly limited."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsxs)(s.a,{href:"https://github.com/SrBrahma/react-native-shadow-2/issues/46",children:["Radii greater than 2000 (Tailwind's ",(0,n.jsx)(s.code,{children:"rounded-full"})," is 9999) may crash Android"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\ufe0f-faq",children:"\u2049\ufe0f FAQ"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.h4,{id:"how-to-set-the-shadow-opacity",children:"How to set the Shadow opacity?"}),"\n",(0,n.jsxs)(s.p,{children:["The opacity is set directly in the ",(0,n.jsx)(s.code,{children:"startColor"})," and ",(0,n.jsx)(s.code,{children:"endColor"})," properties, in the alpha channel. E.g.: ",(0,n.jsx)(s.code,{children:"'#0001'"})," is an almost transparent black. You may also use ",(0,n.jsx)(s.code,{children:"'#rrggbbaa'"}),", ",(0,n.jsx)(s.code,{children:"'rgba()'"}),", ",(0,n.jsx)(s.code,{children:"'hsla()'"})," etc. ",(0,n.jsx)(s.a,{href:"https://reactnative.dev/docs/colors",children:"All patterns in this link, but not int colors, are accepted"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.h4,{id:"my-component-is-no-longer-using-the-available-parent-width-after-applying-the-shadow-what-to-do",children:"My component is no longer using the available parent width after applying the Shadow! What to do?"}),"\n",(0,n.jsxs)(s.p,{children:["Use the ",(0,n.jsx)(s.code,{children:"stretch"})," property or ",(0,n.jsx)(s.code,{children:"style={{alignSelf: 'stretch'}}"})," in your Shadow component. ",(0,n.jsx)(s.a,{href:"https://github.com/SrBrahma/react-native-shadow-2/issues/7#issuecomment-899764882",children:"Explanation"}),"!"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.h4,{id:"i-want-a-preset-for-my-shadows",children:"I want a preset for my Shadows!"}),"\n",(0,n.jsxs)(s.p,{children:["It's exported the ",(0,n.jsx)(s.code,{children:"ShadowProps"})," type, the props of the Shadow component. You may do the following:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",children:"const ShadowPresets = {\n  button: {\n    offset: [0, 1], distance: 1, startColor: '#0003',\n  } as ShadowProps,\n};\n\n<Shadow {...ShadowPresets.button}>\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.h4,{id:"the-offset-and-size-properties-are-throwing-typescript-errors",children:["The ",(0,n.jsx)(s.code,{children:"offset"})," and ",(0,n.jsx)(s.code,{children:"size"})," properties are throwing Typescript errors!"]}),"\n",(0,n.jsxs)(s.p,{children:["Upgrade your Typescript to at least 4.0.0! Those two properties use ",(0,n.jsx)(s.a,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#labeled-tuple-elements",children:(0,n.jsx)(s.strong,{children:"labeled tuples"})}),". If you don't use Typescript, this won't happen."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4107:(e,s,t)=>{t.d(s,{Z:()=>n});const n="data:image/png;base64,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"},2228:(e,s,t)=>{t.d(s,{Z:()=>n});const n="data:image/png;base64,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"},1151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>i});var n=t(7294);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);
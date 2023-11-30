"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[6891],{740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var d=t(5893),s=t(1151);const r={title:"Tree",sidebar_position:14},i="Tree tree display",l={id:"components/presentation-components/tree",title:"Tree",description:"Effect demonstration",source:"@site/docs/components/presentation-components/tree.md",sourceDirName:"components/presentation-components",slug:"/components/presentation-components/tree",permalink:"/docs/components/presentation-components/tree",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/presentation-components/tree.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Tree",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Tag",permalink:"/docs/components/presentation-components/tag"},next:{title:"Feed Back components",permalink:"/docs/category/feed-back-components"}},c={},o=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Default effect",id:"1-default-effect",level:3},{value:"2. Expand all by default",id:"2-expand-all-by-default",level:3},{value:"3. No selection allowed",id:"3-no-selection-allowed",level:3},{value:"4. Expand certain nodes by default",id:"4-expand-certain-nodes-by-default",level:3},{value:"5. Select some nodes by default",id:"5-select-some-nodes-by-default",level:3},{value:"6. Disable some nodes",id:"6-disable-some-nodes",level:3},{value:"7. Custom expand icon",id:"7-custom-expand-icon",level:3},{value:"8. Custom node style",id:"8-custom-node-style",level:3},{value:"API",id:"api",level:2},{value:"TreeProps",id:"treeprops",level:3},{value:"TreeItemProps",id:"treeitemprops",level:3}];function x(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"tree-tree-display",children:"Tree tree display"}),"\n",(0,d.jsx)(n.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,d.jsx)(n.h3,{id:"1-default-effect",children:"1. Default effect"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'const treeData = [\n  {\n    text: "parent 1",\n    id: "0-0",\n    items: [\n      {\n        text: "parent 1-0",\n        id: "0-0-0",\n        items: [\n          {\n            text: "leaf1",\n            id: "0-0-0-0",\n          },\n          {\n            text: "leaf2",\n            id: "0-0-0-1",\n          },\n        ],\n      },\n      {\n        text: "parent 1-1",\n        id: "0-0-1",\n        items: [{ text: "sss", id: "0-0-1-0" }],\n      },\n    ],\n  },\n];\n\n<Tree treeData={treeData} />;\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"",src:"https://iili.io/Jxi14Q2.gif",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(n.h3,{id:"2-expand-all-by-default",children:"2. Expand all by default"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'const treeData = [\n  {\n    text: "parent 1",\n    id: "0-0",\n    items: [\n      {\n        text: "parent 1-0",\n        id: "0-0-0",\n        items: [\n          {\n            text: "leaf1",\n            id: "0-0-0-0",\n          },\n          {\n            text: "leaf2",\n            id: "0-0-0-1",\n          },\n        ],\n      },\n      {\n        text: "parent 1-1",\n        id: "0-0-1",\n        items: [{ text: "sss", id: "0-0-1-0" }],\n      },\n    ],\n  },\n];\n\n<Tree treeData={treeData} expandAll />;\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"",src:"https://iili.io/Jxi1n19.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(n.h3,{id:"3-no-selection-allowed",children:"3. No selection allowed"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'const treeData = [\n  {\n    text: "parent 1",\n    id: "0-0",\n    items: [\n      {\n        text: "parent 1-0",\n        id: "0-0-0",\n        items: [\n          {\n            text: "leaf1",\n            id: "0-0-0-0",\n          },\n          {\n            text: "leaf2",\n            id: "0-0-0-1",\n          },\n        ],\n      },\n      {\n        text: "parent 1-1",\n        id: "0-0-1",\n        items: [{ text: "sss", id: "0-0-1-0" }],\n      },\n    ],\n  },\n];\n\n<Tree treeData={treeData} checkable={false} />;\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"",src:"https://iili.io/Jxi1Cq7.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(n.h3,{id:"4-expand-certain-nodes-by-default",children:"4. Expand certain nodes by default"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'const treeData = [\n  {\n    text: "parent 1",\n    id: "0-0",\n    items: [\n      {\n        text: "parent 1-0",\n        id: "0-0-0",\n        items: [\n          {\n            text: "leaf1",\n            id: "0-0-0-0",\n          },\n          {\n            text: "leaf2",\n            id: "0-0-0-1",\n          },\n        ],\n      },\n      {\n        text: "parent 1-1",\n        id: "0-0-1",\n        items: [{ text: "sss", id: "0-0-1-0" }],\n      },\n    ],\n  },\n];\n<Tree treeData={treeData} defaultExpandedKeys={["0-0"]} />;\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"",src:"https://iili.io/JxiVJG2.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(n.h3,{id:"5-select-some-nodes-by-default",children:"5. Select some nodes by default"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'const treeData = [\n  {\n    text: "parent 1",\n    id: "0-0",\n    items: [\n      {\n        text: "parent 1-0",\n        id: "0-0-0",\n        items: [\n          {\n            text: "leaf1",\n            id: "0-0-0-0",\n          },\n          {\n            text: "leaf2",\n            id: "0-0-0-1",\n          },\n        ],\n      },\n      {\n        text: "parent 1-1",\n        id: "0-0-1",\n        items: [{ text: "sss", id: "0-0-1-0" }],\n      },\n    ],\n  },\n];\n\n<Tree treeData={treeData} defaultCheckedKeys={["0-0-0-1"]} />;\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"",src:"https://iili.io/JxiVCjj.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(n.h3,{id:"6-disable-some-nodes",children:"6. Disable some nodes"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'const treeData = [\n  {\n    text: "parent 1",\n    id: "0-0",\n    items: [\n      {\n        text: "parent 1-0",\n        id: "0-0-0",\n        items: [\n          {\n            text: "leaf1",\n            id: "0-0-0-0",\n            disabled: true,\n          },\n          {\n            text: "leaf2",\n            id: "0-0-0-1",\n          },\n        ],\n      },\n      {\n        text: "parent 1-1",\n        id: "0-0-1",\n        disabled: true,\n        items: [{ text: "sss", id: "0-0-1-0" }],\n      },\n    ],\n  },\n];\n\n<Tree treeData={treeData} expandAll />;\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"",src:"https://iili.io/JxiESF1.gif",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(n.h3,{id:"7-custom-expand-icon",children:"7. Custom expand icon"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'const CustomExpandIcon: FC<{ progress: Animated.SharedValue<number> }> = ({\n  progress,\n}) => {\n  const theme = useTheme<AppTheme>();\n  const style = useAnimatedStyle(() => ({\n    transform: [{ rotateZ: `${mix(progress.value, 0, Math.PI / 2)}rad` }],\n  }));\n\n  return (\n    <Animated.View style={style}>\n      <SvgIcon name="bells" color={theme.colors.warningColor} />\n    </Animated.View>\n  );\n};\n\nconst treeData = [\n  {\n    text: "parent 1",\n    id: "0-0",\n    items: [\n      {\n        text: "parent 1-0",\n        id: "0-0-0",\n        items: [\n          {\n            text: "leaf1",\n            id: "0-0-0-0",\n          },\n          {\n            text: "leaf2",\n            id: "0-0-0-1",\n          },\n        ],\n      },\n      {\n        text: "parent 1-1",\n        id: "0-0-1",\n        items: [{ text: "sss", id: "0-0-1-0" }],\n      },\n    ],\n  },\n];\n<Tree\n  treeData={treeData}\n  customExpandIcon={(progress) => <CustomExpandIcon {...{ progress }} />}\n/>;\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"",src:"https://iili.io/JxieMpS.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(n.h3,{id:"8-custom-node-style",children:"8. Custom node style"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",metastring:"| pure",children:'const treeData = [\n  {\n    text: "parent 1",\n    id: "0-0",\n    items: [\n      {\n        text: "parent 1-0",\n        id: "0-0-0",\n        items: [\n          {\n            text: "leaf1",\n            id: "0-0-0-0",\n            style: { backgroundColor: "red" },\n            textStyle: { color: "white" },\n          },\n          {\n            text: "leaf2",\n            id: "0-0-0-1",\n          },\n        ],\n      },\n      {\n        text: "parent 1-1",\n        id: "0-0-1",\n        items: [{ text: "sss", id: "0-0-1-0" }],\n      },\n    ],\n  },\n];\n<Tree treeData={treeData} nodeStyle={{ backgroundColor: "orange" }} />;\n'})}),"\n",(0,d.jsx)("center",{children:(0,d.jsx)("figure",{children:(0,d.jsx)("img",{alt:"",src:"https://iili.io/JxiUuWP.png",style:{width:"375px",marginRight:"10px",borderWidth:"1px",borderColor:"#ddd",borderStyle:"solid",borderRadius:"8px"}})})}),"\n",(0,d.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,d.jsx)(n.h3,{id:"treeprops",children:"TreeProps"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Properties"}),(0,d.jsx)(n.th,{children:"Required"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})}),(0,d.jsx)(n.td,{children:"Tree node data"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"TreeItemProps[]"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"checkable"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Whether it can be selected"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"checkedKeys"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"selected node (controlled)"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string[]"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"defaultCheckedKeys"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"The key selected by default is valid when loaded for the first time"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string[]"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"expandAll"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Expand all"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"defaultExpandedKeys"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Default expanded nodes"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string[]"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"expandedKeys"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"expanded node"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string[]"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onCheck"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Selected event callback"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(keys: string[]) => void"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onExpand"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Expand event callback"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(keys: string[]) => void"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"customExpandIcon"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Custom expansion icon"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(progress: Animated.SharedValue<number>) => ReactElement"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"activeOpacity"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"The opacity of the tree node when clicked"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"number"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"0.6"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"style"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"tree style"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"StyleProp<ViewStyle>"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nodeStyle"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Tree node style"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"StyleProp<ViewStyle>"})}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"treeitemprops",children:"TreeItemProps"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Properties"}),(0,d.jsx)(n.th,{children:"Required"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Default Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"id"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})}),(0,d.jsx)(n.td,{children:"Unique identifier of the node"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"number"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})}),(0,d.jsx)(n.td,{children:"node text"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"items"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"child nodes"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"TreeItemProps[]"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"disabled"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Whether to disable"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"number"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"onPress"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Callback for clicking a tree node"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(id: string) => void"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"customCheckIcon"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Custom check icon"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(checked: 'all' | 'half' | 'none') => ReactElement"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"style"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false "})}),(0,d.jsx)(n.td,{children:"Node style"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"StyleProp<ViewStyle>"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"textStyle"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:"Node text style"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"StyleProp<TextStyle>"})}),(0,d.jsx)(n.td,{})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var d=t(7294);const s={},r=d.createContext(s);function i(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);
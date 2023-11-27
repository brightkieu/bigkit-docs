"use strict";(self.webpackChunkbigkit_docs=self.webpackChunkbigkit_docs||[]).push([[595],{6332:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var r=s(5893),n=s(1151);const c={title:"Avatar",sidebar_position:1},d=void 0,a={id:"components/presentation-components/avatar",title:"Avatar",description:"Effect demonstration",source:"@site/docs/components/presentation-components/avatar.md",sourceDirName:"components/presentation-components",slug:"/components/presentation-components/avatar",permalink:"/docs/components/presentation-components/avatar",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/presentation-components/avatar.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Avatar",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Presentation components",permalink:"/docs/category/presentation-components"},next:{title:"Badge",permalink:"/docs/components/presentation-components/badge"}},o={},i=[{value:"Effect demonstration",id:"effect-demonstration",level:2},{value:"1. Default avatar",id:"1-default-avatar",level:3},{value:"2. Avatar size",id:"2-avatar-size",level:3},{value:"3. Avatar curvature",id:"3-avatar-curvature",level:3},{value:"4. Avatar pendant",id:"4-avatar-pendant",level:3},{value:"5. Avatar content",id:"5-avatar-content",level:3},{value:"6. Avatar group",id:"6-avatar-group",level:3},{value:"7. Avatar group background",id:"7-avatar-group-background",level:3},{value:"Avatar component API",id:"avatar-component-api",level:2},{value:"Accessory component API",id:"accessory-component-api",level:2},{value:"AvatarGroup component API",id:"avatargroup-component-api",level:2}];function l(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"#Avatar avatar component"}),"\n",(0,r.jsx)(t.h2,{id:"effect-demonstration",children:"Effect demonstration"}),"\n",(0,r.jsx)(t.h3,{id:"1-default-avatar",children:"1. Default avatar"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<Avatar url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000" />\n'})}),"\n",(0,r.jsx)(t.h3,{id:"2-avatar-size",children:"2. Avatar size"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:' <Avatar\n    size={20}\n    url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n  />\n  <Avatar\n    size={40}\n    url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n  />\n  <Avatar\n    size={60}\n    url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n  />\n'})}),"\n",(0,r.jsx)(t.h3,{id:"3-avatar-curvature",children:"3. Avatar curvature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:' <Avatar\n    circular={false}\n    url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n  />\n  <Avatar\n    borderRadius={10}\n    circular={false}\nurl="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n  />\n  <Avatar\n    borderRadius={20}\n    circular={false}\n    url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n  />\n'})}),"\n",(0,r.jsx)(t.h3,{id:"4-avatar-pendant",children:"4. Avatar pendant"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'//Custom pendant is located at the top\n <Avatar url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000">\n  <Accessory component={<Icon name="user" color="green" rounded />} top={true} />\n</Avatar>\n//Custom pendant position is on the upper left\n<Avatar url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000">\n<Accessory component={<Icon name="user" color="green" rounded />} top={true} left={true} />\n</Avatar>\n//Custom image\n<Avatar url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000">\n  <Accessory url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000" />\n</Avatar>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"5-avatar-content",children:"5. Avatar content"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'//Custom content: use text\n<Avatar title="123" />\n//Custom content: use images\n<Avatar url={require(\'../../assets/images/island.jpg\')} />\n//Custom content: use images\n<Avatar url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000" />\n'})}),"\n",(0,r.jsx)(t.h3,{id:"6-avatar-group",children:"6. Avatar group"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<AvatarGroup max={4}>\n  <Avatar\n    url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n    circular\n  />\n  <Avatar\nurl="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n    circular\n  />\n  <Avatar\n    url="https://i0.wp.com/fancycrave.com/wp-content/uploads/2020/03/group-of-diverse-friends-playing-game-on-mobile-P5BYNJM.jpg"\n    circular\n  />\n  <Avatar\n    url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n    circular\n  />\n  <Avatar\nurl="https://i0.wp.com/fancycrave.com/wp-content/uploads/2020/03/group-of-diverse-friends-playing-game-on-mobile-P5BYNJM.jpg"\n    circular\n  />\n</AvatarGroup>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"7-avatar-group-background",children:"7. Avatar group background"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:"| pure",children:'<AvatarGroup max={4} backgroundColor="orange">\n<Avatar\n    url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n    circular\n  />\n  <Avatar\n    url="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n    circular\n  />\n  <Avatar\n    url="https://i0.wp.com/fancycrave.com/wp-content/uploads/2020/03/group-of-diverse-friends-playing-game-on-mobile-P5BYNJM.jpg"\n    circular\n  />\n  <Avatar\nurl="https://images.pexels.com/photos/1702238/pexels-photo-1702238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"\n    circular\n  />\n  <Avatar\n    url="https://i0.wp.com/fancycrave.com/wp-content/uploads/2020/03/group-of-diverse-friends-playing-game-on-mobile-P5BYNJM.jpg"\n    circular\n  />\n</AvatarGroup>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"avatar-component-api",children:"Avatar component API"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Properties"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"The path to the image"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"string"})," | ",(0,r.jsx)(t.code,{children:"number"})]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"size"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"avatar size"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"px(46)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"borderRadius"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Avatar curvature"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"0"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Title (text displayed in the avatar, cannot be used with url)"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"circular"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Whether the avatar is circular"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"backgroundColor"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Background when using title"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"#E5F1FF"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"textStyle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"title text style"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TextStyle"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"containerStyle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Container style"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ViewStyle"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"activeOpacity"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Transparency on click"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"0.6"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"onPress"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Callback event for clicking the avatar"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"() => void"})}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"accessory-component-api",children:"Accessory component API"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Properties"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"The path to the image"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"string"})," | ",(0,r.jsx)(t.code,{children:"number"})]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"size"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Icon size"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"px(14)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"icon"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"props when using icon"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"IconProps"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"component"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Use custom components"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ReactNode"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"top"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"The vertical position of the pendant"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"left"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"The horizontal position of the widget"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"avatargroup-component-api",children:"AvatarGroup component API"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Properties"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Maximum number to display"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"4"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spacing"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Spacing of avatar"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"px(23)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"backgroundColor"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"The background of the number avatar"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"#E5F1FF"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"textStyle"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Quantity avatar title text style"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TextStyle"})}),(0,r.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>d});var r=s(7294);const n={},c=r.createContext(n);function d(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
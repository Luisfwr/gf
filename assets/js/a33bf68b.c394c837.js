"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[22996],{90724:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var d=i(85893),s=i(11151);const l={title:"v1.13 2020-06-10",sidebar_position:3},c=void 0,r={id:"\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.13 2020-06-10",title:"v1.13 2020-06-10",description:"GoFrame",source:"@site/docs/10-\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/7-\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/3-v1.13 2020-06-10.md",sourceDirName:"10-\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/7-\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x",slug:"/\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.13 2020-06-10",permalink:"/docs/\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.13 2020-06-10",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"v1.13 2020-06-10",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"v1.14 2020-10-27",permalink:"/docs/\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.14 2020-10-27"},next:{title:"v1.12 2020-03-31",permalink:"/docs/\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.12 2020-03-31"}},h={},o=[{value:"GoFrame",id:"goframe",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:3},{value:"\u53d1\u5c55",id:"\u53d1\u5c55",level:3},{value:"Change Log",id:"change-log",level:2},{value:"<code>tool chain</code>",id:"tool-chain",level:3},{value:"<code>container</code>",id:"container",level:3},{value:"<code>database</code>",id:"database",level:3},{value:"<code>net</code>",id:"net",level:3},{value:"<code>encoding</code>",id:"encoding",level:3},{value:"<code>error</code>",id:"error",level:3},{value:"<code>os</code>",id:"os",level:3},{value:"<code>frame</code>",id:"frame",level:3},{value:"<code>i18n</code>",id:"i18n",level:3},{value:"<code>test</code>",id:"test",level:3},{value:"<code>text</code>",id:"text",level:3},{value:"<code>util</code>",id:"util",level:3},{value:"Bug Fix",id:"bug-fix",level:3}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"goframe",children:"GoFrame"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"GF(Go Frame)"})," \u662f\u4e00\u6b3e\u6a21\u5757\u5316\u3001\u9ad8\u6027\u80fd\u3001\u751f\u4ea7\u7ea7\u7684Go\u57fa\u7840\u5f00\u53d1\u6846\u67b6\u3002\u5b9e\u73b0\u4e86\u6bd4\u8f83\u5b8c\u5584\u7684\u57fa\u7840\u8bbe\u65bd\u5efa\u8bbe\u4ee5\u53ca\u5f00\u53d1\u5de5\u5177\u94fe\uff0c\u63d0\u4f9b\u4e86\u5e38\u7528\u7684\u57fa\u7840\u5f00\u53d1\u6a21\u5757\uff0c\u5982\uff1a\u7f13\u5b58\u3001\u65e5\u5fd7\u3001\u961f\u5217\u3001\u6570\u7ec4\u3001\u96c6\u5408\u3001\u5bb9\u5668\u3001\u5b9a\u65f6\u5668\u3001\u547d\u4ee4\u884c\u3001\u5185\u5b58\u9501\u3001\u5bf9\u8c61\u6c60\u3001\u914d\u7f6e\u7ba1\u7406\u3001\u8d44\u6e90\u7ba1\u7406\u3001\u6570\u636e\u6821\u9a8c\u3001\u6570\u636e\u7f16\u7801\u3001\u5b9a\u65f6\u4efb\u52a1\u3001\u6570\u636e\u5e93ORM\u3001TCP/UDP\u7ec4\u4ef6\u3001\u8fdb\u7a0b\u7ba1\u7406/\u901a\u4fe1\u7b49\u7b49\u3002\u5e76\u63d0\u4f9b\u4e86Web\u670d\u52a1\u5f00\u53d1\u7684\u7cfb\u5217\u6838\u5fc3\u7ec4\u4ef6\uff0c\u5982\uff1aRouter\u3001Cookie\u3001Session\u3001Middleware\u3001\u670d\u52a1\u6ce8\u518c\u3001\u6a21\u677f\u5f15\u64ce\u7b49\u7b49\uff0c\u652f\u6301\u70ed\u91cd\u542f\u3001\u70ed\u66f4\u65b0\u3001\u57df\u540d\u7ed1\u5b9a\u3001TLS/HTTPS\u3001Rewrite\u7b49\u7279\u6027\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6a21\u5757\u5316\u3001\u677e\u8026\u5408\u8bbe\u8ba1\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u6a21\u5757\u4e30\u5bcc\u3001\u5f00\u7bb1\u5373\u7528\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u7b80\u4fbf\u6613\u7528\u3001\u6613\u4e8e\u7ef4\u62a4\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u9ad8\u4ee3\u7801\u8d28\u91cf\u3001\u9ad8\u5355\u5143\u6d4b\u8bd5\u8986\u76d6\u7387\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u793e\u533a\u6d3b\u8dc3\uff0c\u5927\u725b\u8c26\u900a\u4f4e\u8c03\u813e\u6c14\u597d\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u8be6\u5c3d\u7684\u5f00\u53d1\u6587\u6863\u53ca\u793a\u4f8b\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u5b8c\u5584\u7684\u672c\u5730\u4e2d\u6587\u5316\u652f\u6301\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u8bbe\u8ba1\u4e3a\u56e2\u961f\u53ca\u4f01\u4e1a\u4f7f\u7528\uff1b"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u53d1\u5c55",children:"\u53d1\u5c55"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"GoFrame"})," \u5f00\u59cb\u5f97\u6bd4\u8f83\u65e9\uff0c ",(0,d.jsx)(n.code,{children:"2011"})," \u5e74\u59cb\u4e8e\u5317\u4eac\u4e00\u4e2a\u667a\u80fd\u7269\u8054\u7f51\u5e73\u53f0\u9879\u76ee\uff0c\u90a3\u65f6\u8fd8\u6ca1\u6709\u8fd9\u4e48\u591a\u7269\u8054\u7f51\u7684\u73b0\u884c\u6807\u51c6\uff0c ",(0,d.jsx)(n.code,{children:"Go"})," \u7684\u6807\u51c6\u5e93\u4ee5\u53ca\u751f\u6001\u4e5f\u672a\u5982\u6b64\u4e30\u5bcc\u3002 ",(0,d.jsx)(n.code,{children:"2017"})," \u5e74\u7684\u65f6\u5019 ",(0,d.jsx)(n.code,{children:"GF"})," \u624d\u5f00\u59cb\u53d1\u5e03\u6d4b\u8bd5\u7248\uff0c ",(0,d.jsx)(n.code,{children:"2018"})," \u5e74 ",(0,d.jsx)(n.code,{children:"1024"})," \u7a0b\u5e8f\u5458\u8282\u65e5\u7684\u65f6\u5019\u624d\u53d1\u5e03 ",(0,d.jsx)(n.code,{children:"v1.0"})," \u6b63\u5f0f\u7248\uff0c\u4e3a ",(0,d.jsx)(n.code,{children:"Go"})," \u751f\u6001\u53d1\u5c55\u6dfb\u7816\u52a0\u74e6\u3002\u5f00\u6e90\u4ee5\u6765\u5feb\u901f\u8fed\u4ee3\u3001\u53d1\u5c55\u6210\u957f\uff0c\u5e7f\u53d7\u5f00\u53d1\u8005\u548c\u4f01\u4e1a\u7684\u9752\u7750\uff0c\u4e5f\u6709\u8bb8\u591a\u7684\u5f00\u53d1\u8005\u52a0\u5165\u4e86\u8d21\u732e\u884c\u5217\u3002 ",(0,d.jsx)(n.code,{children:"GF"})," \u539f\u672c\u662f\u4e3a\u5f00\u53d1\u56e2\u961f\u8bbe\u8ba1\u7684\uff0c\u56e0\u6b64\u5979\u7684\u5f00\u53d1\u6548\u7387\u548c\u53ef\u7ef4\u62a4\u6027\u505a\u5f97\u975e\u5e38\u597d\uff0c\u6709\u7740\u5f88\u9ad8\u7684\u4ee3\u7801\u8d28\u91cf\u4ee5\u53ca\u4e30\u5bcc\u7684\u5355\u5143\u6d4b\u8bd5\u548c\u793a\u4f8b\uff0c\u5e76\u4e14 ",(0,d.jsx)(n.code,{children:"GF"})," \u662f\u76ee\u524d\u4e2d\u6587\u5316\u6587\u6863\u505a\u7684\u6700\u597d\u7684 ",(0,d.jsx)(n.code,{children:"Golang"})," \u5f00\u53d1\u6846\u67b6\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"change-log",children:"Change Log"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5e94\u591a\u6570\u5f00\u53d1\u8005\u7684\u8981\u6c42\uff0c\u6846\u67b6\u8981\u6c42\u7684\u6700\u4f4e ",(0,d.jsx)(n.code,{children:"Golang"})," \u8fd0\u884c\u7248\u672c\u964d\u7ea7\u4e3a\u4e86 ",(0,d.jsx)(n.code,{children:"v1.11"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u89c6\u9891\u6559\u7a0b\u5730\u5740\uff1a","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["bilibili\uff1a ",(0,d.jsx)(n.a,{href:"https://www.bilibili.com/video/av94410029",children:"https://www.bilibili.com/video/av94410029"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u897f\u74dc\u89c6\u9891\uff1a ",(0,d.jsx)(n.a,{href:"https://www.ixigua.com/pseries/6809291194665796100/",children:"https://www.ixigua.com/pseries/6809291194665796100/"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5c06\u4e0d\u5e38\u7528\u7684 ",(0,d.jsx)(n.code,{children:"guuid"})," \u6a21\u5757\u8fc1\u79fb\u5230 github.com/gogf/guuid \u4f5c\u4e3a\u793e\u533a\u6a21\u5757\u7ef4\u62a4\uff0c\u4fdd\u6301 ",(0,d.jsx)(n.code,{children:"gf"})," \u4e3b\u4ed3\u5e93\u7684\u8f7b\u91cf\u7ea7\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"guid"})," \u6a21\u5757\uff0c\u7528\u4e8e\u9ad8\u6548\u8f7b\u91cf\u7ea7\u7684\u552f\u4e00\u5b57\u7b26\u4e32\u751f\u6210\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/util/guid/index",children:"https://goframe.org/util/guid/index"})]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"tool-chain",children:(0,d.jsx)(n.code,{children:"tool chain"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5de5\u5177\u94fe\u66f4\u65b0\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/toolchain/cli",children:"https://goframe.org/toolchain/cli"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"gf env"})," \u547d\u4ee4\uff0c\u66f4\u4f18\u96c5\u5730\u67e5\u770b\u5f53\u524d ",(0,d.jsx)(n.code,{children:"Golang"})," \u73af\u5883\u53d8\u91cf\u4fe1\u606f\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"gf mod path"})," \u547d\u4ee4\uff0c\u7528\u4e8e\u5c06\u5f53\u524d ",(0,d.jsx)(n.code,{children:"go modules"})," \u5305\u62f7\u8d1d\u5230 ",(0,d.jsx)(n.code,{children:"GOPATH"})," \u4e2d\uff0c\u4ee5\u4fbf\u4f7f\u7528\u539f\u59cb\u7684 ",(0,d.jsx)(n.code,{children:"GOPATH"})," \u65b9\u5f0f\u5f00\u53d1\u9879\u76ee\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5bf9\u73b0\u6709 ",(0,d.jsx)(n.code,{children:"cli"})," \u547d\u4ee4\u8fdb\u884c\u4e86\u4e00\u4e9b\u6539\u8fdb\uff0c\u63d0\u9ad8\u4f7f\u7528\u4f53\u9a8c\uff1b\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u7248\u672c\u5728\u90e8\u5206\u5e73\u53f0\u4e0b\u63d0\u4f9b\u4e86 ",(0,d.jsx)(n.code,{children:"upx"})," \u538b\u7f29\uff0c\u4f7f\u5f97\u4e0b\u8f7d\u7684\u6587\u4ef6\u66f4\u5c0f\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"container",children:(0,d.jsx)(n.code,{children:"container"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"garray"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://goframe.org/container/garray/index",children:"https://goframe.org/container/garray/index"})}),"\n",(0,d.jsxs)(n.li,{children:["\u7b80\u5316\u6570\u7ec4\u4f7f\u7528\u65b9\u5f0f\uff0c\u652f\u6301\u7c7b\u4f3c\u4e8e ",(0,d.jsx)(n.code,{children:"var garray.Array"})," \u7684\u53d8\u91cf\u5b9a\u4e49\u4f7f\u7528\u65b9\u5f0f\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"Walk"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u7684\u6570\u7ec4\u5143\u7d20\u5904\u7406\u65b9\u6cd5\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"ContainsI"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5927\u5c0f\u5199\u5ffd\u7565\u5339\u914d\u7684\u6570\u7ec4\u5143\u7d20\u9879\u5b58\u5728\u6027\u67e5\u627e\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"94%"}),"\uff1b"]}),"\n",(0,d.jsx)(n.li,{children:"\u4ee3\u7801\u6539\u8fdb\uff0c\u63d0\u9ad8\u6027\u80fd\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u4fee\u590d\u4e00\u4e9b\u95ee\u9898\uff1b"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gchan"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u7531\u4e8e\u8be5\u5c01\u88c5\u5305\u5b9e\u9645\u610f\u4e49\u4e0d\u662f\u5f88\u5927\uff0c\u56e0\u6b64\u4ece\u4e3b\u6846\u67b6\u4e2d\u5220\u9664\uff1b"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"glist"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://goframe.org/container/glist/index",children:"https://goframe.org/container/glist/index"})}),"\n",(0,d.jsxs)(n.li,{children:["\u7b80\u5316\u94fe\u8868\u4f7f\u7528\u65b9\u5f0f\uff0c\u652f\u6301\u7c7b\u4f3c\u4e8e ",(0,d.jsx)(n.code,{children:"var glist.List"})," \u7684\u53d8\u91cf\u5b9a\u4e49\u4f7f\u7528\u65b9\u5f0f\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"99%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gmap"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://goframe.org/container/gmap/index",children:"https://goframe.org/container/gmap/index"})}),"\n",(0,d.jsxs)(n.li,{children:["\u7b80\u5316 ",(0,d.jsx)(n.code,{children:"Map"})," \u4f7f\u7528\u65b9\u5f0f\uff0c\u652f\u6301\u7c7b\u4f3c\u4e8e ",(0,d.jsx)(n.code,{children:"var gmap.Map"})," \u7684\u53d8\u91cf\u5b9a\u4e49\u4f7f\u7528\u65b9\u5f0f\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"81%"}),"\uff1b"]}),"\n",(0,d.jsx)(n.li,{children:"\u4ee3\u7801\u6539\u8fdb\uff0c\u63d0\u9ad8\u6027\u80fd\uff1b"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gset"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://goframe.org/container/gset/index",children:"https://goframe.org/container/gset/index"})}),"\n",(0,d.jsxs)(n.li,{children:["\u7b80\u5316\u96c6\u5408\u4f7f\u7528\u65b9\u5f0f\uff0c\u652f\u6301\u7c7b\u4f3c\u4e8e ",(0,d.jsx)(n.code,{children:"var gset.Set"})," \u7684\u53d8\u91cf\u5b9a\u4e49\u4f7f\u7528\u65b9\u5f0f\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"Walk"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u7684\u96c6\u5408\u5143\u7d20\u5904\u7406\u65b9\u6cd5\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"90%"}),"\uff1b"]}),"\n",(0,d.jsx)(n.li,{children:"\u4ee3\u7801\u6539\u8fdb\uff0c\u63d0\u9ad8\u6027\u80fd\uff1b"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gtree"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://goframe.org/container/gtree/index",children:"https://goframe.org/container/gtree/index"})}),"\n",(0,d.jsxs)(n.li,{children:["\u7b80\u5316\u6811\u578b\u4f7f\u7528\u65b9\u5f0f\uff0c\u652f\u6301\u7c7b\u4f3c\u4e8e ",(0,d.jsx)(n.code,{children:"var gtree.BTree"})," \u7684\u53d8\u91cf\u5b9a\u4e49\u4f7f\u7528\u65b9\u5f0f\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"90%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gvar"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://goframe.org/container/gvar/index",children:"https://goframe.org/container/gvar/index"})}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"69%"}),"\uff1b"]}),"\n",(0,d.jsx)(n.li,{children:"\u4ee3\u7801\u7ec4\u7ec7\u7ed3\u6784\u8c03\u6574\uff0c\u63d0\u9ad8\u7ef4\u62a4\u6027\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u4ee3\u7801\u6539\u8fdb\uff0c\u63d0\u9ad8\u6027\u80fd\uff1b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"database",children:(0,d.jsx)(n.code,{children:"database"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gdb"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"Transaction(f func(tx *TX) error) (err error)"})," \u63a5\u53e3\u65b9\u6cd5\uff0c\u7528\u4e8e\u901a\u8fc7\u95ed\u5305\u5b9e\u73b0\u4e8b\u52a1\u5c01\u88c5\u5904\u7406\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/database/gdb/transaction",children:"https://goframe.org/database/gdb/transaction"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u53bb\u6389\u4e0d\u5e38\u7528\u7684 ",(0,d.jsx)(n.code,{children:"From"})," \u63a5\u53e3\u65b9\u6cd5\uff0c\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"Table"})," \u53ca ",(0,d.jsx)(n.code,{children:"Model"})," \u65b9\u6cd5\u7684\u53c2\u6570\u4e3a\u4e0d\u5b9a\u53c2\u6570\uff0c\u5e76\u652f\u6301\u901a\u8fc7\u4e0d\u5b9a\u53c2\u6570\u4f20\u9012\u8868\u522b\u540d\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/database/gdb/model/select",children:"https://goframe.org/database/gdb/model/select"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"DryRun"})," \u7279\u6027\uff0c\u652f\u6301\u7a7a\u8dd1\u65f6\u53ea\u6267\u884c\u67e5\u8be2\u4e0d\u6267\u884c\u5199\u5165/\u66f4\u65b0/\u5220\u9664\u64cd\u4f5c\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/database/gdb/senior",children:"https://goframe.org/database/gdb/senior"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"create_at"}),", ",(0,d.jsx)(n.code,{children:"update_at"})," \u5199\u5165\u65f6\u95f4\u3001\u66f4\u65b0\u65f6\u95f4\u5b57\u6bb5\u81ea\u52a8\u586b\u5145\u7279\u6027\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/database/gdb/model/auto-time",children:"https://goframe.org/database/gdb/model/auto-time"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"delete_at"})," \u8f6f\u5220\u9664\u7279\u6027\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/database/gdb/model/auto-time",children:"https://goframe.org/database/gdb/model/auto-time"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"Having"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\uff0c\u7528\u4e8e ",(0,d.jsx)(n.code,{children:"having"})," \u6761\u4ef6\u67e5\u8be2\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/database/gdb/model/select",children:"https://goframe.org/database/gdb/model/select"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Result"})," \u7ed3\u679c\u5bf9\u8c61\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"Chunk"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u5206\u6279\u5904\u7406\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/database/gdb/result",children:"https://goframe.org/database/gdb/result"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"Schema"})," \u6570\u636e\u5e93\u8fd0\u884c\u65f6\u5207\u6362\u7279\u6027\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb\u5bf9 ",(0,d.jsx)(n.code,{children:"pgsql"}),", ",(0,d.jsx)(n.code,{children:"mssql"}),", ",(0,d.jsx)(n.code,{children:"sqlite"}),", ",(0,d.jsx)(n.code,{children:"oracle"})," \u6570\u636e\u5e93\u5b57\u6bb5\u7c7b\u578b\u7684\u652f\u6301\uff1b"]}),"\n",(0,d.jsx)(n.li,{children:"\u8fdb\u4e00\u6b65\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u4ee3\u7801\u7ec4\u7ec7\u7ed3\u6784\u8c03\u6574\uff0c\u63d0\u9ad8\u7ef4\u62a4\u6027\uff1b"}),"\n",(0,d.jsx)(n.li,{children:"\u4ee3\u7801\u6539\u8fdb\uff0c\u63d0\u9ad8\u6027\u80fd\uff1b"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gredis"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"MaxActive"})," \u8fde\u63a5\u6c60\u53c2\u6570\u9ed8\u8ba4\u914d\u7f6e\u4e3a ",(0,d.jsx)(n.code,{children:"100"}),"\uff0c\u9650\u5236\u9ed8\u8ba4\u7684\u8fde\u63a5\u6570\u91cf\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"Conn"})," \u8fde\u63a5\u5bf9\u8c61\u7684 ",(0,d.jsx)(n.code,{children:"Do"})," \u65b9\u6cd5\uff0c\u652f\u6301\u5bf9 ",(0,d.jsx)(n.code,{children:"map/slice/struct"})," \u7c7b\u578b\u8fdb\u884c\u81ea\u52a8\u7684 ",(0,d.jsx)(n.code,{children:"json.Marshal"})," \u5904\u7406\uff0c\u6ce8\u610f\u83b7\u53d6\u6570\u636e\u65f6\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"DoVar"})," \u65b9\u6cd5\u83b7\u53d6\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/database/gredis/usage",children:"https://goframe.org/database/gredis/usage"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"72%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"net",children:(0,d.jsx)(n.code,{children:"net"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ghttp"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"Prefix"})," \u53ca ",(0,d.jsx)(n.code,{children:"Retry"})," \u5ba2\u6237\u7aef\u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0\u5ba2\u6237\u7aef\u539f\u59cb\u8bf7\u6c42\u6253\u5370\u7279\u6027\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/net/ghttp/client/demo/dump",children:"https://goframe.org/net/ghttp/client/demo/dump"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"ClientMaxBodySize"})," \u7684\u670d\u52a1\u7aef\u914d\u7f6e\uff0c\u7528\u4e8e\u9650\u5236\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684 ",(0,d.jsx)(n.code,{children:"Body"})," \u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a ",(0,d.jsx)(n.code,{children:"8MB"}),"\uff1b\u5728\u6d89\u53ca\u5230\u4e0a\u4f20\u7684Server\u4e2d\u9700\u8981\u589e\u52a0\u8be5\u914d\u7f6e\u7684\u5927\u5c0f\uff0c\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u5bf9\u5e94\u7684\u5927\u5c0f\u5373\u53ef\uff0c\u5982 ",(0,d.jsx)(n.code,{children:'ClientMaxBodySize="100MB"'}),"\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/net/ghttp/config",children:"https://goframe.org/net/ghttp/config"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"SessionId"})," \u751f\u6210\u7684\u968f\u673a\u6027\uff0c\u63d0\u9ad8 ",(0,d.jsx)(n.code,{children:"Session"})," \u5b89\u5168\u6027\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/os/gsession/index",children:"https://goframe.org/os/gsession/index"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"ghttp.Server"})," \u5b9e\u73b0\u4e86\u6807\u51c6\u5e93\u7684 ",(0,d.jsx)(n.code,{children:"http.Handler"})," \u63a5\u53e3\uff0c\u4fbf\u4e8e\u4e0e\u5176\u4ed6\u7b2c\u4e09\u65b9\u7684\u670d\u52a1\u5982 ",(0,d.jsx)(n.code,{children:"Prometheus"})," \u8fdb\u884c\u4ee3\u7801\u96c6\u6210\uff1b"]}),"\n",(0,d.jsx)(n.li,{children:"\u5176\u4ed6\u5927\u91cf\u7684\u4ee3\u7801\u7ec6\u8282\u6539\u8fdb\u5de5\u4f5c\uff0c\u63d0\u9ad8\u6027\u80fd\u53ca\u6301\u4e45\u7ef4\u62a4\u6027\uff1b"}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"61%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"gipv4"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"GetIpArray"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u4e3b\u673a\u7684\u6240\u6709IPv4\u5730\u5740\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"GetMacArray"})," \u53ca ",(0,d.jsx)(n.code,{children:"GetMac"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u4e3b\u673a\u7684 ",(0,d.jsx)(n.code,{children:"MAC"})," \u5730\u5740\u4fe1\u606f\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u6539 ",(0,d.jsx)(n.code,{children:"IntranetIP"})," \u65b9\u6cd5\u540d\u79f0\u4e3a ",(0,d.jsx)(n.code,{children:"GetIntranetIp"}),"\uff0c\u4fee\u6539 ",(0,d.jsx)(n.code,{children:"IntranetIPArray"})," \u65b9\u6cd5\u540d\u79f0\u4e3a ",(0,d.jsx)(n.code,{children:"GetIntranetIpArray"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"encoding",children:(0,d.jsx)(n.code,{children:"encoding"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gjson"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"GetMaps"})," \u83b7\u53d6 ",(0,d.jsx)(n.code,{children:"JSON"})," \u5185\u90e8\u8282\u70b9\u53d8\u91cf\u65b9\u6cd5\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"NewWithTag"})," \u65b9\u6cd5\u5bf9 ",(0,d.jsx)(n.code,{children:"map/struct"})," \u7684\u5904\u7406\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"77%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gyaml"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5347\u7ea7\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9 ",(0,d.jsx)(n.code,{children:"yaml"})," \u89e3\u6790\u5305\uff0c\u89e3\u51b3\u4e86 ",(0,d.jsx)(n.code,{children:"map[interface{}]interface{}"})," \u8f6c\u6362\u95ee\u9898\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"error",children:(0,d.jsx)(n.code,{children:"error"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gerror"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"NewfSkip"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u521b\u5efa ",(0,d.jsx)(n.code,{children:"skip"})," \u6307\u5b9a\u5806\u6808\u7684\u9519\u8bef\u5bf9\u8c61\uff1b"]}),"\n",(0,d.jsx)(n.li,{children:"\u653e\u5f00\u6846\u67b6\u6240\u6709\u7684\u5806\u6808\u94fe\u8def\u6253\u5370\uff0c\u5c55\u793a\u9519\u8bef\u65f6\u771f\u5b9e\u7684\u94fe\u8def\u8c03\u7528\u8be6\u60c5\uff1b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"os",children:(0,d.jsx)(n.code,{children:"os"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"gcache"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"GetVar"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u83b7\u5f97\u53ef\u4ee5\u4fbf\u6377\u8f6c\u6362\u4e3a\u5176\u4ed6\u6570\u636e\u7c7b\u578b\u7684\u201d\u6cdb\u578b\u201d\u53d8\u91cf\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6807\u8bb0 ",(0,d.jsx)(n.code,{children:"Removes"})," \u65b9\u6cd5\u5e9f\u5f03\uff0c\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"Remove"})," \u65b9\u6cd5\u53c2\u6570\u4e3a\u4e0d\u5b9a\u53c2\u6570\uff0c\u7edf\u4e00\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"Remove"})," \u65b9\u6cd5\u5220\u9664\u5355\u4e2a/\u591a\u4e2a\u952e\u503c\u5bf9\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"96%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"genv"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"GetVar"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u83b7\u5f97\u53ef\u4ee5\u4fbf\u6377\u8f6c\u6362\u4e3a\u5176\u4ed6\u6570\u636e\u7c7b\u578b\u7684\u201d\u6cdb\u578b\u201d\u53d8\u91cf\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"gfile"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"CopyDir/CopyFile"})," \u590d\u5236\u76ee\u5f55/\u6587\u4ef6\u65b9\u6cd5\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"ScanDirFunc"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u652f\u6301\u81ea\u5b9a\u4e49\u5904\u7406\u56de\u8c03\u7684\u76ee\u5f55\u68c0\u7d22\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"64%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"glog"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0\u652f\u6301 ",(0,d.jsx)(n.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u65e5\u5fd7\u6253\u5370\u7279\u6027\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/os/glog/context",children:"https://goframe.org/os/glog/context"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"gres"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb\u6253\u5305\u7279\u6027\uff0c\u589e\u5f3a\u751f\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6\u53caGo\u6587\u4ef6\u7684\u538b\u7f29\u6bd4\uff0c\u6bd4\u65e7\u7248\u672c\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"20%"})," \u538b\u7f29\u7387\uff0c\u4f7f\u5f97\u7f16\u8bd1\u751f\u6210\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4f53\u79ef\u66f4\u5c0f\uff1b"]}),"\n",(0,d.jsx)(n.li,{children:"\u4ee3\u7801\u7ed3\u6784\u6539\u8fdb\uff0c\u63d0\u9ad8\u6267\u884c\u6548\u7387\u53ca\u53ef\u6301\u4e45\u7ef4\u62a4\u6027\uff1b"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"gsession"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"SessionId"})," \u9ed8\u8ba4\u751f\u6210\u65b9\u6cd5\uff0c\u91c7\u7528 ",(0,d.jsx)(n.code,{children:"guid.S"})," \u65b9\u6cd5\u751f\u6210\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"SetId"})," \u53ca ",(0,d.jsx)(n.code,{children:"SetIdFunc"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49 ",(0,d.jsx)(n.code,{children:"SessionId"})," \u53ca\u81ea\u5b9a\u4e49\u7684 ",(0,d.jsx)(n.code,{children:"SessionId"})," \u751f\u6210\u65b9\u6cd5\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"frame",children:(0,d.jsx)(n.code,{children:"frame"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"g"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"g.Table"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5feb\u901f\u521b\u5efa\u6570\u636e\u5e93\u6a21\u578b\u64cd\u4f5c\u5bf9\u8c61\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"i18n",children:(0,d.jsx)(n.code,{children:"i18n"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gi18n"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"GetContent"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u83b7\u53d6\u6307\u5b9a ",(0,d.jsx)(n.code,{children:"i18n"})," \u5173\u952e\u5b57\u4e3a\u8f6c\u8bd1\u5185\u5bb9\uff1b"]}),"\n",(0,d.jsx)(n.li,{children:"\u6539\u8fdb\u4ee3\u7801\u7ec6\u8282\uff0c\u63d0\u9ad8\u6027\u80fd\u548c\u6301\u4e45\u53ef\u7ef4\u62a4\u6027\uff1b"}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"74%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"test",children:(0,d.jsx)(n.code,{children:"test"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gtest"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"AssertNQ"})," \u65ad\u8a00\u65b9\u6cd5\uff0c\u7528\u4e8e\u5f3a\u7c7b\u578b\u7684\u4e0d\u76f8\u7b49\u5224\u65ad\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"text",children:(0,d.jsx)(n.code,{children:"text"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gstr"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"SubStrRune"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u652f\u6301 ",(0,d.jsx)(n.code,{children:"unicode"})," \u7684\u5b57\u7b26\u4e32\u622a\u53d6\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"StrLimitRune"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u652f\u6301 ",(0,d.jsx)(n.code,{children:"unicode"})," \u7684\u5b57\u7b26\u4e32\u622a\u65ad\u9690\u85cf\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"LenRune"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u66ff\u6362 ",(0,d.jsx)(n.code,{children:"RuneLen"})," \u65b9\u6cd5\uff0c\u7edf\u4e00\u65b9\u6cd5\u547d\u540d\u98ce\u683c\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"PosRune/PosIRune/PosRRune/PosRIRune"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u652f\u6301 ",(0,d.jsx)(n.code,{children:"unicode"})," \u7684\u5b57\u7b26\u4e32\u5de6\u53f3\u4f4d\u7f6e\u67e5\u627e\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"CompareVersionGo"})," \u65b9\u6cd5\uff0c\u7528\u4e8e ",(0,d.jsx)(n.code,{children:"Golang"})," \u98ce\u683c\u7684\u7248\u672c\u53f7\u5927\u5c0f\u6bd4\u8f83\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"75%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"util",children:(0,d.jsx)(n.code,{children:"util"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"gconv"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"Convert"})," \u8f6c\u6362\u65b9\u6cd5\uff0c\u652f\u6301\u5e38\u89c1 ",(0,d.jsx)(n.code,{children:"map"})," \u7c7b\u578b\u7684\u8f6c\u6362\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb\u7c7b\u578b\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u5f02\u5e38\u9519\u8bef\u7684\u6355\u83b7\uff0c\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"error"})," \u8fd4\u56de\uff1b"]}),"\n",(0,d.jsx)(n.li,{children:"\u5176\u4ed6\u4e00\u4e9b\u7ec6\u8282\u6539\u8fdb\uff1b"}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"63%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"grand"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"B"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u83b7\u5f97\u968f\u673a\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb\u4ee3\u7801\u5e95\u5c42\u5b9e\u73b0\uff0c\u90e8\u5206\u63a5\u53e3\u6027\u80fd\u63d0\u9ad8 ",(0,d.jsx)(n.code,{children:"50%"}),"\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"74%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"guid"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"guid"})," \u6a21\u5757\uff0c\u7528\u4e8e\u9ad8\u6548\u8f7b\u91cf\u7ea7\u7684\u552f\u4e00\u5b57\u7b26\u4e32\u751f\u6210\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/util/guid/index",children:"https://goframe.org/util/guid/index"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"gutil"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"MapContains"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5224\u65admap\u4e2d\u662f\u5426\u5305\u542b\u6307\u5b9a\u952e\u540d\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"MapDelete"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5220\u9664map\u4e2d\u6307\u5b9a\u7684\u952e\u540d\uff0c\u53ef\u4ee5\u4e3a\u591a\u4e2a\u952e\u540d\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"MapMerge"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5408\u5e76\u4e24\u4e2amap\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"MapMergeCopy"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u62f7\u8d1d\u591a\u4e2amap\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"MapContainsPossibleKey"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u67e5\u627e\u6307\u5b9a\u952e\u540d\uff0c\u5ffd\u7565\u5927\u5c0f\u5199\u53ca\u5b57\u7b26 ",(0,d.jsx)(n.code,{children:"'-'/'_'/'.'/' '"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"gvalid"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6240\u6709\u9ed8\u8ba4\u7684\u9519\u8bef\u63d0\u793a\u6539\u4e3a\u4e86\u82f1\u6587\uff1b"}),"\n",(0,d.jsxs)(n.li,{children:["\u9519\u8bef\u63d0\u793a\u7684\u914d\u7f6e\u6539\u4e3a\u4e86\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"i18n"})," \u6765\u914d\u7f6e\u5b9e\u73b0\uff0c\u4ee5\u4fbf\u652f\u6301\u56fd\u9645\u5316\uff1a ",(0,d.jsx)(n.a,{href:"https://goframe.org/util/gvalid/message",children:"https://goframe.org/util/gvalid/message"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u8eab\u4efd\u8bc1\u53f7\u89c4\u5219\u540d\u79f0\u4ece ",(0,d.jsx)(n.code,{children:"id-number"})," \u6539\u4e3a\u4e86 ",(0,d.jsx)(n.code,{children:"resident-id"}),"\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u94f6\u884c\u5361\u53f7\u89c4\u5219\u540d\u79f0\u4ece ",(0,d.jsx)(n.code,{children:"luhn"})," \u6539\u4e3a\u4e86 ",(0,d.jsx)(n.code,{children:"bank-card"}),"\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee3\u7801\u8986\u76d6\u7387 ",(0,d.jsx)(n.code,{children:"96%"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"gcompress"})," \u7684\u591a\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"zip"})," \u538b\u7f29\u95ee\u9898\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"ghttp.Client"})," \u83b7\u53d6\u8fd4\u56de\u7684\u8fc7\u671f ",(0,d.jsx)(n.code,{children:"Cookie"})," \u7684\u95ee\u9898\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"gres.File"})," \u5bf9\u4e8e ",(0,d.jsx)(n.code,{children:"http.File"})," \u63a5\u53e3\u7684\u5b9e\u73b0\u7ec6\u8282\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"garray.Pop*"})," \u65b9\u6cd5\u7684\u8fb9\u754c\u95ee\u9898\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"gres"})," \u4e2d ",(0,d.jsx)(n.code,{children:"Readdir"})," \u65b9\u6cd5\u53c2\u6570\u4e3a ",(0,d.jsx)(n.code,{children:"0"})," \u65f6\u62a5\u9519\u7684\u95ee\u9898\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5176\u4ed6\u4e00\u4e9b\u4fee\u590d\uff1a ",(0,d.jsx)(n.a,{href:"https://github.com/gogf/gf/issues?q=is%3Aissue+label%3Abug",children:"https://github.com/gogf/gf/issues?q=is%3Aissue+label%3Abug"})]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var d=i(67294);const s={},l=d.createContext(s);function c(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);
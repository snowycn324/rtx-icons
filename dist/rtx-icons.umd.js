(function(e,i){typeof exports=="object"&&typeof module<"u"?module.exports=i(require("vue")):typeof define=="function"&&define.amd?define(["vue"],i):(e=typeof globalThis<"u"?globalThis:e||self,e["Rtx-Icons"]=i(e.Vue))})(this,function(e){"use strict";const i=["width","height"],c=["fill"],r=e.defineComponent({__name:"Add",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M12 6.85714H6.85714V12H5.14286V6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714Z",fill:n.value},null,8,c)],8,i))}}),h={install(o){o.component("rtx-add",r)}},a=["width","height"],d=["fill"],p=e.defineComponent({__name:"Close",props:{size:{default:10},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M7.06156 6.00012L11.7806 1.28108C12.0738 0.988138 12.0738 0.512831 11.7806 0.219892C11.4874 -0.0732973 11.0126 -0.0732973 10.7194 0.219892L6.00038 4.93894L1.28108 0.219892C0.987888 -0.0732973 0.513081 -0.0732973 0.219892 0.219892C-0.0732973 0.512831 -0.0732973 0.988138 0.219892 1.28108L4.93919 6.00012L0.219892 10.7192C-0.0732973 11.0121 -0.0732973 11.4874 0.219892 11.7804C0.366487 11.9267 0.558611 12 0.750485 12C0.942359 12 1.13448 11.9267 1.28108 11.7801L6.00038 7.06106L10.7194 11.7801C10.866 11.9267 11.0581 12 11.25 12C11.4419 12 11.634 11.9267 11.7806 11.7801C12.0738 11.4872 12.0738 11.0119 11.7806 10.7189L7.06156 6.00012Z",fill:n.value},null,8,d)],8,a))}}),m={install(o){o.component("rtx-close",p)}},C=["width","height"],f=["fill"],_=e.defineComponent({__name:"Edit",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M0 9.50035V12H2.49965L9.87196 4.62769L7.37231 2.12804L0 9.50035ZM11.805 2.69463C12.065 2.43466 12.065 2.01472 11.805 1.75476L10.2452 0.194973C9.98528 -0.064991 9.56534 -0.064991 9.30537 0.194973L8.08554 1.4148L10.5852 3.91446L11.805 2.69463Z",fill:n.value},null,8,f)],8,C))}}),w={install(o){o.component("rtx-edit",_)}},u=["width","height","fill"],g=["fill"],V=e.defineComponent({__name:"Left",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size*.67,height:t.size,viewBox:"0 0 8 12",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M8 1.41L3.42 6L8 10.59L6.59 12L0.590001 6L6.59 -1.23266e-07L8 1.41Z",fill:n.value},null,8,g)],8,u))}}),H={install(o){o.component("rtx-left",V)}},L=["width","height","fill"],B=["fill"],z=e.defineComponent({__name:"Back",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 12 12",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M12 5.25H2.8725L7.065 1.0575L6 0L0 6L6 12L7.0575 10.9425L2.8725 6.75H12V5.25Z",fill:n.value},null,8,B)],8,L))}}),$={install(o){o.component("rtx-back",z)}},M=["width","height","fill"],Z=["fill"],E=e.defineComponent({__name:"Search",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 12 12",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M8.57633 7.54717H8.03431L7.8422 7.36192C8.51458 6.57976 8.91938 5.56432 8.91938 4.45969C8.91938 1.99657 6.92281 0 4.45969 0C1.99657 0 0 1.99657 0 4.45969C0 6.92281 1.99657 8.91938 4.45969 8.91938C5.56432 8.91938 6.57976 8.51458 7.36192 7.8422L7.54717 8.03431V8.57633L10.9777 12L12 10.9777L8.57633 7.54717ZM4.45969 7.54717C2.75129 7.54717 1.37221 6.1681 1.37221 4.45969C1.37221 2.75129 2.75129 1.37221 4.45969 1.37221C6.1681 1.37221 7.54717 2.75129 7.54717 4.45969C7.54717 6.1681 6.1681 7.54717 4.45969 7.54717Z",fill:n.value},null,8,Z)],8,M))}}),k={install(o){o.component("rtx-search",E)}},x=["width","height","fill"],P=["fill"],N=e.defineComponent({__name:"Demap",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size*.92,viewBox:"0 0 12 12",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M7.434 5.26736L8.4 6.23336V5.26736H7.434ZM9 2.86736H6.6V4.00736H9C10.026 4.00736 10.86 4.84136 10.86 5.86736C10.86 6.62936 10.398 7.28936 9.738 7.57136L10.578 8.41136C11.43 7.88336 12 6.94136 12 5.86736C12 4.21136 10.656 2.86736 9 2.86736ZM0 1.22936L1.866 3.09536C0.774 3.53936 0 4.61336 0 5.86736C0 7.52336 1.344 8.86736 3 8.86736H5.4V7.72736H3C1.974 7.72736 1.14 6.89336 1.14 5.86736C1.14 4.91336 1.866 4.12736 2.796 4.02536L4.038 5.26736H3.6V6.46736H5.238L6.6 7.82936V8.86736H7.638L10.044 11.2734L10.89 10.4274L0.846 0.383362L0 1.22936Z",fill:n.value},null,8,P)],8,x))}}),y={install(o){o.component("rtx-demap",N)}},D=["width","height","fill"],R=["fill"],U=e.defineComponent({__name:"Remap",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size/2,viewBox:"0 0 12 6",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M9 0H6.6V1.2H9C9.99 1.2 10.8 2.01 10.8 3C10.8 3.99 9.99 4.8 9 4.8H6.6V6H9C10.656 6 12 4.656 12 3C12 1.344 10.656 0 9 0ZM5.4 4.8H3C2.01 4.8 1.2 3.99 1.2 3C1.2 2.01 2.01 1.2 3 1.2H5.4V0H3C1.344 0 0 1.344 0 3C0 4.656 1.344 6 3 6H5.4V4.8ZM3.6 2.4H8.4V3.6H3.6V2.4Z",fill:n.value},null,8,R)],8,D))}}),I={install(o){o.component("rtx-remap",U)}},b=["width","height","fill"],j=["fill"],A=["fill"],T=e.defineComponent({__name:"Chain",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 12 12",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M7.19872 0.82378L4.75965 3.26283C4.75494 3.26751 4.75201 3.27321 4.74733 3.27794C5.34819 3.19043 5.96546 3.25043 6.53767 3.47355L8.19306 1.81816C8.74147 1.26975 9.63338 1.26975 10.1818 1.81816C10.7302 2.36653 10.7302 3.25849 10.1818 3.80686C10.0883 3.90042 7.60173 6.38697 7.74275 6.2459C7.19 6.7987 6.28316 6.77505 5.75401 6.2459C5.47996 5.97185 5.03375 5.97185 4.75965 6.2459L4.33276 6.67279C4.45117 6.87398 4.58692 7.06757 4.75965 7.24031C5.80122 8.28187 7.59404 8.36507 8.72202 7.25263C8.72673 7.24795 8.7324 7.24499 8.73713 7.24031L11.1762 4.80126C12.2745 3.70289 12.2745 1.92215 11.1762 0.82378C10.0778 -0.274593 8.2971 -0.274593 7.19872 0.82378Z",fill:n.value},null,8,j),e.createElementVNode("path",{d:"M5.4676 8.52111L3.80686 10.1818C3.2585 10.7303 2.36653 10.7303 1.81817 10.1818C1.26975 9.63343 1.26975 8.74152 1.81817 8.1931L4.26253 5.74874C4.81528 5.19599 5.72213 5.21959 6.25127 5.74874C6.52533 6.02284 6.97155 6.02284 7.24563 5.74874L7.67252 5.32185C7.55412 5.12066 7.41837 4.92707 7.24563 4.75438C6.20606 3.71477 4.41455 3.62631 3.28327 4.74203C3.27856 4.74672 3.27289 4.74967 3.26815 4.75438L0.823763 7.19877C-0.274564 8.2971 -0.274611 10.0779 0.823763 11.1763C1.92214 12.2746 3.70292 12.2746 4.80124 11.1763L7.24561 8.73184C7.25032 8.72715 7.25325 8.7215 7.25794 8.71672C6.65707 8.80424 6.03982 8.74424 5.4676 8.52111Z",fill:n.value},null,8,A)],8,b))}}),S={install(o){o.component("rtx-chain",T)}},q=["width","height","fill"],F=["fill"],G=e.defineComponent({__name:"Right",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 8 12",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z",fill:n.value},null,8,F)],8,q))}}),J={install(o){o.component("rtx-right",G)}},K=["width","height","fill"],O=["fill"],Q=e.defineComponent({__name:"Delete",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 12 12",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M10.8235 2.16H8.94118V0.96C8.94118 0.4305 8.51912 0 8 0H3.29412C2.775 0 2.35294 0.4305 2.35294 0.96V2.16H0.470588C0.210294 2.16 0 2.3745 0 2.64V3.12C0 3.186 0.0529412 3.24 0.117647 3.24H1.00588L1.36912 11.085C1.39265 11.5965 1.80735 12 2.30882 12H8.98529C9.48823 12 9.90147 11.598 9.925 11.085L10.2882 3.24H11.1765C11.2412 3.24 11.2941 3.186 11.2941 3.12V2.64C11.2941 2.3745 11.0838 2.16 10.8235 2.16ZM7.88235 2.16H3.41176V1.08H7.88235V2.16Z",fill:n.value},null,8,O)],8,K))}}),W={install(o){o.component("rtx-delete",Q)}},X=["width","height","fill"],Y=["fill"],v=e.defineComponent({__name:"Copy",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size*.92,height:t.size,viewBox:"0 0 11 13",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M3.6 10.2667C3.27 10.2667 2.9875 10.1492 2.7525 9.91425C2.5175 9.67925 2.4 9.39675 2.4 9.06675V1.86675C2.4 1.53675 2.5175 1.25425 2.7525 1.01925C2.9875 0.784248 3.27 0.666748 3.6 0.666748H9C9.33 0.666748 9.6125 0.784248 9.8475 1.01925C10.0825 1.25425 10.2 1.53675 10.2 1.86675V9.06675C10.2 9.39675 10.0825 9.67925 9.8475 9.91425C9.6125 10.1492 9.33 10.2667 9 10.2667H3.6ZM3.6 9.06675H9V1.86675H3.6V9.06675ZM1.2 12.6667C0.87 12.6667 0.5875 12.5492 0.3525 12.3142C0.1175 12.0792 0 11.7967 0 11.4667V3.06675H1.2V11.4667H7.8V12.6667H1.2Z",fill:n.value},null,8,Y)],8,X))}}),e1={install(o){o.component("rtx-copy",v)}},o1=["width","height","fill"],t1=["fill"],n1=e.defineComponent({__name:"Down",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size*.67,viewBox:"0 0 12 8",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M10.59 0.59L6 5.17L1.41 0.589999L5.24537e-07 2L6 8L12 2L10.59 0.59Z",fill:n.value},null,8,t1)],8,o1))}}),l1={install(o){o.component("rtx-down",n1)}},s1=["width","height","fill"],i1=["fill"],c1=e.defineComponent({__name:"Up",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size*.67,viewBox:"0 0 12 8",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z",fill:n.value},null,8,i1)],8,s1))}}),r1={install(o){o.component("rtx-up",c1)}},h1=["width","height","fill"],a1=["fill"],d1=e.defineComponent({__name:"Trigger",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size*.58,height:t.size,viewBox:"0 0 7 12",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M2.66414 12H1.99747L2.66414 7.33333H0.330805C-0.0558618 7.33333 -0.0491952 7.12 0.0774715 6.89333C0.204138 6.66667 0.110805 6.84 0.124138 6.81333C0.984138 5.29333 2.27747 3.02667 3.99747 0H4.66414L3.99747 4.66667H6.3308C6.65747 4.66667 6.70414 4.88667 6.64414 5.00667L6.59747 5.10667C3.9708 9.7 2.66414 12 2.66414 12Z",fill:n.value},null,8,a1)],8,h1))}}),p1={install(o){o.component("rtx-trigger",d1)}},m1=["width","height","fill"],C1=["fill"],f1=e.defineComponent({__name:"Download",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size*.83,height:t.size,viewBox:"0 0 10 12",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M9.88235 4.23529H7.05882V0H2.82353V4.23529H0L4.94118 9.17647L9.88235 4.23529ZM0 10.5882V12H9.88235V10.5882H0Z",fill:n.value},null,8,C1)],8,m1))}}),_1={install(o){o.component("rtx-download",f1)}},w1=["width","height","fill"],u1=["fill"],g1=e.defineComponent({__name:"Updater",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size*1.33,viewBox:"0 0 15 13",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M2.11362 3.27194L0.213548 2.06686L1.14021 6.20707L5.28041 5.28041L3.38034 4.07533C4.70994 1.97892 7.49423 1.35574 9.59065 2.68534C10.2303 3.09105 10.7379 3.63502 11.0829 4.25344L12.594 3.91521C12.1283 2.9271 11.3884 2.04929 10.394 1.41863C7.59459 -0.356856 3.88911 0.472502 2.11362 3.27194ZM10.9806 8.89565C9.65103 10.9921 6.86674 11.6152 4.77032 10.2856C4.13063 9.87993 3.62303 9.33596 3.27811 8.71755L1.76693 9.05578C2.23264 10.0439 2.97257 10.9217 3.96694 11.5524C6.76638 13.3278 10.4719 12.4985 12.2473 9.69904L14.1474 10.9041L13.2208 6.76391L9.08056 7.69057L10.9806 8.89565Z",fill:n.value},null,8,u1)],8,w1))}}),V1={install(o){o.component("rtx-updater",g1)}},H1=["width","height"],L1=["fill"],B1=e.defineComponent({__name:"Erase",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size*.92,viewBox:"0 0 12 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M9.14468 9.01679H12V10.219H7.94245L9.14468 9.01679ZM1.6307 10.219L0.353317 8.94165C0.122888 8.71122 0.0051692 8.42569 0.000159872 8.08505C-0.00484945 7.74442 0.10786 7.45388 0.338289 7.21343L6.9506 0.360671C7.18103 0.120224 7.46406 0 7.79968 0C8.1353 0 8.41833 0.115214 8.64876 0.345643L11.6393 3.33621C11.8698 3.56664 11.985 3.85217 11.985 4.19281C11.985 4.53344 11.8698 4.81897 11.6393 5.0494L6.58993 10.219H1.6307ZM6.07898 9.01679L10.7978 4.17778L7.82222 1.20224L1.17986 8.055L2.14165 9.01679H6.07898Z",fill:n.value},null,8,L1)],8,H1))}}),z1={install(o){o.component("rtx-erase",B1)}},$1=["width","height","fill"],M1=["fill"],Z1=e.defineComponent({__name:"Menu",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size*.67,viewBox:"0 0 18 12",fill:n.value,xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z",fill:n.value},null,8,M1)],8,$1))}}),E1={install(o){o.component("rtx-menu",Z1)}},k1=["width","height"],x1=["fill"],P1=["fill"],N1=e.defineComponent({__name:"Compare",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size*.79,viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M9.0982 2.18183H4V3.63638H9.0982V5.8182L12 2.9091L9.0982 0V2.18183Z",fill:n.value},null,8,x1),e.createElementVNode("path",{d:"M2.9018 7.27234L8 7.27234L8 5.81779L2.9018 5.81779L2.9018 3.63596L-2.74022e-05 6.54506L2.9018 9.45416L2.9018 7.27234Z",fill:n.value},null,8,P1)],8,k1))}}),y1={install(o){o.component("rtx-compare",N1)}},D1=["width","height"],R1=["fill"],U1=e.defineComponent({__name:"User",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M6 1.5C6.825 1.5 7.5 2.175 7.5 3C7.5 3.825 6.825 4.5 6 4.5C5.175 4.5 4.5 3.825 4.5 3C4.5 2.175 5.175 1.5 6 1.5ZM6 9C8.025 9 10.35 9.9675 10.5 10.5H1.5C1.6725 9.96 3.9825 9 6 9ZM6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM6 7.5C3.9975 7.5 0 8.505 0 10.5V12H12V10.5C12 8.505 8.0025 7.5 6 7.5Z",fill:n.value},null,8,R1)],8,D1))}}),I1={install(o){o.component("rtx-user",U1)}},b1=["width","height"],j1=["fill"],A1=["fill"],T1=e.defineComponent({__name:"Calendar",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M10.5938 0.9375H10.0312V0H9.09375V0.9375H2.90625V0H1.96875V0.9375H1.40625C0.630844 0.9375 0 1.56834 0 2.34375V10.5938C0 11.3692 0.630844 12 1.40625 12H10.5938C11.3692 12 12 11.3692 12 10.5938V2.34375C12 1.56834 11.3692 0.9375 10.5938 0.9375ZM11.0625 10.5938C11.0625 10.8522 10.8522 11.0625 10.5938 11.0625H1.40625C1.14778 11.0625 0.9375 10.8522 0.9375 10.5938V4.40625H11.0625V10.5938ZM11.0625 3.46875H0.9375V2.34375C0.9375 2.08528 1.14778 1.875 1.40625 1.875H1.96875V2.8125H2.90625V1.875H9.09375V2.8125H10.0312V1.875H10.5938C10.8522 1.875 11.0625 2.08528 11.0625 2.34375V3.46875Z",fill:n.value},null,8,j1),e.createElementVNode("path",{d:"M1.78125 5.39062H2.71875V6.32812H1.78125V5.39062ZM3.65625 5.39062H4.59375V6.32812H3.65625V5.39062ZM5.53125 5.39062H6.46875V6.32812H5.53125V5.39062ZM7.40625 5.39062H8.34375V6.32812H7.40625V5.39062ZM9.28125 5.39062H10.2188V6.32812H9.28125V5.39062ZM1.78125 7.26562H2.71875V8.20312H1.78125V7.26562ZM3.65625 7.26562H4.59375V8.20312H3.65625V7.26562ZM5.53125 7.26562H6.46875V8.20312H5.53125V7.26562ZM7.40625 7.26562H8.34375V8.20312H7.40625V7.26562ZM1.78125 9.14062H2.71875V10.0781H1.78125V9.14062ZM3.65625 9.14062H4.59375V10.0781H3.65625V9.14062ZM5.53125 9.14062H6.46875V10.0781H5.53125V9.14062ZM7.40625 9.14062H8.34375V10.0781H7.40625V9.14062ZM9.28125 7.26562H10.2188V8.20312H9.28125V7.26562Z",fill:n.value},null,8,A1)],8,b1))}}),S1={install(o){o.component("rtx-calendar",T1)}},q1=["width","height"],F1=["fill"],G1=e.defineComponent({__name:"Apply",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size*.91,viewBox:"0 0 12 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M10.9091 1.73455L4.68545 7.96364L2.37273 5.65091L3.14182 4.88182L4.68545 6.42545L10.14 0.970909L10.9091 1.73455ZM5.45455 9.81818C3.04909 9.81818 1.09091 7.86 1.09091 5.45455C1.09091 3.04909 3.04909 1.09091 5.45455 1.09091C6.31091 1.09091 7.11273 1.34182 7.78909 1.77273L8.58 0.981818C7.69091 0.365454 6.61636 0 5.45455 0C2.44364 0 0 2.44364 0 5.45455C0 8.46545 2.44364 10.9091 5.45455 10.9091C6.39818 10.9091 7.28727 10.6691 8.06182 10.2436L7.24364 9.42545C6.69818 9.67636 6.09273 9.81818 5.45455 9.81818ZM9.27273 7.09091H7.63636V8.18182H9.27273V9.81818H10.3636V8.18182H12V7.09091H10.3636V5.45455H9.27273V7.09091Z",fill:n.value},null,8,F1)],8,q1))}}),J1={install(o){o.component("rtx-apply",G1)}},K1=["width","height"],O1=["fill"],Q1=e.defineComponent({__name:"Minus",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size*.17,viewBox:"0 0 12 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M12 2H0V0H12V2Z",fill:n.value},null,8,O1)],8,K1))}}),W1={install(o){o.component("rtx-minus",Q1)}},X1=["width","height"],Y1=["fill"],v1=e.defineComponent({__name:"Print",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size*.92,viewBox:"0 0 12 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M10.2 3.05556H1.8C0.804 3.05556 0 3.87444 0 4.88889V8.55556H2.4V11H9.6V8.55556H12V4.88889C12 3.87444 11.196 3.05556 10.2 3.05556ZM8.4 9.77778H3.6V6.72222H8.4V9.77778ZM10.2 5.5C9.87 5.5 9.6 5.225 9.6 4.88889C9.6 4.55278 9.87 4.27778 10.2 4.27778C10.53 4.27778 10.8 4.55278 10.8 4.88889C10.8 5.225 10.53 5.5 10.2 5.5ZM9.6 0H2.4V2.44444H9.6V0Z",fill:n.value},null,8,Y1)],8,X1))}}),e2={install(o){o.component("rtx-print",v1)}},o2=["width","height"],t2=["fill"],n2=e.defineComponent({__name:"Info",props:{size:{default:12},color:{}},setup(o){const l=o,n=e.computed(()=>l.color||"currentColor");return(t,s)=>(e.openBlock(),e.createElementBlock("svg",{width:t.size,height:t.size,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M5.4 3H6.6V4.2H5.4V3ZM5.4 5.4H6.6V9H5.4V5.4ZM6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8Z",fill:n.value},null,8,t2)],8,o2))}}),l2={install(o){o.component("rtx-info",n2)}};return{install:o=>{o.use(h),o.use(m),o.use(w),o.use(H),o.use($),o.use(k),o.use(y),o.use(I),o.use(S),o.use(J),o.use(W),o.use(e1),o.use(l1),o.use(r1),o.use(p1),o.use(_1),o.use(V1),o.use(z1),o.use(E1),o.use(y1),o.use(I1),o.use(S1),o.use(J1),o.use(W1),o.use(e2),o.use(l2)}}});

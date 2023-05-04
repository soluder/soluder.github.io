(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{206:function(t,r,e){"use strict";e.r(r);var n=e(3),a=Object(n.a)({},function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"windows中-使用vnc远程连接docker中的镜像桌面系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows中-使用vnc远程连接docker中的镜像桌面系统","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows中，使用VNC远程连接Docker中的镜像桌面系统")]),t._v(" "),r("h2",{attrs:{id:"创建带桌面的镜像环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建带桌面的镜像环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建带桌面的镜像环境")]),t._v(" "),r("p",[t._v("去"),r("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DockerHub"),r("OutboundLink")],1),t._v("找到自己想要创建的镜像，此处以"),r("a",{attrs:{href:"https://hub.docker.com/r/dorowu/ubuntu-desktop-lxde-vnc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu系统+Lxde桌面"),r("OutboundLink")],1),t._v("为例，也可以以系统镜像为基础，自己安装想要的桌面和VNC。\nDockerHub有运行实例，在此不再赘述命令详解。")]),t._v(" "),r("p",[t._v("创建实例：")]),t._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("docker run -p 6080:80 -p 5900:5900 dorowu/ubuntu-desktop-lxde-vnc:xenial\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[t._v("此时，5900为远程连接端口。")]),t._v(" "),r("h2",{attrs:{id:"使用tightvnc进行远程连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用tightvnc进行远程连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用TightVNC进行远程连接")]),t._v(" "),r("p",[t._v("在Windows中安装"),r("a",{attrs:{href:"https://www.tightvnc.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TightVNC"),r("OutboundLink")],1),t._v("软件。打开TightVNC Viewer，并填入远程连接地址 127.0.0.1:5900")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/docker/4-1.png",alt:"TightVNC"}})]),t._v(" "),r("p",[t._v("点击connect进行远程连接")]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/docker/4-2.png",alt:"TightVNC"}})]),t._v(" "),r("p",[t._v("成功！")]),t._v(" "),r("p",[t._v("可以在这个窗口像真正安装了一个系统一样进行操作了。")])])},[],!1,null,null,null);r.default=a.exports}}]);
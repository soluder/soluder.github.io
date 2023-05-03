(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{212:function(e,a,s){"use strict";s.r(a);var t=s(3),r=Object(t.a)({},function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dockerfile-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" DockerFile 指令")]),e._v(" "),a("p",[e._v("参考"),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"from-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" FROM 指令")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("指定后续指令基于哪个镜像，所以一个有效的DockerFile必须以FROM指令(前面可以加ARG指令定义变量)开头。")]),e._v(" "),a("h3",{attrs:{id:"platform-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platform-参数","aria-hidden":"true"}},[e._v("#")]),e._v(" platform 参数")]),e._v(" "),a("p",[e._v("用于指定镜像的平台。例如linux / amd64，linux / arm64或Windows / amd64。默认情况下，使用构建请求的目标平台。")]),e._v(" "),a("h3",{attrs:{id:"image-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-参数","aria-hidden":"true"}},[e._v("#")]),e._v(" image 参数")]),e._v(" "),a("p",[e._v("镜像名称，可以加:version，来指定版本。")]),e._v(" "),a("h3",{attrs:{id:"as-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#as-参数","aria-hidden":"true"}},[e._v("#")]),e._v(" AS 参数")]),e._v(" "),a("p",[e._v("对FROM进行命名，后续镜像可以使用这个名称来引用这个构建完成的镜像。")]),e._v(" "),a("h2",{attrs:{id:"run-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" RUN 指令")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('RUN <command>\nRUN ["executable", "param1", "param2"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("基于镜像执行命令。行尾可以使用''换行。\n例如：")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("RUN /bin/bash -c 'source $HOME/.bashrc; \\\necho $HOME'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("等效于：")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("RUN /bin/bash -c 'source $HOME/.bashrc; echo $HOME'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"cmd-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" CMD 指令")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CMD ["executable","param1","param2"] (exec form, this is the preferred form)\nCMD ["param1","param2"] (as default parameters to ENTRYPOINT)\nCMD command param1 param2 (shell form)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("ol",[a("li",[e._v("执行指令，并赋予参数，使用镜像对应系统的默认执行方式。")]),e._v(" "),a("li",[e._v("给ENTRYPOINT指令提供参数。")]),e._v(" "),a("li",[e._v("使用shell执行指令，并赋予参数。\n镜像启动时指定的命令。如果指定多个CMD，则只有最后一个生效。\n示例：")])]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM ubuntu\nCMD ["/usr/bin/wc","--help"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"label-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" LABEL 指令")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LABEL <key>=<value> <key>=<value> <key>=<value> ...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("给镜像添加描述元数据（metadata）。\n示例：")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('LABEL "com.example.vendor"="ACME Incorporated"\nLABEL com.example.label-with-value="foo"\nLABEL version="1.0"\nLABEL description="This text illustrates \\\nthat label-values can span multiple lines."\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("使用 "),a("code",[e._v("docker inspect")]),e._v(" 命令查看。\n示例：")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Labels"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"com.example.vendor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ACME Incorporated"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"com.example.label-with-value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"This text illustrates that label-values can span multiple lines."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"multi.label1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"value1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"multi.label2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"value2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"other"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"value3"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h2",{attrs:{id:"expose-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" EXPOSE 指令")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EXPOSE <port> [<port>/<protocol>...]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("通知镜像运行时应监听的端口和协议。默认是TCP协议。\n示例：")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EXPOSE 80/tcp\nEXPOSE 80/udp\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("可以使用一下命令在运行镜像时监听端口，TCP和UDP协议是不同的，默认为TCP协议。\n示例：")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -p 80:80/tcp -p 80:80/udp ...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"env-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" ENV 指令")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ENV <key> <value>\nENV <key>=<value> ...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("设置镜像中的环境变量。可以使用反斜杠（\\）来转义空格，或者用双引号。或者也可以直接不写等号，使用多条语句。\n示例：")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ENV myName="John Doe" myDog=Rex\\ The\\ Dog \\\n    myCat=fluffy\nENV myName John Doe\nENV myDog Rex The Dog\nENV myCat fluffy\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("使用 "),a("code",[e._v("docker inspect")]),e._v(" 命令查看，使用"),a("code",[e._v("docker run --env <key>=<value>")]),e._v("在运行镜像时更改环境变量。")]),e._v(" "),a("h2",{attrs:{id:"add-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" ADD 指令")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ADD [--chown=<user>:<group>] <src>... <dest>\nADD [--chown=<user>:<group>] ["<src>",... "<dest>"] (this form is required for paths containing whitespace)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("将文件复制到容器中，也可以使用url，并且tar格式压缩的文件添加到容器中时会自动解压。chown参数针对用户进行授权，只对linux系统有效。\n示例：")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ADD hom* /mydir/        # adds all files starting with "hom"\nADD hom?.txt /mydir/    # ? is replaced with any single character, e.g., "home.txt"\nADD test relativeDir/          # adds "test" to `WORKDIR`/relativeDir/\nADD test /absoluteDir/         # adds "test" to /absoluteDir/\nADD arr[[]0].txt /mydir/    # copy a file named "arr[0].txt" to /mydir/\nADD --chown=55:mygroup files* /somedir/\nADD --chown=bin files* /somedir/\nADD --chown=1 files* /somedir/\nADD --chown=10:11 files* /somedir/\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h2",{attrs:{id:"copy-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" COPY 指令")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('COPY [--chown=<user>:<group>] <src>... <dest>\nCOPY [--chown=<user>:<group>] ["<src>",... "<dest>"] (this form is required for paths containing whitespace)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("将文件复制到容器中，并且可以复制 "),a("code",[e._v("--from=<name|index>")]),e._v(" 参数来使用FROM AS指令指定的镜像。")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('COPY hom* /mydir/        # adds all files starting with "hom"\nCOPY hom?.txt /mydir/    # ? is replaced with any single character, e.g., "home.txt"\nCOPY test relativeDir/   # adds "test" to `WORKDIR`/relativeDir/\nCOPY test /absoluteDir/  # adds "test" to /absoluteDir/\nCOPY arr[[]0].txt /mydir/    # copy a file named "arr[0].txt" to /mydir/\nCOPY --chown=55:mygroup files* /somedir/\nCOPY --chown=bin files* /somedir/\nCOPY --chown=1 files* /somedir/\nCOPY --chown=10:11 files* /somedir/\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h2",{attrs:{id:"entrypoint-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" ENTRYPOINT 指令")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ENTRYPOINT ["executable", "param1", "param2"] (exec form, preferred)\nENTRYPOINT command param1 param2 (shell form)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("指定在容器运行时执行的命令，CMD 指令可以为其补充参数。\n示例：")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM ubuntu\nENTRYPOINT ["top", "-b"]\nCMD ["-c"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("可以在运行时使用 "),a("code",[e._v("--entrypoint")]),e._v(" 覆盖。\n示例：")]),e._v(" "),a("div",{staticClass:"language-DockerFile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run --entrypoint=top\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("ENTRYPOINT 指令 和 CMD 指令的互动。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th"),e._v(" "),a("th",[e._v("No ENTRYPOINT")]),e._v(" "),a("th",[e._v("ENTRYPOINT exec_entry p1_entry")]),e._v(" "),a("th",[e._v("ENTRYPOINT [“exec_entry”, “p1_entry”]")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("No CMD")]),e._v(" "),a("td",[e._v("error, not allowed")]),e._v(" "),a("td",[e._v("/bin/sh -c exec_entry p1_entry")]),e._v(" "),a("td",[e._v("exec_entry p1_entry")])]),e._v(" "),a("tr",[a("td",[e._v("CMD [“exec_cmd”, “p1_cmd”]")]),e._v(" "),a("td",[e._v("exec_cmd p1_cmd")]),e._v(" "),a("td",[e._v("/bin/sh -c exec_entry p1_entry")]),e._v(" "),a("td",[e._v("exec_entry p1_entry exec_cmd p1_cmd")])]),e._v(" "),a("tr",[a("td",[e._v("CMD [“p1_cmd”, “p2_cmd”]")]),e._v(" "),a("td",[e._v("p1_cmd p2_cmd")]),e._v(" "),a("td",[e._v("/bin/sh -c exec_entry p1_entry")]),e._v(" "),a("td",[e._v("exec_entry p1_entry p1_cmd p2_cmd")])]),e._v(" "),a("tr",[a("td",[e._v("CMD exec_cmd p1_cmd")]),e._v(" "),a("td",[e._v("/bin/sh -c exec_cmd p1_cmd")]),e._v(" "),a("td",[e._v("/bin/sh -c exec_entry p1_entry")]),e._v(" "),a("td",[e._v("exec_entry p1_entry /bin/sh -c exec_cmd p1_cmd")])])])]),e._v(" "),a("h2",{attrs:{id:"volume-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" VOLUME 指令")]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('VOLUME ["/data"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("创建具有指定名称的装载点，并将其标记为保存来自本地主机或其他容器的外部安装的卷。即将容器中指定目录，挂载为本机或其他容器的目录，从而使其在运行时不在容器内部进行写操作。运行时可以覆盖这个挂载设置：")]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -d -v mydata:/data xxxx\ndocker run --name test -it -v /home/xqh/myimage:/data ubuntu /bin/bash\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"user-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" USER 指令")]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("USER <user>[:<group>] or\nUSER <UID>[:<GID>]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("指定镜像运行时，执行指令的用户。")]),e._v(" "),a("h2",{attrs:{id:"workdir-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workdir-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" WORKDIR 指令")]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("WORKDIR /path/to/workdir\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("设置容器运行时的工作目录，即 RUN、CMD、ENTRYPOINT、ADD 指令执行的目录。")]),e._v(" "),a("h2",{attrs:{id:"arg-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arg-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" ARG 指令")]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ARG <name>[=<default value>]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("定义一个变量，用户可以在构建时使用 "),a("code",[e._v("--build-arg=xxx")]),e._v(" 来覆盖。")])])},[],!1,null,null,null);a.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{214:function(a,e,r){"use strict";r.r(e);var s=r(3),t=Object(s.a)({},function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"gradle构建入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gradle构建入门","aria-hidden":"true"}},[a._v("#")]),a._v(" Gradle构建入门")]),a._v(" "),e("p",[a._v("学习一个技术最好地方就是"),e("a",{attrs:{href:"https://docs.gradle.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),e("OutboundLink")],1),a._v("，本文旨在简化学习过程，\n取其精华，去其糟粕，帮你在短时间内了解和使用Gradle。")]),a._v(" "),e("h2",{attrs:{id:"gradle是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gradle是什么","aria-hidden":"true"}},[a._v("#")]),a._v(" Gradle是什么")]),a._v(" "),e("h3",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),e("p",[a._v("Gradle是一种开源构建自动化工具，为解决项目自动化构建问题而生。")]),a._v(" "),e("h3",{attrs:{id:"特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[a._v("#")]),a._v(" 特性")]),a._v(" "),e("ul",[e("li",[a._v("高性能：Task相互独立，只运行需要的Task。可以使用构建缓存来重用以前的Task输出，甚至可以在不同的计算机之间")]),a._v(" "),e("li",[a._v("基于JVM：Gradle基于JVM运行，所以需要JDK环境，因而可以调用JAVA标准库中的API，在创建Task或者构建插件的时候。")]),a._v(" "),e("li",[a._v("实现常用约定，却又不受限于约定，实现Maven中的构建功能，但可以用Task重写这些功能。")]),a._v(" "),e("li",[a._v("可拓展性：可以拓展Task类型甚至构建模型。")]),a._v(" "),e("li",[a._v("提供"),e("a",{attrs:{href:"#gradle%E6%9E%84%E5%BB%BA%E6%89%AB%E6%8F%8F"}},[a._v("构建扫描")]),a._v("功能，可以通过扫描识别常见的构建性能问题，并可以分享扫描结果，以求助他人。")])]),a._v(" "),e("h2",{attrs:{id:"下载安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载安装")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://gradle.org/releases/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方下载地址"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("下载并解压到你想要的位置，然后将bin目录添加到环境变量即可。")]),a._v(" "),e("h2",{attrs:{id:"修改用户主目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改用户主目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改用户主目录")]),a._v(" "),e("p",[a._v("Gradle下载的jar包将会默认放到用户主目录中，默认路径为："),e("code",[a._v("$USER_HOME/.gradle")]),e("br"),a._v("\n可以通过修改环境变量"),e("code",[a._v("GRADLE_USER_HOME")]),a._v("来修改用户主目录位置")]),a._v(" "),e("h2",{attrs:{id:"简单使用gradle构建项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单使用gradle构建项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 简单使用Gradle构建项目")]),a._v(" "),e("p",[a._v("此处以Java项目为例，Gradle提供了Java项目的初始化模版，如果您使用其他没有提供模板的语言，\n就选择Basic然后自行创建对应文件夹，编写构建脚本。")]),a._v(" "),e("h3",{attrs:{id:"初始化项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化项目")]),a._v(" "),e("ol",[e("li",[a._v("新建一个你的项目目录并在命令行或终端中进入这个目录。")]),a._v(" "),e("li",[a._v("执行"),e("code",[a._v("gradle init")])]),a._v(" "),e("li",[a._v("选择要初始化的项目类型，此处要创建Java项目，所以选择application。")]),a._v(" "),e("li",[a._v("选择实现语言，此处选择Java。")]),a._v(" "),e("li",[a._v("选择Gradle的构建DSL，Gradle支持Groovy DSL和Kotlin DSL，这里我们使用Groovy DSL。")]),a._v(" "),e("li",[a._v("选择测试框架，这里可以根据需要自行选择。")]),a._v(" "),e("li",[a._v("输入项目名称。")]),a._v(" "),e("li",[a._v("输入包名。")]),a._v(" "),e("li",[a._v("构建完成。")])]),a._v(" "),e("p",[a._v("这样，一个Java项目的初始化就完成了，Gradle会自动生成常见的Java项目源码文件夹src目录，和Java项目的构建文件。")]),a._v(" "),e("h3",{attrs:{id:"构建文件解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建文件解释","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建文件解释")]),a._v(" "),e("p",[a._v("因为初始化项目时的选择，Gradle构建脚本使用Groovy DSL语法，Groovy是一个脚本语言，方法调用可以通过空格省略小括号，\n所以其实")]),a._v(" "),e("div",{staticClass:"language-gradle line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plugins {\n    id 'java'\n    id 'application'\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("相当于")]),a._v(" "),e("div",{staticClass:"language-gradle line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plugins ({\n    id 'java'\n    id 'application'\n})\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("即是方法调用，依赖部分同理。"),e("br"),a._v("\nJava项目自动生成的构建文件build.gradle内容及解释如下：")]),a._v(" "),e("div",{staticClass:"language-gradle line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plugins {\n    id 'java'\n    id 'application'\n}\n\nrepositories {\n    jcenter()\n}\n\ndependencies {\n    implementation 'com.google.guava:guava:27.1-jre'\n    testImplementation 'junit:junit:4.12'\n}\n\napplication {\n    mainClassName = 'gradle.test.App'\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br")])]),e("ul",[e("li",[a._v("plugins的参数闭包是Gradle的构建插件，Gradle提供了很多构建插件，官方文档有使用说明，常用的有java，maven等，\n这里就是java插件提供了java项目编译打包等功能。")]),a._v(" "),e("li",[a._v("repositories的参数闭包是依赖仓库，Gradle将从对应仓库获取依赖jar包，可以使用maven仓库。")]),a._v(" "),e("li",[a._v("dependencies是项目依赖的jar包，引用方式将在下面"),e("a",{attrs:{href:"#%E4%BE%9D%E8%B5%96%E8%AF%A6%E8%A7%A3"}},[a._v("依赖详解")]),a._v("中详细解释。")]),a._v(" "),e("li",[a._v("application是项目执行时的参数，此处指定了主类。")])]),a._v(" "),e("h3",{attrs:{id:"依赖详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖详解","aria-hidden":"true"}},[a._v("#")]),a._v(" 依赖详解")]),a._v(" "),e("p",[a._v("添加jar包依赖的方式是在dependencies的参数闭包中添加jar包定位。")]),a._v(" "),e("h4",{attrs:{id:"依赖格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖格式","aria-hidden":"true"}},[a._v("#")]),a._v(" 依赖格式")]),a._v(" "),e("p",[a._v("依赖格式为：依赖类型 jar包定位，如："),e("br"),a._v(" "),e("code",[a._v("implementation 'com.google.guava:guava:27.1-jre'")]),e("br"),a._v("\nimplementation为"),e("a",{attrs:{href:"#%E4%BE%9D%E8%B5%96%E7%B1%BB%E5%9E%8B"}},[a._v("依赖类型")]),a._v("，后面字符串用冒号：分割成三部分，第一部分"),e("code",[a._v("com.google.guava")]),a._v("是包名，\n第二部分"),e("code",[a._v("guava")]),a._v("是jar名，第三部分"),e("code",[a._v("27.1-jre")]),a._v("是版本号。"),e("br"),a._v("\n也可以写的更清晰一点，如："),e("br"),a._v(" "),e("code",[a._v("testCompile group: 'junit', name: 'junit', version: '4.12'")])]),a._v(" "),e("h4",{attrs:{id:"依赖类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 依赖类型")]),a._v(" "),e("ul",[e("li",[a._v("compileOnly：仅在编译时依赖。")]),a._v(" "),e("li",[a._v("implementation（取代compile）：在编译和运行时都依赖。")]),a._v(" "),e("li",[a._v("runtimeOnly（取代runtime）：仅在运行时依赖，编译时不参与。")]),a._v(" "),e("li",[a._v("testCompileOnly：在测试中，仅在编译时依赖。")]),a._v(" "),e("li",[a._v("testImplementation：在测试中，在编译和运行时都依赖。")]),a._v(" "),e("li",[a._v("testRuntimeOnly：在测试中，仅在运行时依赖，编译时不参与。")])]),a._v(" "),e("h3",{attrs:{id:"java项目基础构建命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java项目基础构建命令","aria-hidden":"true"}},[a._v("#")]),a._v(" Java项目基础构建命令")]),a._v(" "),e("p",[e("strong",[a._v("注意：构建生成的文件都在build文件夹，如果文件夹不存在，将会在第一次构建的时候生成。")]),e("br"),a._v("\n此处只给出最简单常用的几个命令，具体可以参考"),e("a",{attrs:{href:"https://docs.gradle.org/current/userguide/java_plugin.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方Java插件文档"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("h4",{attrs:{id:"编译class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译class","aria-hidden":"true"}},[a._v("#")]),a._v(" 编译class")]),a._v(" "),e("p",[e("code",[a._v("./gardle class")]),e("br"),a._v("\n将Java源文件编译成class文件，生成的文件在build文件夹中的class文件夹中。")]),a._v(" "),e("h4",{attrs:{id:"生成jar包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成jar包","aria-hidden":"true"}},[a._v("#")]),a._v(" 生成jar包")]),a._v(" "),e("p",[e("code",[a._v("./gradlew jar")]),e("br"),a._v("\n生成的jar包在build文件夹中的libs文件夹中。")]),a._v(" "),e("h4",{attrs:{id:"执行所有构建任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行所有构建任务","aria-hidden":"true"}},[a._v("#")]),a._v(" 执行所有构建任务")]),a._v(" "),e("p",[e("code",[a._v("./gradlew build")]),e("br"),a._v("\n执行所有Task，插件的和自定义的。")]),a._v(" "),e("h4",{attrs:{id:"清理生成的文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清理生成的文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 清理生成的文件")]),a._v(" "),e("p",[e("code",[a._v("./gradlew clean")]),e("br"),a._v("\n清理由Gradle构建生成的文件。")]),a._v(" "),e("h2",{attrs:{id:"gradle构建扫描"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gradle构建扫描","aria-hidden":"true"}},[a._v("#")]),a._v(" Gradle构建扫描")]),a._v(" "),e("p",[a._v("Gradle官方提供免费的构建扫描，用来扫描构建脚本的各方面信息，和性能测试。\n在任何Task后面添加-scan即可生成测试报告，Gradle会自动生成一个网页来反映你的构建脚本的性能、依赖等信息。"),e("br"),a._v("\n命令示例："),e("code",[a._v("./gradlew build -scan")])])])},[],!1,null,null,null);e.default=t.exports}}]);
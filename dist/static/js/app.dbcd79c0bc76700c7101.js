webpackJsonp([7],{"+ChJ":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("TXmL"),i=n("7+uW"),o=n("KIxn"),r=n("yZm8"),s=n.n(r);i.a.use(a.a);var l=new a.a({locale:o.a,fallbackLocale:o.b,messages:{en:s.a},silentTranslationWarn:!0})},"2LJm":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n("Dd8w"),i=n.n(a),o=n("//Fk"),r=n.n(o),s=n("mtWM"),l=n.n(s),c=n("KIxn"),u=n("+ChJ"),d={get defaultLanguage(){return c.a},get supportedLanguages(){return c.c},get currentLanguage(){return u.a.locale},set currentLanguage(e){u.a.locale=e},getUserSupportedLang:function(){var e=d.getUserLang();return d.isLangSupported(e.lang)?e.lang:d.isLangSupported(e.langNoISO)?e.langNoISO:d.defaultLanguage},getUserLang:function(){var e=window.navigator.language||window.navigator.userLanguage||d.defaultLanguage;return{lang:e,langNoISO:e.split("-")[0]}},setI18nLanguageInServices:function(e){return d.currentLanguage=e,l.a.defaults.headers.common["Accept-Language"]=e,document.querySelector("html").setAttribute("lang",e),e},changeLanguage:function(e){return d.isLangSupported(e)?u.a.locale===e?r.a.resolve(e):d.loadLanguageFile(e).then(function(t){return u.a.setLocaleMessage(e,t.default||t),d.setI18nLanguageInServices(e)}):r.a.reject(new Error("Language not supported"))},loadLanguageFile:function(e){return n("S/aJ")("./"+e+".json")},isLangSupported:function(e){return d.supportedLanguages.includes(e)},routeMiddleware:function(e,t,n){var a=e.params.lang;return d.isLangSupported(a)?d.changeLanguage(a).then(function(){return n()}):n(d.getUserSupportedLang())},i18nRoute:function(e){return i()({},e,{params:i()({lang:this.currentLanguage},e.params)})}}},A14c:function(e,t,n){function a(e){var t=i[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var i={"./404.vue":["c5Mg",5],"./About.vue":["en7K",4],"./Home.vue":["HXef",0]};a.keys=function(){return Object.keys(i)},a.id="A14c",e.exports=a},CTc0:function(e,t){},"F8+k":function(e,t,n){e.exports=n.p+"static/img/profile.a6b1bea.jpg"},Jmt5:function(e,t){},KIxn:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o});var a="en",i="en",o=["en","fr","es","pt"]},KWv7:function(e,t,n){"use strict";function a(e){return function(){return n("A14c")("./"+e+".vue")}}var i=n("2LJm");t.a=[{path:"/:lang",component:{template:"<router-view></router-view>"},beforeEnter:i.a.routeMiddleware,children:[{path:"",name:"Home",component:a("Home")},{path:"about",name:"about",component:a("About")},{path:"*",component:a("Home")}]},{path:"*",redirect:function(e){return i.a.getUserSupportedLang()}}]},LD4W:function(e,t){},NHnr:function(e,t,n){"use strict";function a(e){n("LD4W")}function i(e){n("lwBR")}function o(e){n("CTc0")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),s=n("2LJm"),l={computed:{supportedLanguages:function(){return s.a.supportedLanguages},currentLanguage:function(){return s.a.currentLanguage}},methods:{changeLanguage:function(e){var t=this,n=e.target.value,a=this.$router.resolve({params:{lang:n}});return s.a.changeLanguage(n).then(function(){t.$router.push(a.location)})},isCurrentLanguage:function(e){return e===this.currentLanguage}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"LanguageSwitcher",attrs:{name:"language"},on:{change:e.changeLanguage}},[n("ul",{staticClass:"language-selector"},e._l(e.supportedLanguages,function(t){return n("li",{key:t},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],class:{"is-selected":e.isCurrentLanguage(t)},attrs:{type:"radio",click:e.isCurrentLanguage(t),name:t,id:t},domProps:{value:t,checked:e._q(e.picked,t)},on:{change:function(n){e.picked=t}}}),e._v(" "),n("label",{attrs:{for:t}},[e._v(e._s(t))])])}),0)])},u=[],d={render:c,staticRenderFns:u},p=d,g=n("VU/8"),h=a,m=g(l,p,!1,h,null,null),f=m.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TheNavigation"},[n("router-link",{attrs:{to:e.$i18nRoute({name:"Home"})}},[e._v("\n    Home Page\n  ")]),e._v(" "),n("router-link",{attrs:{to:e.$i18nRoute({name:"about"})}},[e._v("\n    About Page\n  ")])],1)},v=[],b={render:w,staticRenderFns:v},y=b,k=n("VU/8"),S=i,I=k(null,y,!1,S,null,null),C=I.exports,L={name:"app",components:{TheLanguageSwitcher:f,TheNavigation:C},mounted:function(){var e=this.jquery;this.$nextTick(function(){e("#frontbildtitle").css("top",100),e(window).width()>990&&(e("#sideNav").css("width","100vw"),setTimeout(function(){e("#sideNav").animate({width:272},500,function(){})},1500)),e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=e(this.hash);if(t=t.length?t:e("[name="+this.hash.slice(1)+"]"),t.length)return e("html, body").animate({scrollTop:t.offset().top},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#sideNav"})})}},j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "),n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"}},[n("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"}},[n("span",{staticClass:"d-block d-lg-none"},[e._v(e._s(e.$t("name"))+" "+e._s(e.$t("lastname")))]),e._v(" "),e._m(0)]),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#about"}},[e._v(" "+e._s(e.$t("pages.about")))])]),e._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#experience"}},[e._v(e._s(e.$t("pages.education")))])]),e._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#education"}},[e._v(e._s(e.$t("pages.employment")))])]),e._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#skills"}},[e._v(e._s(e.$t("pages.programming")))])]),e._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:"#interests"}},[e._v(e._s(e.$t("pages.interests")))])])]),e._v(" "),n("div",{staticClass:"language w-100"},[n("TheLanguageSwitcher")],1)])])],1)},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"d-none d-lg-block"},[a("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:n("F8+k"),alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],x={render:j,staticRenderFns:_},A=x,T=n("VU/8"),P=o,W=T(L,A,!1,P,null,null),E=W.exports,M=n("YaEn"),D=n("+ChJ"),F=n("7t+N"),q=n.n(F);n("K3J8"),n("Eg1c"),n("Jmt5"),n("ao2D"),r.a.prototype.jquery=q.a,r.a.prototype.$i18nRoute=s.a.i18nRoute.bind(s.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:M.a,i18n:D.a,render:function(e){return e(E)}})},"S/aJ":function(e,t,n){function a(e){var t=i[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var i={"./en.json":["yZm8"],"./es.json":["vnEV",3],"./fr.json":["kV3b",2],"./pt.json":["oylM",1]};a.keys=function(){return Object.keys(i)},a.id="S/aJ",e.exports=a},YaEn:function(e,t,n){"use strict";(function(e){var a=n("7+uW"),i=n("/ocq"),o=n("KWv7");a.a.use(i.a),t.a=new i.a({routes:o.a,base:e,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}})}).call(t,"/")},ao2D:function(e,t){},lwBR:function(e,t){},yZm8:function(e,t){e.exports={subtitle:"Design, words, images",name:"Miguel",lastname:"Esquirol",pages:{about:"About",education:"Education",employment:"Employment",workflow:"Workflow",programming:"Programming",interests:"Interests"},email:"miguelesquirol@gmail.com",phone:"5145678197",url:"http://miguelesquirol.com",languages:"Spanish, English, French",twitter:"https://twitter.com/miguelesquirol",linkedin:"https://www.linkedin.com/in/miguel-esquirol-94289337/",github:"https://github.com/miguelesquirol",instagram:"https://www.instagram.com/miguelesquirol",welcome_message:"I've been programming from more than 20 years, I started with basic html in old Netscape browser in a clunky machine, learned CSS, moved from flash to HTML5, from tables and iframes to responsive sites, jQuery and CSS3 animations to the latest frameworks like React or Vue. \n\nSince 2009 I started to work as webdesigner professionally, with small projects in an independent manner, designing, coding and hosting. Since 2013 I've been working full time as front-end developer. Today I create useful pages for people, developing full fledged websites, and working in a company with big clients and.\n\nWeb design is still growing, and I plan to keep on learning.",general:{company:"Company",stack:"Stack",languages:"languages",clients:"clients"},education:{"title-section":"Education",school1:{school:"The Ohio State University",title:"Master of  Arts (MA) ",year:"2008"},school2:{school:"Universitat Ramón Llull",title:"Post-degree",year:"2006"},school3:{school:"Universidad Católica Boliviana",title:"Bachelor of Arts ",year:"2002"}},employment:{"title-section":"Experience",company1:{title:"Front End Developer",name:"Global Eagle",url:"http://www.globaleagle.com",period:"2018 > present",stack:["fa-angular","fa-react","fa-sass","fa-python","fa-linux"],description:"Global Eagle is a leading worldwide provider of inflight entertainment, media content, technology and connectivity solutions to the airline industry. I worked in the delivery team bringing to the Airlines the portal that the passengers will see when they connect to the Wifi on the plane. My role included adapt the theme for the specific client using SASS and GIT, locate and fix bugs working with the QA and Backend department. I translated design to code and modified extensively the look and feel of the portal. I reviewd and implement changes, build packages including front and backend, and deploy into the Development, Staging and Production Servers. I prepared files and scripts for deployment on the plane. I worked with other teams in our office and in the international offices to present a product that thousands of people will use and enjoy.",client1:{name:"Air France",image:"",description:"I adapted the main portal for the specific needs of this client. I helped implement new features (Live TV, Games, etc.). I prepared the files that the QA will review and later that the planes will have installed.",url:"https://www.airfrance.ca/CA/fr/common/ife/dispatch/tous_les_films.htm"},client2:{name:"Southwest",image:"",description:"I updated the look and file of the portal with a complete overhaul of UI/UX desgin, adapting the Designs from the Design Team into the actual code. I worked with SASS and Python to achieve the expected result",url:"https://www.southwest.com/wifi/"},client3:{name:"Fly Dubai",image:"",description:"I was the main front-end developer assigned to this client, setting up the project from scratch, and adapting the Portal with the needs of the client. From start to deployment I worked closely with the Product Manager, and the Backend Team to locate and fix issues",url:"https://www.flydubai.com/en/"},client4:{name:"United Airways",image:"",description:"Built on React, we created a website to present the Airline offers on inflight entertainment. I worked to make this site fully accessible following the client requirements",url:"http://unitedprivatescreening.com/"}},company2:{title:"Front End Developer",name:"Nventive",url:"http://www.nventive.com",period:"2017 > 2018",stack:["fa-vuejs","fa-symfony","fa-drupal","fa-wordpress"],description:" ",client1:{name:"National Geograhic",image:"",description:"We created a website to showcase their latest project. A tool to learn english using Ted Talks. The site was completely created on VUE with a Django backend and animations using GreenSock JS.",url:"https://eltngl.com/learnenglishwithtedtalks/#home"},client2:{name:"CAA",image:"I worked with the team suporting CAA, an automotive, travel, residential and insurance products. With a complex network of websites I helped maintain and develop new features.",description:"",url:"https://www.caaquebec.com"},client3:{name:"College de Rosemont",image:"",description:"I worked almost completely alone as a Frontend of this client developing their main website. We used a heavily modified Wordpress instalation with custom code made with PHP. Working together with the Backend and the product manager we had to create a wide variety of pages that showcase everything this university has to offer",url:"https://www.crosemont.qc.ca/"},client4:{name:"Cineplex",image:"",description:"I worked in the Frontend team developing the Style and main frontend elements for the website of one of the biggest Cinema Chains in Canada. I helped create the Atomic Framework based on the Atomic Design philosophy, that later the Backend team used to create the site.",url:"https://www.cineplex.com/"}},company3:{title:"Web Designer",name:"Link Now Media",url:"http://www.linknow.com",period:"2012 > 2017",stack:["fa-css3","fa-html5","fa-js-square","fa-wordpress","fa-php"],description:"<ul>\n<li>Designer with thousands of clients, small companies across the US and Canada.</li>\n<li>Responsible of design, code and client contact</li>\n<li>Worked with PHP, CSS3, HTML5, Javascript, jQuery, Wordpress</li>\n<li>Starting with a homegrown framework in Wordpress I designed and coded thousands of different websites.</li>\n<li>Responsible of e-commerce sites on several accounts.</li>\n<li>Trainer of new junior designer on procedures, design and standards.</li>\n<li>Designer with the most clients and responsibilities on the company</li>\n</ul>"},company4:{title:"Independent Web Designer",name:"",url:"",period:"",stack:["fa-html5","fa-css3","fa-php","fa-wordpress"],description:"<ul><li>I worked directly with a graphic designer on different personal projects, non profit companies, and independent clients.  I had the complete control of the code and the design of the site, as well as the hosting, maintenance and regular updates of the sites.</li></ul>",client1:{name:"CSJR",image:"",description:"The CSJR (Centre for Services in Restorative justice) is the bilingual site for a non-profit project that relies on encounters between persons who directly or indirectly, have suffered or committed crimes of a similar nature in order to restore together the damage done by the crime. I worked on this project, replacing the original site they had withe a new more modern one. From design (together with a graphic designer), to coding, hosting and maintenance, the site is built on Wordpress with custom PHP code (without builders), with security and multilingual supprot.",url:"http://www.csjr.org/"}}},"other-employment":{title:"Other Professional Experience",description:"<ul><li>I've been spanish teacher for adults in a Montreal institute and at university level at Ohio State University in Columbus, OH\n  <li>I have a spanish masters with experience in journalism and translation.</li>\n  <li>Manager of several web-pages and online communities working both in content and design as well as the first Blog in Bolivia and the first database of bloggers on the same country.</li>\n  <li>Worked with Databases (MySQL) and phpMyadmin for Wordpress based webpages and others.</li>\n  <li>Installation of XAMPP and LAMP servers.</li>\n  <li>Worked as Information Technology Assistant, at the Universitat de Barcelona in Spain helping teachers and the administrative personal with their computers</li>\n  <li>Installed and fixed Windows and Mac computers and set-up class rooms with dozens of computers with the required software.</li>\n  <li>Built and help maintain the computers and the network for a cibercafe I was co-owner, as well as to answer client requests and questions.</li>\n  <li>Published daily for a year articles about software and technology for a developers community.</li>\n  <li>I discovered and tested software, wrote manuals and how-to, and answered questions from the members of the community and help maintain it and make it grow.</li>\n  <li>I've been using Linux for over 15 years, testing new software and promoting open source environments, but I’m familiar with other environments and OS.</li>\n  <li>My software of choice for coding (for the moment) is PyCharm, Git, npm, and Firefox . I'm also proficient at Photoshop and Illustrator for design (and their Opensource equivalents, Gimp and Inkscape). I’m flexible and learn quickly and love to do research.</li></ul>"},skills:{"title-section":"Skills",description:"<ul><li>Mobile-First, Responsive Design</li><li>Cross Browser Testing &amp; Debugging (Desktop and Mobile=</li><li>Cross Functional Teams</li><li>Agile Development &amp; Scrum</li></ul>",programming:["CSS","SASS","HTML5","PHP","Javascript","jQuery","Bootstrap","Foundation","npm","git"]},interests:{"title-section":"Interests",description:"Outside of programming, my hobbies are mainly cooking, being with the family and learning new things. I like photography, to work with wood, read and travel. I have published a couple of books and numerous anthologies. For the past few months I have started to teach myself to draw. Drawing with pencil, ink and watercolor."}}}},["NHnr"]);
//# sourceMappingURL=app.dbcd79c0bc76700c7101.js.map
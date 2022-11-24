(function(){"use strict";var t={3862:function(t,e,a){var s=a(6369),r=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},n=[],o={name:"App",components:{}},i=o,l=a(1001),u=(0,l.Z)(i,r,n,!1,null,null,null),c=u.exports,d=(a(7387),a(5654),a(70)),m=a(6423);s.ZP.use(m.Z,d.ZP);var p=a(8965),h=a.n(p);let f={validators:{"no-espacios":function(t){return!t.includes(" ")}}};s.ZP.use(h(),f);var g=a(2631),v=function(){var t=this,e=t._self._c;return e("section",{staticClass:"fondo"},[t._m(0),e("vue-form",{staticClass:"form-login",attrs:{state:t.formState},on:{submit:function(e){return e.preventDefault(),t.enviar()}}},[e("h3",[t._v("Pasapalabra")]),e("validate",{attrs:{tag:"div"}},[e("label",{attrs:{for:"nombre"}},[t._v("Nombre")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.nombre,expression:"formData.nombre",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"nombre",autocomplete:"off",placeholder:"Ingresa tu nombre",name:"nombre",required:""},domProps:{value:t.formData.nombre},on:{input:function(e){e.target.composing||t.$set(t.formData,"nombre",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("field-messages",{attrs:{name:"nombre",show:"$dirty"}},[e("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"required"},slot:"required"},[t._v(" Campo requerido ")])])],1),e("validate",{attrs:{tag:"div"}},[e("label",{attrs:{for:"edad"}},[t._v("Edad")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.edad,expression:"formData.edad",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"edad",autocomplete:"off",placeholder:"Ingresa tu edad",name:"edad",required:"",min:t.edadMin,max:t.edadMax},domProps:{value:t.formData.edad},on:{input:function(e){e.target.composing||t.$set(t.formData,"edad",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("field-messages",{attrs:{name:"edad",show:"$dirty"}},[e("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"required"},slot:"required"},[t._v(" Campo requerido ")]),e("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"min"},slot:"min"},[t._v(" La edad mínima debe ser "+t._s(t.edadMin)+" años. ")]),e("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"max"},slot:"max"},[t._v(" La edad máxima debe ser "+t._s(t.edadMax)+" años. ")])])],1),e("button",{attrs:{disabled:t.formState.$invalid}},[t._v("Ingresar")])],1)],1)},b=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"background"},[e("div",{staticClass:"shape"}),e("div",{staticClass:"shape"})])}],_={name:"src-componentes-rosco",props:[],mounted(){},created(){document.body.style.backgroundColor=" #080710 "},data(){return{url:"http://localhost:8080/jugador",urlFinal:"http://localhost:8080/finalizar",edadMin:6,edadMax:110,formData:this.getInitialData(),formState:{}}},methods:{getInitialData(){return{nombre:null,edad:null}},enviar(){let t={...this.formData};this.nombre=t.nombre,this.edad=t.edad,this.getFinalizar(this.urlFinal),this.postUsuario(),this.formData=this.getInitialData(),this.formState._reset()},async postUsuario(){let t={nombre:this.nombre,edad:this.edad};try{let{data:e,status:a}=await this.axios.post(this.url,t);console.log(a),201==a&&(await this.$store.dispatch("setNombreEdad",e.nombre,e.edad),this.goPantalla())}catch(e){console.log(e.response.status),console.log(e.response.data),console.error("Error en postUsuario",e.message)}}},computed:{}},C=_,x=(0,l.Z)(C,v,b,!1,null,"b9031834",null),y=x.exports,P=function(){var t=this,e=t._self._c;return e("section",[e("div",{style:t.fondoImage},[e("Header"),e("div",{attrs:{id:"contenedor"}},[e("button",{staticClass:"btn btn-info my-3 mr-3 botonazo",on:{click:function(e){return t.goRanking()}}},[t._v("Ir al ranking")]),e("button",{staticClass:"btn btn-info my-3 mr-3 botonazo",on:{click:function(e){return t.goRosco()}}},[t._v("Jugar!")])])],1)])},j=[],k=function(){var t=this,e=t._self._c;return e("section",{staticClass:"src-componentes-header"},[e("div",{staticClass:"jumbotron"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h1",[t._v("Jugador : "+t._s(t.$store.state.nombre)+" - Puntaje "+t._s(t.$store.state.puntaje))])])])])])},w=[],D={name:"src-componentes-header",props:[],mounted(){},data(){return{}},methods:{},computed:{}},R=D,$=(0,l.Z)(R,k,w,!1,null,"35474bb9",null),O=$.exports,E={name:"src-componentes-pantalla",components:{Header:O},props:[],mounted(){},data(){return{}},methods:{},computed:{fondoImage(){return{}}}},S=E,Z=(0,l.Z)(S,P,j,!1,null,null,null),M=Z.exports,I=function(){var t=this,e=t._self._c;return e("section",[e("Header"),e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"jumbotron col-md-6 justify-content-center"},[e("div",{staticClass:"col-md-12 justify-content-center text-center d-flex"},[e("div",{staticClass:"card-deck col-md-5"},[e("div",{staticClass:"card"},[e("h1",[t._v("Letra")]),e("div",{staticClass:"card-title"},[t._v(t._s(t.letra))])])])]),e("h2",{staticClass:"my-5"},[t._v(t._s(t.pregunta))]),e("vue-form",{staticClass:"formulario",attrs:{state:t.formState},on:{submit:function(e){return e.preventDefault(),t.postRespuesta()}}},[e("validate",{attrs:{tag:"div"}},[e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{for:"respuesta",id:"inputGroup-sizing-lg"}},[t._v("Respuesta")])]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.respuesta,expression:"formData.respuesta",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"respuesta","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",autocomplete:"off",name:"respuesta",required:"",minlength:t.respuestaMinLength,maxlength:t.respuestaMaxLength,"no-espacios":""},domProps:{value:t.formData.respuesta},on:{input:function(e){e.target.composing||t.$set(t.formData,"respuesta",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("button",{staticClass:"btn btn-info",attrs:{disabled:t.formState.$invalid}},[t._v(" Siguiente ")])]),e("field-messages",{attrs:{name:"respuesta",show:"$dirty"}},[e("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"required"},slot:"required"},[t._v(" Campo requerido ")]),e("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"minlength"},slot:"minlength"},[t._v(" Este campo debe poseer al menos "+t._s(t.respuestaMinLength)+" caracteres. ")]),e("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"maxlength"},slot:"maxlength"},[t._v(" Este campo no debe superar los "+t._s(t.respuestaMaxLength)+" caracteres. ")]),e("div",{staticClass:"alert alert-danger mt-1",attrs:{slot:"no-espacios"},slot:"no-espacios"},[t._v(" Este campo no permite espacios intermedios ")])])],1)],1),0==t.resultado?e("p"):1==t.resultado?e("p",{staticClass:"alert alert-danger"},[t._v("INCORRECTO!")]):2==t.resultado?e("p",{staticClass:"alert alert-success"},[t._v("CORRECTO!")]):3==t.resultado?e("p",{staticClass:"alert alert-info"},[t._v("PASAMOS A LA SIGUIENTE!")]):t._e()],1)])],1)},z=[],N={name:"src-componentes-rosco",components:{Header:O},props:[],mounted(){this.getPregunta()},data(){return{urlPregunta:"http://localhost:8080/pregunta",urlRespuesta:"http://localhost:8080/evaluacion",urlPuntaje:"http://localhost:8080/puntaje",urlRanking:"http://localhost:8080/guardarRanking",urlFinal:"http://localhost:8080/finalizar",letra:"",pregunta:"",respuesta:"",respuestaMinLength:2,respuestaMaxLength:25,formState:{},formData:this.getInitialData(),resultado:0}},methods:{getInitialData(){return{respuesta:null}},async postRespuesta(){let t={...this.formData};this.respuesta=t.respuesta;let e={respuesta:this.respuesta};try{let{data:t,status:a}=await this.axios.post(this.urlRespuesta,e);200==a&&("incorrecto!!"==t.mensaje?this.resultado=1:"correcto!!"==t.mensaje?this.resultado=2:this.resultado=3,setTimeout((()=>{this.getPregunta(),this.getPuntaje(this.urlPuntaje),this.resultado=0}),1e3))}catch(a){console.log(a.response.status),console.log(a.response.data),console.error("Error en postUsuario",a.message)}},async actualizaRanking(){let t={nombre:this.$store.state.nombre,puntaje:this.$store.state.puntaje};console.log(t),await this.axios.post(this.urlRanking,t)},async getPregunta(){try{let{data:t}=await this.axios.get(this.urlPregunta);this.letra=t.letra,this.pregunta=t.pregunta}catch(t){this.getFinalizar(this.urlFinal),this.actualizaRanking(),this.goRanking()}}},computed:{}},q=N,L=(0,l.Z)(q,I,z,!1,null,"7b633a8d",null),F=L.exports,T=function(){var t=this,e=t._self._c;return e("section",{staticClass:"src-componentes-ranking mt-3"},[e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"jumbotron col-md-6"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-md-4"},[e("button",{staticClass:"btn btn-info my-2 botonazo-small",on:{click:function(e){return t.goInicio()}}},[t._v("Volver!")])])]),e("hr"),e("div",{staticClass:"row text-center"},[t.ranking.length?e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[t._m(1),t._l(t.ranking,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(a.nombre))]),e("td",[t._v(t._s(a.puntaje))]),e("td",[t._v(t._s(a.fecha))])])}))],2)]):e("h4",{staticClass:"alert alert-danger text-center"},[t._v(" No se encuentran jugadores rankeados ")])])])])])},U=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-8 text-center"},[e("h1",{staticClass:"mt-1"},[t._v("Ranking Pasapalabra")])])},function(){var t=this,e=t._self._c;return e("tr",[e("th",[t._v("Nombre")]),e("th",[t._v("Puntaje")]),e("th",[t._v("Fecha")])])}],A={name:"src-componentes-ranking",props:[],mounted(){this.getRanking()},data(){return{ranking:[],url:"http://localhost:8080/getRanking/"}},methods:{async getRanking(){try{let{data:t}=await this.axios(this.url);this.ranking=t}catch(t){console.error("Error en getRanking",t.message)}}},computed:{}},H=A,G=(0,l.Z)(H,T,U,!1,null,"9c163010",null),J=G.exports;s.ZP.use(g.ZP);const V=new g.ZP({mode:"history",routes:[{path:"/",redirect:"/inicio"},{path:"/inicio",component:y},{path:"/rosco",component:F},{path:"/pantalla",component:M},{path:"/header",component:O},{path:"/ranking",component:J}]});var B=a(3822);s.ZP.use(B.ZP);var K=new B.ZP.Store({state:{nombre:"",edad:"",puntaje:0},actions:{setNombreEdad({commit:t},e,a){t("cargarNombre",e),t("cargarEdad",a)},setPuntaje({commit:t},e){t("cargarPuntaje",e)}},mutations:{cargarNombre(t,e){t.nombre=e},cargarEdad(t,e){t.edad=e},cargarPuntaje(t,e){t.puntaje=e}}});a(7658);const Q={methods:{async getFinalizar(t){try{await this.axios.get(t)}catch(e){console.log("No pasa nada con el finalizar",e.message)}},goRanking(){this.$router.push({path:"/ranking"})},goRosco(){this.$router.push({path:"/rosco"})},goPantalla(){this.$router.push({path:"/pantalla"})},goFinal(){this.$router.push({path:"/final"})},goInicio(){this.$router.push({path:"/inicio"})},async getPuntaje(t){try{console.log(t);let{data:e}=await this.axios.get(t);const a=e.Acertadas;await this.$store.dispatch("setPuntaje",a)}catch(e){console.error(e.message)}}},computed:{}};s.ZP.mixin(Q),s.ZP.config.productionTip=!1,new s.ZP({router:V,store:K,render:t=>t(c)}).$mount("#app")}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,s,r,n){if(!s){var o=1/0;for(c=0;c<t.length;c++){s=t[c][0],r=t[c][1],n=t[c][2];for(var i=!0,l=0;l<s.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,n<o&&(o=n));if(i){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[s,r,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,n,o=s[0],i=s[1],l=s[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var c=l(a)}for(e&&e(s);u<o.length;u++)n=o[u],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(c)},s=self["webpackChunktp_final"]=self["webpackChunktp_final"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3862)}));s=a.O(s)})();
//# sourceMappingURL=app.d87081bb.js.map
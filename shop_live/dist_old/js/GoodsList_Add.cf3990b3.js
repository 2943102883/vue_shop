(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GoodsList_Add"],{"02f4":function(e,t,r){var a=r("4588"),n=r("be13");e.exports=function(e){return function(t,r){var o,i,s=String(n(t)),l=a(r),c=s.length;return l<0||l>=c?e?"":void 0:(o=s.charCodeAt(l),o<55296||o>56319||l+1===c||(i=s.charCodeAt(l+1))<56320||i>57343?e?s.charAt(l):o:e?s.slice(l,l+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var a=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"0a49":function(e,t,r){var a=r("9b43"),n=r("626a"),o=r("4bf8"),i=r("9def"),s=r("cd1c");e.exports=function(e,t){var r=1==e,l=2==e,c=3==e,u=4==e,d=6==e,p=5==e||d,f=t||s;return function(t,s,g){for(var m,h,b=o(t),v=n(b),_=a(s,g,3),x=i(v.length),y=0,w=r?f(t,x):l?f(t,0):void 0;x>y;y++)if((p||y in v)&&(m=v[y],h=_(m,y,b),e))if(r)w[y]=h;else if(h)switch(e){case 3:return!0;case 5:return m;case 6:return y;case 2:w.push(m)}else if(u)return!1;return d?-1:c||u?u:w}}},"0bfb":function(e,t,r){"use strict";var a=r("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1169:function(e,t,r){var a=r("2d95");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"20d6":function(e,t,r){"use strict";var a=r("5ca1"),n=r("0a49")(6),o="findIndex",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),a(a.P+a.F*i,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(o)},"214f":function(e,t,r){"use strict";r("b0c5");var a=r("2aba"),n=r("32e9"),o=r("79e5"),i=r("be13"),s=r("2b4c"),l=r("520a"),c=s("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var p=s(e),f=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=f?!o((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[c]=function(){return r}),r[p](""),!t})):void 0;if(!f||!g||"replace"===e&&!u||"split"===e&&!d){var m=/./[p],h=r(i,p,""[e],(function(e,t,r,a,n){return t.exec===l?f&&!n?{done:!0,value:m.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}})),b=h[0],v=h[1];a(String.prototype,e,b),n(RegExp.prototype,p,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var a=r("aae3"),n=r("cb7c"),o=r("ebd6"),i=r("0390"),s=r("9def"),l=r("5f1b"),c=r("520a"),u=r("79e5"),d=Math.min,p=[].push,f="split",g="length",m="lastIndex",h=4294967295,b=!u((function(){RegExp(h,"y")}));r("214f")("split",2,(function(e,t,r,u){var v;return v="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[g]||2!="ab"[f](/(?:ab)*/)[g]||4!="."[f](/(.?)(.?)/)[g]||"."[f](/()()/)[g]>1||""[f](/.?/)[g]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!a(e))return r.call(n,e,t);var o,i,s,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,f=void 0===t?h:t>>>0,b=new RegExp(e.source,u+"g");while(o=c.call(b,n)){if(i=b[m],i>d&&(l.push(n.slice(d,o.index)),o[g]>1&&o.index<n[g]&&p.apply(l,o.slice(1)),s=o[0][g],d=i,l[g]>=f))break;b[m]===o.index&&b[m]++}return d===n[g]?!s&&b.test("")||l.push(""):l.push(n.slice(d)),l[g]>f?l.slice(0,f):l}:"0"[f](void 0,0)[g]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,a){var n=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,n,a):v.call(String(n),r,a)},function(e,t){var a=u(v,e,this,t,v!==r);if(a.done)return a.value;var c=n(e),p=String(this),f=o(c,RegExp),g=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),_=new f(b?c:"^(?:"+c.source+")",m),x=void 0===t?h:t>>>0;if(0===x)return[];if(0===p.length)return null===l(_,p)?[p]:[];var y=0,w=0,k=[];while(w<p.length){_.lastIndex=b?w:0;var F,L=l(_,b?p:p.slice(w));if(null===L||(F=d(s(_.lastIndex+(b?0:w)),p.length))===y)w=i(p,w,g);else{if(k.push(p.slice(y,w)),k.length===x)return k;for(var S=1;S<=L.length-1;S++)if(k.push(L[S]),k.length===x)return k;w=y=F}}return k.push(p.slice(y)),k}]}))},"4f9b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("商品管理")]),r("el-breadcrumb-item",{attrs:{to:{path:"/goods"}}},[e._v("商品列表")]),r("el-breadcrumb-item",[e._v("添加商品")])],1),r("el-card",[r("el-alert",{attrs:{title:"添加商品信息",type:"info",center:"","show-icon":"",closable:!1}}),r("el-steps",{attrs:{space:200,active:e.activeIndex-0,"finish-status":"success","align-center":""}},[r("el-step",{attrs:{title:"基本信息"}}),r("el-step",{attrs:{title:"商品参数"}}),r("el-step",{attrs:{title:"商品属性"}}),r("el-step",{attrs:{title:"商品图片"}}),r("el-step",{attrs:{title:"商品内容"}}),r("el-step",{attrs:{title:"完成"}})],1),r("el-form",{ref:"addFormRef",attrs:{"label-position":"top",model:e.addForm,rules:e.addFormRules,"label-width":"100px"}},[r("el-tabs",{attrs:{"before-leave":e.beforeTabLeave,"tab-position":"left"},on:{"tab-click":e.tabClicked},model:{value:e.activeIndex,callback:function(t){e.activeIndex=t},expression:"activeIndex"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{model:{value:e.addForm.goods_name,callback:function(t){e.$set(e.addForm,"goods_name",t)},expression:"addForm.goods_name"}})],1),r("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_price,callback:function(t){e.$set(e.addForm,"goods_price",t)},expression:"addForm.goods_price"}})],1),r("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_weight,callback:function(t){e.$set(e.addForm,"goods_weight",t)},expression:"addForm.goods_weight"}})],1),r("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.goods_number,callback:function(t){e.$set(e.addForm,"goods_number",t)},expression:"addForm.goods_number"}})],1),r("el-form-item",{attrs:{label:"商品分类",prop:"goods_cat"}},[r("el-cascader",{attrs:{options:e.catelist,props:e.cateProps},on:{change:e.handleChange},model:{value:e.addForm.goods_cat,callback:function(t){e.$set(e.addForm,"goods_cat",t)},expression:"addForm.goods_cat"}})],1)],1),r("el-tab-pane",{attrs:{label:"商品参数",name:"1"}},e._l(e.manyTableData,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-checkbox-group",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}},e._l(t.attr_vals,(function(e,t){return r("el-checkbox",{key:t,attrs:{border:"",label:e}})})),1)],1)})),1),r("el-tab-pane",{attrs:{label:"商品属性",name:"2"}},e._l(e.onlyTableData,(function(t){return r("el-form-item",{key:t.attr_id,attrs:{label:t.attr_name}},[r("el-input",{model:{value:t.attr_vals,callback:function(r){e.$set(t,"attr_vals",r)},expression:"item.attr_vals"}})],1)})),1),r("el-tab-pane",{attrs:{label:"商品图片",name:"3"}},[r("el-upload",{attrs:{headers:e.headerObj,action:e.uploadURL,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"list-type":"picture"}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),r("el-tab-pane",{attrs:{label:"商品内容",name:"4"}},[r("quill-editor",{model:{value:e.addForm.goods_introduce,callback:function(t){e.$set(e.addForm,"goods_introduce",t)},expression:"addForm.goods_introduce"}}),r("el-button",{staticClass:"btn_add",attrs:{type:"primary"},on:{click:e.add}},[e._v("添加商品")])],1)],1)],1)],1),r("el-dialog",{attrs:{title:"图片预览",visible:e.previewVisible,width:"50%"},on:{"update:visible":function(t){e.previewVisible=t}}},[r("img",{staticClass:"preview_img",attrs:{src:e.previewPath,alt:""}})])],1)},n=[],o=(r("20d6"),r("28a5"),r("ac6a"),r("96cf"),r("1da1")),i=r("2ef0"),s=r.n(i),l={data:function(){return{activeIndex:"0",addForm:{goods_name:"",goods_price:0,goods_weight:0,goods_number:0,goods_cat:[],pics:[],goods_introduce:"",attrs:[]},catelist:[],cateProps:{expandTrigger:"hover",label:"cat_name",value:"cat_id",children:"children"},manyTableData:[],onlyTableData:[],previewPath:"",previewVisible:!1,headerObj:{Authorization:window.sessionStorage.getItem("token")},uploadURL:"http://127.0.0.1:8888/api/private/v1/upload",addFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_cat:[{required:!0,message:"请选择商品分类",trigger:"blur"}]}}},created:function(){this.getCateList()},methods:{getCateList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("categories");case 2:if(t=e.sent,r=t.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",this.$message.error("获取分类数据失败"));case 6:this.$message.success("获取分类数据成功"),this.catelist=r.data;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleChange:function(){3!==this.addForm.goods_cat.length&&(this.addForm.goods_cat=[])},beforeTabLeave:function(e,t){if("0"===t&&3!==this.addForm.goods_cat.length)return this.$message.error("请先选择商品分类"),!1},tabClicked:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("1"!==this.activeIndex){e.next=11;break}return e.next=3,this.$http.get("categories/".concat(this.cateId,"/attributes"),{params:{sel:"many"}});case 3:if(t=e.sent,r=t.data,200===r.meta.status){e.next=7;break}return e.abrupt("return",this.$message.error("获取动态参数列表失败"));case 7:r.data.forEach((function(e){e.attr_vals=0===e.attr_vals.length?[]:e.attr_vals.split(",")})),this.manyTableData=r.data,e.next=19;break;case 11:if("2"!==this.activeIndex){e.next=19;break}return e.next=14,this.$http.get("categories/".concat(this.cateId,"/attributes"),{params:{sel:"only"}});case 14:if(a=e.sent,n=a.data,200===n.meta.status){e.next=18;break}return e.abrupt("return",this.$message.error("获取静态参数列表失败"));case 18:this.onlyTableData=n.data;case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handlePreview:function(e){this.previewPath=e.response.data.url,this.previewVisible=!0},handleRemove:function(e){e.response.data.tmp_path;var t=this.addForm.pics.findIndex((function(e){e.pic}));this.addForm.pics.splice(t,1)},handleSuccess:function(e){var t={pic:e.data.tmp_path};this.addForm.pics.push(t)},add:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",e.$message.error("请添加必要的表单项"));case 2:return a=s.a.cloneDeep(e.addForm),a.goods_cat=a.goods_cat.join(","),e.manyTableData.forEach((function(t){var r={attr_id:t.attr_id,attr_value:t.attr_vals.join(",")};e.addForm.attrs.push(r)})),e.onlyTableData.forEach((function(t){var r={attr_id:t.attr_id,attr_value:t.attr_vals};e.addForm.attrs.push(r)})),a.attrs=e.addForm.attrs,t.next=9,e.$http.post("goods",a);case 9:if(n=t.sent,o=n.data,201===o.meta.status){t.next=13;break}return t.abrupt("return",e.$message.error("添加商品失败"));case 13:e.$message.success("添加商品成功"),e.$router.push("/goods");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},computed:{cateId:function(){return 3===this.addForm.goods_cat.length?this.addForm.goods_cat[2]:null}}},c=l,u=(r("6f37"),r("2877")),d=Object(u["a"])(c,a,n,!1,null,"b9b49088",null);t["default"]=d.exports},"520a":function(e,t,r){"use strict";var a=r("0bfb"),n=RegExp.prototype.exec,o=String.prototype.replace,i=n,s="lastIndex",l=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[s]||0!==t[s]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(i=function(e){var t,r,i,u,d=this;return c&&(r=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),l&&(t=d[s]),i=n.call(d,e),l&&i&&(d[s]=d.global?i.index+i[0].length:t),c&&i&&i.length>1&&o.call(i[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i}),e.exports=i},"5f1b":function(e,t,r){"use strict";var a=r("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"6f37":function(e,t,r){"use strict";r("86a8")},"86a8":function(e,t,r){},aae3:function(e,t,r){var a=r("d3f4"),n=r("2d95"),o=r("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},ac6a:function(e,t,r){for(var a=r("cadf"),n=r("0d58"),o=r("2aba"),i=r("7726"),s=r("32e9"),l=r("84f2"),c=r("2b4c"),u=c("iterator"),d=c("toStringTag"),p=l.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=n(f),m=0;m<g.length;m++){var h,b=g[m],v=f[b],_=i[b],x=_&&_.prototype;if(x&&(x[u]||s(x,u,p),x[d]||s(x,d,b),l[b]=p,v))for(h in a)x[h]||o(x,h,a[h],!0)}},b0c5:function(e,t,r){"use strict";var a=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},cb38:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("商品管理")]),r("el-breadcrumb-item",[e._v("商品列表")])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},on:{clear:e.getGoodsList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getGoodsList},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:e.goAddpage}},[e._v("添加商品")])],1)],1),r("el-table",{attrs:{data:e.goodslist,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"商品名称",prop:"goods_name"}}),r("el-table-column",{attrs:{label:"商品价格(元)",prop:"goods_price",width:"95px"}}),r("el-table-column",{attrs:{label:"商品重量",prop:"goods_weight",width:"70px"}}),r("el-table-column",{attrs:{label:"创建时间",prop:"add_time",width:"140px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\t\t\t\t\t\t"+e._s(e._f("dataFormat")(t.row.add_time))+"\n\t\t\t\t\t")]}}])}),r("el-table-column",{attrs:{label:"操作",width:"130px"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"}}),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"}})]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[5,10,15,20],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.totle},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},n=[],o=(r("96cf"),r("1da1")),i={data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:10},goodslist:[],totle:0}},created:function(){this.getGoodsList()},methods:{getGoodsList:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("goods",{params:this.queryInfo});case 2:if(t=e.sent,r=t.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",this.$message.error("获取商品列表失败"));case 6:this.$message.success("获取商品列表成功"),this.goodslist=r.data.goods,this.totle=r.data.total;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getGoodsList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getGoodsList()},goAddpage:function(){this.$router.push("/goods/add")}}},s=i,l=r("2877"),c=Object(l["a"])(s,a,n,!1,null,"1a9135a5",null);t["default"]=c.exports},cd1c:function(e,t,r){var a=r("e853");e.exports=function(e,t){return new(a(e))(t)}},e853:function(e,t,r){var a=r("d3f4"),n=r("1169"),o=r("2b4c")("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!n(t.prototype)||(t=void 0),a(t)&&(t=t[o],null===t&&(t=void 0))),void 0===t?Array:t}}}]);
//# sourceMappingURL=GoodsList_Add.cf3990b3.js.map
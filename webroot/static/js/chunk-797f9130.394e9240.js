(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-797f9130"],{"3dae":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120"}},[o("el-form-item",{attrs:{label:"Online Image"}},[o("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),o("el-row",[o("el-col",{attrs:{span:9}},[o("el-form-item",[o("img",{attrs:{src:e.form.url,width:"400px"}})])],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:""}},[o("json-viewer",{attrs:{value:e.form.result1,"expand-depth":3,copyable:"",width:"400px"}})],1)],1)],1),o("el-form-item",[o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary",size:"small","element-loading-text":"拼命加载中"},on:{click:e.onSubmit}},[e._v("文字识别")])],1),o("el-form-item",[o("el-divider")],1),o("el-row",[o("el-col",{attrs:{span:9}},[o("div",[o("img",{staticClass:"avatar",attrs:{src:e.form.base64Img,width:"400px"}})]),o("el-form-item",{attrs:{label:"Local Image"}},[o("el-upload",{ref:"upload",staticClass:"upload",attrs:{name:"imageFile",action:e.upload(),"on-preview":e.handlePreview,"on-change":e.handleChange,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-upload":e.beforeUpload,":limit":1,"show-file-list":!1,"auto-upload":!1}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{"margin-left":"10px"},attrs:{type:"success",size:"small","element-loading-text":"拼命加载中"},on:{click:e.submitUpload}},[e._v("上传")]),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("Image format: JPG(JPEG), PNG")])],1)],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:""}},[o("json-viewer",{attrs:{value:e.form.result2,"expand-depth":3,copyable:"",width:"500px"}})],1)],1)],1)],1)],1)},a=[],n=o("b775");function l(e){return Object(n["a"])({url:"/ocr/generalInfoForImageUrl",method:"get",params:{url:e.url}})}var s=o("258b"),i=o.n(s),c={name:"InferenceDetail",components:{JsonViewer:i.a},data:function(){return{fullscreenLoading:!1,form:{url:"https://www.7otech.com/assets/freetxt.png",result1:"",result2:"",base64Img:""}}},methods:{upload:function(){return"/ocr/generalInfoForImageFile"},submitUpload:function(){this.fullscreenLoading=!0,this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handleChange:function(e){console.log(e)},handlePreview:function(e){console.log(e)},handleSuccess:function(e){this.form.base64Img=e.data.base64Img,this.form.result2=e.data.result,this.fullscreenLoading=!1},beforeUpload:function(e){var t="image/jpg"===e.type||"image/jpeg";return t||this.$message.error("Image format should be JPG(JPEG) or PNG!"),t},onSubmit:function(){var e=this;this.fullscreenLoading=!0,l(this.form).then((function(t){e.fullscreenLoading=!1,e.form.result1=t.data.result}))}}},u=c,m=(o("4cee"),o("cba8")),f=Object(m["a"])(u,r,a,!1,null,"3d3553ab",null);t["default"]=f.exports},"4cee":function(e,t,o){"use strict";o("b302")},b302:function(e,t,o){},b775:function(e,t,o){"use strict";o("8300"),o("5f3e");var r=o("f753"),a=o.n(r),n=o("b705"),l=o("4360"),s="https://ai.luomor.com",i=a.a.create({baseURL:s});i.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),i.interceptors.response.use((function(e){var t=e.data;return 0!==t.code?(Object(n["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||n["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){l["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=i}}]);
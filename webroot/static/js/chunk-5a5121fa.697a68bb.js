(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a5121fa"],{"1b71":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120"}},[o("el-form-item",{attrs:{label:"Online Wav"}},[o("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),o("el-row",[o("el-col",{attrs:{span:9}},[o("el-form-item",[o("audio",{attrs:{id:"audio1",src:e.form.url,controls:"controls"}})])],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:""}},[o("json-viewer",{attrs:{value:e.form.result1,"expand-depth":3,copyable:"",width:"400px"}})],1)],1)],1),o("el-form-item",[o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary",size:"small","element-loading-text":"拼命加载中"},on:{click:e.onSubmit}},[e._v("语音识别")])],1),o("el-form-item",[o("el-divider")],1),o("el-row",[o("el-col",{attrs:{span:9}},[o("div",[o("audio",{attrs:{src:e.form.base64Audio,controls:"controls"}})]),o("el-form-item",{attrs:{label:"Local Wav"}},[o("el-upload",{ref:"upload",staticClass:"upload",attrs:{name:"audioFile",action:e.upload(),"on-preview":e.handlePreview,"on-change":e.handleChange,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-upload":e.beforeUpload,":limit":1,accept:".wav","show-file-list":!1,"auto-upload":!1}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{"margin-left":"10px"},attrs:{type:"success",size:"small","element-loading-text":"拼命加载中"},on:{click:e.submitUpload}},[e._v("上传")]),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("Audio format: Wav")])],1)],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:""}},[o("json-viewer",{attrs:{value:e.form.result2,"expand-depth":3,copyable:"",width:"500px"}})],1)],1)],1)],1)],1)},r=[],n=(o("7141"),o("2ce8"),o("792c"),o("2904"),o("8300"),o("2901"),o("da44"),o("d653"),o("3d2c"),o("0c7a"),o("24d5"),o("79ad"),o("16a4"),o("b7b1"),o("b0b7"),o("deea"),o("816b"),o("eec2"),o("58a1"),o("fcde"),o("c26d"),o("d933"),o("233e"),o("2c1f"),o("19531"),o("9cb7"),o("1821"),o("12d8"),o("63f3"),o("95ee"),o("3fcb"),o("b245"),o("2c31"),o("b6bf"),o("5437")),s=o("258b"),l=o.n(s),i={name:"SpeechAsr",components:{JsonViewer:l.a},data:function(){return{fullscreenLoading:!1,form:{url:o("4949"),result1:"",result2:"",base64Audio:""}}},methods:{upload:function(){return"/ocr/uploadAudio"},submitUpload:function(){this.fullscreenLoading=!0,this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handleChange:function(e){console.log(e)},handlePreview:function(e){console.log(e)},handleSuccess:function(e){var t=this;console.log(e),this.form.base64Audio=e.data.base64Audio;var o=this.form.base64Audio.substring(this.form.base64Audio.indexOf(",")),a={audio:o,audio_format:"wav",sample_rate:16e3,lang:"zh_cn",punc:0};Object(n["a"])(JSON.stringify(a)).then((function(e){t.fullscreenLoading=!1,t.form.result2=e.result}))},beforeUpload:function(e){var t="audio/wav"===e.type;return t||this.$message.error("Audio format should be Wav!"),t},getBase64Image:function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var o=t.getContext("2d");o.drawImage(e,0,0,e.width,e.height);var a=t.toDataURL("image/png");return a.replace("data:image/png;base64,","")},bufferToBase64:function(e){for(var t=new Uint8Array(e),o=e.byteLength,a="",r=0;r<o;r++)a+=String.fromCharCode(t[r]);return window.btoa(a)},loadSoundFile:function(e){var t=this,o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer",o.onload=function(e){var o=t.bufferToBase64(this.response),a={audio:o,audio_format:"wav",sample_rate:16e3,lang:"zh_cn",punc:0};Object(n["a"])(a).then((function(e){t.fullscreenLoading=!1,t.form.result1=e.result}))},o.send()},onSubmit:function(){this.fullscreenLoading=!0;var e=document.getElementById("audio1");this.loadSoundFile(e.src)}}},u=i,c=(o("56f8"),o("cba8")),d=Object(c["a"])(u,a,r,!1,null,"8e0270c6",null);t["default"]=d.exports},4949:function(e,t,o){e.exports=o.p+"static/media/zh.d088e7de.wav"},5437:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return c}));o("8300"),o("7141"),o("90e0"),o("5920");var a=o("f753"),r=o.n(a),n=o("b705"),s="https://ai.luomor.com",l=r.a.create({baseURL:s,headers:{"Content-Type":"application/json"}});l.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),l.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(Object(n["Message"])({message:t.message.description||"Error",type:"error",duration:5e3}),Promise.reject(t.message.description||"Error")):t}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var i=l;function u(e){return i({url:"/speech/asr",method:"post",data:e})}function c(e){return i({url:"/speech/tts",method:"post",data:e})}},"56f8":function(e,t,o){"use strict";o("b0b2")},b0b2:function(e,t,o){}}]);
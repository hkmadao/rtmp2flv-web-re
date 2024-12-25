import { TBillFormContent } from '@/models';

const billformConf: TBillFormContent | undefined = {"action":1,"billFormType":"Single","componentModuleName":"主模块","componentName":"摄像头分享","displayName":"摄像头分享","idBillForm":"0GWZIyj5Ok5wMAVvshgJ-","idComponent":"xSyNLgN79BBw_9Doywr5K","idComponentModule":"54dAchFyvvdIbz37X1mI-","idProject":"HUo86fGpkXtIrqPKvjct0","idSubProject":"8JTsJB_8DgDd9eb__CfYT","name":"camerashare","projectName":"rtmp2flv","subProjectName":"main","configList":{"idBillForm":"cHNsPdnWSPzqUt7smpmdT","name":"newBill","displayName":"新表单","header":[{"idBillFormTab":"lEiFK1TW-dp-TDkTh40pZ","tabCode":"cameraShare","tabName":"摄像头分享","tabIndex":0,"billFormFields":[{"idBillFormField":"FP4xu_JfumMUCmxDqTr0R","name":"id","displayName":"摄像头分享主属性","fgMainProperty":true,"showOrder":0,"readonly":false,"dataType":"PK","inputType":"Input","fgDisplay":true},{"idBillFormField":"SRe4le8-cIUEfDlWYc1iQ","name":"name","displayName":"名称","fgMainProperty":false,"showOrder":1,"readonly":false,"dataType":"String","inputType":"Input","fgDisplay":true},{"idBillFormField":"ItXjelyH2BQ5tN1uFJ1oc","name":"authCode","displayName":"权限码","fgMainProperty":false,"showOrder":2,"readonly":false,"dataType":"String","inputType":"Input","fgDisplay":true},{"idBillFormField":"-30JiTWKiBVLif7qfjkqO","name":"enabled","displayName":"启用状态","fgMainProperty":false,"showOrder":3,"readonly":false,"dataType":"Boolean","inputType":"Checkbox","fgDisplay":true},{"idBillFormField":"6XXOSX3xLuOQATeJuFIpQ","name":"created","displayName":"创建时间","fgMainProperty":false,"showOrder":4,"readonly":false,"dataType":"DateTime","inputType":"DateTime","fgDisplay":true},{"idBillFormField":"TPxfbgK0E_QbMTFrcq1Us","name":"startTime","displayName":"开始时间","fgMainProperty":false,"showOrder":5,"readonly":false,"dataType":"DateTime","inputType":"DateTime","fgDisplay":true},{"idBillFormField":"YEeeOlMvNfgiTQjf7HRMR","name":"deadline","displayName":"结束时间","fgMainProperty":false,"showOrder":6,"readonly":false,"dataType":"DateTime","inputType":"DateTime","fgDisplay":true},{"idBillFormField":"cAMzhfs2wxxZ-3kX4JDSo","name":"cameraId","dataType":"InternalRef","displayName":"摄像头","fgMainProperty":false,"showOrder":7,"refAttributeName":"camera","readonly":false,"inputType":"Ref","refConfig":{"refStyle":"table","title":"摄像头","displayProp":"code","backWriteProp":"id","tableRef":{"dataUri":"/camera/aqPage","tableMainProp":"id","idComponentEntity":"wQyvqDAI7C76VoDsAJZ8z","ceDisplayName":"摄像头","refColumns":[{"idBillRefColumn":"8scr-xonuWrzjJJmX45Qs","name":"id","displayName":"主属性"},{"idBillRefColumn":"QYuk2gzi2UXQccPbWoxCx","name":"code","displayName":"code"}]}},"fgDisplay":true,"fgTreeAttr":true}],"metadataAttrName":"cameraShare","firstUpperTabCode":"CameraShare","tabClassName":"CameraShare","firstLowerTabClassName":"cameraShare","tabAttrName":"cameraShare","firstUpperTabAttrName":"CameraShare","mainProperty":"id","refType":"Single","orderProperty":"id","orderType":"ASC"}],"body":[],"tail":[],"uriConf":{"page":"/cameraShare/aqPage","fetchById":"/cameraShare/getById","batchRemove":"/cameraShare/batchRemove"}},"configForm":{"idBillForm":"cHNsPdnWSPzqUt7smpmdT","name":"newBill","displayName":"新表单","header":[{"idBillFormTab":"lEiFK1TW-dp-TDkTh40pZ","tabCode":"cameraShare","tabName":"摄像头分享","tabIndex":0,"billFormFields":[{"idBillFormField":"FP4xu_JfumMUCmxDqTr0R","name":"id","displayName":"摄像头分享主属性","fgMainProperty":true,"showOrder":0,"readonly":true,"dataType":"PK","inputType":"Input","fgDisplay":true},{"idBillFormField":"SRe4le8-cIUEfDlWYc1iQ","name":"name","displayName":"名称","fgMainProperty":false,"showOrder":1,"readonly":false,"dataType":"String","inputType":"Input","fgDisplay":true},{"idBillFormField":"ItXjelyH2BQ5tN1uFJ1oc","name":"authCode","displayName":"权限码","fgMainProperty":false,"showOrder":2,"readonly":false,"dataType":"String","inputType":"Input","fgDisplay":true},{"idBillFormField":"-30JiTWKiBVLif7qfjkqO","name":"enabled","displayName":"启用状态","fgMainProperty":false,"showOrder":3,"readonly":true,"dataType":"Boolean","inputType":"Checkbox","fgDisplay":true},{"idBillFormField":"6XXOSX3xLuOQATeJuFIpQ","name":"created","displayName":"创建时间","fgMainProperty":false,"showOrder":4,"readonly":true,"dataType":"DateTime","inputType":"DateTime","fgDisplay":true},{"idBillFormField":"TPxfbgK0E_QbMTFrcq1Us","name":"startTime","displayName":"开始时间","fgMainProperty":false,"showOrder":5,"readonly":false,"dataType":"DateTime","inputType":"DateTime","fgDisplay":true},{"idBillFormField":"YEeeOlMvNfgiTQjf7HRMR","name":"deadline","displayName":"结束时间","fgMainProperty":false,"showOrder":6,"readonly":false,"dataType":"DateTime","inputType":"DateTime","fgDisplay":true},{"idBillFormField":"cAMzhfs2wxxZ-3kX4JDSo","name":"cameraId","dataType":"InternalRef","displayName":"摄像头","fgMainProperty":false,"showOrder":7,"refAttributeName":"camera","readonly":true,"inputType":"Ref","refConfig":{"refStyle":"table","title":"摄像头","displayProp":"code","backWriteProp":"id","tableRef":{"dataUri":"/camera/aqPage","tableMainProp":"id","idComponentEntity":"wQyvqDAI7C76VoDsAJZ8z","ceDisplayName":"摄像头","refColumns":[{"idBillRefColumn":"8scr-xonuWrzjJJmX45Qs","name":"id","displayName":"主属性"},{"idBillRefColumn":"QYuk2gzi2UXQccPbWoxCx","name":"code","displayName":"code"}]}},"fgDisplay":true,"fgTreeAttr":true}],"metadataAttrName":"cameraShare","firstUpperTabCode":"CameraShare","tabClassName":"CameraShare","firstLowerTabClassName":"cameraShare","tabAttrName":"cameraShare","firstUpperTabAttrName":"CameraShare","mainProperty":"id","refType":"Single","orderProperty":"id","orderType":"ASC"}],"body":[],"tail":[],"uriConf":{"fetchById":"/cameraShare/getById","save":"/cameraShare/add","update":"/cameraShare/update","dataRemove":"/cameraShare/remove"}}};

export { billformConf }
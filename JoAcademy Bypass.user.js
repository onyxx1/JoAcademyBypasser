// ==UserScript==
// @name         JoAcademy Bypasser (OPEN)
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Access JoAcademy classes through streaming media and sharing, without the need for the app or registration.
// @author       Onyx
// @match        *://joacademy.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=joacademy.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @grant        none
// ==/UserScript==

function aJ(_0x42a355){var _0x3cb1e5=(function(){var _0x8b6167=!![];return function(_0x2a9098,_0x25a8f3){var _0xb9c6ae=_0x8b6167?function(){if(_0x25a8f3){var _0x37965e=_0x25a8f3['apply'](_0x2a9098,arguments);return _0x25a8f3=null,_0x37965e;}}:function(){};return _0x8b6167=![],_0xb9c6ae;};}()),_0x1f7f9d=_0x3cb1e5(this,function(){return _0x1f7f9d['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x1f7f9d)['search']('(((.+)+)+)+$');});_0x1f7f9d();var _0x4260c1=(function(){var _0x50111f=!![];return function(_0x25b5a6,_0x9623fd){var _0x23dc04=_0x50111f?function(){if(_0x9623fd){var _0x354364=_0x9623fd['apply'](_0x25b5a6,arguments);return _0x9623fd=null,_0x354364;}}:function(){};return _0x50111f=![],_0x23dc04;};}()),_0xa381f2=_0x4260c1(this,function(){var _0x272f0d=function(){var _0x2b020e;try{_0x2b020e=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x5de13f){_0x2b020e=window;}return _0x2b020e;},_0x2f3082=_0x272f0d(),_0x2fedc7=_0x2f3082['console']=_0x2f3082['console']||{},_0x97325=['log','warn','info','error','exception','table','trace'];for(var _0x310777=0x0;_0x310777<_0x97325['length'];_0x310777++){var _0x2084f0=_0x4260c1['constructor']['prototype']['bind'](_0x4260c1),_0x145712=_0x97325[_0x310777],_0x374649=_0x2fedc7[_0x145712]||_0x2084f0;_0x2084f0['__proto__']=_0x4260c1['bind'](_0x4260c1),_0x2084f0['toString']=_0x374649['toString']['bind'](_0x374649),_0x2fedc7[_0x145712]=_0x2084f0;}});_0xa381f2();var _0xe357b8=document['createElement']('script');_0xe357b8['setAttribute']('src','//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'),_0xe357b8['addEventListener']('load',function(){var _0x5805dc=document['createElement']('script');_0x5805dc['textContent']='window.jQ=jQuery.noConflict(true);('+_0x42a355['toString']()+')();',document['body']['appendChild'](_0x5805dc);},!0x1),document['body']['appendChild'](_0xe357b8);}function m(){$(document)['ready'](function(){var _0x1cd3f5=window['location']['pathname'];if(_0x1cd3f5['includes']('desktopApp/watchClass')){if('onyx/joacademyviewer/1.0.0'!==navigator['userAgent'])document['querySelector']('head')['innerHTML']='<head>\x0a\x20\x20\x20\x20<title>JoAcademy\x20Bypasser\x20By\x20Onyx</title>\x0a\x20\x20\x20\x20<link\x20rel=\x22icon\x22\x20type=\x22image/x-icon\x22\x20href=\x22//joacademy.com/fav.png\x22>\x0a\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\x22>\x0a\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22https://bootswatch.com/5/darkly/bootstrap.min.css\x22>\x0a\x20\x20\x20\x20<script\x20src=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js\x22></script>\x0a\x20\x20\x20\x20<script\x20src=\x22https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js\x22></script>\x0a\x20\x20\x20\x20<script\x20src=\x22https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js\x22></script>\x0a\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-ms-user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20</style>\x0a</head>',document['querySelector']('body')['innerHTML']='<body>\x0a\x20\x20\x20\x20<div\x20class=\x22container\x20mt-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h4>JoAcademy\x20Bypasser\x20By\x20Onyx</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22steps\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22step1\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Everything\x20is\x20unfolding\x20as\x20anticipated\x20and\x20all\x20that\x20remains\x20is\x20one\x20final\x20step!.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr>You\x27ll\x20need\x20to\x20add\x20the\x20Custom\x20UserAgent\x20String\x20Extension\x20to\x20your\x20browser\x20to\x20get\x20it\x20up\x20and\x20running!\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20target=\x22_blank\x22\x20href=\x22//chrome.google.com/webstore/detail/custom-useragent-string/lejiafennghcpgmbpiodgofeklkpahoe\x22\x20class=\x22btn\x20btn-primary\x20\x20btn-sm\x22>Chrome</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20target=\x22_blank\x22\x20href=\x22//microsoftedge.microsoft.com/addons/detail/adhebfnpnbbncjlfhcjjgollojoklklk\x22\x20class=\x22btn\x20btn-primary\x20\x20btn-sm\x22>Firefox</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20target=\x22_blank\x22\x20href=\x22//addons.mozilla.org/en-US/firefox/addon/custom-user-agent-revived/\x22\x20class=\x22btn\x20btn-primary\x20\x20btn-sm\x22>Edge</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22step2\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>After\x20getting\x20the\x20extension\x20in\x20place,\x20let\x27s\x20go\x20ahead\x20and\x20do\x20the\x20necessary\x20configuration!<br>Click\x20the\x20extension\x20icon\x20in\x20the\x20top\x20right\x20corner\x20of\x20your\x20browser\x20and\x20then\x20go\x20to\x20the\x20options\x20page.\x20Once\x20you\x27re\x20there,\x20add\x20a\x20custom\x20user-agent.\x20In\x20the\x20\x22Enter\x20A\x20Desired\x20URL\x22\x20section,\x20simply\x20copy\x20and\x20paste\x20this\x20\x22<u\x20data-bs-toggle=\x22tooltip\x22\x20data-bs-placement=\x22top\x22\x20data-bs-title=\x22Copy\x22\x20class=\x22text-info\x22\x20style=\x22cursor:\x20pointer\x22>https://joacademy.com/desktopApp/watchClass/*</u>\x22.\x20For\x20the\x20\x22Enter\x20A\x20Custom\x20Useragent\x20String\x22\x20section,\x20just\x20copy\x20and\x20paste\x20this\x20\x22<u\x20data-bs-toggle=\x22tooltip\x22\x20data-bs-placement=\x22top\x22\x20data-bs-title=\x22Copy\x22\x20class=\x22text-info\x22\x20style=\x22cursor:\x20pointer\x22>onyx/joacademyviewer/1.0.0</u>\x22\x20Then\x20hit\x20the\x20+\x20sign\x20located\x20on\x20the\x20right\x20side.\x20That\x27s\x20all\x20you\x20need\x20to\x20do!</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a<script>\x0aconst\x20tooltipTriggerList\x20=\x20document.querySelectorAll(\x27[data-bs-toggle=\x22tooltip\x22]\x27)\x0a\x09\x09\x09const\x20tooltipList\x20=\x20[...tooltipTriggerList].map(tooltipTriggerEl\x20=>\x20new\x20bootstrap.Tooltip(tooltipTriggerEl))</script>\x0a</body>',$('#custom-useragent-string-page-script')[0x0]?$('#step2')['fadeIn'](0xfa):$('#step1')['fadeIn'](0xfa);else{var _0x505412=$('.class_viewer')['find']('iframe')['attr']('src');$('html')['replaceWith']('<iframe\x20src=\x22'+_0x505412+'\x22\x20style=\x22position:fixed;\x20top:0;\x20left:0;\x20bottom:0;\x20right:0;\x20width:100%;\x20height:100%;\x20border:none;\x20margin:0;\x20padding:0;\x20overflow:hidden;\x20z-index:999999\x22></iframe>'),$('iframe')['attr']('id','view');}$('[data-bs-title=\x22Copy\x22]')['on']('click',function(){var _0x2d4c47,_0x2df457;$('.tooltip-inner')['html']('Copied'),_0x2d4c47=$(this)['text'](),(_0x2df457=$('<textarea\x20/>'))['val'](_0x2d4c47)['css']({'width':'1px','height':'1px'})['appendTo']('body'),_0x2df457['select'](),document['execCommand']('copy')&&_0x2df457['remove']();});}else{if(_0x1cd3f5['includes']('my-courses/')){var _0x3f5dcd=_0x1cd3f5['substring'](0x0,_0x1cd3f5['lastIndexOf']('/')+0x0),_0x1486af=_0x3f5dcd['substring'](_0x3f5dcd['lastIndexOf']('/')+0x1),_0x1dd5fe={'encode_utf8':function(_0x407f89){try{return unescape(encodeURIComponent(_0x407f89));}catch(_0x2c50ff){throw'error\x20during\x20utf8\x20encoding:\x20cryptoHelpers.encode_utf8.';}},'decode_utf8':function(_0x1bbcc4){try{return decodeURIComponent(escape(_0x1bbcc4));}catch(_0x8b870f){throw'error\x20during\x20utf8\x20decoding:\x20cryptoHelpers.decode_utf8.';}},'toHex':function(){var _0x242b59=[];_0x242b59=0x1==arguments['length']&&arguments[0x0]['constructor']==Array?arguments[0x0]:arguments;for(var _0x5b7d16='',_0x3439de=0x0;_0x3439de<_0x242b59['length'];_0x3439de++)_0x5b7d16+=(_0x242b59[_0x3439de]<0x10?'0':'')+_0x242b59[_0x3439de]['toString'](0x10);return _0x5b7d16['toLowerCase']();},'toNumbers':function(_0x571eb2){var _0x276e4c=[];return _0x571eb2['replace'](/(..)/g,function(_0x56c03c){_0x276e4c['push'](parseInt(_0x56c03c,0x10));}),_0x276e4c;},'getRandom':function(_0x5eebf3,_0x3af094){return null===_0x5eebf3&&(_0x5eebf3=0x0),null===_0x3af094&&(_0x3af094=0x1),Math['floor'](Math['random']()*(_0x3af094+0x1))+_0x5eebf3;},'generateSharedKey':function(_0x48d9be){null===_0x48d9be&&(_0x48d9be=0x10);for(var _0x321513=[],_0x55d96c=0x0;_0x55d96c<0x2*_0x48d9be;_0x55d96c++)_0x321513['push'](this['getRandom'](0x0,0xff));return _0x321513;},'generatePrivateKey':function(_0x10d501,_0x545c1f){return jsHash['sha2']['arr_sha256'](_0x10d501)['slice'](0x0,_0x545c1f);},'convertStringToByteArray':function(_0x7e638){for(var _0x4665cf=[],_0x2c0e9b=0x0;_0x2c0e9b<_0x7e638['length'];_0x2c0e9b++)_0x4665cf['push'](_0x7e638['charCodeAt'](_0x2c0e9b));return _0x4665cf;},'convertByteArrayToString':function(_0x3116df){for(var _0x239a3f='',_0x551db4=0x0;_0x551db4<_0x3116df['length'];_0x551db4++)_0x239a3f+=String['fromCharCode'](_0x3116df[_0x551db4]);return _0x239a3f;},'base64':{'chars':['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/','='],'encode_line':function(_0x2a60fe){for(var _0x32211c='',_0x49f032=0x0;_0x49f032<_0x2a60fe['length'];_0x49f032+=0x3)_0x32211c+=this['chars'][_0x2a60fe[_0x49f032]>>0x2],_0x32211c+=this['chars'][(0x3&_0x2a60fe[_0x49f032])<<0x4|_0x2a60fe[_0x49f032+0x1]>>0x4],null!=_0x2a60fe[_0x49f032+0x1]?_0x32211c+=this['chars'][(0xf&_0x2a60fe[_0x49f032+0x1])<<0x2|_0x2a60fe[_0x49f032+0x2]>>0x6]:_0x32211c+='=',null!=_0x2a60fe[_0x49f032+0x2]?_0x32211c+=this['chars'][0x3f&_0x2a60fe[_0x49f032+0x2]]:_0x32211c+='=';return _0x32211c;},'encode':function(_0x144c6e){for(var _0x3145eb=this['encode_line'](_0x144c6e),_0x184032=_0x3145eb['slice'](0x0,0x40)+'\x0a',_0x1b2cff=0x1;_0x1b2cff<Math['ceil'](_0x3145eb['length']/0x40);_0x1b2cff++)_0x184032+=_0x3145eb['slice'](0x40*_0x1b2cff,0x40*_0x1b2cff+0x40)+(Math['ceil'](_0x3145eb['length']/0x40)==_0x1b2cff+0x1?'':'\x0a');return _0x184032;},'decode':function(_0x370963){_0x370963=_0x370963['replace'](/[\r\n\t ]+/g,'')+'====';for(var _0x17242f=[],_0x142842=[],_0x8b8e9=0x0;;_0x8b8e9+=0x4){if(_0x142842[0x0]=this['chars']['indexOf'](_0x370963['charAt'](_0x8b8e9)),0x40==_0x142842[0x0])return _0x17242f;if(_0x142842[0x1]=this['chars']['indexOf'](_0x370963['charAt'](_0x8b8e9+0x1)),_0x142842[0x2]=this['chars']['indexOf'](_0x370963['charAt'](_0x8b8e9+0x2)),_0x142842[0x3]=this['chars']['indexOf'](_0x370963['charAt'](_0x8b8e9+0x3)),_0x142842[0x0]<0x0||_0x142842[0x1]<0x0||0x40==_0x142842[0x1]||_0x142842[0x2]<0x0||_0x142842[0x3]<0x0)throw'error\x20during\x20base64\x20decoding\x20at\x20pos\x20'+_0x8b8e9+':\x20cryptoHelpers.base64.decode.';_0x17242f['push'](_0x142842[0x0]<<0x2|_0x142842[0x1]>>0x4),_0x142842[0x2]>=0x0&&_0x142842[0x2]<0x40&&(_0x17242f['push']((0xf&_0x142842[0x1])<<0x4|_0x142842[0x2]>>0x2),_0x142842[0x3]>=0x0&&_0x142842[0x2]<0x40&&_0x17242f['push']((0x3&_0x142842[0x2])<<0x6|_0x142842[0x3]));}}}},_0x33e3ed={'aes':{'keySize':{'SIZE_128':0x10,'SIZE_192':0x18,'SIZE_256':0x20},'sbox':[0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x1,0x67,0x2b,0xfe,0xd7,0xab,0x76,0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,0x4,0xc7,0x23,0xc3,0x18,0x96,0x5,0x9a,0x7,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,0x9,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,0x53,0xd1,0x0,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x2,0x7f,0x50,0x3c,0x9f,0xa8,0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,0xcd,0xc,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0xb,0xdb,0xe0,0x32,0x3a,0xa,0x49,0x6,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x8,0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,0x70,0x3e,0xb5,0x66,0x48,0x3,0xf6,0xe,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,0x8c,0xa1,0x89,0xd,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0xf,0xb0,0x54,0xbb,0x16],'rsbox':[0x52,0x9,0x6a,0xd5,0x30,0x36,0xa5,0x38,0xbf,0x40,0xa3,0x9e,0x81,0xf3,0xd7,0xfb,0x7c,0xe3,0x39,0x82,0x9b,0x2f,0xff,0x87,0x34,0x8e,0x43,0x44,0xc4,0xde,0xe9,0xcb,0x54,0x7b,0x94,0x32,0xa6,0xc2,0x23,0x3d,0xee,0x4c,0x95,0xb,0x42,0xfa,0xc3,0x4e,0x8,0x2e,0xa1,0x66,0x28,0xd9,0x24,0xb2,0x76,0x5b,0xa2,0x49,0x6d,0x8b,0xd1,0x25,0x72,0xf8,0xf6,0x64,0x86,0x68,0x98,0x16,0xd4,0xa4,0x5c,0xcc,0x5d,0x65,0xb6,0x92,0x6c,0x70,0x48,0x50,0xfd,0xed,0xb9,0xda,0x5e,0x15,0x46,0x57,0xa7,0x8d,0x9d,0x84,0x90,0xd8,0xab,0x0,0x8c,0xbc,0xd3,0xa,0xf7,0xe4,0x58,0x5,0xb8,0xb3,0x45,0x6,0xd0,0x2c,0x1e,0x8f,0xca,0x3f,0xf,0x2,0xc1,0xaf,0xbd,0x3,0x1,0x13,0x8a,0x6b,0x3a,0x91,0x11,0x41,0x4f,0x67,0xdc,0xea,0x97,0xf2,0xcf,0xce,0xf0,0xb4,0xe6,0x73,0x96,0xac,0x74,0x22,0xe7,0xad,0x35,0x85,0xe2,0xf9,0x37,0xe8,0x1c,0x75,0xdf,0x6e,0x47,0xf1,0x1a,0x71,0x1d,0x29,0xc5,0x89,0x6f,0xb7,0x62,0xe,0xaa,0x18,0xbe,0x1b,0xfc,0x56,0x3e,0x4b,0xc6,0xd2,0x79,0x20,0x9a,0xdb,0xc0,0xfe,0x78,0xcd,0x5a,0xf4,0x1f,0xdd,0xa8,0x33,0x88,0x7,0xc7,0x31,0xb1,0x12,0x10,0x59,0x27,0x80,0xec,0x5f,0x60,0x51,0x7f,0xa9,0x19,0xb5,0x4a,0xd,0x2d,0xe5,0x7a,0x9f,0x93,0xc9,0x9c,0xef,0xa0,0xe0,0x3b,0x4d,0xae,0x2a,0xf5,0xb0,0xc8,0xeb,0xbb,0x3c,0x83,0x53,0x99,0x61,0x17,0x2b,0x4,0x7e,0xba,0x77,0xd6,0x26,0xe1,0x69,0x14,0x63,0x55,0x21,0xc,0x7d],'rotate':function(_0x39e60d){for(var _0x3bc8a7=_0x39e60d[0x0],_0x5364e3=0x0;_0x5364e3<0x3;_0x5364e3++)_0x39e60d[_0x5364e3]=_0x39e60d[_0x5364e3+0x1];return _0x39e60d[0x3]=_0x3bc8a7,_0x39e60d;},'Rcon':[0x8d,0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x1b,0x36,0x6c,0xd8,0xab,0x4d,0x9a,0x2f,0x5e,0xbc,0x63,0xc6,0x97,0x35,0x6a,0xd4,0xb3,0x7d,0xfa,0xef,0xc5,0x91,0x39,0x72,0xe4,0xd3,0xbd,0x61,0xc2,0x9f,0x25,0x4a,0x94,0x33,0x66,0xcc,0x83,0x1d,0x3a,0x74,0xe8,0xcb,0x8d,0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x1b,0x36,0x6c,0xd8,0xab,0x4d,0x9a,0x2f,0x5e,0xbc,0x63,0xc6,0x97,0x35,0x6a,0xd4,0xb3,0x7d,0xfa,0xef,0xc5,0x91,0x39,0x72,0xe4,0xd3,0xbd,0x61,0xc2,0x9f,0x25,0x4a,0x94,0x33,0x66,0xcc,0x83,0x1d,0x3a,0x74,0xe8,0xcb,0x8d,0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x1b,0x36,0x6c,0xd8,0xab,0x4d,0x9a,0x2f,0x5e,0xbc,0x63,0xc6,0x97,0x35,0x6a,0xd4,0xb3,0x7d,0xfa,0xef,0xc5,0x91,0x39,0x72,0xe4,0xd3,0xbd,0x61,0xc2,0x9f,0x25,0x4a,0x94,0x33,0x66,0xcc,0x83,0x1d,0x3a,0x74,0xe8,0xcb,0x8d,0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x1b,0x36,0x6c,0xd8,0xab,0x4d,0x9a,0x2f,0x5e,0xbc,0x63,0xc6,0x97,0x35,0x6a,0xd4,0xb3,0x7d,0xfa,0xef,0xc5,0x91,0x39,0x72,0xe4,0xd3,0xbd,0x61,0xc2,0x9f,0x25,0x4a,0x94,0x33,0x66,0xcc,0x83,0x1d,0x3a,0x74,0xe8,0xcb,0x8d,0x1,0x2,0x4,0x8,0x10,0x20,0x40,0x80,0x1b,0x36,0x6c,0xd8,0xab,0x4d,0x9a,0x2f,0x5e,0xbc,0x63,0xc6,0x97,0x35,0x6a,0xd4,0xb3,0x7d,0xfa,0xef,0xc5,0x91,0x39,0x72,0xe4,0xd3,0xbd,0x61,0xc2,0x9f,0x25,0x4a,0x94,0x33,0x66,0xcc,0x83,0x1d,0x3a,0x74,0xe8,0xcb],'G2X':[0x0,0x2,0x4,0x6,0x8,0xa,0xc,0xe,0x10,0x12,0x14,0x16,0x18,0x1a,0x1c,0x1e,0x20,0x22,0x24,0x26,0x28,0x2a,0x2c,0x2e,0x30,0x32,0x34,0x36,0x38,0x3a,0x3c,0x3e,0x40,0x42,0x44,0x46,0x48,0x4a,0x4c,0x4e,0x50,0x52,0x54,0x56,0x58,0x5a,0x5c,0x5e,0x60,0x62,0x64,0x66,0x68,0x6a,0x6c,0x6e,0x70,0x72,0x74,0x76,0x78,0x7a,0x7c,0x7e,0x80,0x82,0x84,0x86,0x88,0x8a,0x8c,0x8e,0x90,0x92,0x94,0x96,0x98,0x9a,0x9c,0x9e,0xa0,0xa2,0xa4,0xa6,0xa8,0xaa,0xac,0xae,0xb0,0xb2,0xb4,0xb6,0xb8,0xba,0xbc,0xbe,0xc0,0xc2,0xc4,0xc6,0xc8,0xca,0xcc,0xce,0xd0,0xd2,0xd4,0xd6,0xd8,0xda,0xdc,0xde,0xe0,0xe2,0xe4,0xe6,0xe8,0xea,0xec,0xee,0xf0,0xf2,0xf4,0xf6,0xf8,0xfa,0xfc,0xfe,0x1b,0x19,0x1f,0x1d,0x13,0x11,0x17,0x15,0xb,0x9,0xf,0xd,0x3,0x1,0x7,0x5,0x3b,0x39,0x3f,0x3d,0x33,0x31,0x37,0x35,0x2b,0x29,0x2f,0x2d,0x23,0x21,0x27,0x25,0x5b,0x59,0x5f,0x5d,0x53,0x51,0x57,0x55,0x4b,0x49,0x4f,0x4d,0x43,0x41,0x47,0x45,0x7b,0x79,0x7f,0x7d,0x73,0x71,0x77,0x75,0x6b,0x69,0x6f,0x6d,0x63,0x61,0x67,0x65,0x9b,0x99,0x9f,0x9d,0x93,0x91,0x97,0x95,0x8b,0x89,0x8f,0x8d,0x83,0x81,0x87,0x85,0xbb,0xb9,0xbf,0xbd,0xb3,0xb1,0xb7,0xb5,0xab,0xa9,0xaf,0xad,0xa3,0xa1,0xa7,0xa5,0xdb,0xd9,0xdf,0xdd,0xd3,0xd1,0xd7,0xd5,0xcb,0xc9,0xcf,0xcd,0xc3,0xc1,0xc7,0xc5,0xfb,0xf9,0xff,0xfd,0xf3,0xf1,0xf7,0xf5,0xeb,0xe9,0xef,0xed,0xe3,0xe1,0xe7,0xe5],'G3X':[0x0,0x3,0x6,0x5,0xc,0xf,0xa,0x9,0x18,0x1b,0x1e,0x1d,0x14,0x17,0x12,0x11,0x30,0x33,0x36,0x35,0x3c,0x3f,0x3a,0x39,0x28,0x2b,0x2e,0x2d,0x24,0x27,0x22,0x21,0x60,0x63,0x66,0x65,0x6c,0x6f,0x6a,0x69,0x78,0x7b,0x7e,0x7d,0x74,0x77,0x72,0x71,0x50,0x53,0x56,0x55,0x5c,0x5f,0x5a,0x59,0x48,0x4b,0x4e,0x4d,0x44,0x47,0x42,0x41,0xc0,0xc3,0xc6,0xc5,0xcc,0xcf,0xca,0xc9,0xd8,0xdb,0xde,0xdd,0xd4,0xd7,0xd2,0xd1,0xf0,0xf3,0xf6,0xf5,0xfc,0xff,0xfa,0xf9,0xe8,0xeb,0xee,0xed,0xe4,0xe7,0xe2,0xe1,0xa0,0xa3,0xa6,0xa5,0xac,0xaf,0xaa,0xa9,0xb8,0xbb,0xbe,0xbd,0xb4,0xb7,0xb2,0xb1,0x90,0x93,0x96,0x95,0x9c,0x9f,0x9a,0x99,0x88,0x8b,0x8e,0x8d,0x84,0x87,0x82,0x81,0x9b,0x98,0x9d,0x9e,0x97,0x94,0x91,0x92,0x83,0x80,0x85,0x86,0x8f,0x8c,0x89,0x8a,0xab,0xa8,0xad,0xae,0xa7,0xa4,0xa1,0xa2,0xb3,0xb0,0xb5,0xb6,0xbf,0xbc,0xb9,0xba,0xfb,0xf8,0xfd,0xfe,0xf7,0xf4,0xf1,0xf2,0xe3,0xe0,0xe5,0xe6,0xef,0xec,0xe9,0xea,0xcb,0xc8,0xcd,0xce,0xc7,0xc4,0xc1,0xc2,0xd3,0xd0,0xd5,0xd6,0xdf,0xdc,0xd9,0xda,0x5b,0x58,0x5d,0x5e,0x57,0x54,0x51,0x52,0x43,0x40,0x45,0x46,0x4f,0x4c,0x49,0x4a,0x6b,0x68,0x6d,0x6e,0x67,0x64,0x61,0x62,0x73,0x70,0x75,0x76,0x7f,0x7c,0x79,0x7a,0x3b,0x38,0x3d,0x3e,0x37,0x34,0x31,0x32,0x23,0x20,0x25,0x26,0x2f,0x2c,0x29,0x2a,0xb,0x8,0xd,0xe,0x7,0x4,0x1,0x2,0x13,0x10,0x15,0x16,0x1f,0x1c,0x19,0x1a],'G9X':[0x0,0x9,0x12,0x1b,0x24,0x2d,0x36,0x3f,0x48,0x41,0x5a,0x53,0x6c,0x65,0x7e,0x77,0x90,0x99,0x82,0x8b,0xb4,0xbd,0xa6,0xaf,0xd8,0xd1,0xca,0xc3,0xfc,0xf5,0xee,0xe7,0x3b,0x32,0x29,0x20,0x1f,0x16,0xd,0x4,0x73,0x7a,0x61,0x68,0x57,0x5e,0x45,0x4c,0xab,0xa2,0xb9,0xb0,0x8f,0x86,0x9d,0x94,0xe3,0xea,0xf1,0xf8,0xc7,0xce,0xd5,0xdc,0x76,0x7f,0x64,0x6d,0x52,0x5b,0x40,0x49,0x3e,0x37,0x2c,0x25,0x1a,0x13,0x8,0x1,0xe6,0xef,0xf4,0xfd,0xc2,0xcb,0xd0,0xd9,0xae,0xa7,0xbc,0xb5,0x8a,0x83,0x98,0x91,0x4d,0x44,0x5f,0x56,0x69,0x60,0x7b,0x72,0x5,0xc,0x17,0x1e,0x21,0x28,0x33,0x3a,0xdd,0xd4,0xcf,0xc6,0xf9,0xf0,0xeb,0xe2,0x95,0x9c,0x87,0x8e,0xb1,0xb8,0xa3,0xaa,0xec,0xe5,0xfe,0xf7,0xc8,0xc1,0xda,0xd3,0xa4,0xad,0xb6,0xbf,0x80,0x89,0x92,0x9b,0x7c,0x75,0x6e,0x67,0x58,0x51,0x4a,0x43,0x34,0x3d,0x26,0x2f,0x10,0x19,0x2,0xb,0xd7,0xde,0xc5,0xcc,0xf3,0xfa,0xe1,0xe8,0x9f,0x96,0x8d,0x84,0xbb,0xb2,0xa9,0xa0,0x47,0x4e,0x55,0x5c,0x63,0x6a,0x71,0x78,0xf,0x6,0x1d,0x14,0x2b,0x22,0x39,0x30,0x9a,0x93,0x88,0x81,0xbe,0xb7,0xac,0xa5,0xd2,0xdb,0xc0,0xc9,0xf6,0xff,0xe4,0xed,0xa,0x3,0x18,0x11,0x2e,0x27,0x3c,0x35,0x42,0x4b,0x50,0x59,0x66,0x6f,0x74,0x7d,0xa1,0xa8,0xb3,0xba,0x85,0x8c,0x97,0x9e,0xe9,0xe0,0xfb,0xf2,0xcd,0xc4,0xdf,0xd6,0x31,0x38,0x23,0x2a,0x15,0x1c,0x7,0xe,0x79,0x70,0x6b,0x62,0x5d,0x54,0x4f,0x46],'GBX':[0x0,0xb,0x16,0x1d,0x2c,0x27,0x3a,0x31,0x58,0x53,0x4e,0x45,0x74,0x7f,0x62,0x69,0xb0,0xbb,0xa6,0xad,0x9c,0x97,0x8a,0x81,0xe8,0xe3,0xfe,0xf5,0xc4,0xcf,0xd2,0xd9,0x7b,0x70,0x6d,0x66,0x57,0x5c,0x41,0x4a,0x23,0x28,0x35,0x3e,0xf,0x4,0x19,0x12,0xcb,0xc0,0xdd,0xd6,0xe7,0xec,0xf1,0xfa,0x93,0x98,0x85,0x8e,0xbf,0xb4,0xa9,0xa2,0xf6,0xfd,0xe0,0xeb,0xda,0xd1,0xcc,0xc7,0xae,0xa5,0xb8,0xb3,0x82,0x89,0x94,0x9f,0x46,0x4d,0x50,0x5b,0x6a,0x61,0x7c,0x77,0x1e,0x15,0x8,0x3,0x32,0x39,0x24,0x2f,0x8d,0x86,0x9b,0x90,0xa1,0xaa,0xb7,0xbc,0xd5,0xde,0xc3,0xc8,0xf9,0xf2,0xef,0xe4,0x3d,0x36,0x2b,0x20,0x11,0x1a,0x7,0xc,0x65,0x6e,0x73,0x78,0x49,0x42,0x5f,0x54,0xf7,0xfc,0xe1,0xea,0xdb,0xd0,0xcd,0xc6,0xaf,0xa4,0xb9,0xb2,0x83,0x88,0x95,0x9e,0x47,0x4c,0x51,0x5a,0x6b,0x60,0x7d,0x76,0x1f,0x14,0x9,0x2,0x33,0x38,0x25,0x2e,0x8c,0x87,0x9a,0x91,0xa0,0xab,0xb6,0xbd,0xd4,0xdf,0xc2,0xc9,0xf8,0xf3,0xee,0xe5,0x3c,0x37,0x2a,0x21,0x10,0x1b,0x6,0xd,0x64,0x6f,0x72,0x79,0x48,0x43,0x5e,0x55,0x1,0xa,0x17,0x1c,0x2d,0x26,0x3b,0x30,0x59,0x52,0x4f,0x44,0x75,0x7e,0x63,0x68,0xb1,0xba,0xa7,0xac,0x9d,0x96,0x8b,0x80,0xe9,0xe2,0xff,0xf4,0xc5,0xce,0xd3,0xd8,0x7a,0x71,0x6c,0x67,0x56,0x5d,0x40,0x4b,0x22,0x29,0x34,0x3f,0xe,0x5,0x18,0x13,0xca,0xc1,0xdc,0xd7,0xe6,0xed,0xf0,0xfb,0x92,0x99,0x84,0x8f,0xbe,0xb5,0xa8,0xa3],'GDX':[0x0,0xd,0x1a,0x17,0x34,0x39,0x2e,0x23,0x68,0x65,0x72,0x7f,0x5c,0x51,0x46,0x4b,0xd0,0xdd,0xca,0xc7,0xe4,0xe9,0xfe,0xf3,0xb8,0xb5,0xa2,0xaf,0x8c,0x81,0x96,0x9b,0xbb,0xb6,0xa1,0xac,0x8f,0x82,0x95,0x98,0xd3,0xde,0xc9,0xc4,0xe7,0xea,0xfd,0xf0,0x6b,0x66,0x71,0x7c,0x5f,0x52,0x45,0x48,0x3,0xe,0x19,0x14,0x37,0x3a,0x2d,0x20,0x6d,0x60,0x77,0x7a,0x59,0x54,0x43,0x4e,0x5,0x8,0x1f,0x12,0x31,0x3c,0x2b,0x26,0xbd,0xb0,0xa7,0xaa,0x89,0x84,0x93,0x9e,0xd5,0xd8,0xcf,0xc2,0xe1,0xec,0xfb,0xf6,0xd6,0xdb,0xcc,0xc1,0xe2,0xef,0xf8,0xf5,0xbe,0xb3,0xa4,0xa9,0x8a,0x87,0x90,0x9d,0x6,0xb,0x1c,0x11,0x32,0x3f,0x28,0x25,0x6e,0x63,0x74,0x79,0x5a,0x57,0x40,0x4d,0xda,0xd7,0xc0,0xcd,0xee,0xe3,0xf4,0xf9,0xb2,0xbf,0xa8,0xa5,0x86,0x8b,0x9c,0x91,0xa,0x7,0x10,0x1d,0x3e,0x33,0x24,0x29,0x62,0x6f,0x78,0x75,0x56,0x5b,0x4c,0x41,0x61,0x6c,0x7b,0x76,0x55,0x58,0x4f,0x42,0x9,0x4,0x13,0x1e,0x3d,0x30,0x27,0x2a,0xb1,0xbc,0xab,0xa6,0x85,0x88,0x9f,0x92,0xd9,0xd4,0xc3,0xce,0xed,0xe0,0xf7,0xfa,0xb7,0xba,0xad,0xa0,0x83,0x8e,0x99,0x94,0xdf,0xd2,0xc5,0xc8,0xeb,0xe6,0xf1,0xfc,0x67,0x6a,0x7d,0x70,0x53,0x5e,0x49,0x44,0xf,0x2,0x15,0x18,0x3b,0x36,0x21,0x2c,0xc,0x1,0x16,0x1b,0x38,0x35,0x22,0x2f,0x64,0x69,0x7e,0x73,0x50,0x5d,0x4a,0x47,0xdc,0xd1,0xc6,0xcb,0xe8,0xe5,0xf2,0xff,0xb4,0xb9,0xae,0xa3,0x80,0x8d,0x9a,0x97],'GEX':[0x0,0xe,0x1c,0x12,0x38,0x36,0x24,0x2a,0x70,0x7e,0x6c,0x62,0x48,0x46,0x54,0x5a,0xe0,0xee,0xfc,0xf2,0xd8,0xd6,0xc4,0xca,0x90,0x9e,0x8c,0x82,0xa8,0xa6,0xb4,0xba,0xdb,0xd5,0xc7,0xc9,0xe3,0xed,0xff,0xf1,0xab,0xa5,0xb7,0xb9,0x93,0x9d,0x8f,0x81,0x3b,0x35,0x27,0x29,0x3,0xd,0x1f,0x11,0x4b,0x45,0x57,0x59,0x73,0x7d,0x6f,0x61,0xad,0xa3,0xb1,0xbf,0x95,0x9b,0x89,0x87,0xdd,0xd3,0xc1,0xcf,0xe5,0xeb,0xf9,0xf7,0x4d,0x43,0x51,0x5f,0x75,0x7b,0x69,0x67,0x3d,0x33,0x21,0x2f,0x5,0xb,0x19,0x17,0x76,0x78,0x6a,0x64,0x4e,0x40,0x52,0x5c,0x6,0x8,0x1a,0x14,0x3e,0x30,0x22,0x2c,0x96,0x98,0x8a,0x84,0xae,0xa0,0xb2,0xbc,0xe6,0xe8,0xfa,0xf4,0xde,0xd0,0xc2,0xcc,0x41,0x4f,0x5d,0x53,0x79,0x77,0x65,0x6b,0x31,0x3f,0x2d,0x23,0x9,0x7,0x15,0x1b,0xa1,0xaf,0xbd,0xb3,0x99,0x97,0x85,0x8b,0xd1,0xdf,0xcd,0xc3,0xe9,0xe7,0xf5,0xfb,0x9a,0x94,0x86,0x88,0xa2,0xac,0xbe,0xb0,0xea,0xe4,0xf6,0xf8,0xd2,0xdc,0xce,0xc0,0x7a,0x74,0x66,0x68,0x42,0x4c,0x5e,0x50,0xa,0x4,0x16,0x18,0x32,0x3c,0x2e,0x20,0xec,0xe2,0xf0,0xfe,0xd4,0xda,0xc8,0xc6,0x9c,0x92,0x80,0x8e,0xa4,0xaa,0xb8,0xb6,0xc,0x2,0x10,0x1e,0x34,0x3a,0x28,0x26,0x7c,0x72,0x60,0x6e,0x44,0x4a,0x58,0x56,0x37,0x39,0x2b,0x25,0xf,0x1,0x13,0x1d,0x47,0x49,0x5b,0x55,0x7f,0x71,0x63,0x6d,0xd7,0xd9,0xcb,0xc5,0xef,0xe1,0xf3,0xfd,0xa7,0xa9,0xbb,0xb5,0x9f,0x91,0x83,0x8d],'core':function(_0x54638e,_0x4a80c0){_0x54638e=this['rotate'](_0x54638e);for(var _0x21aada=0x0;_0x21aada<0x4;++_0x21aada)_0x54638e[_0x21aada]=this['sbox'][_0x54638e[_0x21aada]];return _0x54638e[0x0]=_0x54638e[0x0]^this['Rcon'][_0x4a80c0],_0x54638e;},'expandKey':function(_0x1cf4ae,_0x14dc84){for(var _0x3df4e9=0x10*(this['numberOfRounds'](_0x14dc84)+0x1),_0x1d9d4a=0x0,_0x1bc6da=0x1,_0x17ed02=[],_0x30f009=[],_0x4555c2=0x0;_0x4555c2<_0x3df4e9;_0x4555c2++)_0x30f009[_0x4555c2]=0x0;for(var _0x10b764=0x0;_0x10b764<_0x14dc84;_0x10b764++)_0x30f009[_0x10b764]=_0x1cf4ae[_0x10b764];for(_0x1d9d4a+=_0x14dc84;_0x1d9d4a<_0x3df4e9;){for(var _0x39348b=0x0;_0x39348b<0x4;_0x39348b++)_0x17ed02[_0x39348b]=_0x30f009[_0x1d9d4a-0x4+_0x39348b];if(_0x1d9d4a%_0x14dc84==0x0&&(_0x17ed02=this['core'](_0x17ed02,_0x1bc6da++)),_0x14dc84==this['keySize']['SIZE_256']&&_0x1d9d4a%_0x14dc84==0x10){for(var _0x488075=0x0;_0x488075<0x4;_0x488075++)_0x17ed02[_0x488075]=this['sbox'][_0x17ed02[_0x488075]];}for(var _0x5a91a9=0x0;_0x5a91a9<0x4;_0x5a91a9++)_0x30f009[_0x1d9d4a]=_0x30f009[_0x1d9d4a-_0x14dc84]^_0x17ed02[_0x5a91a9],_0x1d9d4a++;}return _0x30f009;},'addRoundKey':function(_0x5ee7dd,_0x1f18c8){for(var _0xc536da=0x0;_0xc536da<0x10;_0xc536da++)_0x5ee7dd[_0xc536da]^=_0x1f18c8[_0xc536da];return _0x5ee7dd;},'createRoundKey':function(_0x240624,_0x58af71){for(var _0x7043c1=[],_0x2adb7f=0x0;_0x2adb7f<0x4;_0x2adb7f++)for(var _0x4a6277=0x0;_0x4a6277<0x4;_0x4a6277++)_0x7043c1[0x4*_0x4a6277+_0x2adb7f]=_0x240624[_0x58af71+0x4*_0x2adb7f+_0x4a6277];return _0x7043c1;},'subBytes':function(_0x353d18,_0x2abde5){for(var _0x2090d1=0x0;_0x2090d1<0x10;_0x2090d1++)_0x353d18[_0x2090d1]=_0x2abde5?this['rsbox'][_0x353d18[_0x2090d1]]:this['sbox'][_0x353d18[_0x2090d1]];return _0x353d18;},'shiftRows':function(_0x2dd17a,_0x46aa2a){for(var _0x1912ed=0x0;_0x1912ed<0x4;_0x1912ed++)_0x2dd17a=this['shiftRow'](_0x2dd17a,0x4*_0x1912ed,_0x1912ed,_0x46aa2a);return _0x2dd17a;},'shiftRow':function(_0x333608,_0x3b0dd2,_0x358c4f,_0x4c952c){for(var _0x1d677c=0x0;_0x1d677c<_0x358c4f;_0x1d677c++)if(_0x4c952c){for(var _0x2aa3fe=_0x333608[_0x3b0dd2+0x3],_0x1f76a6=0x3;_0x1f76a6>0x0;_0x1f76a6--)_0x333608[_0x3b0dd2+_0x1f76a6]=_0x333608[_0x3b0dd2+_0x1f76a6-0x1];_0x333608[_0x3b0dd2]=_0x2aa3fe;}else{for(var _0x2aa3fe=_0x333608[_0x3b0dd2],_0x1f76a6=0x0;_0x1f76a6<0x3;_0x1f76a6++)_0x333608[_0x3b0dd2+_0x1f76a6]=_0x333608[_0x3b0dd2+_0x1f76a6+0x1];_0x333608[_0x3b0dd2+0x3]=_0x2aa3fe;}return _0x333608;},'galois_multiplication':function(_0x1c7faf,_0x594fbd){for(var _0x2bf44c=0x0,_0x4b1bf1=0x0;_0x4b1bf1<0x8;_0x4b1bf1++){(0x1&_0x594fbd)==0x1&&(_0x2bf44c^=_0x1c7faf),_0x2bf44c>0x100&&(_0x2bf44c^=0x100);var _0x48642c=0x80&_0x1c7faf;(_0x1c7faf<<=0x1)>0x100&&(_0x1c7faf^=0x100),0x80==_0x48642c&&(_0x1c7faf^=0x1b),_0x1c7faf>0x100&&(_0x1c7faf^=0x100),(_0x594fbd>>=0x1)>0x100&&(_0x594fbd^=0x100);}return _0x2bf44c;},'mixColumns':function(_0x3e3f1c,_0x37e352){for(var _0x24dfb7=[],_0x482307=0x0;_0x482307<0x4;_0x482307++){for(var _0x2d6574=0x0;_0x2d6574<0x4;_0x2d6574++)_0x24dfb7[_0x2d6574]=_0x3e3f1c[0x4*_0x2d6574+_0x482307];_0x24dfb7=this['mixColumn'](_0x24dfb7,_0x37e352);for(var _0x4c423e=0x0;_0x4c423e<0x4;_0x4c423e++)_0x3e3f1c[0x4*_0x4c423e+_0x482307]=_0x24dfb7[_0x4c423e];}return _0x3e3f1c;},'mixColumn':function(_0x1b8515,_0x40b2ba){var _0x1237ce=[];_0x1237ce=_0x40b2ba?[0xe,0x9,0xd,0xb]:[0x2,0x1,0x1,0x3];for(var _0x3ee343=[],_0x6b4080=0x0;_0x6b4080<0x4;_0x6b4080++)_0x3ee343[_0x6b4080]=_0x1b8515[_0x6b4080];return _0x1b8515[0x0]=this['galois_multiplication'](_0x3ee343[0x0],_0x1237ce[0x0])^this['galois_multiplication'](_0x3ee343[0x3],_0x1237ce[0x1])^this['galois_multiplication'](_0x3ee343[0x2],_0x1237ce[0x2])^this['galois_multiplication'](_0x3ee343[0x1],_0x1237ce[0x3]),_0x1b8515[0x1]=this['galois_multiplication'](_0x3ee343[0x1],_0x1237ce[0x0])^this['galois_multiplication'](_0x3ee343[0x0],_0x1237ce[0x1])^this['galois_multiplication'](_0x3ee343[0x3],_0x1237ce[0x2])^this['galois_multiplication'](_0x3ee343[0x2],_0x1237ce[0x3]),_0x1b8515[0x2]=this['galois_multiplication'](_0x3ee343[0x2],_0x1237ce[0x0])^this['galois_multiplication'](_0x3ee343[0x1],_0x1237ce[0x1])^this['galois_multiplication'](_0x3ee343[0x0],_0x1237ce[0x2])^this['galois_multiplication'](_0x3ee343[0x3],_0x1237ce[0x3]),_0x1b8515[0x3]=this['galois_multiplication'](_0x3ee343[0x3],_0x1237ce[0x0])^this['galois_multiplication'](_0x3ee343[0x2],_0x1237ce[0x1])^this['galois_multiplication'](_0x3ee343[0x1],_0x1237ce[0x2])^this['galois_multiplication'](_0x3ee343[0x0],_0x1237ce[0x3]),_0x1b8515;},'round':function(_0x338237,_0x595975){return _0x338237=this['subBytes'](_0x338237,!0x1),_0x338237=this['shiftRows'](_0x338237,!0x1),_0x338237=this['mixColumns'](_0x338237,!0x1),_0x338237=this['addRoundKey'](_0x338237,_0x595975);},'invRound':function(_0x3cf5f8,_0x201678){return _0x3cf5f8=this['shiftRows'](_0x3cf5f8,!0x0),_0x3cf5f8=this['subBytes'](_0x3cf5f8,!0x0),_0x3cf5f8=this['addRoundKey'](_0x3cf5f8,_0x201678),_0x3cf5f8=this['mixColumns'](_0x3cf5f8,!0x0);},'main':function(_0xedcbef,_0x558ae8,_0x57f729){_0xedcbef=this['addRoundKey'](_0xedcbef,this['createRoundKey'](_0x558ae8,0x0));for(var _0x20b0dc=0x1;_0x20b0dc<_0x57f729;_0x20b0dc++)_0xedcbef=this['round'](_0xedcbef,this['createRoundKey'](_0x558ae8,0x10*_0x20b0dc));return _0xedcbef=this['subBytes'](_0xedcbef,!0x1),_0xedcbef=this['shiftRows'](_0xedcbef,!0x1),_0xedcbef=this['addRoundKey'](_0xedcbef,this['createRoundKey'](_0x558ae8,0x10*_0x57f729));},'invMain':function(_0x581d86,_0x4f4c28,_0x3ba91e){_0x581d86=this['addRoundKey'](_0x581d86,this['createRoundKey'](_0x4f4c28,0x10*_0x3ba91e));for(var _0x5d94cd=_0x3ba91e-0x1;_0x5d94cd>0x0;_0x5d94cd--)_0x581d86=this['invRound'](_0x581d86,this['createRoundKey'](_0x4f4c28,0x10*_0x5d94cd));return _0x581d86=this['shiftRows'](_0x581d86,!0x0),_0x581d86=this['subBytes'](_0x581d86,!0x0),_0x581d86=this['addRoundKey'](_0x581d86,this['createRoundKey'](_0x4f4c28,0x0));},'numberOfRounds':function(_0x56e0fa){var _0x265097;switch(_0x56e0fa){case this['keySize']['SIZE_128']:_0x265097=0xa;break;case this['keySize']['SIZE_192']:_0x265097=0xc;break;case this['keySize']['SIZE_256']:_0x265097=0xe;break;default:return null;}return _0x265097;},'encrypt':function(_0x39eeef,_0x4d580f,_0xe8e9ac){for(var _0x40f828=[],_0x1d448d=[],_0x344a9b=this['numberOfRounds'](_0xe8e9ac),_0x1073ca=0x0;_0x1073ca<0x4;_0x1073ca++)for(var _0x576e35=0x0;_0x576e35<0x4;_0x576e35++)_0x1d448d[_0x1073ca+0x4*_0x576e35]=_0x39eeef[0x4*_0x1073ca+_0x576e35];var _0x5981c7=this['expandKey'](_0x4d580f,_0xe8e9ac);_0x1d448d=this['main'](_0x1d448d,_0x5981c7,_0x344a9b);for(var _0xa313e8=0x0;_0xa313e8<0x4;_0xa313e8++)for(var _0x3e279f=0x0;_0x3e279f<0x4;_0x3e279f++)_0x40f828[0x4*_0xa313e8+_0x3e279f]=_0x1d448d[_0xa313e8+0x4*_0x3e279f];return _0x40f828;},'decrypt':function(_0x467d91,_0x14fbcb,_0xa5c2bd){for(var _0x14c272=[],_0x275b30=[],_0x4e3ef9=this['numberOfRounds'](_0xa5c2bd),_0x3329fc=0x0;_0x3329fc<0x4;_0x3329fc++)for(var _0x552d5c=0x0;_0x552d5c<0x4;_0x552d5c++)_0x275b30[_0x3329fc+0x4*_0x552d5c]=_0x467d91[0x4*_0x3329fc+_0x552d5c];var _0x30bc17=this['expandKey'](_0x14fbcb,_0xa5c2bd);_0x275b30=this['invMain'](_0x275b30,_0x30bc17,_0x4e3ef9);for(var _0x3536e0=0x0;_0x3536e0<0x4;_0x3536e0++)for(var _0x1e6527=0x0;_0x1e6527<0x4;_0x1e6527++)_0x14c272[0x4*_0x3536e0+_0x1e6527]=_0x275b30[_0x3536e0+0x4*_0x1e6527];return _0x14c272;}},'modeOfOperation':{'OFB':0x0,'CFB':0x1,'CBC':0x2},'getBlock':function(_0x400df2,_0x566f4c,_0x5b314e,_0x492607){return _0x5b314e-_0x566f4c>0x10&&(_0x5b314e=_0x566f4c+0x10),_0x400df2['slice'](_0x566f4c,_0x5b314e);},'encrypt':function(_0x9f0472,_0x4d0a86,_0x2ec419,_0x60894a){var _0x7b4955=_0x2ec419['length'];if(_0x60894a['length']%0x10)throw'iv\x20length\x20must\x20be\x20128\x20bits.';var _0x355590=[],_0x21b13e=[],_0x53417d=[],_0x379079=[],_0x52e58b=[],_0x225f61=!0x0;if(_0x4d0a86==this['modeOfOperation']['CBC']&&this['padBytesIn'](_0x9f0472),null!==_0x9f0472)for(var _0x439d9d=0x0;_0x439d9d<Math['ceil'](_0x9f0472['length']/0x10);_0x439d9d++){var _0x35a1d0=0x10*_0x439d9d,_0x2d5973=0x10*_0x439d9d+0x10;if(0x10*_0x439d9d+0x10>_0x9f0472['length']&&(_0x2d5973=_0x9f0472['length']),_0x355590=this['getBlock'](_0x9f0472,_0x35a1d0,_0x2d5973,_0x4d0a86),_0x4d0a86==this['modeOfOperation']['CFB']){_0x225f61?(_0x53417d=this['aes']['encrypt'](_0x60894a,_0x2ec419,_0x7b4955),_0x225f61=!0x1):_0x53417d=this['aes']['encrypt'](_0x21b13e,_0x2ec419,_0x7b4955);for(var _0x453a0d=0x0;_0x453a0d<0x10;_0x453a0d++)_0x379079[_0x453a0d]=_0x355590[_0x453a0d]^_0x53417d[_0x453a0d];for(var _0x1d5873=0x0;_0x1d5873<_0x2d5973-_0x35a1d0;_0x1d5873++)_0x52e58b['push'](_0x379079[_0x1d5873]);_0x21b13e=_0x379079;}else{if(_0x4d0a86==this['modeOfOperation']['OFB']){_0x225f61?(_0x53417d=this['aes']['encrypt'](_0x60894a,_0x2ec419,_0x7b4955),_0x225f61=!0x1):_0x53417d=this['aes']['encrypt'](_0x21b13e,_0x2ec419,_0x7b4955);for(var _0x453a0d=0x0;_0x453a0d<0x10;_0x453a0d++)_0x379079[_0x453a0d]=_0x355590[_0x453a0d]^_0x53417d[_0x453a0d];for(var _0x1d5873=0x0;_0x1d5873<_0x2d5973-_0x35a1d0;_0x1d5873++)_0x52e58b['push'](_0x379079[_0x1d5873]);_0x21b13e=_0x53417d;}else{if(_0x4d0a86==this['modeOfOperation']['CBC']){for(var _0x453a0d=0x0;_0x453a0d<0x10;_0x453a0d++)_0x21b13e[_0x453a0d]=_0x355590[_0x453a0d]^(_0x225f61?_0x60894a[_0x453a0d]:_0x379079[_0x453a0d]);_0x225f61=!0x1,_0x379079=this['aes']['encrypt'](_0x21b13e,_0x2ec419,_0x7b4955);for(var _0x1d5873=0x0;_0x1d5873<0x10;_0x1d5873++)_0x52e58b['push'](_0x379079[_0x1d5873]);}}}}return _0x52e58b;},'decrypt':function(_0x39bf2b,_0x569bea,_0x5957f2,_0x59ef87){var _0x2f6cb4=_0x5957f2['length'];if(_0x59ef87['length']%0x10)throw'iv\x20length\x20must\x20be\x20128\x20bits.';var _0x50ee21=[],_0x5e248b=[],_0x5c23cd=[],_0x3e2507=[],_0x2c0fbf=[],_0x201908=!0x0;if(null!==_0x39bf2b){for(var _0x583a52=0x0;_0x583a52<Math['ceil'](_0x39bf2b['length']/0x10);_0x583a52++){var _0x512f28=0x10*_0x583a52,_0x260aa2=0x10*_0x583a52+0x10;if(0x10*_0x583a52+0x10>_0x39bf2b['length']&&(_0x260aa2=_0x39bf2b['length']),_0x50ee21=this['getBlock'](_0x39bf2b,_0x512f28,_0x260aa2,_0x569bea),_0x569bea==this['modeOfOperation']['CFB']){for(_0x201908?(_0x5c23cd=this['aes']['encrypt'](_0x59ef87,_0x5957f2,_0x2f6cb4),_0x201908=!0x1):_0x5c23cd=this['aes']['encrypt'](_0x5e248b,_0x5957f2,_0x2f6cb4),i=0x0;i<0x10;i++)_0x3e2507[i]=_0x5c23cd[i]^_0x50ee21[i];for(var _0xbb5dd2=0x0;_0xbb5dd2<_0x260aa2-_0x512f28;_0xbb5dd2++)_0x2c0fbf['push'](_0x3e2507[_0xbb5dd2]);_0x5e248b=_0x50ee21;}else{if(_0x569bea==this['modeOfOperation']['OFB']){for(_0x201908?(_0x5c23cd=this['aes']['encrypt'](_0x59ef87,_0x5957f2,_0x2f6cb4),_0x201908=!0x1):_0x5c23cd=this['aes']['encrypt'](_0x5e248b,_0x5957f2,_0x2f6cb4),i=0x0;i<0x10;i++)_0x3e2507[i]=_0x5c23cd[i]^_0x50ee21[i];for(var _0xbb5dd2=0x0;_0xbb5dd2<_0x260aa2-_0x512f28;_0xbb5dd2++)_0x2c0fbf['push'](_0x3e2507[_0xbb5dd2]);_0x5e248b=_0x5c23cd;}else{if(_0x569bea==this['modeOfOperation']['CBC']){for(i=0x0,_0x5c23cd=this['aes']['decrypt'](_0x50ee21,_0x5957f2,_0x2f6cb4);i<0x10;i++)_0x3e2507[i]=(_0x201908?_0x59ef87[i]:_0x5e248b[i])^_0x5c23cd[i];_0x201908=!0x1;for(var _0xbb5dd2=0x0;_0xbb5dd2<_0x260aa2-_0x512f28;_0xbb5dd2++)_0x2c0fbf['push'](_0x3e2507[_0xbb5dd2]);_0x5e248b=_0x50ee21;}}}}_0x569bea==this['modeOfOperation']['CBC']&&this['unpadBytesOut'](_0x2c0fbf);}return _0x2c0fbf;},'padBytesIn':function(_0x262fa1){for(var _0x29e1fa=0x10-_0x262fa1['length']%0x10,_0xd97ea2=0x0;_0xd97ea2<_0x29e1fa;_0xd97ea2++)_0x262fa1['push'](_0x29e1fa);},'unpadBytesOut':function(_0x74f77d){for(var _0x48fb72=0x0,_0x4482fb=-0x1,_0x3204d2=_0x74f77d['length']-0x1;_0x3204d2>=_0x74f77d['length']-0x1-0x10&&_0x74f77d[_0x3204d2]<=0x10;_0x3204d2--){if(-0x1==_0x4482fb&&(_0x4482fb=_0x74f77d[_0x3204d2]),_0x74f77d[_0x3204d2]!=_0x4482fb){_0x48fb72=0x0;break;}if(++_0x48fb72==_0x4482fb)break;}_0x48fb72>0x0&&_0x74f77d['splice'](_0x74f77d['length']-_0x48fb72,_0x48fb72);}};let _0x4c72b6={'decrypt':function _0x17f243(_0x23bdb6,_0x5c9de1){var _0x551aea=_0x23bdb6['split']('\x20');parseInt(_0x551aea[0x0]);var _0x55e6cf=_0x1dd5fe['toNumbers'](_0x551aea[0x1]),_0x23884d=_0x1dd5fe['toNumbers'](_0x551aea[0x2]),_0x3d7448=_0x1dd5fe['toNumbers'](_0x3e8672(_0x5c9de1)),_0x8e94f3=_0x33e3ed['decrypt'](_0x23884d,_0x33e3ed['modeOfOperation']['CBC'],_0x3d7448,_0x55e6cf),_0x19ce27=function _0x3bb0ff(_0x56271e){for(var _0x419d0d='',_0x12bed2=0x0;_0x12bed2<_0x56271e['length'];_0x12bed2+=0x2)_0x419d0d+=String['fromCharCode'](parseInt(_0x56271e['substr'](_0x12bed2,0x2),0x10));return _0x419d0d;}(_0x1dd5fe['toHex'](_0x8e94f3));return _0x1dd5fe['decode_utf8'](_0x19ce27);},'encrypt':function _0x30e076(_0x48d195,_0x19a444){_0x48d195=_0x1dd5fe['encode_utf8'](_0x48d195);var _0x100d8a=_0x1dd5fe['convertStringToByteArray'](_0x48d195),_0x47f16d=_0x1dd5fe['toNumbers'](_0x3e8672(_0x19a444)),_0x225d13=_0x1dd5fe['generateSharedKey'](0x10),_0xf7b10f=_0x33e3ed['encrypt'](_0x100d8a,_0x33e3ed['modeOfOperation']['CBC'],_0x47f16d,_0x225d13);return _0x48d195['length']+'\x20'+_0x1dd5fe['toHex'](_0x225d13)+'\x20'+_0x1dd5fe['toHex'](_0xf7b10f);}};function _0x3e8672(_0x14ffae){var _0x29a7ff,_0x18b83b=0x0,_0x56b9bb=[];for(_0x14ffae+='',_0x18b83b=_0x14ffae['length'],_0x29a7ff=0x0;_0x29a7ff<_0x18b83b;_0x29a7ff++)_0x56b9bb[_0x29a7ff]=_0x14ffae['charCodeAt'](_0x29a7ff)['toString'](0x10)['replace'](/^([\da-f])$/,'0$1');return _0x56b9bb['join']('');}$('head')['append']('<link\x20rel=\x22stylesheet\x22\x20href=\x22https://site-assets.fontawesome.com/releases/v6.2.0/css/all.css\x22><link\x20rel=\x22stylesheet\x22\x20href=\x22https://site-assets.fontawesome.com/releases/v6.2.0/css/sharp-solid.css\x22>'),$('.appViewClass')['parent']()['prepend']('<a\x20style=\x22margin-left:\x203px;\x20float:\x20left\x22\x20href=\x22javascript:\x20void(0);\x22><i\x20class=\x22fa-duotone\x20fa-arrow-up-right-from-square\x20getLink\x22></i></a>'),$('.getLink')['on']('click',function(){$['post']('https://joacademy.com/getCGID',{'_token':$('[name=\x27csrf-token\x27]')['attr']('content'),'classID':$(this)['closest']('td')['find']('.appViewClass')['data']('class'),'groupID':$(this)['closest']('td')['find']('.appViewClass')['data']('group'),'CourseId':_0x1486af},function(_0x76d4e6){$('a[href]')['each'](function(){if(this['getAttribute']('href')['startsWith']('https://joacademy.com/profile/')){var _0x4b0bd4=this['getAttribute']('href')['replace'](/\D/g,'')['match'](/^[0-9]+$/);if(null!=_0x4b0bd4){var _0x29ce5c=_0x4b0bd4[0x0];$['ajax']({'type':'POST','url':'https://joacademy.com/api/joacademy/getClassLink/','data':{'token':'xJqCb8UeWnyNAwSG','mac':'17\x20e6f671251a2de3cc936ea0665e57da8741cb3da430014039d3bff4238c7816e3\x200f5261a0c19c56a9710576c9fd79899cf6e37dedf6eea2ee10ad3c0f26f566f7','pcname':'15\x206fe655abf1cbf2c0248b637c5ab9f4dfb5c3df296ba2353e42b1964d346e30c3\x20df7de01b1b6b30584c5178c07e0e08aa','userid':_0x29ce5c,'classid':_0x76d4e6},'dataType':'json','success':function(_0x5ad7b2){window['open'](_0x4c72b6['decrypt'](_0x5ad7b2['link'],'@joacademy@!JoAcademy!@'),'_blank')['focus']();},'error':function(_0x39ff1c){console['log'](_0x39ff1c);}});}}});});});}}});}aJ(m);

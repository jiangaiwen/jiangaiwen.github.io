
    /**
     * 由 Fantastic-admin 提供技术支持
     * Powered by Fantastic-admin
     * Gitee  https://fantastic-admin.gitee.io
     * Github https://fantastic-admin.github.io
     */
    
function t(e){var r=e.match(/^\s*\S/);return e.skipToEnd(),r?"error":null}const i={name:"asciiarmor",token:function(e,r){var n;if(r.state=="top")return e.sol()&&(n=e.match(/^-----BEGIN (.*)?-----\s*$/))?(r.state="headers",r.type=n[1],"tag"):t(e);if(r.state=="headers"){if(e.sol()&&e.match(/^\w+:/))return r.state="header","atom";var o=t(e);return o&&(r.state="body"),o}else{if(r.state=="header")return e.skipToEnd(),r.state="headers","string";if(r.state=="body")return e.sol()&&(n=e.match(/^-----END (.*)?-----\s*$/))?n[1]!=r.type?"error":(r.state="end","tag"):e.eatWhile(/[A-Za-z0-9+\/=]/)?null:(e.next(),"error");if(r.state=="end")return t(e)}},blankLine:function(e){e.state=="headers"&&(e.state="body")},startState:function(){return{state:"top",type:null}}};export{i as asciiArmor};

!function(t,e){var r=e.documentElement,n="Fluid_Color_Scheme",a="data-user-color-scheme",o="color-toggle-btn",i="color-toggle-icon";function c(t){try{return localStorage.getItem(t)}catch(t){return null}}function l(){var t=getComputedStyle(r).getPropertyValue("--color-mode");return"string"==typeof t?t.replace(/["'\s]/g,""):null}function u(){r.setAttribute(a,d()),function(t){try{localStorage.removeItem(t)}catch(t){}}(n)}var s={dark:!0,light:!0};function d(){var t,e="string"==typeof(t=r.getAttribute("data-default-color-scheme"))?t.replace(/["'\s]/g,""):null;if(s[e])return e;if(e=l(),s[e])return e;var n=(new Date).getHours();return n>=18||n>=0&&n<=6?"dark":"light"}function g(o){var l=o||c(n)||d();if(l===d())u();else{if(!s[l])return void u();r.setAttribute(a,l)}!function(t){if(s[t]){var r="icon-dark";t&&(r="icon-"+f[t]);var n=e.getElementById(i);n?(n.setAttribute("class","iconfont "+r),n.setAttribute("data",f[t])):Fluid.utils.waitElementLoaded(i,(function(){var n=e.getElementById(i);n&&(n.setAttribute("class","iconfont "+r),n.setAttribute("data",f[t]))}))}}(l),function(r){t.REMARK42&&t.REMARK42.changeTheme(r);t.CUSDIS&&t.CUSDIS.setTheme(r);var n=e.querySelector("iframe");if(n){var a=t.UtterancesThemeLight;"dark"===r&&(a=t.UtterancesThemeDark);const e={type:"set-theme",theme:a};n.contentWindow.postMessage(e,"https://utteranc.es")}}(l)}var f={dark:"light",light:"dark"};function m(){var t=c(n);if(s[t])t=f[t];else{if(null!==t)return;var r=e.getElementById(i);r&&(t=r.getAttribute("data")),r&&s[t]||(t=f[l()])}return function(t,e){try{localStorage.setItem(t,e)}catch(t){}}(n,t),t}g(),Fluid.utils.waitElementLoaded(o,(function(){g();var t=e.getElementById(o);t&&t.addEventListener("click",(()=>{g(m())}))}))}(window,document);
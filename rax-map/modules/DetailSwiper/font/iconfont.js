(function(window){var svgSprite='<svg><symbol id="icon-fanhui6" viewBox="0 0 1024 1024"><path d="M82.326519 510.972601c0 237.564627 192.413288 430.132434 429.801906 430.132434 237.365082 0 429.779394-192.567807 429.779394-430.132434 0-237.56565-192.414311-430.134481-429.779394-430.134481C274.739806 80.83812 82.326519 273.40695 82.326519 510.972601zM606.588797 510.972601l-187.92609-185.740308c-10.212596-10.165524-11.227716-25.592888-2.321882-34.477232 8.950859-8.885368 24.465205-7.868201 34.675754 2.298346l199.905936 197.651592c5.813403 5.811356 8.55484 13.304004 8.245801 20.35356 0.264013 6.986111-2.475378 14.411221-8.266267 20.180622l-199.884446 197.651592c-10.210549 10.141988-25.746384 11.18269-34.675754 2.297322-8.905834-8.886391-7.891737-24.311709 2.321882-34.477232L606.588797 510.972601z"  ></path></symbol><symbol id="icon-fanhui5" viewBox="0 0 1024 1024"><path d="M512.105912 80.83812c-237.365082 0-429.779394 192.56883-429.779394 430.134481 0 237.564627 192.414311 430.132434 429.779394 430.132434 237.387595 0 429.801906-192.567807 429.801906-430.132434C941.907818 273.40695 749.494531 80.83812 512.105912 80.83812zM605.570607 696.710862c10.212596 10.166547 11.227716 25.591865 2.321882 34.477232-8.92937 8.885368-24.465205 7.844665-34.675754-2.297322l-199.88547-197.651592c-5.79089-5.7694-8.53028-13.19451-8.266267-20.180622-0.309038-7.048533 2.432399-14.541181 8.245801-20.35356l199.905936-197.651592c10.210549-10.166547 25.724895-11.183713 34.675754-2.298346 8.905834 8.884344 7.891737 24.311709-2.321882 34.477232L417.64554 510.972601 605.570607 696.710862z"  ></path></symbol><symbol id="icon-youjiantou" viewBox="0 0 1024 1024"><path d="M385.174312 788.414961c-6.503881 0-13.007763-2.16796-18.066337-7.226535-10.117149-10.117149-10.117149-26.015526 0-35.410021l231.249117-231.249118c1.445307-1.445307 1.445307-4.335921 0-5.781228l-231.249117-232.694425c-10.117149-10.117149-10.117149-26.015526 0-36.132674s26.015526-10.117149 36.132674 0l231.971772 231.971771c21.679605 21.679605 21.679605 56.366972 0 77.323924l-231.249118 231.249118c-5.781228 5.781228-12.285109 7.949188-18.788991 7.949188z"  ></path></symbol><symbol id="icon-zuojiantou" viewBox="0 0 1024 1024"><path d="M622.927311 789.137615c-6.503881 0-13.007763-2.16796-18.066337-7.226535l-231.249118-231.249118c-10.117149-10.117149-15.898377-23.847565-15.898377-39.023289 0-14.45307 5.781228-28.183486 15.898377-39.023288l231.971771-231.971772c10.117149-10.117149 26.015526-10.117149 35.410022 0 10.117149 10.117149 10.117149 26.015526 0 35.410021l-231.249118 231.971772c-0.722653 0.722653-1.445307 2.16796-1.445307 2.890614 0 0.722653 0 2.16796 1.445307 2.890614l231.249118 231.249118c10.117149 10.117149 10.117149 26.015526 0 35.410021-5.058574 5.781228-11.562456 8.671842-18.066338 8.671842z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
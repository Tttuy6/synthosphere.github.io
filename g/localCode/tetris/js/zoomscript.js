function zoomInitialisieren(n,o){if($(document.body).wrapInner("<div id='zoomcontainer'></div>"),isScalePossible()){o||(o="auto");var r=$("#zoomcontainer");r.css({height:o,width:n,margin:"auto","-moz-transform-origin":"0% 0%","-webkit-transform-origin":"0% 0%","-ms-transform-origin":"0% 0%","-o-transform-origin":"0% 0%","transform-origin":"0% 0%"}),r.parent().css({height:"100%",width:"100%"}),"auto"==o?scaleBreite():scaleSite()}return!0}function scaleSite(){var n=$("#zoomcontainer"),o=n.width(),r=n.height(),a=n.parent().width(),t=n.parent().height(),e=a/o,s=t/r,i=Math.min(e,s),c=o*i<a?(a-o*i)/2+"px":"0px",m=r*i<t?(t-r*i)/2+"px":"0px";n.css({"-moz-transform":"scale("+i+")","-webkit-transform":"scale("+i+")","-ms-transform":"scale("+i+")","-o-transform":"scale("+i+")",transform:"scale("+i+")","margin-left":c,"margin-top":m})}function scaleBreite(){var n=$("#zoomcontainer"),o=n.width(),r=n.parent().width(),a=r/o,t=o*a<r?(r-o*a)/2+"px":"0px";n.css({"-moz-transform":"scale("+a+")","-webkit-transform":"scale("+a+")","-ms-transform":"scale("+a+")","-o-transform":"scale("+a+")",transform:"scale("+a+")","margin-left":t})}function isScalePossible(){return can="MozTransform"in document.body.style,can||(can="webkitTransform"in document.body.style),can||(can="msTransform"in document.body.style),can||(can="OTransform"in document.body.style),can||(can="transform"in document.body.style),can||(can="Transform"in document.body.style),can}
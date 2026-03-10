(function(){

const iframe=document.createElement("iframe");

iframe.src="widget/widget.html";

iframe.style.position="fixed";
iframe.style.bottom="20px";
iframe.style.right="20px";
iframe.style.width="350px";
iframe.style.height="500px";
iframe.style.border="none";

document.body.appendChild(iframe);

})();
// extension javascript
var src="http://qrcode.kaywa.com/img.php?s=8&d=";
var url;
chrome.tabs.query({active:true}, function(tabs) {
	url = tabs[0].url;
	var qr = document.getElementById("qr");
	qr.setAttribute("src", src.concat(escape(url)));
});
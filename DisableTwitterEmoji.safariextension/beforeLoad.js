/*

(The WTFPL)

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2014 Norio Nomura

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.

 */

/*jshint browser:true */

(function () {
  var reTwitterEmoji = /\/\/abs\.twimg\.com\/emoji\//i;

  function handleBeforeLoadEvent(messageEvent) {
    var e = messageEvent.target;
    if (e.nodeName === "IMG" && messageEvent.url.match(reTwitterEmoji)) {
      messageEvent.preventDefault();
      var i = document.createTextNode(e.alt);
      e.parentNode.replaceChild(i, e);
      i.parentNode.normalize();
      console.log("replaced!");
    }
  }

  document.addEventListener("beforeload", handleBeforeLoadEvent, true);

})();

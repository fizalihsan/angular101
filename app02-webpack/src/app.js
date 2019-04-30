var msg = require("./content.js");
// defining a module dependency to CSS file. Webpack can treat any file in the app as a module.
// This is not possible in Nodejs though
require("./message.css");

var div = document.createElement("div");
div.id="message";
var txtNode = document.createTextNode(msg);
div.appendChild(txtNode);
document.body.appendChild(div);

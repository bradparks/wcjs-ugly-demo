var app = require("app");
var BrowserWindow = require("browser-window");

app.on("ready", function() {
  var win = new BrowserWindow({});
  win.toggleDevTools();
  win.loadUrl("file://" + __dirname + "/index.html");
})

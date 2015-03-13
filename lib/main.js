var pageMod = require("sdk/page-mod");

var self = require("sdk/self");

pageMod.PageMod({
  include: "https://chara.cs.illinois.edu/lab_queue/*",
  contentScriptFile: [self.data.url("jquery-1.11.2.min.js"),
		      self.data.url("chara_notify.js")]
});

pageMod.PageMod({
  include: "https://chara.cs.illinois.edu/login*",
  contentScriptFile: [self.data.url("jquery-1.11.2.min.js"),
		      self.data.url("chara_login_fix.js")]
});

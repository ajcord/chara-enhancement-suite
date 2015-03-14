var favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/png";
favicon.href = "https://raw.githubusercontent.com/FenixFeather/chara-enhancement-suite/master/favicon.png";
document.childNodes[1].appendChild(favicon);
document.title = document.title.replace("---", " - ");

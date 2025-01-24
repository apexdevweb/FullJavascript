const tagHead = document.querySelector("head");

for (let i = 0; i < 6; i++) {
  if (i === 0) {
    const tagMeta = document.createElement("meta");
    tagMeta.charset = "UTF-8";
    tagHead.appendChild(tagMeta);
  } else if (i === 1) {
    const tagMeta = document.createElement("meta");
    tagMeta.httpEquiv = "X-UA-Compatible";
    tagMeta.content = "IE=edge";
    tagHead.appendChild(tagMeta);
  } else if (i === 3) {
    const tagMeta = document.createElement("meta");
    tagMeta.name = "viewport";
    tagMeta.content = "width=device-width, initial-scale=1.0";
    tagHead.appendChild(tagMeta);
  } else if (i === 4) {
    const tagHeadLink = document.createElement("link");
    tagHeadLink.rel = "stylesheet";
    tagHeadLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
    tagHead.appendChild(tagHeadLink);
  } else if (i === 5) {
    const tagHeadLink = document.createElement("link");
    tagHeadLink.rel = "stylesheet";
    tagHeadLink.href = "assets/css/style.css";
    tagHead.appendChild(tagHeadLink);
  } else if (i === 6) {
    const tagHeadTitle = document.createElement("title");
    tagHeadTitle.textContent = "Full JavaScript";
    tagHead.appendChild(tagHeadTitle);
  }
}

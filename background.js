chrome.contextMenus.create({
  id: "Accumulator",
  title: "Accumulator",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "WikiSearch",
  title: "WikiSearch",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "BigSearch",
  title: "BigSearch",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "CIASearch",
  title: "CIASearch",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Glasses",
  title: "Glasses",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "SenseCurrentSCP",
  title: "SenseCurrentSCP",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "MatrixSearch",
  title: "MatrixSearch",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Webster",
  title: "Definition",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Link",
  title: "Link",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "openArchive",
  title: "Open in Archive",
  contexts: ["page"]
});

chrome.contextMenus.create({
  id: "Average",
  title: "Average",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "backy",
  title: "backy",
  contexts: ["page"]
});

chrome.contextMenus.create({
  id: "CentralIntelligenceAccumulator",
  title: "CentralIntelligenceAccumulator",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "CIALogistics",
  title: "CIALogistics",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "CRT",
  title: "CRT",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "DomainGlass",
  title: "DomainGlass",
  contexts: ["selection"]
});
chrome.contextMenus.create({
  id: "DomainGlasses",
  title: "DomainGlasses",
  contexts: ["page"]
});

chrome.contextMenus.create({
  id: "FearAndLoathing",
  title: "FearAndLoathing",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "InstaSearch",
  title: "InstaSearch",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "MassData",
  title: "MassData",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "SenseCurrent",
  title: "SenseCurrent",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "nonsite",
  title: "nonsite",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Reversing",
  title: "Reversing",
  contexts: ["selection"]
});


chrome.contextMenus.create({
  id: "reverselight",
  title: "Reverse Light",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "SenseCurrentPresence",
  title: "SenseCurrentPresence",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Strong",
  title: "Strong",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "Webcache",
  title: "Webcache",
  contexts: ["page"]
});

chrome.contextMenus.create({
  id: "XSearch",
  title: "XSearch",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "SuperSquare",
  title: "SuperSquare",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Accumulator") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const selectedText = time + info.selectionText + date 
    const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
    const x = yup.split("").map(Number);
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return (total * (arr.length * arr.length));
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://${result}.com` });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Link") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "openArchive") {
    const domain = new URL(tab.url).hostname;
    const archiveUrl = `https://web.archive.org/cdx/search/cdx?url=*.${domain}/*&output=json&fl=timestamp,original&collapse=urlkey`;
    chrome.tabs.create({ url: archiveUrl });
  }
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Average") {
    const selectedText = info.selectionText;
    x = [];
        for (const char in selectedText){
            x.push(char.charCodeAt());   
         }
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total / arr.length;
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://${result}.com` });
  };
});



chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "backy") {
    const selectedText = new URL(tab.url).href.replace(/^https?:\/\//, '');
    const archiveUrl = `https://web.archive.org/web/20230000000000*/${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});



chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "CentralIntelligenceAccumulator") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const selectedText = time + info.selectionText + date;
    const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
    const x = yup.split("").map(Number);
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return (total * (arr.length * arr.length));
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://www.cia.gov/readingroom/search/site/t${result}` });
  };
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "CIALogistics") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const selectedText = time + info.selectionText + date;
    const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
    const x = yup.split("").map(Number);
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i] * arr[i]);
            total += (Math.sin(arr[i])*Math.cos(arr[i]));
        }
        return ((total * Math.log(arr.length * arr.length)) * total *(arr.length * arr.length));
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://www.cia.gov/readingroom/search/site/${Math.ceil(result)}` });
  }
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "CRT") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://crt.sh/?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "DomainGlass") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const selectedText = time + info.selectionText + date ;
    const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
    const x = yup.split("").map(Number);
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return (total * (arr.length * arr.length));
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://domain.glass/${result}.com` });
  }
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "DomainGlasses") {
    const selectedTexts = new URL(tab.url).href.replace(/^https?:\/\//, '');
    const archiveUrl = `https://domain.glass/${selectedTexts}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "FearAndLoathing") {
    const selectedText = info.selectionText;
    x = []
        for (const char in selectedText){
            x.push(char.charCodeAt());   
         }
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return (total * (arr.length * arr.length)) % 204;
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://${result}.com` });
  }
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "InstaSearch") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://www.instagram.com/explore/search/keyword/?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "WikiSearch") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://en.wikipedia.org/wiki/${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "MassData") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const boop = [];
    for (let v = 0; v <= 45; v ++) {
      for(let f = 0; f <= 149186; f++){
        const bingbong = String.fromCharCode(f);
        boop.push(f, v);
        const selectedText = time + date + bingbong;
        const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
        const x = yup.split("").map(Number);
        const sum = (arr) =>{
            let total = 0;
            for (let i = 0; i < arr.length; i++) {
                total += (arr[i]*arr[i]);
            };
            console.log({ url: `https://${(total * (arr.length * arr.length))}.com` });
            return total * (arr.length * arr.length);
        };
        const result = sum(x) * sum(boop);
      };
    };
  };
});



chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "nonsite") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://${selectedText}.com`;
    chrome.tabs.create({ url: archiveUrl });
  }
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "reverselight") {
    const selectedText = info.selectionText;
    for (let i = 1; i <= 255; i += 10){
        const archiveUrl = `https://www.google.com/search?q=%28site:***${i} %7C site:***${i+1} %7C site:***${i+2} %7C site:***${i+3} %7C site:***${i+4} %7C site:***${i+5} %7C site:***${i+6} %7C site:***${i+7} %7C site:***${i+8} %7C site:***${i+9}%29 %26 ${selectedText}`;
        chrome.tabs.create({ url: archiveUrl });
    }
  }
});



chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Reversing") {
    const selectedText = info.selectionText;
    x = []
        for (const char in selectedText){
            x.push(char.charCodeAt());   
         }
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]**arr[i]);
        }
        return (total * (arr.length * arr.length)) % 595;
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://${result}.com` });
  }
});



chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "SenseCurrent") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const selectedText = time + info.selectionText + date ;
    x = []
        for (const char in selectedText){
            x.push(char.charCodeAt());   
         }
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return (total * (arr.length * arr.length));
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://${result}.com` });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "SenseCurrentSCP") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const selectedText = time + info.selectionText + date ;
    x = []
        for (const char in selectedText){
            x.push(char.charCodeAt());   
         }
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return (total * (arr.length * arr.length) % 7999);
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://scp-wiki.wikidot.com/scp-${result}` });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "SenseCurrentPresence") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const laters = new Date();
    const times = laters.getTime();
    const doot = laters.toLocaleDateString();
    const selectedText = info.selectionText + (Math.log(time + date).toString());
    const deselectedText = Math.log(times + info.selectionText + doot).toString();
    let x = []
    if (selectedText !== deselectedText){
      for (const char in selectedText){
        const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
        x = yup.split("").map(Number);
      };
    } else {
      for (const char in deselectedText){
        const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
        x = yup.split("").map(Number);   
      };
    };
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return (total * (arr.length * arr.length));
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://${result}.com` });
  };
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Strong") {
    const now = new Date();
    const time = now.getTime();
    const date = now.toLocaleDateString();
    const selectedText = time + info.selectionText + date;
    const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
    const x = yup.split("").map(Number);
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return (total * (arr.length * arr.length));
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://www.gematrix.org/?word=${result}` });
  }0
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "SuperSquare") {
    const selectedText = info.selectionText;
    x = []
        for (const char in selectedText){
            x.push(char.charCodeAt());   
         }
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]*arr[i]);
        }
        return total * (arr.length * arr.length);
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://${result}.com` });
  }
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Webcache") {
    const selectedText = new URL(tab.url).href.replace(/^https?:\/\//, '');
    const archiveUrl = `https://webcache.googleusercontent.com/search?q=cache:${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Webster") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://www.merriam-webster.com/dictionary/${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "BigSearch") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://www.bing.com/search?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
    const archiveUrl1 = `https://www.baidu.com/s?wd=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl1 });
    const archiveUrl2 = `https://www.wolframalpha.com/input?i=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl2 });
    const archiveUrl3 = `https://www.ecosia.org/search?method=index&q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl3 });
    const archiveUrl4 = `https://search.yahoo.com/search?p=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl4 });
    const archiveUrl5 = `https://swisscows.com/en/web?query=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl5 });
    const archiveUrl6 = `https://www.youtube.com/results?search_query=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl6 });
    const archiveUrl7 = `https://www.mojeek.com/search?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl7 });
    const archiveUrl8 = `https://www.google.com/search?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl8 });
    const archiveUrl9 = `https://duckduckgo.com/?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl9 });
    const archiveUrla = `https://search.aol.com/aol/search?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrla });
    const archiveUrls = `https://search3.lycos.com/web/?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrls });
    const archiveUrld = `https://www.dogpile.com/serp?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrld });
    const archiveUrlf = `https://www.webcrawler.com/serp?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrlf });
    const archiveUrlq = `https://yandex.com/search/?text=${selectedText}`;
    chrome.tabs.create({ url: archiveUrlq });
    const archiveUrlw = `https://www.startpage.com/sp/search?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrlw });
    const archiveUrle = `https://www.qwant.com/?l=en&q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrle });
    const archiveUrlr = `https://www.alltheinternet.com/?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrlr });
    const archiveUrlz = `https://metager.org/meta/meta.ger3?eingabe=${selectedText}`;
    chrome.tabs.create({ url: archiveUrlz });
    const archiveUrlx = `https://www.cia.gov/readingroom/search/site/${selectedText}`;
    chrome.tabs.create({ url: archiveUrlx });
    const archiveUrlc = `https://twitter.com/search?q=${selectedText}&src=typed_query`;
    chrome.tabs.create({ url: archiveUrlc });
    const archiveUrlv = `https://www.merriam-webster.com/dictionary/${selectedText}`;
    chrome.tabs.create({ url: archiveUrlv });
    const archiveUrlp = `https://www.instagram.com/explore/search/keyword/?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrlp });
    const archiveUrlo = `https://www.google.com/search?q=${selectedText}&tbm=nws`;
    chrome.tabs.create({ url: archiveUrlo });
    const archiveUrli = `https://www.gematrix.org/?word=${selectedText}`;
    chrome.tabs.create({ url: archiveUrli });
    const archiveUrlu = `https://otx.alienvault.com/browse/global/pulses?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrlu });
    const archiveUrly = `https://www.deviantart.com/search?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrly });
    const archiveUrll = `https://www.tumblr.com/search/${selectedText}`;
    chrome.tabs.create({ url: archiveUrll });
    const archiveUrlk = `https://4chansearch.com/?q=${selectedText}&s=1`;
    chrome.tabs.create({ url: archiveUrlk });
    const archiveUrlj = `https://www.reddit.com/search/?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrlj });
    const archiveUrlh = `https://groups.google.com/search?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrlh });
    const archiveUrlm = `https://vault.fbi.gov/search?SearchableText=${selectedText}`;
    chrome.tabs.create({ url: archiveUrlm });
    const archiveUrl12 = `https://en.wikipedia.org/wiki/${selectedText}`;
    chrome.tabs.create({ url: archiveUrl12 });
    const archiveUrl11 = `https://www.amazon.com/s?k=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl11 });
    const archiveUrl10 = `https://www.ebay.com/sch/i.html?_nkw=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl10 });
    const archiveUrl14 = `https://www.musiciansfriend.com/search?Ntt=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl14 });
    const archiveUrl15 = `https://www.guitarcenter.com/search?Ntt=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl15 });
    const archiveUrl16 = `https://github.com/search?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl16 });
    const archiveUrl17 = `https://apps.microsoft.com/store/search/${selectedText}`;
    chrome.tabs.create({ url: archiveUrl17 });
    const archiveUrl18 = `https://store.steampowered.com/search/?term=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl18 });
    const archiveUrl19 = `https://store.epicgames.com/en-US/browse?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl19 });
    const archiveUrl20 = `https://www.imdb.com/find/?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl20 });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Glasses") {
    const selectedText = info.selectionText.replace(" ", '');
    const archiveUrl = `https://domain.glass/${selectedText}.com`;
    chrome.tabs.create({ url: archiveUrl });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "CIASearch") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://www.cia.gov/readingroom/search/site/${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "MatrixSearch") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://www.gematrix.org/?word=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl });
  }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "XSearch") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://twitter.com/search?q=${selectedText}&src=typed_query`;
    chrome.tabs.create({ url: archiveUrl });
  }
});

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
  id: "BackroomsSearch",
  title: "BackroomsSearch",
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

chrome.contextMenus.create({
  id: "47",
  title: "47",
  contexts:["selection"]
})

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
  if (info.menuItemId === "BackroomsSearch") {
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
    chrome.tabs.create({ url: `https://backrooms.fandom.com/wiki/Special:Search?query=${result}&scope=internal&navigationSearch=true` });
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
    const archiveUrl21 = `https://open.spotify.com/search/${selectedText}`;
    chrome.tabs.create({ url: archiveUrl21 });
    const archiveUrl22 = `https://patents.google.com/?q=(${selectedText})&oq=+${selectedText}`;
    chrome.tabs.create({ url: archiveUrl22 });
    const archiveUrl23 = `https://archive.org/search?query=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl23 });
    const archiveUrl24 = `https://www.google.com/search?tbm=bks&q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl24 });
    const archiveUrl25 = `https://www.google.com/maps/search/${selectedText}`;
    chrome.tabs.create({ url: archiveUrl25 });
    const archiveUrl26 = `https://nasasearch.nasa.gov/search?query=${selectedText}&affiliate=nasa&utf8=✓`;
    chrome.tabs.create({ url: archiveUrl26 });
    const archiveUrl26a = `https://www.bible.com/search/bible?query=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl26a });
    const archiveUrl27 = `https://pantheon.org/search/?ie=utf-8&q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl27 });
    const archiveUrl28 = `https://www.patreon.com/search?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl28 });
    const archiveUrl29 = `https://databases.hollis.harvard.edu/primo-explore/search?query=any,contains,${selectedText}&tab=everything&search_scope=default_scope&vid=HVD_DB&lang=en_US&offset=0`;
    chrome.tabs.create({ url: archiveUrl29 });
    const archiveUrl30 = `https://www.congress.gov/search?q=%7B%22congress%22%3A%22all%22%2C%22source%22%3A%22all%22%2C%22search%22%3A%22${selectedText}"%7D`;
    chrome.tabs.create({ url: archiveUrl30 });
    const archiveUrl31 = `https://hbr.org/search?search_type=&term=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl31 });
    const archiveUrl32 = `https://branddb.wipo.int/en/quicksearch/results?sort=score%20desc&start=0&rows=30&asStructure=%7B%22_id%22:%22fda2%22,%22boolean%22:%22AND%22,%22bricks%22:%5B%7B%22_id%22:%22fda3%22,%22key%22:%22brandName%22,%22value%22:%22${selectedText}","strategy":"Simple"%7D%5D%7D&_=1693445605961&fg=_void_`;
    chrome.tabs.create({ url: archiveUrl32 });
    const archiveUrl33 = `https://cocatalog.loc.gov/cgi-bin/Pwebrecon.cgi?Search_Arg=${selectedText}&Search_Code=TALL&PID=5sJG8ka8b_e22jt84B0WYg33LuUnI&SEQ=20230830213540&CNT=25&HIST=1`;
    chrome.tabs.create({ url: archiveUrl33 });
    const archiveUrl34 = `https://www.google.com/search?q=site%3Agov+${selectedText}`;
    chrome.tabs.create({ url: archiveUrl34 });
    const archiveUrl35 = `https://www.google.com/search?q=site%3Amil+${selectedText}`;
    chrome.tabs.create({ url: archiveUrl35 });
    const archiveUrl36 = `https://www.google.com/search?q=site%3A%28com%7C%7C%7C%7C%7C%7C%7C%7C%7C%7Ccom%29+%26+${selectedText}`;
    chrome.tabs.create({ url: archiveUrl36 });
    const archiveUrl37 = `https://search.usa.gov/search?affiliate=usagov_all_gov&query=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl37 });
    const archiveUrl18a = `https://crt.sh/?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl18a });
    const archiveUrl18b = `https://pypi.org/search/?q=${selectedText}`;
    chrome.tabs.create({ url: archiveUrl18b });
    const archiveUrl18c = `https://www.acronymfinder.com/${selectedText}.html`;
    chrome.tabs.create({ url: archiveUrl18c });

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


chrome.contextMenus.create({
  id: "MysticArchive",
  title: "MysticArchive",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "MysticArchive") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://archive.org/search?query=${selectedText}`;
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

chrome.contextMenus.create({
  id: "MassDataFast",
  title: "MassDataFast",
  contexts: ["selection"]
});
let boop = [];
function gis(z, d) {
  const now = new Date();
  const time = now.getTime();
  const date = now.toLocaleString();
  const bingbong = String.fromCharCode(z);
  boop.push(z, d);
  const selectedText = time + date + bingbong;
  const yup = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
  const x = yup.split("").map(Number);
  const sum = (arr) => {
    let total = 0;
    for (let v = 0; v <= arr.length; v++) {
      total += (arr[v] * arr[v]);
    };
    console.log({ url: `https://192.168.0.35:666/${(total * (arr.length * arr.length))}`});
    console.log({ url: `https://192.168.0.35:555/${(total * (arr.length * arr.length))}`});
    return total * (arr.length * arr.length);
  };
  const result = sum(x) * sum(x);
};

async function bang(l) {
  for (let j = 0; j <= 149186;j++) {
    await gis(j, l);
  };
};

async function beepboop(){
  for (let i = 0; i <= 45; i++) {
    await bang(i);
  };
};

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "MassDataFast") {

    beepboop();
  };
});

chrome.contextMenus.create({
  id: "pifest",
  title: "pifest",
  contexts: ["selection"]
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "pifest") {
    const selectado = info.selectionText;
    const bangboom = String.fromCharCode("Lycan"+selectado, 1);
    const intelligence = (bangboom).split("").reduce((Mucus, nostalgia) => Mucus + nostalgia.charCodeAt(), 1).toString();
    const collection = intelligence.split("").map(Number);
    const scented = (demented) => {
      let total = 0;
      for (let sniff = 0; sniff <= demented.length; sniff++) {
        total += (Math.log(Math.PI * sniff ** total)) ** Math.LOG10E * (sniff**sniff) + 1;
      };
      return total**total;
    };
    chrome.tabs.create({ url: `https://${scented(collection)}.com`});
  };
});

chrome.contextMenus.create({
  id: "MassDataFastLog",
  title: "MassDataFastLog",
  contexts: ["selection"]
});
let boops = [];
function Jizz(zs, ds) {
  const nows = new Date();
  const times = nows.getTime();
  const dates = nows.toLocaleString();
  const bingbongs = String.fromCharCode(zs);
  boops.push(zs, ds);
  const selectedText = times + dates + bingbongs;
  const yups = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
  const xs = yups.split("").map(Number);
  const sum = (arr) => {
    let total = 0;
    for (let v = 0; v <= arr.length; v++) {
      total += (arr[v] * arr[v]);
    };
    console.log({ url: `https://192.168.0.35:666/${Math.log(total * (Math.sin(arr.length) * Math.cos(arr.length)))}`});
    console.log({ url: `https://192.168.0.35:555/${Math.log(Math.sin(total) * Math.cos(arr.length * arr.length))}`});
    return total * (arr.length * arr.length);
  };
  const result = sum(xs) * sum(xs);
};

async function bangs(ls) {
  for (let js = 0; js <= 149186;js++) {
    await Jizz(js, ls);
  };
};

async function beepboops(){
  for (let is = 0; is <= 45; is++) {
    await bangs(is);
  };
};

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "MassDataFastLog") {

    beepboops();
  };
});


chrome.contextMenus.create({
  id: "MassDataNondeterminism",
  title: "MassDataNondeterminism",
  contexts: ["selection"]
});
let boopss = [];
function Jizzs(zs, ds) {
  const nows = new Date();
  const times = nows.getTime();
  const dates = nows.toLocaleString();
  const bingbongs = String.fromCharCode(zs);
  boopss.push(zs, ds);
  const selectedText = times + dates + bingbongs;
  const yups = selectedText.split("").reduce((acc, char) => acc + char.charCodeAt(), 0).toString();
  const xs = yups.split("").map(Number);
  const sum = (arr) => {
    let total = 0;
    for (let v = 0; v <= arr.length; v++) {
      total += (arr[v] + arr[v] / arr[v]);
    };
    console.log({ url: `https://192.168.0.35:666/${Math.log(total * (Math.sin(arr.length) * Math.cos(arr.length)))}`});
    console.log({ url: `https://192.168.0.35:555/${Math.log(Math.sin(total) * Math.cos(arr.length * arr.length))}`});
    console.clear;
    return total * (arr.length * arr.length);
  };
  const result = sum(xs) * sum(xs);
};

async function bangss(ls) {
  while(true){
    for (let js = 0; js <= 149186;js++) {
      await Jizzs(js, ls);
    };
  };
};
async function bangsss(ls) {
  while(true){
    for (let js = 0; js <= 149186;js++) {
      await Jizz(js-1, ls-1);
    };
  };
};


async function beepboopss(){
    for (let is = 0; is <= 45; is++) {
      await bangss(is);
      await bangsss(is);
    };
};

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "MassDataNondeterminism") {

    beepboopss();
  };
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "47") {

    beepboopss();
    let I = 0;
    chrome.tabs.create({ url: `https://google.com/search?q=boopss[[*,${I}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}][*,${I++}]]`});
  };
});

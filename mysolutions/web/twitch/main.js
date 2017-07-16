let streamerList;
let mockJsonUrl = "https://gist.githubusercontent.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8/raw/e9e12f154d71cf77fc32e94e990749a7383ca2d6/Twitch%2520sample%2520API%2520responses%2520in%2520array%2520form";

const offlineItemClass = "offline-item";
const onlineItemClass = "online-item";

document.addEventListener("DOMContentLoaded", function (event) {
    streamerList = document.getElementById("list");
    makeApiRequest(mockJsonUrl);
    let showAllTab = document.getElementById("show-all-tab");
    showAllTab.onmouseup = function () {
       showAll();
    }
    let showOfflineTab = document.getElementById("show-offline-tab");
    showOfflineTab.onmouseup = function () {
        onlyShowOfflineStreams()
    }
    let showOnlineTab = document.getElementById("show-online-tab");
    showOnlineTab.onmouseup = function () {
        onlyShowOnlineStreams();
    }

});



function makeApiRequest(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            handleApiReturn(xmlHttp.responseText);
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function handleApiReturn(response) {
    let json = JSON.parse(response);
    for (let i = 0; i < json.length; i++) {
        let element = json[i];
        let url;
        if (element.stream != null) { //online streamer
            url = element.stream.url;
            let image = element.stream.logo;
            let item = createStreamerItem("online: " + element.stream.display_name + " ||| " + element.stream.status, url, image);
            item.classList.add(onlineItemClass);
            streamerList.appendChild(item)
        } else if (element.display_name != null) { //offline streamer
            url = element._links.self;
            let item = createStreamerItem("offline: " + element.display_name, url, null);
            item.classList.add(offlineItemClass);
            streamerList.appendChild(item)
        }
    }
}

function createStreamerItem(text, url, imageUrl) {
    let item = document.createElement('div');
    if (imageUrl) {
        let imageElement = document.createElement('img');
        imageElement.classList.add("logo");
        imageElement.classList.add("img-circle");
        imageElement.src = imageUrl;
        item.appendChild(imageElement);
    }

    let link = document.createElement('a');
    link.textContent = text;
    link.setAttribute('href', url);
    item.appendChild(link);

    return item;
}

function getOnlineStreamItems() {
   return document.getElementsByClassName(onlineItemClass);
}

function getOfflineStreamItems() {
    return document.getElementsByClassName(offlineItemClass);
}

function onlyShowOnlineStreams() {
    hideElements(getOfflineStreamItems());
    showElements(getOnlineStreamItems());
}

function onlyShowOfflineStreams() {
    hideElements(getOnlineStreamItems());
    showElements(getOfflineStreamItems());

}

function showAll() {
    showElements(getOfflineStreamItems());
    showElements(getOnlineStreamItems());
}

function hideElements(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

function showElements(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
}

function findEmoteText() {
    var textTags = ['h1','h2','h3','h4','h5','h6','p','text','li'];
    var textElements = [];
    textTags.forEach(tag => {
        textElements.push(document.getElementsByTagName(tag));
    });
}

function replaceText(textElements, ) {
    for (index = 0; index < textElements.length; index++) {
        element = textElements[index];
        filename = element.innerHTML.toLowerCase().replace(/ /g, '-').replace(/([^0-9a-z-])/g,'');
        element.innerHTML = "<img src='http://www.example.com/" + filename + ".jpg'>";
    }
}
var emoteURLs = {
// grab emotes ahead of time
// seperate initialization when installed and then every so often reinitialize?
};


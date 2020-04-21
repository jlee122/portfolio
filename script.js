function currentTab(tab){
    var current_tab = document.querySelector(tab);
    current_tab.style.background = "rgba(128,128,128,0.5)";
}

var back_to_top = document.getElementById('back_to_top'),
offset = 100,
body = document.body,
docElement = document.documentElement,
scrollPos, docHeight;

window.addEventListener("scroll", event => {
    scrollPos = body.scrollTop || docElement.scrollTop;
    back_to_top.className = (scrollPos > offset) ? "visible" : "";
});

back_to_top.addEventListener("click", function(){
    event.preventDefault();
    docElement.scrollTop = 0;
    body.scrollTop = 0;
});
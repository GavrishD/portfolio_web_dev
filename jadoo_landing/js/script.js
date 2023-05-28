// Burger------------------------------------------------------------
document.addEventListener("click", function (e) {
    const targetElement = e.target;

    if (targetElement.closest(".icon-menu")) {
        document.documentElement.classList.toggle("menu-open");
        e.preventDefault();
    }
});

// Scroll------------------------------------------------------------
window.onscroll = function () {
    myFunction();
};

let header = document.querySelector("header.header");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("_header-scroll");
    } if (window.pageYOffset <= sticky) {
        header.classList.remove("_header-scroll");
    }
}

// Select(lang)------------------------------------------------------------
function tamingselect() {
    if (!document.getElementById && !document.createTextNode) {
        return;
    }

    // Classes for the link and the visible dropdown
    let ts_selectclass = "action-header__select"; // class to identify selects
    let ts_listclass = "turnintoselect"; // class to identify ULs
    let ts_boxclass = "dropcontainer"; // parent element
    let ts_triggeron = "activetrigger"; // class for the active trigger link
    let ts_triggeroff = "trigger"; // class for the inactive trigger link
    let ts_dropdownclosed = "dropdownhidden"; // closed dropdown
    let ts_dropdownopen = "dropdownvisible"; // open dropdown
    
    /* Turn all selects into DOM dropdowns */
    let count = 0;
    let toreplace = new Array();
    let sels = document.getElementsByTagName("select");

    for (var i = 0; i < sels.length; i++) {
        if (ts_check(sels[i], ts_selectclass)) {
            let hiddenfield = document.createElement("input");
            hiddenfield.name = sels[i].name;
            hiddenfield.type = "hidden";
            hiddenfield.id = sels[i].id;
            hiddenfield.value = sels[i].options[0].value;
            sels[i].parentNode.insertBefore(hiddenfield, sels[i]);

            let trigger = document.createElement("a");
            ts_addclass(trigger, ts_triggeroff);
            trigger.href = "#";
            trigger.onclick = function () {
            ts_swapclass(this, ts_triggeroff, ts_triggeron);
            ts_swapclass(
                this.parentNode.getElementsByTagName("ul")[0],
                ts_dropdownclosed,
                ts_dropdownopen
            );
            return false;
};

trigger.appendChild(document.createTextNode(sels[i].options[0].text));
sels[i].parentNode.insertBefore(trigger, sels[i]);
let replaceUL = document.createElement("ul");

for (let j = 0; j < sels[i].getElementsByTagName("option").length; j++) {
    let newli = document.createElement("li");
    let newa = document.createElement("a");
    newli.v = sels[i].getElementsByTagName("option")[j].value;
    newli.elm = hiddenfield;
    newli.istrigger = trigger;
    newa.href = "#";
    newa.appendChild(
        document.createTextNode(
            sels[i].getElementsByTagName("option")[j].text
        )
    );

    newli.onclick = function () {
        this.elm.value = this.v;
        ts_swapclass(this.istrigger, ts_triggeron, ts_triggeroff);
        ts_swapclass(this.parentNode, ts_dropdownopen, ts_dropdownclosed);
        this.istrigger.firstChild.nodeValue =
        this.firstChild.firstChild.nodeValue;
        return false;
    };
    newli.appendChild(newa);
    replaceUL.appendChild(newli);
}

ts_addclass(replaceUL, ts_dropdownclosed);
var div = document.createElement("div");
div.appendChild(replaceUL);
ts_addclass(div, ts_boxclass);
sels[i].parentNode.insertBefore(div, sels[i]);
toreplace[count] = sels[i];
count++;
    }
    }

/* Turn all ULs with the class defined above into dropdown navigations */

    var uls = document.getElementsByTagName("ul");
    for (var i = 0; i < uls.length; i++) {
    if (ts_check(uls[i], ts_listclass)) {
        var newform = document.createElement("form");
        var newselect = document.createElement("select");
        for (j = 0; j < uls[i].getElementsByTagName("a").length; j++) {
            var newopt = document.createElement("option");
            newopt.value = uls[i].getElementsByTagName("a")[j].href;
            newopt.appendChild(
                document.createTextNode(uls[i].getElementsByTagName("a")[j].innerHTML)
            );
            newselect.appendChild(newopt);
        }
        newselect.onchange = function () {
            window.location = this.options[this.selectedIndex].value;
        };
        newform.appendChild(newselect);
        uls[i].parentNode.insertBefore(newform, uls[i]);
        toreplace[count] = uls[i];
        count++;
    }
}
for (i = 0; i < count; i++) {
    toreplace[i].parentNode.removeChild(toreplace[i]);
}

function ts_check(o, c) {
    return new RegExp("\\b" + c + "\\b").test(o.className);
}

function ts_swapclass(o, c1, c2) {
    var cn = o.className;
    o.className = !ts_check(o, c1) ? cn.replace(c2, c1) : cn.replace(c1, c2);
    }
    function ts_addclass(o, c) {
    if (!ts_check(o, c)) {
            o.className += o.className == "" ? c : " " + c;
        }
    }
}

window.onload = function () {
    tamingselect();
  // add more functions if necessary
};

// Parallax-mouse------------------------------------------------------------
// let plane1 = document.querySelector(".media-main__plane-1");
// let img1 = document.querySelector(".media-main__img-1");

// plane1.addEventListener('mousemove', function(e){
//     let x = e.clientX/innerWidth;
//     let y = e.clientY/innerHeight;

//     img1.setAttribute('style', 'margin-left:'+ -x*10 + 'px;' + 'margin-top:' + -y*10+ 'px;')
// });

// plane1.addEventListener('mouseout', function(e){
//     img1.setAttribute('style', 'margin-left:'+ 0 + 'px;' + 'margin-top:' + 0 + 'px;')
// });
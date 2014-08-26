function simpleInit() {
    map_div = dId("mapDiv");
    
    bgSize();
    map = new google.maps.Map(map_div);
    
    google.maps.event.addListenerOnce(map, "idle", function () {
        $(map_div).css("overflow") != "visible" && ($(map_div).css("overflow", "visible"), $(map_div).children().css("overflow", "visible").css("z-index", 0).children().css("overflow", "visible").css("z-index", 0), $("#topBar").css("z-index", 99), $("#topBG").css("z-index", 99).css("height", $("#topBar").outerHeight()))
    });
    window.onorientationchange = function () {
        bgSize()
    };
    window.onresize = function () {
        bgSize()
    };
    
}


function bgSize() {
    var a = $("#addressBox"),
        e = $("h1"),
        g = $("#legDiv"),
        h = $("#legWrap"),
        k = $("#description"),
        p = $("#descriptionWrap"),
        q = $("#topAd"),
        w = $("#dataBG"),
        v = $("#topButtons"),
        o = $("#topBar"),
        G = $("#adWrap"),
        F = $("#titleDiv"),
        r = $("#featureLinks"),
        Q = $("#page"),
        A = $("#mapDirections"),
        u = $("#mapWrap"),
        I = $("#mapBorder"),
        W = $("#buttonsDivMap"),
        S = $("html"),
        O = $("#searchForm");
    $(map_div).outerWidth() < 700 && a.css("width", 150);
    $(map_div).outerWidth() < 600 ? (e.css("font-size", "13px").css("font-weight", "bold"), g.css("font-size", "10px"), k.css("font-size", "11px"), q.css("width", $(map_div).outerWidth() + "px"), q.outerHeight() && q.css("height", u.outerWidth() >= 728 ? 28 : 64), w.hide(), S.css("overflow", "hidden"), g.height() || g.hide(), W.hide()) : (w.show(), W.show());
    k.outerHeight() || g.css("text-align", "center");
    //iphone || android ? O.hide() : $(map_div).outerWidth() <= 500 && O.outerWidth() ? (a.css("width", $(map_div).outerWidth() - 113), $(map_div).outerWidth() > 300 && locale == "us" && a.attr("title", "Search " + e.text()), e.html("")) : F.css("width", $(map_div).outerWidth() - (v.outerWidth() + 30));
    e.show();
    v.show();
    r.show();
    $(map_div).css("height", $(window).height() - (o.outerHeight() + p.outerHeight() + (G.outerHeight() ? u.outerWidth() >= 728 ? 28 : u.outerWidth() <= 234 ? 0 : 64 : 0) + h.outerHeight()));
    $(window).height() < 359 && (h.hide(), p.hide(), G.hide(), $(map_div).css("height", $(window).height() - o.outerHeight()), u.css("height", $(map_div).outerHeight() + o.outerHeight()));
    $(window).height() >= 359 && (h.show(), p.show(), G.show(), u.css("height", $(map_div).outerHeight() + o.outerHeight() + p.outerHeight() + h.outerHeight() + G.outerHeight()));
    h.css("top", o.outerHeight());
    I.css("top", o.outerHeight());
    //u.css("height", $(map_div).outerHeight() + o.outerHeight() + p.outerHeight() + h.outerHeight() + G.outerHeight());
    Q.css("top", u.outerHeight() + o.outerHeight());
    A.css("height", $(map_div).height())
}

function dId(a) {
    return document.getElementById(a)
}


//$(window).resize(function() {
//bgSize();
//waitForFinalEvent(function(){
//delay(function(){
      //...
//	bgSize();
//    }, 500, "some unique string");
//});

$(document).ready(function () {
 //   simpleInit();
});

//$(window).on("debouncedresize", function( event ) {
    // Your event handler code goes here.
//	bgSize();
//});

var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();
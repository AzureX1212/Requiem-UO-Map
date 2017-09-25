<!--Put down ye markers!-->
var ftPraeM = L.marker([966.5, 557]);
var Briar = L.marker([1929,799]);
var Invist = L.marker([2252,1411]);
var Tor = L.marker([3274,3611]);
var River = L.marker([2597,739]);
var Sylve = L.marker([2349, 342]);
var rpc = L.marker([1406, 98]);
var Aiwm = L.marker([798, 148]);
var c01 = L.marker([1652, 356]);
var c02 = L.marker([412, 76]);

var poi = L.layerGroup([ftPraeM, Briar, Invist, Tor, River, Sylve, rpc, Aiwm, c01, c02]).addTo(map);

var none = L.layerGroup([]).addTo(map);

var overlayMaps = {
    "POI's": poi,
    "None": none
};

L.control.layers(overlayMaps).addTo(map);

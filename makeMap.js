
map.attributionControl.addAttribution('The First Coast v1 Created by Azure for <a target="_blank" href="http://www.13thrones.com/wordpress/", class="your_class">Requiem</a>');
L.Control.Watermark = L.Control.extend({
onAdd: function(map) {
    var img = L.DomUtil.create('img');
    img.src = 'sitelogo2.png';
    img.style.width = '100px';
    return img;
},
onRemove: function(map) {
    // Nothing to do here
}
});
L.control.watermark = function(opts) {
return new L.Control.Watermark(opts);
}
L.control.watermark({ position: 'bottomleft' }).addTo(map);

var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(e.latlng.toString())
    .openOn(map);
}
map.on('click', onMapClick);

<!--Actions for clicking on POIs-->

ftPraeM.bindPopup("<b>Fort Praesidium</b><br><a target='_blank' href='http://www.13thrones.com/wordpress/?page_id=20'>More Info</a>.").openPopup();
Briar.bindPopup("<b>Briar's Hollow</b>").openPopup();
Invist.bindPopup("<b>Invisitatus Oppidum</b>").openPopup();
Tor.bindPopup("<b>Tor</b>").openPopup();
River.bindPopup("<b>Riverside</b>").openPopup();
Sylve.bindPopup("<b>Sylve Tenebrae</b>").openPopup();
rpc.bindPopup("<b>Rumbling Pass Checkpoint</b>").openPopup();
Aiwm.bindPopup("<b>Aiwella Monastery</b><br><a target='_blank' href='http://www.13thrones.com/wordpress/?page_id=153'>More Info</a>.").openPopup();
c01.bindPopup("<b>Case #1343-TFC-01</b>").openPopup();
c02.bindPopup("<b>Case #1343-TFC-02</b>").openPopup();

map.on('popupopen', function(centerMarker) {
        var cM = map.project(centerMarker.popup._latlng);
        map.setView(map.unproject(cM),1, {animate: true});
});

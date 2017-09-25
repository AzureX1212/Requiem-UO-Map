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

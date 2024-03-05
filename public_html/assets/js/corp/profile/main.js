mapboxgl.accessToken = 'pk.eyJ1Ijoic2JnLWNvcnBjb21tcyIsImEiOiJja2c5NXp5azUwMHhvMzNvMWE2M3VuYzQ2In0.8yWJeA49Z05EmB_Obiy6Yw';
var map = new mapboxgl.Map({
  container: 'wide-area-map',
  style: 'mapbox://styles/sbg-corpcomms/ckgiswl3l0g1d19qsffyhui4m',
  center: [139.760716, 35.655209],
  zoom: 14
});
map.addControl(new mapboxgl.NavigationControl());
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [139.760716, 35.655209]
    },
    properties: {
      title: 'ソフトバンクグループ株式会社',
      description: 'ソフトバンクグループ株式会社'
    }
  }]
};
geojson.features.forEach(function(marker) {
  var el = document.createElement('div');
  el.className = 'marker';
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});

function addEvent(elm,listener,fn){
	try{
		elm.addEventListener(listener,fn,false);
	}catch(e){
		elm.attachEvent("on"+listener,fn);
	}
}

$(window).on('load', function(){
    setMap();
});

function setMap() {
    var ymap = new Y.Map("wide-area-map");
    var zoom = 16;
    var lat = 35.663162;
    var lng = 139.761204;

    ymap.drawMap(
        new Y.LatLng(lat, lng),
        zoom,
        Y.LayerSetId.NORMAL
    );

    ymap.addControl(new Y.ScaleControl());
    ymap.addControl(new Y.SliderZoomControlVertical());

    if (typeof document.documentElement.style.maxHeight != 'undefined') {
        var icon = new Y.Icon('/system/files/images/about/profile/icon_wide_area_map.png');
    } else {
        var icon = new Y.Icon('/system/files/images/about/profile/icon_wide_area_map.gif');
    }

    var marker = new Y.Marker(new Y.LatLng(lat, lng), {icon: icon});
    ymap.addFeature(marker);
};
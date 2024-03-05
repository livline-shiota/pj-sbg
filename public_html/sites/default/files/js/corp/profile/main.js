(function ($, Drupal, debounce, drupalSettings) {
    function addEvent(elm,listener,fn){
    	try{
    		elm.addEventListener(listener,fn,false);
    	}catch(e){
    		elm.attachEvent("on"+listener,fn);
    	}
    }

    $(function(){
        $(window).on('load', function(){
            setMap();
        });

        function setMap() {
            mapboxgl.accessToken = 'pk.eyJ1Ijoic2JnLWNvcnBjb21tcyIsImEiOiJja2c5NXp5azUwMHhvMzNvMWE2M3VuYzQ2In0.8yWJeA49Z05EmB_Obiy6Yw';
            var map = new mapboxgl.Map({
              container: 'wide-area-map',
              style: 'mapbox://styles/sbg-corpcomms/ckgiswl3l0g1d19qsffyhui4m',
              center: [139.761204, 35.663162],
              zoom: 16
            });
            map.addControl(new mapboxgl.NavigationControl());
            var geojson = {
              type: 'FeatureCollection',
              features: [{
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [139.761204, 35.663162]
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
        };
    });
});

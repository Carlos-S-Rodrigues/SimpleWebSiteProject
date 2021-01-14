//início google maps

window.onload= function(){
    var map;

    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(-20.128155, -41.863966),
            scrollWheel: false,
            zoom: 6,
            mapTypId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);
    }

    function addMarker(lat, lng, icon, content) {
        var latlng = { 'lat': lat, 'lng': lng };
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            masWidth: 200,
            pixelOffset: new google.maps.Size(0, 20)
        })

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);

        })


    }

    initialize();

    var content1 = '<p style="color:blue;font-size:12px;"> Nossa Loja!</p>';
    addMarker(-20.128155, -41.863966, '', content1);
}

//fim google maps
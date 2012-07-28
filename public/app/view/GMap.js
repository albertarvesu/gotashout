Ext.define("Gotashout.view.GMap", {
    extend: "Ext.Map",
    xtype: 'gmap',
    config: {
        height: 400,
        width: 400,
        useCurrentLocation: true,
        listeners: {
            maprender : function(comp, map){
                new google.maps.Marker({
                    position: new google.maps.LatLng(this._geo.getLatitude(), this._geo.getLongitude()),
                    map: map
                });
            }
        }
    }
});
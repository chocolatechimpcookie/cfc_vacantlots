var app
app = angular.module('vacantlotsApp');

app.config(function(uiGmapGoogleMapApiProvider) {
    console.log('In config')
    uiGmapGoogleMapApiProvider.configure({
        //TODO: Factor this into another js file that isn't tracked with git?
        key: "AIzaSyA5sCewJikG42pgRQOIJ_NjnVv3c6O_d6I",
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})

app.controller('MapCtrl', function($scope, uiGmapGoogleMapApi, $state, sharedProperties, $http) {
    console.log('In controller')
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []
    $scope.map = { center: { latitude: 40.7356357, longitude: -74.18 }, zoom: 13 };

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
    });

    //Creates object containing info needed to create Google maps marker
    var createMarker = function(i, address, latitude, longitude, idKey) {
      if (idKey == null) {
        idKey = "id";
      }
      var ret = {
        latitude: latitude,
        longitude: longitude,
        title: address,
        icon: 'https://cdn1.iconfinder.com/data/icons/freeline/32/home_house_real_estate-32.png'
        //id: i
      };
      ret[idKey] = i;
      return ret;
    };

    var markers = [];
    var properties;
    // HTTP get to load property data from JSON file.
    $http.get('/map').then(function success(res)
            {
                properties = res.data;
                //TODO: Need some way to filter properties. There are too many to look at at once.
                var numProperties = properties.length;
                for (var i = 0; i < numProperties; i++) {
                    property = properties[i]
                    houseNumber = property.vitalHouseNumber
                    street = property.vitalStreetName
                    address = houseNumber + ' ' + street
                    latitude = property.latitude
                    longitude = property.longitude
                    console.log(i, address, latitude, longitude)
                    markers.push(createMarker(i, address, latitude, longitude))
                }
                $scope.markers = markers;
            }, function err(res)
            {
                console.log(res);
            });

    $scope.goBid = function (marker, event, model){
               sharedProperties.setString(model.title)
               $state.go('bidPage')
           };
});

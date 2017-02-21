module.exports = function networkConfigurationCtrl($http, NgTableParams) {
    
    var self = this;

    self.connection = new NgTableParams({}, {
        counts: [],

        getData: function() {
            return $http.get('./src/modules/network-configuration/data.jsons/connection.json').
            then(function(response) {
                return response.data.connection;
            })
        }
    })

    self.network = new NgTableParams({}, {
        counts: [],

        getData: function() {
            return $http.get('./src/modules/network-configuration/data.jsons/networkType.json').
            then(function(response) {
                return response.data.networkType;
            })
        }
    })

    self.portForward = new NgTableParams({}, {
        counts: [],

        getData: function() {
            return $http.get('./src/modules/network-configuration/data.jsons/portForwarding.json').
            then(function(response) {
                return response.data.portForwarding;
            })
        }
    })

    self.serviceNetwork = new NgTableParams({}, {
        counts: [],

        getData: function() {
            return $http.get('./src/modules/network-configuration/data.jsons/serviceNetwork.json').
            then(function(response) {
                return response.data.serviceNetwork;
            })
        }
    })

    return self;
}


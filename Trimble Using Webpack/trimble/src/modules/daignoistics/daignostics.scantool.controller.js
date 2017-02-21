module.exports= function($http,NgTableParams){
    var ts = {};  
    ts.componentDetails = new NgTableParams({},{
        counts: [],

        getData: function() {
            return $http.get('./src/modules/daignoistics/daignostics-scan-tools.json').
            then(function(response) {
                return response.data.scanTools;
            })
        }
    });
    return ts;
}
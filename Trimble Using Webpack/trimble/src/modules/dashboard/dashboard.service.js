module.exports = function ($http){
		this.getCardsData = getCardsData;

		function getCardsData(){
			return $http.get("./src/modules/dashboard/dashboardData.json")
		}		
	}

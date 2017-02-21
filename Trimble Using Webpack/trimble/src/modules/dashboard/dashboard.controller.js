module.exports = function (dashboardService) {
	    var dashboard = {}

	    dashboard.cardsData = [];

	    dashboardService.getCardsData().then(function(response) {
	        dashboard.cardsData = response.data;
	    })

	    return dashboard;
	}

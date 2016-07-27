var returnValue = {
	"message": "default",
	"lastPostTimestamp": "1468852448039",
	"authorizedDevices": ["8ki"],
	"headline": "default",
	"SSID": "linksysw",
	"messagingEnabled": "true",
	"venuePrivacyType": "private",
	"commentCount": 4,
	"id": "14hk0ks",
	"venueType": "Home",
	"backgroundImage": "https://ds-pd-wall.s3.amazonaws.com/gf8kioailtj.jpg",
	"longitude": -58.471203,
	"marqueePost": {
		"unixTimeMillis": 1468852448039,
		"followers": ["8ki"],
		"nickname": "Werem",
		"commentId": "14hk0ks_28531147551961_8ki_",
		"body": "sponsored post",
		"deviceId": "8ki",
		"timestamp": 0
	},
	"source": "GoogleLocationSource",
	"city": "CABA",
	"latitude": -34.586792,
	"venueOwner": "werem@yopmail.com",
	"sourceDate": "1468852534036",
	"state": "CABA",
	"venueName": "linksysw",
	"status": "success"
};
var venue = function(request, response, next){
	response.json(returnValue);
	next();
}

module.exports = venue;
var returnValue = '{"status":"success","id":"14hk0ks","venue_code":"14hk0lk","bssid":"001d7e650fe5","ssid":"6c696e6b73797377","venue_name":"linksysw","wifi_name":"linksysw","venue_type":"Home","headline":"default","message":"default","messaging_flag":"true","url_type":"popwall","shortUrl":"http://urlss.tdsspw.net/bv-14hk0lk","link":"http://popwifi.tdsspw.net/go/","venue_owner":"werem@yopmail.com","invitation_code":"CJS5B4","source":"WEB","registration_timestamp":"1468852533","venue_privacy_type":"private","latitude":-34.586792,"longitude":-58.471203,"messaging":[{"popwall":{"headline":"default","message":"default","link":"https://walls.tdsspw.net/wall?venueId=14hk0ks"}}]}';

var bienVenu = function(request, response, next){
	response.send(returnValue);
	next();
}

module.exports = bienVenu;
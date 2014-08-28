function getUsers(url, callback) {
	var request = new HMLHttpRequest();
	request.open("POST", url);
	request.onreadystatechange = function() {
		if (request.readyState === 4 && request.status === 200) {
			var type = request.getResponseHeader("Content-Type");
			if (type === "application/json")
				callback(JSON.parse(request.resonseText));
			else
				callback(request.responseText);
		}
	}
}
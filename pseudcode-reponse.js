PSEUDOCODE for JSON ENCODING

function
	create XMLHttpRequest
	open the request with POST (request all data)
	onreadystatechange function
		if the response is complete and successful
			call the success function to handle the data
	setRequestHeader
	send request in JSON format

function to handle request data
	traverse the JSON to identify if the email address entered exists in the database
		if the email address exists, update the record with the new information; save the record
		else, create a new record with the specified information; save the record
		give the user some feedback
var req = new XMLHttpRequest();

function storeData() {
	if(document.getElementById('query').value) {
					localStorage.query = document.getElementById('query').value;
	}
	if(document.getElementById('year').value) {
					localStorage.year = document.getElementById('year').value;
	}
	if(document.getElementById('month').value) {
					localStorage.month = document.getElementById('month').value;
	}
}

function searchEvent() {
	storeData();

	document.getElementById('result_area').innerHTML = 'now searching...';
	try {
		var keywords = editQuery(document.getElementById('query').value);
		var date = new Date();
		var ym = document.getElementById('year').value + document.getElementById('month').value
		var target_url = 
			'http://api.atnd.org/events/?keyword=' +
			keywords + '&' +
			'format=json&' +
			'count=100&' +
			'ym=' + ym; 
		req.open('GET', target_url, true);
		req.onload = showEvents;
		req.send(null);
	} catch (e) {
		alert(e.message);
	}
}

function editQuery(text) {
	var texts = text.split(',');
	var result_array = [];
	for(var i = 0 ; i < texts.length ; i++ ) {
		result_array.push(encodeURIComponent(texts[i]));	
	}
	return result_array.join(',');
}

function showEvents() {
	document.getElementById('result_area').innerHTML = '';
	var res = JSON.parse(req.responseText);
	var _div = document.getElementById('result_area');
	_div.innerHTML += res.results_returned + ' events<br />';
	_div.innerHTML += '<table>';
	for (var i = 0 ; i < res.events.length ; i++) {
					_div.innerHTML += '<tr>';
					_div.innerHTML += '<td>';
					_div.innerHTML += res.events[i].started_at.replace(/T/, ' ').replace(/:00\+09:00/, ' ');
					_div.innerHTML += '</td>';
					_div.innerHTML += '<td>';
					var _a = document.createElement('a');
					_a.href = res.events[i].event_url;
					_a.title = res.events[i].description;
					_a.target = '_blank';
					_a.innerText = res.events[i].title;
					_div.appendChild(_a);
					_div.innerHTML += '</td>';
					_div.innerHTML += '<td>';
					_div.innerHTML += res.events[i].address;
					_div.innerHTML += '</td>';
					_div.innerHTML += '</tr>';
					_div.innerHTML += '<br />';
	}
	_div.innerHTML += '</table>';
}

if(localStorage.query) {
				document.getElementById('query').value = localStorage.query
}
if(localStorage.month) {
				document.getElementById('month').value = localStorage.month
}
if(localStorage.year) {
				document.getElementById('year').value = localStorage.year
}

searchEvent();
document.getElementById('query').onchange = searchEvent;
document.getElementById('year').onchange = searchEvent;
document.getElementById('month').onchange = searchEvent;

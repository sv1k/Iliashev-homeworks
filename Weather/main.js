$(function () {
	"use strict";


	function currentTime(){
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		hours = checkTime(hours);
		minutes = checkTime(minutes);
		$(document).ready(function(){
			$(".status-bar").html(hours + ":" + minutes)
		})
		var repeat = setTimeout(currentTime, 500);
		return currentTime;
	};


	function checkTime(i){
		if(i < 10) {
			i = "0" + i;
		}
		return i;
	};

	var geolocation,
		latitude,
		longitude;

	$.getJSON('https://freegeoip.net/json/')
		.done (function (location){
			geolocation = location.city;
			latitude = location.latitude;
			longitude = location.longitude;
				function createScript(lat, long) {
					let basicUrl = "https://api.darksky.net/forecast/b1d8361f145557f19805d62a45a93e3a/",
					cb = "?callback=getWeather" + langVersion,
					script = document.createElement("script");
					script.src = basicUrl + lat + "," + long + cb;

				document.body.appendChild(script);
	};
		createScript(latitude, longitude);
			$(".location").append("<p>" + geolocation.toUpperCase() + "<br>" + "</p>");
	});

currentTime();
checkTime();

});


	var userLang = navigator.language;
	if(userLang === "ru") {
		var langVersion = "&lang=ru&units=si";
	} else {
		var langVersion = "&lang=en&units=us";
	}


function getWeather(data) {
	var weather = data;
	temperature = weather.currently.temperature;
	if(temperature <= 0) {
		temperature = (Math.floor(temperature))
	} else {
		temperature = (Math.ceil(temperature));
	}

	var weatherIcon = weather.currently.icon;
	console.log(weatherIcon);

	var today = new Date(weather.currently.time * 1000)
		.toLocaleString('en', 
		 {weekday: 'long',
			month: 'short',
			day: 'numeric'});

	$(document).ready(function(){
		$(".temp").html(temperature + "<span>" + "&deg" + "</span>");
		$(".weather-icon").addClass('flaticon-' + weatherIcon);
		$(".location p").append("<span>" + today.toUpperCase() + "</span>");
	});

	if(temperature <= 0) {
		$(".temperature p").css("padding-right", "10%");
	};


	console.log(today);

	console.log(weather);
};


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
	var weather = data,
			tomorrow = weather.daily.data[1],
			tomorrowTemp = Math.floor((tomorrow.temperatureMax + tomorrow.temperatureMin) / 2),
			secondDay = weather.daily.data[2],
			secondDayTemp = Math.floor((secondDay.temperatureMax + secondDay.temperatureMin) / 2),
			thirdDay = weather.daily.data[3],
			thirdDayTemp = Math.floor((thirdDay.temperatureMax + thirdDay.temperatureMin) / 2),
			fourthDay = weather.daily.data[4],
			fourthDayTemp = Math.floor((fourthDay.temperatureMax + fourthDay.temperatureMin) / 2),
			wind = Math.floor(weather.currently.windSpeed),
			tempFeels = weather.currently.apparentTemperature,
			humidity = (weather.currently.humidity) * 100;
	var temperature = weather.currently.temperature;
			temperature = (Math.floor(temperature));
	var weekWeather = weather.daily.summary,
			todayTempMin = Math.floor(weather.daily.data[0].temperatureMin),
			todayTempMax = Math.floor(weather.daily.data[0].temperatureMax);

	console.log(weekWeather);
	var weatherIcon = weather.currently.icon,
			today = new Date(weather.currently.time * 1000)
			.toLocaleString('en', 
			{weekday: 'long',
			month: 'short',
			day: 'numeric'});

			console.log(wind);

	$(document).ready(function(){
		$(".temp").html(temperature + "<span>" + "&deg" + "</span>");
		$(".weather-icon").addClass('flaticon-' + weatherIcon);
		$(".location p").append("<span>" + today.toUpperCase() + "</span>");
		$("p.day1").append(new Date(tomorrow.time * 1000).toLocaleString('en', {weekday: 'long'}));
		$(".tab-1 span").addClass('flaticon-' + tomorrow.icon);
		$(".tab-1-temp").append( tomorrowTemp + "&deg;");
		$("p.day2").append(new Date(secondDay.time * 1000).toLocaleString('en', {weekday: 'long'}));
		$(".tab-2 span").addClass('flaticon-' + secondDay.icon);
		$(".tab-2-temp").append( secondDayTemp + "&deg;");
		$("p.day3").append(new Date(thirdDay.time * 1000).toLocaleString('en', {weekday: 'long'}));
		$(".tab-3 span").addClass('flaticon-' + thirdDay.icon);
		$(".tab-3-temp").append( thirdDayTemp + "&deg;");
		$("p.day4").append(new Date(fourthDay.time * 1000).toLocaleString('en', {weekday: 'long'}));
		$(".tab-4 span").addClass('flaticon-' + fourthDay.icon);
		$(".tab-4-temp").append( fourthDayTemp + "&deg;");
		$(".weather-status p").append("<span>"+wind + "m/s"+"</span>").append("<span>"+ "Feels like: "+ Math.floor(tempFeels) + "&deg;" + "c" + "</span>").append("<span class='flaticon-raindrop'>"+" %" + Math.floor(humidity)+"</span>");
		$(".additional-info p").append("H: " + todayTempMax + "&#x2103;" + " / " + "L: " + todayTempMin + "&#x2103;" + "<br>" + "<br>"+ weekWeather).css("display", "none");
	});

			$(".screen").on("click", function () {
				$(".tabs p span").fadeToggle(200);
				$(".tabs").slideToggle(300);
				$(".additional-info p").toggle(300);
			});


	if(temperature <= 0) {
		$(".temp").css("padding-right", "10%");
	};


	console.log(today);

	console.log(weather);
};


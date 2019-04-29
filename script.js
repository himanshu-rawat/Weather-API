(function() {
	btn.onclick = function() {
		let input = document.getElementById('inp');
		let btn = document.getElementById('btn');
        let myKey = 'c0ddab59f23c21756b3b28c91e2d36e7';
        let loader =document.getElementById("loader");
        let result=document.getElementById("result");
		let val = input.value;
		function newtworkRequest() {
            result.style.backgroundColor = "rgba(0,0,0,0.8)";
            loader.style.display="block";
			let weather =
				'https://api.openweathermap.org/data/2.5/weather?q=' + val + '&units=metric' + '&appid=' + myKey;

			fetch(weather).then(function(data) {
				if (data.status !== 200) {
                    loader.style.display="none";
                    result.style.backgroundColor = "rgb(66, 68, 60,0.3)";
					return;
				}
				data.json().then(function(d) {
                    loader.style.display="none";
                    result.style.backgroundColor = "rgb(66, 68, 60,0.3)";
					//console.log(d);
					display(d);
				});
			});
		}

		function display(inf) {
			let details = inf;
            //console.log(details);
            
			let cityname=document.createTextNode(details.name);
            let countryname= document.createTextNode(details.sys.country);
			let temperature = document.createTextNode(details.main.temp);


			let p="City Name :"+ JSON.stringify (cityname);
			document.getElementById("result").innerHTML=p;
			console.log(p);
			document.querySelector("#result").textContent="City Name "+details.name;
			document.querySelector("#result").textContent="Temperature Right Now in Celsius "+details.main.temp;
			

			// let p = document.createElement('p');
			// let data = document.createTextNode("City Name "+details.name);
			// let cname=JSON.stringify(data);
			// console.log(typeof cname);
			// p.appendChild(cname);
			// document.body.appendChild(p)



            // p.appendChild(name);
            // result.prepend(p);
			// console.log('City Name: ' + details.name);
			// console.log('Country Name: ' + details.sys.country);
			// console.log('Temperature Right Now in Celcius: ' + details.main.temp);
		}
		newtworkRequest();
	};
})();
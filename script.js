// https://api.telegram.org/bot1063199291:AAHCFJVNa9qHK14LRU_s80cTHCWPmxwwH6Y/getUpdates

// https://api.telegram.org/bot1063199291:AAHCFJVNa9qHK14LRU_s80cTHCWPmxwwH6Y/sendMessage?chat_id=-386025463&text=hi_i_am_a_bot

let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=Dnipropetrovsk&units=metric&apikey=f69cb1e857ef66e67dae17159260f014';

let message;

function sendFetch() {
  fetch(urlWeather)
  .then(response => response.json())
  .then((out) => {

  message =`
    temp: ${out.main.temp}
                                      
    temp max: ${out.main.temp_max} 
                                      
    temp min: ${out.main.temp_min} 
                                      
    feels like: ${out.main.feels_like} 
                                      
    humidity: ${out.main.humidity}
                                      
    pressure: ${out.main.pressure}
                                      
    wind speed: ${out.wind.speed}`;
    
    sendTelegramMess();
  })
}
sendFetch();

function sendTelegramMess() {
  let token = "1063199291:AAHCFJVNa9qHK14LRU_s80cTHCWPmxwwH6Y";
  let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-386025463&text=';
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url + message, true);
  xhttp.send();
}




// function time() {
//     let start = new Date;
//     let now = new Date;
    
//     start.setHours(13);
//     start.setMinutes(00);
//     start.setSeconds(00);
//     start.setDate(now.getDate());
//     start.setMonth(now.getMonth() + 1);
//     start.setFullYear(now.getFullYear());

//     if (start.getDate() <= now.getDate() && start.getHours() <= now.getHours() && start.getMinutes() <= now.getMinutes() && start.getSeconds() <= now.getSeconds()) {
//       fetchRequest();
//     }
// }
// setInterval(() => {
//     time();
// }, 1000);
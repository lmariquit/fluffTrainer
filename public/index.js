// // var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// // var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
// // var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
// const synth = window.speechSynthesis;
// const recognition = new SpeechRecognition();
// recognition.continuous = true

// const icon = document.querySelector('i.fa.fa-microphone')
// const diffIcon = document.querySelector('i.fa.fa-microphoneDiff')
// let paragraph = document.createElement('p');
// let container = document.querySelector('.text-box');
// container.appendChild(paragraph);
// const sound = document.querySelector('.sound');

// icon.addEventListener('click', () => {
//   sound.play();
//   dictate();
// });

// diffIcon.addEventListener('click', () => {
//   sound.play();
//   stopListening();
// });

// const dictate = () => {
//   recognition.stop()
//   recognition.start();
//   recognition.onresult = (event) => {
//     const speechToText = event.results[event.resultIndex][0].transcript;
//     console.log(speechToText)

//     paragraph.textContent = speechToText;

//     if (event.results[event.resultIndex]) {

//       if (speechToText.includes('like')) {
//         console.log('you said like...')
//           // speak(scoldForSayingLike);
//       };

//       // if (speechToText.includes('what is today\'s date')) {
//       //     speak(getDate);
//       // };

//       // if (speechToText.includes('what is the weather in')) {
//       //     getTheWeather(speechToText);
//       // };

//     }
//     console.log(event)
//   }
// }

// recognition.onspeechend = function () {
//   // recognition.stop();
//   console.log('Speech recognition has stopped.');
//   console.log('pls start again')
//   dictate()
//   // recognition.start();
// }

// const stopListening = () => {
//   recognition.stop()
//   console.log('we have stopped listening')
// }

// // SPEAK BACK functions
// const speak = (action) => {
//   utterThis = new SpeechSynthesisUtterance(action());
//   synth.speak(utterThis);
// };

// // const scoldForSayingLike = () => {
// //   console.log('you said like...')
// //   return 'You said like. Why would you do that'
// // }

// // const getTime = () => {
// //   const time = new Date(Date.now());
// //   return `the time is ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
// // };

// // const getDate = () => {
// //   const time = new Date(Date.now())
// //   return `today is ${time.toLocaleDateString()}`;
// // };

// // const getTheWeather = (speech) => {
// //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${speech.split(' ')[5]}&appid=58b6f7c78582bffab3936dac99c31b25&units=metric`) 
// //   .then(function(response){
// //     return response.json();
// //   })
// //   .then(function(weather){
// //     if (weather.cod === '404') {
// //       utterThis = new SpeechSynthesisUtterance(`I cannot find the weather for ${speech.split(' ')[5]}`);
// //       synth.speak(utterThis);
// //       return;
// //     }
// //     utterThis = new SpeechSynthesisUtterance(`the weather condition in ${weather.name} is mostly full of ${weather.weather[0].description} at a temperature of ${weather.main.temp} degrees Celcius`);
// //     synth.speak(utterThis);
// //   });
// // };
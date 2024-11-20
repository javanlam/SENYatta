// const {authenticate} = require('@google-cloud/local-auth');

// async function quickstart() {
//   const localAuth = await authenticate({
//     scopes: ['https://www.googleapis.com/auth/blogger'],
//     keyfilePath: 'google_credentials.json',
//   });
//   console.log('Tokens:', localAuth.credentials);
// }
// quickstart();


// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

const api_key = 'API KEY';

// Import other required libraries
const fs = require('fs');
const util = require('util');
// Creates a client
const client = new textToSpeech.TextToSpeechClient();
// async function quickStart(text) {
async function quickStart() {
  // The text to synthesize
  const text = 'EMIA收皮';
  // const text = cashier[0][dialogue];

  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML voice gender (optional)
    voice: {languageCode: 'yue-HK', ssmlGender: 'FEMALE'},
    // select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  // var audio = new Audio('output.mp3');
  // audio.play();
  var written = true;
  console.log('Audio content written to file: output.mp3');
}
quickStart();

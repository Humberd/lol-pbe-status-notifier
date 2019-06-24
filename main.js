const fetch = require('node-fetch');

const TICK_INTERVAL = 5000;
const ALARM_DURATION = 1000 * 60 * 2;

let vlcPlayer = 'vlc.exe';
let status;

function setStatus(newStatus) {
  if (status === 'offline' && newStatus === 'online') {
    console.log('Status Changed!!!');
    playSound(ALARM_DURATION);
  }

  status = newStatus;
  console.log(`${new Date().toTimeString()} - ${newStatus}`);
}

function playSound(stopAfter) {
  const player = require('play-sound')(opts = {player: vlcPlayer});

  const playerInstance = player.play('Anthem of Europe.mp3', (err) => {
    if (err) {
      console.error(err);
    }
  });

  setTimeout(() => {
    playerInstance.kill();
  }, stopAfter);
}

async function loop() {
  const response = await fetch('https://status.pbe.leagueoflegends.com/shards/pbe');
  const body = await response.json();

  const newStatus = body.services[0].status;
  setStatus(newStatus);
}

async function main(timeInterval) {
  setInterval(async () => {

    await loop();

  }, timeInterval);

  await loop();
}

// ********* get vlc location *****************

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

function askQuestion() {
  return new Promise((resolve, reject) => {
    rl.question('Please select a vlc.exe or other player of your choice: ', path => {
      path = path.trim();

      rl.close();
      resolve(path);
    });
  });
}

async function getVlcPath() {
  try {
    return await askQuestion();
  } catch (e) {
    return await getVlcPath();
  }
}

async function initialSequence() {
  const vlcPath = await getVlcPath();
  if (vlcPath) {
    vlcPlayer = vlcPath;

    playSound(5000);
    console.log('------------------------------------------------------------------------------------');
    console.log('----- Now the player should be opened to check if it works.  -----------------------');
    console.log('----- If not please restart the program and provide a valid path again. ------------');
    console.log('------------------------------------------------------------------------------------');
  }

  return main(TICK_INTERVAL);

}

initialSequence();

const fetch = require('node-fetch');
const player = require('play-sound')(opts = {player: 'vlc.exe'});

const TICK_INTERVAL = 5000;
const ALARM_DURATION = 1000 * 60 * 2;

let status;

function setStatus(newStatus) {
  if (status === 'offline' && newStatus === 'online') {
    console.log('Status Changed!!!');
    playSound();
  }

  status = newStatus;
  console.log(`${new Date().toTimeString()} - ${newStatus}`);
}

function playSound() {
  const playerInstance = player.play('Anthem of Europe.mp3', (err) => {
    if (err) {
      console.error(err)
    }
  });

  setTimeout(() => {
    playerInstance.kill();
  }, ALARM_DURATION);
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

main(TICK_INTERVAL);

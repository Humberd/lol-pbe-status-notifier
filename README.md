<h1 align="center">Welcome to lol-pbe-status-watcher 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D12.0.0-blue.svg" />
  <a href="https://github.com/Humberd/lol-pbe-status-notifier#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/Humberd/lol-pbe-status-notifier/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-no-red.svg" target="_blank" />
  </a>
  <a href="https://github.com/Humberd/lol-pbe-status-notifier/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> A script that plays Ode to Joy when League of Legends PBE server status goes from OFFLINE to ONLINE

## Details

The script checks every 15 seconds if the LOL PBE game server status goes from OFFLINE to ONLINE.
If so, then opens [VLC](https://www.videolan.org/vlc/) and plays Ode to Joy for 2 minutes.

## Why?

When a new League of Legends mode called Teamfight Tactics was available in the Public Beta Environment server
it had a player queue of 500 000, which resulted in a wait time of over 30 hours. 
Fortunately, every day the server went offline to have a maintenance for 2 hours and thus the queue had been resetted.
This was a perfect opportunity to instantly join the game without or with a relatively small queue.
Unfortunately, this had happened after midnight, when I was asleep.

This is why I wrote this script to play Ode to Joy in order to wake me up in the middle of the night.

## Prerequisites

- node &gt;=12.0.0 [link](https://nodejs.org/dist/v12.4.0/node-v12.4.0-x64.msi)
- vlc.exe

## Install

```sh
npm ci
```

## Usage

```sh
npm run start
```

## Author

👤 **Maciej Sawicki**

* Github: [@Humberd](https://github.com/Humberd)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Humberd/lol-pbe-status-notifier/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Maciej Sawicki](https://github.com/Humberd).<br />
This project is [MIT](https://github.com/Humberd/lol-pbe-status-notifier/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

<!-- Improved compatibility of back to top link: See: https://github.com/mayureshvs/Voting_Dapp/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Voting_Dapp. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

  <!-- <a href="https://github.com/mayureshvs/Voting_Dapp">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">E-Voting-Dapp</h3>

  <p align="center">
    A Ethereum Based Voting Web Application with Web3.js 4.0.3(latest)
    <br />
    <a href="https://github.com/mayureshvs/Voting_Dapp"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://youtu.be/7Qt_tiNDjd4">View Demo</a>
    ·
    <a href="https://github.com/mayureshvs/Voting_Dapp/issues">Report Bug</a>
    ·
    <a href="https://github.com/mayureshvs/Voting_Dapp/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

### Description

- Web2 consists of centralized databases, which expose voting apps to potential threats such as vote manipulation, changes to election rules, and more.
- How can voting be improved with Web3 or blockchain?
- Code on blockchain will be shared secured and unchangeable.
- Smart Contract - code on blockchain - Like microservice that lives on web
- Ledger is the Data on blockchain, while the smart contract is microservices which do stuff on data and communicate with other services.
- DAPP
    - Decentralized Application - Data and code shared

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![NPM][npm-shield]][npm-url]
* [![solc][solc-shield]][solc-url]
* [![web3JS][web3JS-shield]][web3JS-url]
* [![jQuery][jQuery-shield]][jQuery-url]
* [![truffle][truffle-shield]][truffle-url]
* [![Ganache][ganache-shield]][ganache-url]
* [![Metamask][metamask-shield]][metamask-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

Make Sure Node.JS is installed in your system. Then follow below commands to install the prequisite softwares or libraries

  * For Installing Solidity
    ```sh
    npm install -g solc
    ```
* For Installing Truffle Suite
  ```sh
  npm install -g truffle
  ```
* For Installing Ganache
  ```sh
  npm install ganache-cli
  ```


### Installation



1. Clone the repo
   ```sh
   git clone https://github.com/mayureshvs/Voting_Dapp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Testing

* To test the smart contract use below command after deployment
  ```sh
  truffle test
  ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

* Run a local blockchain server using Ganache. 
  ```sh
  ganache-cli
  ```
* Note the port which Ethereum RPC is listening to, Generally, Ganache Desktop app by default gets hosted on PORT 7545. While Ganache cli gets hosted on 8545. 
* Update the RPC server i.e. HOST and PORT in truffle-config.js
  ```JSON
  networks: {

      development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      }
  }
  ```
* Time to deploy the smart contract. We can deploy our Election contract on newly hosted blockchain using below command
  ```sh
  truffle migrate
  ```
* If you are deploying contract on same blockchain twice. Use below Command.
  ```sh
  truffle migrate --reset
  ```
* It deploys the smart contract to hosted blockchain and also outputs a compiled smart contract artifact with Election.json in build folder.
* Copy this file and paste it in Client/contracts folder as client is our npm package acting as a separate Node JS project which has index.html and index.js which will interact with smart contract with the help of ABI(Abstract Binary Interface) in Election.json.
* Navigate to client folder and run dev script to launch the browser.
  ```sh
  npm run dev
  ```
* Import and connect any account from Ganache (Ganache gives 10 accounts for testing purpose having 1000 ETH each) in metamask using Private Key.
*  For Detailed Demo you can visit [here](https://youtu.be/7Qt_tiNDjd4)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/mayureshvs/Voting_Dapp/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - Mayuresh Sarode - mayureshsarode61@gmail.com

Project Link: [https://github.com/mayureshvs/Voting_Dapp](https://github.com/mayureshvs/Voting_Dapp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

I would like to give a big thanks to Dapp University, whose tutorial I followed to build this project.

* [Dapp University - How to Build Ethereum Dapp](https://youtu.be/3681ZYbDSSk)
* [Truffle Migrations Explained](https://www.sitepoint.com/truffle-migrations-explained/)
* [Build Your First Dapp With Web3.js](https://betterprogramming.pub/build-your-first-dapp-with-web3-js-9a7306d16a61)
* [Metamask Ethereum Provider API](https://docs.metamask.io/wallet/reference/provider-api/)
* [Web3.JS 4.0.3 Documentation](https://docs.web3js.org/)
* [Using lite Server](https://www.freecodecamp.org/news/how-you-can-use-lite-server-for-a-simple-development-web-server-33ea527013c9/)


<!-- * [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mayureshvs/Voting_Dapp.svg?style=for-the-badge
[contributors-url]: https://github.com/mayureshvs/Voting_Dapp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mayureshvs/Voting_Dapp.svg?style=for-the-badge
[forks-url]: https://github.com/mayureshvs/Voting_Dapp/network/members
[stars-shield]: https://img.shields.io/github/stars/mayureshvs/Voting_Dapp.svg?style=for-the-badge
[stars-url]: https://github.com/mayureshvs/Voting_Dapp/stargazers
[issues-shield]: https://img.shields.io/github/issues/mayureshvs/Voting_Dapp.svg?style=for-the-badge
[issues-url]: https://github.com/mayureshvs/Voting_Dapp/issues

[npm-shield]: https://img.shields.io/badge/npm-v8.1.0-blue
[npm-url]: https://docs.npmjs.com/

[solc-shield]: https://img.shields.io/badge/solidity-v0.8.20-blue
[solc-url]: https://docs.soliditylang.org/en/v0.8.20/

[web3js-shield]: https://img.shields.io/badge/web3.JS-v4.0.3-blue
[web3js-url]: https://web3js.org/#/

[jQuery-shield]: https://img.shields.io/badge/jQuery-v3.7.0-blue
[jQuery-url]: https://jquery.com 

[truffle-shield]: https://img.shields.io/badge/truffle-v5.10.2-blue
[truffle-url]: https://trufflesuite.com/docs/truffle/

[ganache-shield]: https://img.shields.io/badge/ganache-v7.8.0-blue
[ganache-url]: https://trufflesuite.com/docs/ganache/

[metamask-shield]: https://img.shields.io/badge/metamask-Extension-blue
[metamask-url]: https://metamask.io/download/

<!-- [license-shield]: https://img.shields.io/github/license/mayureshvs/Voting_Dapp.svg?style=for-the-badge -->
[license-shield]: https://img.shields.io/badge/license-MIT-green?style=for-the-badge
[license-url]: https://github.com/mayureshvs/Voting_Dapp/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mayureshvs
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=green
[NodeJS-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

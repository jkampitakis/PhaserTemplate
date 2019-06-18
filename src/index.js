import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import {HideSplashScreen, SetLocalNotification} from './bridge'

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
	HideSplashScreen();
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(200, 150, "logo");
  logo.setPosition(logo.width/2, 150);

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 1000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });

	SetLocalNotification();
}

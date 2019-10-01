const CLOUD_COUNT = 10;

var skybox = document.getElementById("skybox");

function initScene() {
	this.generateClouds();
}

function generateClouds() {
	for (let i = 1; i < CLOUD_COUNT; i++) {
		let cloud = document.createElement("div");
		cloud.classList.add('cloud',`cloud__${i}`);

		this.skybox.appendChild(cloud);
	}
}

initScene();
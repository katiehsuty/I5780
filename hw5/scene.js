/*
function sceneDesign() {

  // add obstacles to the scene
  scene.obstacles = [];
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(150,0,150), 50) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(-100,0,200), 30) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(0,0,-100), 60) )
    
  scene.targets = [];
  scene.targets.push (new Target (1, new THREE.Vector3 (300,0,300) ));
  scene.targets.push (new Target (2, new THREE.Vector3 (-200,0,150) ));
  scene.targets.push (new Target (3, new THREE.Vector3 (250,0,-200) ));
  scene.targets.push (new Target (4, new THREE.Vector3 (0,0,-200) ));

}
*/

function sceneFromJSON () {//改亂數
  const JSONStr = '{"obstacles":[{"center":{"x":209,"y":-1,"z":71},"size":30},{"center":{"x":3,"y":5,"z":263},"size":70},{"center":{"x":5,"y":3,"z":-160},"size":40},{"center":{"x":-208.14531121285557,"y":-1.780298028666322e-14,"z":80.17749538510077},"size":25}]}';
  
  
  let myScene = JSON.parse (JSONStr);
  scene.obstacles = []
  myScene.obstacles.forEach (function (obs) {
  	scene.obstacles.push (new Obstacle (new THREE.Vector3 (obs.center.x, obs.center.y, obs.center.z), obs.size))
  })
  

}
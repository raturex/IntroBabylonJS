/* Intro to BabylonJS (version 0.1.0)
 *
 * runtime.js: Basic Scene set up function.
 * This is a common utility function in BabylonJS official samples
 * and aims to provide minimal objects required in a simple scene
 * (scene, camera, light, etc.)
 */

function createSceneTuto(engine) {
    //Creation of the scene
    var scene = new BABYLON.Scene(engine);

    // Adding light and camera
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(10, 50, 50), scene);
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 40, new BABYLON.Vector3(0,0,0), scene);

    // Adding new molecule molecule
    var molecule = new Molecule ("ethanol", "Ethanol", new BABYLON.Vector3(0,0,0), scene);// modif de position dans la molecule
    //molecule.position = new BABYLON.Vector3(0,0,0);

    scene.registerBeforeRender(function () {

    // lIGHT from camera anytime !
        light.position = camera.position;

        //animate the mesh
        molecule.rotation.x += 0.01;
        molecule.rotation.z += 0.02;
    });
return scene;
}

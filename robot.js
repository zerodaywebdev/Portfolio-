
// robot.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.1/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, mixer, clock;

function initRobotScene() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.bottom = '10px';
    container.style.right = '10px';
    container.style.width = '300px';
    container.style.height = '300px';
    container.style.zIndex = '9999';
    container.style.pointerEvents = 'none';  // Prevent it from blocking clicks
    document.body.appendChild(container);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
    camera.position.set(2, 1.5, 4);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    container.appendChild(renderer.domElement);

    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    scene.add(light);

    const loader = new GLTFLoader();
    clock = new THREE.Clock();

    loader.load('https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
        gltf => {
            const robot = gltf.scene;
            scene.add(robot);
            mixer = new THREE.AnimationMixer(robot);
            if (gltf.animations.length) {
                mixer.clipAction(gltf.animations[0]).play();
            }
            animate();
        },
        undefined,
        error => console.error('Error loading model:', error)
    );
}

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    if (mixer) mixer.update(delta);
    renderer.render(scene, camera);
}

window.addEventListener('DOMContentLoaded', initRobotScene);

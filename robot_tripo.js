
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@latest/examples/jsm/loaders/GLTFLoader.js';

function init() {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.bottom = '10px';
  container.style.right = '10px';
  container.style.width = '300px';
  container.style.height = '300px';
  container.style.pointerEvents = 'none';
  document.body.appendChild(container);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
  camera.position.set(2, 1.5, 4);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(300, 300);
  container.appendChild(renderer.domElement);

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
  scene.add(light);

  const loader = new GLTFLoader();
  loader.load(
    'tripo_pbr_model_310b1146-71f7-4a3e-80ee-94acde59eeb9.glb',
    gltf => {
      scene.add(gltf.scene);
      const mixer = new THREE.AnimationMixer(gltf.scene);
      if (gltf.animations.length) {
        mixer.clipAction(gltf.animations[0]).play();
      }
      const clock = new THREE.Clock();
      const animate = () => {
        requestAnimationFrame(animate);
        mixer.update(clock.getDelta());
        renderer.render(scene, camera);
      };
      animate();
    },
    undefined,
    err => console.error('Error loading GLB:', err)
  );
}

window.addEventListener('DOMContentLoaded', init);

import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import "./SCSS/style.scss";
// Scene
const scene = new THREE.Scene();
// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1, 500
)
camera.position.set(0, 0, 3)
// Create Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0xfafafa });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
// Lights
{
    const color = 0xFFFFFF;
    const intensity = .3;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
}
// Render cube
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);

document.body.appendChild(renderer.domElement)
// Add controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;

function animate() {
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update()
    requestAnimationFrame(animate)
}
animate();


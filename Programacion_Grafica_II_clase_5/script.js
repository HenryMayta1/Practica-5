
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderizar = new THREE.WebGLRenderer();
renderizar.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizar.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cubo = new THREE.Mesh(geometry, material);
escena.add(cubo);

camara.position.z = 5;

const translateX = document.getElementById('translateX');
const rotateY = document.getElementById('rotateY');
const scale = document.getElementById('scale');

function animate() {
  requestAnimationFrame(animate);

  cubo.position.x = parseFloat(translateX.value); // Traslación en X
  cubo.rotation.y = THREE.MathUtils.degToRad(parseFloat(rotateY.value)); // Rotación en Y
  cubo.scale.set(scale.value, scale.value, scale.value); // Escalado uniforme

  renderizar.render(escena, camara);
}

animate();

window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderizar.setSize(window.innerWidth, window.innerHeight);
});
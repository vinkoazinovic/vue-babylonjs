import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  PointLight,
  MeshBuilder,
  StandardMaterial,
  Color3,
  Texture,
  CubeTexture,
} from '@babylonjs/core';

const createScene = (canvas) => {
  const engine = new Engine(canvas); // Create engine
  const scene = new Scene(engine); // Create scene
  scene.clearColor = new Color3(0, 0, 0); // Change scene background color
  const camera = new ArcRotateCamera('camera', 0, 0, 15, Vector3.Zero(), scene); // Create camera
  camera.attachControl(canvas); // Let the user move the camera
  //  camera.upperRadiusLimit = 50;
  //  camera.maxZ = 30;
  const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene); // Create light
  light.intensity = 0.5;
  light.groundColor = new Color3(0, 0, 1);

  // Create sunlight
  const sunLight = new PointLight('sunLight', Vector3.Zero(), scene);
  sunLight.intensity = 2;
  // Create Sun
  const sunMaterial = new StandardMaterial('sunMaterial', scene); // Create planet1 material
  sunMaterial.emissiveTexture = new Texture('/assets/sun.jpg'); // Add texture to material
  const sun = MeshBuilder.CreateSphere('sun', { segments: 24, diameter: 4 }, scene);
  sun.material = sunMaterial;
  sunMaterial.diffuseColor = new Color3(0, 0, 0); // Remove light reflection from material
  sunMaterial.specularColor = new Color3(0, 0, 0); // Remove light reflection from material

  // Create Planet1
  const planet1Material = new StandardMaterial('planet1Material', scene); // Create planet1 material
  planet1Material.diffuseTexture = new Texture('/assets/planet1.jpg'); // Add texture to material
  planet1Material.specularColor = new Color3(0, 0, 0); // Remove light reflection from material
  const planet1 = MeshBuilder.CreateSphere('planet1', { segments: 16, diameter: 1 }, scene);
  planet1.material = planet1Material;
  planet1.position.x = 4;

  // Create skybox
  const skybox = new MeshBuilder.CreateBox('skybox', { size: 1000.0 }, scene);
  //  skybox.infiniteDistance = true;
  const skyBoxMaterial = new StandardMaterial('skybox', scene);
  skyBoxMaterial.backFaceCulling = false; // Don't render what we cant see
  skyBoxMaterial.reflectionTexture = new CubeTexture('/assets/skybox', scene);
  skyBoxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
  skyBoxMaterial.specularColor = new Color3(0, 0, 0);
  skyBoxMaterial.diffuseColor = new Color3(0, 0, 0);
  skybox.material = skyBoxMaterial;

  engine.runRenderLoop(() => {
    scene.render();
  });
  window.addEventListener('resize', () => {
    engine.resize();
  });
};

export default createScene;

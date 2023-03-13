import Module from 'manifold-3d'

async function loadManifold(){
  console.log(Module);
  const wasm = await Module()
  console.log(wasm);
  wasm.setup();
}
loadManifold()
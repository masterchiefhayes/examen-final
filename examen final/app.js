function obtenerCategorias(){
  return JSON.parse(localStorage.getItem("categorias") || "[]");
}
function guardarCategorias(d){
  localStorage.setItem("categorias", JSON.stringify(d));
}
function agregarCategoria(cat){
  let d = obtenerCategorias();
  cat.id = Date.now();
  d.push(cat);
  guardarCategorias(d);
}
function editarCategoria(id, n){
  let d = obtenerCategorias().map(c => c.id == id ? {...c, ...n} : c);
  guardarCategorias(d);
}

function obtenerProductos(){
  return JSON.parse(localStorage.getItem("productos") || "[]");
}
function guardarProductos(d){
  localStorage.setItem("productos", JSON.stringify(d));
}
function agregarProducto(p){
  let d = obtenerProductos();
  p.id = Date.now();
  d.push(p);
  guardarProductos(d);
}
function editarProducto(id, n){
  let d = obtenerProductos().map(p => p.id == id ? {...p, ...n} : p);
  guardarProductos(d);
}

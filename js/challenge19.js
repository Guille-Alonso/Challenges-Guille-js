let products = ['agua','cerveza','gin','vino','fernet','cachaza','gatorade','ron','vodka','whisky'];
let trolley = [];

const addProduct = ()=>{
  const productToAdd = prompt('Que producto deseas agregar al carrito?').toLowerCase();
  if(products.includes(productToAdd)){
    trolley.push(productToAdd);
  }else{
    alert('No vendemos ese producto, volvé mañana')
  }
}

const getTrolley = ()=>{
  alert('Los productos de su carrito son: \n- ' + trolley.join('\n- '))
}

function getProductFromTrolley (){
  const productToFind = prompt('Que producto deseas ver de tu carrito?').toLowerCase();
  if(trolley.includes(productToFind)){
    const product = trolley.find(drink => drink == productToFind)
    alert(product)
  }else{
    alert('No tienes ese producto en tu carrito')
  }
}

const findProducts = function (){
  const search = prompt('Buscar bebidas...').toLowerCase();
  const results = products.filter(product=>product.includes(search));
  alert(results)
}

const removeProductFromTrolley = ()=>{
  const productToRemove = prompt('Que bebida deseas eliminar de tu carrito?').toLowerCase();
  let trueOrFalse = checkIfIsInTrolley(productToRemove);
  if(trueOrFalse){
        trolley = trolley.filter(product=>product!=productToRemove);
        alert('Producto eliminado')
    }
  }
  

function checkIfIsInTrolley(product){
  if(!trolley.includes(product)){
    alert('No tienes ese producto en tu carrito');
    return false;
  }else return true;
}

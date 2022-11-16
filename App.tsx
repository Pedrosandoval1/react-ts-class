import * as React from 'react';
import './style.css';

const SayHai = () =>{
  const lenguaje = 'es';
  return lenguaje === 'es' ?  <span>Holaa</span> : <span>Hello</span>
}
const SayHai1 = () =>{
  const lenguaje1 = 'es';
  return lenguaje1 === 'es' ? <span>Mundo</span> : <span>World</span>
}
const Saludar = () =>{
  return(<span><SayHai/> <SayHai1/></span>)
}

// cuando es una constante normal se tiene que agregar '{}' 
// y después dentro de eso meter la variable, constante o let xd
// cuando es una función y quieres agregar dentro de algú  div y así
// u otra función dentro de otra función es agregar <Función/>
const Nombres = [
  'Juan',
  'Pedro',
  'Noah',
  'Jahlu',
  'Eddy'
 ]
// const Valores = Nombres.map( nombre =>{
//   return (<li>{nombre}</li>)
// })
const Función =  () =>{
  const NuevosNombres = []
    Nombres.forEach( (nombre, index) => NuevosNombres.push(<li key= {index}>{nombre}</li>))
    //en el return también se puede agregar html y que se pinte directamente en la
    //función pero agregar ul y luego li no se podrían alinear a un li
   return (<ul>{NuevosNombres}</ul>)
 }
 
export default function App() {
  return (
    <div>
{/*  función */}
      <h1><Saludar/></h1>
      
{/*  Constante */}
      {/* {Valores} */}
      {/* es una función agregando el push y forEach */}
      <Función/>
      
    </div>
  );
}



// primera vez que utilizo react
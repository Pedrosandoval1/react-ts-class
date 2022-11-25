import * as React from 'react';
import { useState } from 'react';
import './style.css';
// es para los componentes, componentDidMount() componentDidUpdate() componentWillUnmount import  {useEffect}  from 'react'

//inicio

const Form = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
// se agregan valores para el useState, es como poner un valor, depsu+es eñ setValor1 es para ir agregando, como un evaluador, después se agrega ese trozo de jsonplacenholder que es fake para poder mostrar el title y body, luego al form agregamos el onsubmit con onSubmit={(va1)=> sendForm(va1)}> para poder valuar el form.
  const sendForm = (va1)=>{
    va1.preventDefault()
    fetch( 'https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
      title: valor1,
      body: valor2,
      userId: 1,
    }),
     headers:{"content-type": "application/json; charset=UTF-8"
    }
    }) 
    .then(Response => Response.json())
    .then(json => console.log(json)) 
  }
  
  return (
    <form onSubmit={(va1)=> sendForm(va1)}>
      <div>
        <label htmlFor="title">Title  </label>
        <br />
        <input type="text" id="title" onChange={ (va1) => setValor2(va1.target.value)}/>
      </div>
      <div>
        <label htmlFor="body" >Publicación </label>
        <br />
        <textarea id="body" onChange= {(va1) => setValor1(va1.target.value)} ></textarea>
      </div>
      <br/>
      <input type="submit" value="enviar" />
    </form>
  );
};
 
//fin

//inicio
// evento, onCharge actualizar el estado cuando se está pasando una propiedad
const Saludo = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <input type="text" onChange={(ev) => setName(ev.target.value)} />
      <p>Hola {name}</p>
    </div>
  );
};
//fin

//inicio
const Button = () => {
  //conteo, actualización de los click
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {/* con el state */}
      <button onClick={() => setCounter(counter + 1)}>
        CLICK ME {counter}
      </button>
    </div>
  );
};
//fin

//inicio
const lenguaje = 'es';
const SayHai = () =>
  lenguaje === 'es' ? <span>Hola</span> : <span>Hello</span>;

const lenguaje1 = 'es';
const SayHai1 = () =>
  lenguaje1 === 'es' ? <span>Mundo</span> : <span>World</span>;

const Saludar = () => (
  <span>
    <SayHai /> <SayHai1 />
  </span>
);
//fin

//inicio

// cuando es una constante normal se tiene que agregar '{}'
// y después dentro de eso meter la variable, constante o let xd
// cuando es una función y quieres agregar dentro de algú  div y así
// u otra función dentro de otra función es agregar <Función/>
const Nombres = ['Juan', 'Pedro', 'Noah', 'Jahlu', 'Eddy'];
// const Valores = Nombres.map( nombre =>{
//   return (<li>{nombre}</li>)
// })
const Función = () => {
  const NuevosNombres = [];
  Nombres.forEach((nombre, index) =>
    NuevosNombres.push(<li key={index}>{nombre}</li>)
  );
  //en el return también se puede agregar html y que se pinte directamente en la
  //función pero agregar ul y luego li no se podrían alinear a un li
  return <ul>{NuevosNombres}</ul>;
};

//fin
export default function App() {
  return (
    <div>
      {/* función */}
      {/* <h1><Saludar/></h1> */}

      {/*  Constante */}
      {/* {Valores} */}
      {/* es una función agregando el push y forEach */}
      {/* <Función/> */}

      {/* <Button/> */}
      <br />
      {/* <Saludo/> */}
      <br />
      <Form />
    </div>
  );
}

// primera vez que utilizo react

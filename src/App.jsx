import { useState } from 'react'
import { useFetch } from './hooks/useFetch';
import ProductList from './components/ProductList';
import YourCart from './components/Yourcart';



function App() {
  const {
    data : desserts,
    isPending,
    error,
  } = useFetch("http://localhost:3000/desserts");
  console.log(desserts)
  return (
    <div className="container grid-container main-div">
      <ProductList desserts={desserts} isPending={isPending}/>
      <YourCart desserts={desserts} isPending = {isPending}/>
    </div>
  
  )
}

export default App;

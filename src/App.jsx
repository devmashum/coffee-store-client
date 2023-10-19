
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeCard from './Components/CoffeCard';
import { useState } from 'react';

function App() {

  const LodadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(LodadedCoffees);

  return (
    <>

      <div>

        <h1>Hot Coffee : {coffees.length}</h1>
        <div className='grid md:grid-cols-3 gap-3'>
          {
            coffees.map(coffee => <CoffeCard coffees={coffees} setCoffees={setCoffees} coffee={coffee} key={coffee._id} ></CoffeCard>)
          }

        </div>
      </div>
    </>
  )
}

export default App

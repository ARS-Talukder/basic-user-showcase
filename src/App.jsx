import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then(data => data.json())
      .then(data => setUser(data.results[0]))
  }, [])

  console.log(user);
  return (
    <div className='flex justify-center'>
      <div className="hero w-1/2 my-20 border border-amber-700 border-1 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={user?.picture?.large} className="max-w-sm rounded-lg shadow-2xl" width={170}/>
          <div className='mx-4'>
            <h1 className="text-4xl text-amber-800 font-bold">{user?.name?.first} {user?.name?.last}</h1>
            <p className="pt-6 pb-2"><span className='font-bold italic underline'>Gender:</span> <span className='text-amber-800 font-bold'>{user?.gender}</span></p>
            <p className=""><span className='font-bold italic underline'>Phone:</span> <span className='text-amber-800 font-bold'>{user?.phone}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

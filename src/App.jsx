import './App.css'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Header from './components/Header'
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BackgroundController from './components/BackgroundController'

function App() {
  const [selectedIndex,setSelectedIndex]=useState();
  return (
    <>
    <Header/>
    <div className='w-64 fixed'>
      <SideNav selectedIndex={(value)=>setSelectedIndex(value)}/>
    </div>
    <div className='ml-64 grid grid-cols-1 md:grid-cols-6'>
      <div className='md:col-span-2 border h-screen shadow-sm p-5'>
        {selectedIndex==0?<IconController/>:<BackgroundController/>
        }
      </div>
      <div className='md:col-span-3 bg-red-500'>
        icon Opreview
      </div>
      <div className='bg-blue-500'>
        ads
      </div>
    </div>
    </>
  )
}

export default App

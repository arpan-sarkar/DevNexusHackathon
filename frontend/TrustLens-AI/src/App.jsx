import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {toast, ToastContainer} from 'react-toastify'
function App() {
  const [count, setCount] = useState(0)
  // const notify = () => toast("Wow so easy!")
  function handleClick(){
    setCount(count + 1)
    toast.success("done")
    // notify()
  }
  return (
    <div>
      <div onClick={handleClick }>Count is: {count}</div>
      {/* <button onClick={handleClick}>Click</button> */}
      <ToastContainer/>
    </div>
  )
}

export default App

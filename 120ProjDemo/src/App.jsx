import { useState } from 'react'
import './App.css'
import {InfoCard} from '@/components/dashboard/InfoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <InfoCard></InfoCard>
    </div>
    
        
  )
}

export default App

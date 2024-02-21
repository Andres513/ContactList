import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'



function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (<div>Selected Contact Id</div>) : (<ContactList />)
      }
    </>
  )
}

export default App

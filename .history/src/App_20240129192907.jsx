import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'



function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {
        selectedContactId ? ({selectedContactId}) : (<ContactList setSelectedContactId={setSelectedContactId}/>)

      }
    </>
  )
}

export default App

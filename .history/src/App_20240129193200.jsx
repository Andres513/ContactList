import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'



function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {
        selectedContactId ? (<selectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>) : (<ContactList setSelectedContactId={setSelectedContactId}/>)

      }
    </>
  )
}

export default App

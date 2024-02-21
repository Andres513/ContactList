import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'




function App() {
  const [selectedContactID, setSelectedContactID] = useState(null)

  return (
      <>
        <ContactList />
        
      </>
  )
}

export default App

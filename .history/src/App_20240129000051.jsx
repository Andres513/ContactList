import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'

const [contacts, setContacts] = useState(dummyContacts)
console.log("Contacts: ", contacts)

function App() {
  
  
  return (
      <>
        <ContactList />
        
      </>
  )
}

export default App

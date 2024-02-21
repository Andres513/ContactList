import { useState } from "react"
import { useEffect } from "react"



export default function selectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null)
    useEffect(()=>{
        async function fetchContactID() {
        try {
            const resp = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const data = await resp.json();
            setContact(data)
        } catch (error) {
            console.error(error)
        }
    }
    fetchContactID()
    },[])
    return (

    )
}
import { useState } from "react"
import { useEffect } from "react"



export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null)
    useEffect(()=>{
        async function fetchSingleContact() {
            try {
                const singleResponse = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                console.log('Selected contact is', contact)
                const singleResult = await singleResponse.json();
                setContact(singleResult);
                console.log('Selected contact is', contact)
            } catch (error) {
                console.error(error);
            }
        } 
        fetchSingleContact();
        
    },[])
    console.log(contact)
    return (
        <>
        </>
    )
}
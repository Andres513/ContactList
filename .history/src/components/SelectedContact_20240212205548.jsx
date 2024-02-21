import { useState } from "react"
import { useEffect } from "react"



export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null)
    useEffect(()=>{
        async function fetchSingleContact() {
            try {
                console.log('Selected contact is', selectedContactId)
                const singleResponse = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const singleResult = await singleResponse.json();
                setContact(singleResult);
                
            } catch (error) {
                console.error(error);
            }
        } 
        fetchSingleContact();
        
    },[])
    console.log(contact)
    return (
        <>
       <tr>
        <td>{contact?.name}</td>
        <td>{contact?.email}</td>
        <td>{contact?.phone}</td>
        <td>{contact?.address?.street}</td>
        <td>{contact?.username}</td>
       </tr>
        </>
    )
}
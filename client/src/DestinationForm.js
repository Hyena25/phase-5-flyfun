import { useState } from "react"


function DestinationForm({destinationsData, setDestinationsData}){
    const [newDestinationObj, setNewDestinationObj] = useState (
        {
            image: "",
            title: "",
            location: "",
            description: ""
        }
    )

    // const handleSubmit = (e) => {
    //     e.preventDefault
    // }
    return (
        <>
        <form>
            <input
            />
            <input/>
            <input/>
            <input/>
        </form>
        </>
    )
}

export default DestinationForm
import { useState } from "react";

const useIdTemp = () => {

    const generarIdTemp = () => {
        return Math.random().toString(36).substr(2, 9);
    }

    const [idTemp, setIdTemp] = useState(generarIdTemp())

    const refrescarIdTemp = () => {
        setIdTemp(generarIdTemp())
    }

    return (
        { idTemp, refrescarIdTemp }
    )
}

export default useIdTemp
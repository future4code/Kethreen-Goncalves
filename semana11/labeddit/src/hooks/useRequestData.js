import axios from "axios"
import { useEffect, useState } from "react"



const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url , {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setData(res.data.posts)
        })
        .catch((err) => {
            console.log(err)
            alert ('Ocorreu um erro, tente novamente')
        })
    }, [url])

return (data)


}

export default useRequestData 
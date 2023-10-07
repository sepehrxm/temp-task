import { useState, useEffect } from "react"
import axios from "axios"
import Products from "./Products"

const Main = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)
    const [category, setCategory] = useState(undefined);

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const resp = await axios('https://fakestoreapi.com/products/')
            const newResp = resp.data.filter((item) => item.category === category)
            setItems(()=>{
                if(newResp.length > 1){
                    return newResp
                } else {
                    return resp.data
                }
            })
        } catch (error) {
            console.log(error)
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    },[category])
  return (
    <div>
        {isLoading ? <h1 id='load'>Loading...</h1> : <Products category={category} setCategory={setCategory} items={items} setItems={setItems} isError={isError}/>}
    </div>
  )
}
export default Main
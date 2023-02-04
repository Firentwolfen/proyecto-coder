import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import useCollection from '../hooks/useCollection'
import { where } from "firebase/firestore"

const ItemListContainer = () => {
    const [nompag, setNompag] = useState('')
    const { categoryId } = useParams()
   
    useEffect(() => {
                if (categoryId) {
                    setNompag(`Lista de productos de ${categoryId}`)
                } else {
                    setNompag('Lista de todos los Productos')
                }
    }, [categoryId])

    const { data, loading } = useCollection(
        "productos",
        [categoryId],
        categoryId && 
        [
            where("category", "==", categoryId)
        ]
    )
    return (
        <div>
        {
            loading
                ? <h2>Cargando...</h2>
                : <ItemList productos={data} nombrepagina={nompag}/>
        }
    </div>
    )
}

export default ItemListContainer
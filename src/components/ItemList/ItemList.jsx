import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div className="itemListContainer">
        {productos.map(prod => <Item key= {prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList

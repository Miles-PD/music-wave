import { BsBookmark, BsInfoCircle } from 'react-icons/bs'

import "./album.css"

const AlbumActions = ({ price }) => {
    return (
        <div className="actions-body">
            <h2 className="album-price">
                {price}
            </h2>
            <button className="album-buy-button">ADD TO CART</button>
            <div className="albumaction-icon">
                <BsBookmark size={35} color="blue" />
            </div>
            <div className="albumaction-icon">
                <BsInfoCircle size={35} color="blue" />
            </div>
        </div>
    )
}

export default AlbumActions
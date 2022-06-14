import "./album.css"

const AlbumActions = ({ price }) => {
    return (
        <div className="actions-body">
            <h2 className="album-price">
                {price}
            </h2>
            <button className="album-buy-button">ADD TO CART</button>
        </div>
    )
}

export default AlbumActions
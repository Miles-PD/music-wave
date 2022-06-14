import "./album.css"

const AlbumArt = ({ imgsrc, imgalt }) => {
    return (
        <img className="album-artwork" src={imgsrc} alt={imgalt} />
    )
}

export default AlbumArt
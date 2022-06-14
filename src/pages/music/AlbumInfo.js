import "./album.css"

const AlbumInfo = ({ title, artist, label, genre, bitrate, numtracks, minutes, advisory }) => {
    return (
        <div className="albuminfo-body">
            <p className="album-title">
                {title}
            </p>
            <p className="album-artist">
                {artist}
            </p>

            <p className="album-label">
                {label}
            </p>
            <p className="album-genre">
                {genre}
            </p>
            <p className="album-bitrate">
                {bitrate}
            </p>

            <h4 className="album-num-mins">
                {numtracks} TRACKS· {minutes} MINUTES
            </h4>

            <div className="album-advisory">
                {advisory ? <p>advisory</p> : null}
            </div>

        </div>
    )
}

export default AlbumInfo
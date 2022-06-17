import  AlbumArt  from './AlbumArt'
import  AlbumInfo  from './AlbumInfo'
import AlbumActions from "./AlbumActions"
import cover from "./cover.jpg"
import "./album.css"

const AlbumTemplate = () => {
    return (
        <>
        <div className="album-template">
            <div className="albumtemp-header">
                <div className="album-art">
                    <AlbumArt imgsrc={cover} />
                </div>
                <div className='album-info'>
                    <AlbumInfo title={"Prince and The Revolution: Live (2022 Remaster)"} 
                                artist={"PRINCE, PRINCE AND THE REVOLUTION"}
                                label={"Legacy Recordings"}
                                genre={"R&B/SOUL"}
                                bitrate={"44.1kHz · 24bit"}
                                numtracks={"20"}
                                minutes={"114"}
                                advisory={true} />
                </div>
                <div className="albumtemp-header-right">
                    <AlbumActions price={"$24.94"}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default AlbumTemplate
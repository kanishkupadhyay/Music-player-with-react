import { React } from 'react';
export default function Song(props) {
    const handleSongClick = () => {
        props.onSongClick()
    }
    return (
        <>
            <div className="player" onClick={handleSongClick}>
                {props.songImageUrl &&  <div className="imgbx">
                    <img src={props.songImageUrl} />
                </div>}
                <audio controls>
                    <source src={props.songUrl} />
                </audio>
            </div>
        </>
    )
}
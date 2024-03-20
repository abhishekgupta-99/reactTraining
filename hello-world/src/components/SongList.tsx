import { useState } from "react";
import { ReactElement } from "react";
import { SongType } from "./SongType";
import { SongProps } from "./SongType";


const SongList = () : ReactElement => {

    const initialSongs : SongType[] = [
        {title : 'Last thing on my mind', artist: 'steps', vote : 0},
        {title : 'If you\'re over me', artist: 'Years and years', vote : 0},
        {title : 'Top of the world', artist: 'Carpenters', vote: 0},
        {title: 'Sometimes', artist: 'Erasure', vote : 0}
    ];


    let [song1, setSong1] = useState<SongType>({title : 'Last thing on my mind', artist: 'steps', vote:0});
    let [song2, setSong2] = useState<SongType>({title : 'If you\'re over me', artist: 'Years and years', vote:0});

    const [songs, setSongs] = useState<SongType[]>(initialSongs);

    const addVote = (id : number) : void => {
        const newSongs = songs.map( (song,idx) => idx === id? {...song, vote: song.vote + 1} : song);
        setSongs(newSongs);
    }

    const displaySongs : JSX.Element[] = songs.map ( (song, index) => {
         return (<Song key={index} song={song} recordVote={() => addVote(index)} />);
    });

    return (
        <div>
            <h2>Your favourite songs are:</h2>
            <ul>{displaySongs}</ul>
        </div>
    );
};

//     const changeSong = () : void => {
//         setSong1({...song1, title : 'Something in your eyes'});
//         setSong2({...song2, title : 'King' })
//     }

//     const addVote1 = () :void => {
//         setSong1({...song1, vote : song1.vote + 1});
//     }

//     const addVote2 = () :void => {
//         setSong2({...song2, vote : song2.vote + 1});
//     }

//     return (
//         <div>
//             <ul>
//                 <Song song={song1} recordVote={addVote1} />
//                 <Song song={song2} recordVote={addVote2}/>
//             </ul>
//             <button onClick={changeSong}>Change songs</button>
//         </div>
//     );
// };

export default SongList;


const Song = (props: SongProps) : ReactElement => {
    const voteNow = () : void => props.recordVote(); //business logic somehow
        return (<li>{props.song.title} by {props.song.artist} having vote: {props.song.vote} <button onClick={voteNow}>Vote for this song</button></li>);
 }
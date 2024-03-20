export type SongType =
 {
    title: string,
    artist: string,
    vote: number

}

export type SongProps = {
    song:SongType;
    recordVote : () => void
}
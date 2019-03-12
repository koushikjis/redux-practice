import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Main Duniya Bhula dunga', duration: '5:20'}
        ,{title: 'Mera Dil bhi kitna', duration: '3:50'}
        ,{title: 'Dil cheer ke dekh', duration: '4:05'}
        ,{title: 'Aashique mein har ashique', duration: '2:56'}
    ]
}

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectSongReducer
});
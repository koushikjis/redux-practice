import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
    console.log(props)
    if (props.song && props.song.title){
        const {title, duration} = props.song;
        return (
                <div>
                    <p>Song: {title}</p>
                    <p>Duration: {duration}</p>
                </div>
                )
    }
    else return <div>Song detail</div>
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);
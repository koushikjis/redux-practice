import React, {Component} from 'react';
import {connect} from 'react-redux'
import {selectSong} from '../actions'

class SongList extends Component {
    renderList(){
        return this.props.songs.map((song)=>{
            return(
                    <div key={song.title} style={{padding: '0px 0px 5px 0px', width:'320px'}}>
                        <div style={{float: 'left', width:'250px'}}>
                            {song.title}
                        </div>
                        <div>
                            <button onClick={()=>this.props.selectSong(song)}>Select</button>
                        </div>
                        <hr></hr>
                    </div>
            )
        })
    }

    render(){
        return (
                <div>
                    {this.renderList()}
                </div>
                )
    }
}

const mapStateToProps = (state) => {
    return {songs: state.songs};
}

export default connect(mapStateToProps, {selectSong})(SongList);

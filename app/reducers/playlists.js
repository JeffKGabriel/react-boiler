import {ref} from '../config/constants'

import * as playlistAPI from '../api/playlists'

const initialState = {
  item : {}
}


// ---------


/*

export function changeChannel(videoId){
  return{
    type: ON_CHANNEL_CHANGE,
    videoId
  }
}


export function updateUserPlaylists(playlists){
  return{
    type: UPDATE_USER_PLAYLISTS,
    playlists
  }
}

*/

// ---------

/*
export function getLiveChannels(){
  return (dispatch, getState) => {

    playlistAPI.getLiveChannelsAPI()
      .then( (items)=>{
        dispatch(updateLiveChannels(items))
      })

  }
}


export function setUpListenerForPlaylists(uid){

  return (dispatch, getState) => {

    dispatch( newPlaylistListener() )

    return  ref.child(`users/${uid}/playlists`)
      .on('value', (snap)=>{
        const newPlaylists = snap.val()
        dispatch(updateUserPlaylists(newPlaylists))
      })
  }
}
*/

// ---------


export default function playlists(state = initialState, action) {
  switch (action.type) {

  /*
    case ON_CHANNEL_CHANGE:
      return {
        ...state,
        videoId : action.videoId,
        playing : true,
        //position : 0
      }

    case UPDATE_USER_PLAYLISTS:
      return{
        ...state,
        userPlaylists : action.playlists
      }

      */

    default :
      return state
  }
}

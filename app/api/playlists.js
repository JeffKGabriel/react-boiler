import {ref} from '../config/constants'

export function getLiveChannelsAPI(){

  return ref.child(`live/`)
    .once('value')
    .then((snapshot) => snapshot.val())

}

export function addTrackToPlaylistAPI(uid,playlist,track){

  return ref.child(`users/${uid}/playlists/${playlist}`)
    .push(track)

}

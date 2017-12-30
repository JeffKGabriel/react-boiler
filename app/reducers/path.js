const initialState = {
  path:''
}

const UPDATE_PATH = "UPDATE_PATH"

export function updatePath(path){
  return{
    type : UPDATE_PATH,
    path
  }
}

export default function path(state = initialState, action) {

  switch (action.type) {

    case UPDATE_PATH :
      return {
        ...state,
        path : action.path,
      }

    default :
      return state
  }

}

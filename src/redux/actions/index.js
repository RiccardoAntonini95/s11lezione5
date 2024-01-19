export const header = {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0'
  }
export const header2 = {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': 'c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387'
  }
export const header3 = {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20'
  }
export const header4 = {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': 'a50fe14028msh940c0b8b9fece73p125787jsn3dae20f86ae0'
  }


export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const TRACK_PLAY = 'TRACK_PLAY'

export const addToFavouriteAction = (favourite) => {
    return{
        type: ADD_TO_FAVOURITE,
        payload: favourite
    }
}

export const removeFromFavouriteAction = (favourite) => {
    return{
        type: REMOVE_FROM_FAVOURITE,
        payload: favourite
    }
}
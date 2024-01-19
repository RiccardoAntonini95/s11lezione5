//qua fai 3 diverse action che fanno 3 fetch diverse, una sulla query, una sull'artista, una sull'album
//"https://striveschool-api.herokuapp.com/api/deezer/album/albumID"
//"https://striveschool-api.herokuapp.com/api/deezer/artist/artistID"
//"https://striveschool-api.herokuapp.com/api/deezer/search?q={query}"

//le porto sui componenti e le uso con useEffect
//guarda s11 lezione 2 su cartella epicode

let header = {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0'
  }
  let header2 = {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': 'c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387'
  }
  let header3 = {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20'
  }
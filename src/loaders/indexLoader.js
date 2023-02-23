

export default async function indexLoader(){

const url = "https://rawletubeapi.onrender.com/videos/"

const response = await fetch(url)
const videos = await response.json()
return videos

}
export default async function showLoader({params}){
    
    const url = 'https://rawletubeapi.onrender.com/videos/'

    const response = await fetch(url + params.id + '/')
    const video = await response.json()
    return video
}
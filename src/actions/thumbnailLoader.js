export default async function thumbnail(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}
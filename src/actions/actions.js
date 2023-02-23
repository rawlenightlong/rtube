import { redirect } from "react-router-dom"

const url = "https://rawletubeapi.onrender.com/videos/"

export const createAction = async function ({request}){
    const formData = await request.formData()
    const newVideo = {
        name: formData.get("name"),
        link: formData.get("link")
    }
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(newVideo),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return redirect("/")
}

export const updateAction = async function ({request, params}){
    const formData = await request.formData()
    const updatedVideo = {
        name: formData.get("name"),
        link: formData.get("link")
    }
    await fetch(url + params.id + "/", {
        method: "PUT",
        body: JSON.stringify(updatedVideo),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return redirect("/")
}

export const deleteAction = async function({params}){
    await fetch(url + params.id + '/', {
        method: "DELETE"
    })
    return redirect("/")
}

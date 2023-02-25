import { redirect } from "react-router-dom"
import {useState} from "react"

const url = "https://rawletubeapi.onrender.com/videos/"

export const createAction = async function ({request}){
    let newID = ''
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
    const response = await fetch(url)
    const videos = await response.json()
    for (let video of videos){
        if (video.link === newVideo.link){
            newID = video.id
        }
    }

    return redirect(`/videos/${newID}`)
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
    return redirect("/videos")
}

export const deleteAction = async function({params}){
    await fetch(url + params.id + '/', {
        method: "DELETE"
    })
    return redirect("/videos")
}

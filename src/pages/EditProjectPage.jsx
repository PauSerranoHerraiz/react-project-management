import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../config/api"


function EditProjectPage() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { projectId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${BASE_URL}/projects/${projectId}`)
            .then((response) => {
                console.log(response.data)

                setTitle(response.data.title)
                setDescription(response.data.description)

            })
            .catch((e) => {
                console.log(e)
            })

    }, [projectId])

    const handleSubmit = (e) => {
        e.preventDefault()

        const newDetails = {
            title: title,
            description: description,
        }

        axios.put(`${BASE_URL}/projects/${projectId}`, newDetails)
            .then((response) => {
                navigate(`/projects/${projectId}`)
            })
            .catch((e) => {
                console.log(e)
            })
    }


    return (
        <div className="EditProjectPage">

            <h3>Edit the Project</h3>

            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        placeholder="enter the title"
                        required
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        placeholder="enter the description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </label>

                <button>Update project</button>
            </form>

        </div>
    )
}


export default EditProjectPage
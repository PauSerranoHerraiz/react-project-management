import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/api";

function CreateProjectPage() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newProject = {
            title: title,
            description: description,
        }

       axios.post(`${BASE_URL}/projects`, newProject)
            .then((response) => {
                console.log("success!");
                console.log(response);
                navigate("/projects")
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <>
            <div className="CreateProjectPage">
                <h3>Add Project</h3>

                <form onSubmit={handleSubmit}>

                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter the title..."
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
                            placeholder="Enter the description..."
                            required
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </label>

                    <button>Create</button>

                </form>

            </div>
        </>
    )
}

export default CreateProjectPage
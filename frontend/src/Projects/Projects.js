import { Link, useParams } from "react-router-dom";
// import "./Projects.css"
// import { useState, useEffect } from "react";
// import user_icon from "../images/user-6767.svg"
import { useDispatch } from 'react-redux'
import { } from '../slices/projectSlice'


// import { useDispatch } from 'react-redux'
import { setProjects } from '../slices/projectSlice'
import { useEffect } from 'react'

// export const Projects = () => {
//     const dispatch = useDispatch()
//     useEffect(() => {
//         ; (async () => {
//             const response = await fetch('http://localhost:3000/projects')
//             const projects = await response.json()
//             dispatch(setProjects(projects))
//         })()
//     }, [])
//     return <div>Список публикаций</div>
export function Projects() {
    // const [projects, setProjects] = useState([])
    // const [members, setMembers] = useState([])
    // const [tasks, setTasks] = useState([])
    // const pathName = "/projects"
    // const params = useParams()
    // const { projectId } = params
    const dispatch = useDispatch()
    useEffect(() => {

        ; (async () => {
            const response = await fetch('http://localhost:3000/projects')
            const projects = await response.json()
            dispatch(setProjects(projects))


        })()
    }, [])

    return (
        <div className="container">
            {/* <div className="column">
                <ul className="sidebarlist">

                    {projects.map((val, key) => {
                        return (
                            <Link to={pathName.concat('', val.link)} key={key}>
                                <li
                                    className="row"
                                    id={window.location.pathname === pathName.concat('', val.link) ? "active" : ""}
                                >
                                    <div id="title">{val.title}</div>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
            {projectId ? (

                <div className="project-list">
                    <div className="members">Участники</div>
                    {members.map((val) =>
                    (
                        <div className="items" key={val.id}>
                            <div className="icon">
                                <img src={user_icon} />
                            </div>
                            <div key={val.id}>{val.name}</div>
                        </div>
                    )
                    )}
                    <div className="add-task">

                        <button type="submit"
                        >+ Добавить задачу</button>

                    </div>
                    <div className="members">Задачи</div>
                    {tasks.map((val) =>
                    (
                        <div className="items" key={val.id}>
                            <div className="icon">
                                <img src={user_icon} />
                            </div>
                            <div key={val.id}>{val.name}</div>
                        </div>
                    )
                    )}
                    <div className="add-task">

                        <button type="submit"
                        >+ Добавить задачу</button>

                    </div>
                </div>) :
                (
                    <div></div>
                )
            } */}
        </div >
    );
}
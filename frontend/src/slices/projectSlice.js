import { createSlice } from '@reduxjs/toolkit'
import { normalizeProjects } from '../normalize/normalizeProjects'

const initialState = {
    projectList: [],
    projects: {},
    tasks: {},
    users: {},
    members: {},
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProjects: (state, action) => {
            console.log(normalizeProjects(action.payload))
            const { result, entities } = normalizeProjects(action.payload)
            state.projectList = result
            state.projects = entities.projects
            state.tasks = entities.tasks
            state.users = entities.users
            state.members = entities.members
            // console.log(normalizeProjects(action.payload))
        },
    },
})

export const { setProjects } = projectSlice.actions

export default projectSlice.reducer

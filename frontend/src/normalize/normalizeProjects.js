import { normalize, schema } from 'normalizr'

export function normalizeProjects(projectList) {
    const userSchema = new schema.Entity('users')
    const tasksSchema = new schema.Entity('tasks', { user: userSchema })
    const membersSchema = new schema.Entity('members')
    const projectSchema = new schema.Entity('projects', {
        tasks: [tasksSchema],
        members: [membersSchema],
    })

    return normalize(projectList, [projectSchema])
}


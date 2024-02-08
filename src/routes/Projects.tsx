//react-router-dom
import {useParams} from 'react-router-dom'

//hooks
import { useQueryProjects } from '../hooks/useQuery'

//react
import { useState } from 'react'

//types
import { ProjectsProps } from '../types/projects'

const Projects = () => {

    const [projects, setProjects] = useState<ProjectsProps | null>()

    const {login} = useParams()

    const {data} = useQueryProjects(login)

    console.log(data)

  return (
    <div>Projects de {login}</div>
  )
}

export default Projects
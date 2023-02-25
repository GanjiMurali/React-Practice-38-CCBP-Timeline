// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="project-container">
      <img className="project-img" src={imageUrl} alt="project" />
      <div className="project-heading-con">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="project-timer">
          <AiFillCalendar />
          {duration}
        </div>
      </div>
      <p className="project-para">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard

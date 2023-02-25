// Write your code here
import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails

  return (
    <div className="course-con">
      <div className="card-head-con">
        <h1 className="card-heading">{courseTitle}</h1>
        <div className="heading-time">
          <AiFillClockCircle />
          {duration}
        </div>
      </div>
      <p className="course-para">{description}</p>
      <div className="tag-con">
        {tagsList.map(eachItem => (
          <p className="tag-item" key="duration">
            {eachItem.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard

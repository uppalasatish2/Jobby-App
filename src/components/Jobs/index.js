import {Component} from 'react'
import Profile from '../Profile'
import Header from '../Header'
import './index.css'
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]
class Jobs extends Component {
  render() {
    return (
      <div className="container1">
        <Header />
        <div className="inner1">
          <div className="small">
            <Profile />
            <br className="break" />
            {employmentTypesList.map(each=><)
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs

import Header from '../Header'
import './index.css'

const Home = props => {
  const {history} = props
  const onFindJobs = () => {
    history.replace('/jobs')
  }
  return (
    <div>
      <Header />
      <div className="container12345rtr321234">
        <h1 className="head">Find The Job That Fits Your Life</h1>
        <p className="para">
          Millions of people are searching for jobs,salary,information, company
          reviews.Find the job that fits your ability and potential.
        </p>
        <button className="btn1" type="button" onClick={onFindJobs}>
          Find Jobs
        </button>
      </div>
    </div>
  )
}
export default Home

const React = require('react')
const { browserHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('./Store')

class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.goToSearch = this.goToSearch.bind(this)
  }
  handleSearchTermEvent (e) {
    this.props.setSearchTerm(e.target.value)
  }
  goToSearch (e) {
    browserHistory.push('search')
    e.preventDefault()
  }
  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='search' type='text' placeholder='Search' />
          <Link to='/search' className='browse-all'> or Browse All</Link>
        </form>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  setSearchTerm: func,
  searchTerm: string
}

module.exports = connector(Landing)

const React = require('react')
const Heading = require('./Heading')
const { connector } = require('./Store')

class Details extends React.Component {
  assignShow (id) {
    const showArray = this.props.shows.filter((show) => show.imdbID === id)
    return showArray[0]
  }
  render () {
    const { title, description, year, poster, trailer } = this.assignShow(this.props.params.id)
    return (
      <div className='container'>
        <Heading />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <img className='video-poster' src={`public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

const { object, arrayOf } = React.PropTypes

Details.propTypes = {
  shows: arrayOf(object).isRequired,
  params: object.isRequired
}

module.exports = connector(Details)

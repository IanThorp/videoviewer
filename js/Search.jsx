const React = require('react')
const ShowCard = require('./ShowCard')
const Heading = require('./Heading')
const { connector } = require('./Store')

const Search = (props) => (
  <div className='container'>
    <Heading showSearch />
    <div className='shows'>
      {props.shows
        .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map((show) => (
          <ShowCard {...show} key={show.imdbID} />
        ))
      }
    </div>
  </div>
)

const { object, string, arrayOf } = React.PropTypes

Search.propTypes = {
  shows: arrayOf(object),
  searchTerm: string
}

module.exports = connector(Search)

/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount, deep  } = require('enzyme')
const { shows } = require('../public/data')
const { store, rootReducer} = require('../js/Store')

xdescribe('<Search /> ',  () => {
  it('should should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })
})

describe('<Search />', () => {
  const mockRoute = {
    shows: data.shows
  }

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    store.dispatch({type: 'setSearchTerm', value: 'house'})
    const wrapper = render(<Provider store={store} ><Search route={mockRoute} /></Provider>)
    expect(wrapper.find('div.show-card').length).to.equal(2)
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, { type: '@@redux/INIT' })
    expect(state).to.deep.equal({ searchTerm: '' })
  })

  it('should handle setSearchTerm actions', () => {

    const state = rootReducer({ searchTerm: 'some random string'}, { type: 'setSearchTerm', value: 'correct string' })
    expect(state).to.deep.equal({ searchTerm: 'correct string' })
  })
})

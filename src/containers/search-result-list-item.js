import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectUserAction } from '../actions/index'

class SearchResultListItem extends Component {
  render () {
    const user = this.props.user
    return (
    <li key={user.name} onClick={ () => this.props.selectUserAction(this.props.user) }>
      <figure>
        <img src={user.profile_image_url} alt={user.name} />
      </figure>
      <strong>{user.name}</strong>
      <span className='opacity-5'>@{user.screen_name}</span>
    </li>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectUserAction}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchResultListItem)

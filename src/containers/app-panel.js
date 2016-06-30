import React, { Component } from 'react'
import { connect } from 'react-redux'
import SelectUserDetail from '../components/selected-user-detail'
import TweetQueryFilter from '../containers/tweet-query-filter'
import TweetList from '../containers/tweet-list'

class AppPanel extends Component {
  render() {
    return (
      <div className='app-panel'>
        <SelectUserDetail user={this.props.selected_user} />
        <TweetQueryFilter />
        <TweetList />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { selected_user: state.selected_user }
}

export default connect(mapStateToProps)(AppPanel)
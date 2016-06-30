import React, { Component } from 'react'
import RoiHunterLogo from '../components/roi-hunter-logo'
import SearchBar from '../containers/search-bar'
import AppPanel from '../containers/app-panel'

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='header-content'>
          <RoiHunterLogo />
          <SearchBar />
        </div>
        <div className='body-content'>
          <AppPanel />
        </div>
      </div>
    )
  }
}
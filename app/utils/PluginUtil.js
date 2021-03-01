import React, { Component } from 'react'
import ViewRedirect from './ViewRedirect'
import { withRouter } from 'react-router'
import { saveState, isValidState } from './TokenController'

// -----Third party dependencies -----
import queryString from 'query-string'

// ------------ Custom Resources -----
import { uuidv4 } from './Util'

// ------------ Redux ----------------
import { connect } from 'react-redux'
import {
	getAllPlugins,
} from '../redux/plugins/pluginAction'

class PluginUtil extends Component {
  state = {
    pluginsAvailable: false,
  }

  // Methods

  static buildPluginUrl = () => {
   
    // const url = `${pluginBaseUrl}`
    const url = `http://localhost:8080/plugins/list`
    return url
  }

  // Life Cycle
  constructor() {
    super()
  }

  static getDerivedStateFromProps(props) {
    console.log('getDerivedStateFromProps() =============================props = '+props)
    if (!props.pluginsAvailable) {
    	 const pluginUrl = PluginUtil.buildPluginUrl()
    	 console.log('Url to fetch plugins pluginUrl: ', pluginUrl)
         window.location.href = pluginUrl
         return null
    } else {
      return { pluginsAvailable: true}
    }
  }
  render() {
    const { pluginsAvailable, pluginList} = this.state
    return (
      <React.Fragment>
        {pluginsAvailable && this.props.children}
        {!pluginsAvailable && <ViewRedirect config={this.props.config} />}
      </React.Fragment>
    )
  }
}

// Redux

const mapStateToProps = ({ pluginReducer }) => {
	const pluginList = pluginReducer.items
	
  return {
		pluginList,
  }
}

export default withRouter(
  connect(mapStateToProps, {
	  getAllPlugins,
  })(PluginUtil),
)

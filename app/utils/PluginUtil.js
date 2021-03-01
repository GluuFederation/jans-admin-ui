import React, {Component,  useState, useEffect } from 'react'
import { withRouter } from 'react-router'

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
    pluginList: null
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

  static getPlugins(props) {
	  console.log(" pluginUtil.js  ---- 1 --- ")
     console.log('getPlugins() =============================props = '+props)

       const pluginsAvailable = false
    	const pluginList = props.getAllPlugins();
	    console.log(' PluginUtil - 1  pluginsAvailable = '+pluginsAvailable+' ,pluginList = '+pluginList)
    	if( pluginList != undefined && pluginList != null && pluginList.size>0){
    		pluginsAvailable = true
    	}
    	
    	console.log(' PluginUtil - 2  pluginsAvailable = '+pluginsAvailable+' ,pluginList = '+pluginList)
         return null
    
  }
  render() {
    const { pluginsAvailable, pluginList} = this.state
    console.log(" pluginUtil.js => pluginList = "+pluginList)
    return (
    		pluginList
    )
  }
}

// Redux
const mapStateToProps = (state) => {
	  return {
	    pluginsL: state.pluginReducer.items,
	    loading: state.pluginReducer.loading,
	    hasApiError: state.pluginReducer.hasApiError,
	  }
	}

export default withRouter(
  connect(mapStateToProps, {
	  getAllPlugins,
  })(PluginUtil),
)

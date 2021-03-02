import React, { Component } from 'react'
import ViewRedirect from './ViewRedirect'
import { withRouter } from 'react-router'
//import React, {Component,  useState, useEffect } from 'react'


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
    pluginsAvailable: false
    }
  

  // Methodss
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
	  console.log(" pluginUtil.js  ---- 1 --- ")
	 props.getAllPlugins();
    

     /*  
       console.log('getPlugins() =============================pluginList = '+pluginList)
     pluginsAvailable:  false
    	
	    console.log(' PluginUtil - 1  pluginsAvailable = '+pluginsAvailable+' ,pluginList = '+pluginList)
    	if( pluginList != undefined && pluginList != null && pluginList.size>0){
    		pluginsAvailable = true
    	}    	
    	console.log(' PluginUtil - 2  pluginsAvailable = '+pluginsAvailable+' ,pluginList = '+pluginList)
    	*/
	  pluginsAvailable: true
         return null
    
  }
  render() {
	    const { pluginsAvailable } = this.state
	    return (
	      <React.Fragment>
	        {pluginsAvailable && this.props.pluginList}
	        {!pluginsAvailable && <ViewRedirect plugins={this.props.pluginList} />}
	      </React.Fragment>
	    )
	  }
	}
// Redux
const mapStateToProps = (pluginReducer) => {
	  const pluginList = pluginReducer.plugin
	  return {
		  pluginList
	  }
	}

export default withRouter(
  connect(mapStateToProps, {
	  getAllPlugins,
  })(PluginUtil),
)

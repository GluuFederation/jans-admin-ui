/**
 * Plugin Actions
 */
import {
	GET_ALL_PLUGIN,
	GET_ALL_PLUGIN_RESPONSE,
} from './types'

export const getAllPlugins = () => ({
  type: GET_ALL_PLUGIN,
})

export const getAllPluginResponse = (config) => ({
  type: GET_ALL_PLUGIN_RESPONSE,
  payload: { config },
})



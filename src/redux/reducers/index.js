import listData from './listDataReducers'
import findData from './findDataReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  listData,
  findData
})

export default rootReducer
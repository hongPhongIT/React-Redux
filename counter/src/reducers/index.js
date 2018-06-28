import { combineReducers } from 'redux'
import todos from './todos'
import reducer1 from './reducer1'

export default combineReducers({todos, reducer1})
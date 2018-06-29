import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {destroyTodo} from '../actions'

const mapStateToProps = (state) => ({
    users: state.todos
})

const mapDispatchToPrpos = (dispatch) =>({
    destroyTodo: (id) => dispatch(destroyTodo(id))
})
export default connect(
    mapStateToProps,
    mapDispatchToPrpos
)(TodoList)
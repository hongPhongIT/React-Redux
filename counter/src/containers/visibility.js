import { connect } from 'react-redux'
import { cong } from '../actions'
import { tru } from '../actions'
import { nhan } from '../actions'
import { chia } from '../actions'
import Counter from '../components/Counter'

const mapStateToProps = (state) => ({
    value: state.reducer1
})

const mapDispatchToProps = dispatch => ({
    onCong: () => dispatch(cong()),
    onTru: () => dispatch(tru()),
    onNhan: () => dispatch(nhan()),
    onChia: () => dispatch(chia())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
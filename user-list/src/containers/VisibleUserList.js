import { connect } from 'react-redux'
import { getData } from '../actions'
import data from '../service/data'
import Table from '../components/Table'

const getDatas = async (datas) => {
     datas = await data().then(function(value){     
        // console.log('data11', response);  // #1
        return value
    });;
    // console.log('data11', datas);
    // if(datas) {
    //     return datas
    // }
}

const mapStateToProps = state => ({
    datas: getDatas(state.datas)
})

const mapDispatchToProps = dispatch => ({
    getData: Array  => dispatch(getData(Array))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

const Table = (datas) => (
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {console.log(datas)}
            {datas.map(data =>
                <Row key={data.id} 
                {...data}
                />
            )}

        </tbody>
    </table>
)

Table.propTypes = {
    datas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
}

export default Table
import React from 'react'
import PropTypes from 'prop-types'

const Row = ({ data }) => (
  <tr>
    <th>{data.id}</th>
    <td>{data.name}</td>
    <td>{data.userName}</td>
    <td>{data.email}</td>
  </tr>
)

Row.propTypes = {
  data: PropTypes.array.isRequired
}

export default Row
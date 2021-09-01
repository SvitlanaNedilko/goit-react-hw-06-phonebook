import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Filter.scss'
import contactActions from '../../redux/contacts/contacts-action'

const Filter = ({ filter, changeFilter }) => {
  return (
    <label className="Filter_Input">
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  )
}

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
})

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (event) =>
    dispatch(contactActions.changeFilter(event.currentTarget.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import contactActions from '../../redux/contacts/contacts-action'

import './ContactList.scss'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {!!contacts.length &&
        contacts.map(({ id, name, number }) => (
          <li className="ContactList_Item" key={id}>
            <p className="ContactList_Name">{name}</p>
            <p>{number}</p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
    </ul>
  )
}

const getVisibleContacts = (filter, allContacts) => {
  const normalizedFilter = filter.toLowerCase()
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  )
}

const mapStateToProps = ({ contacts: { filter, contactItems } }) => ({
  contacts: getVisibleContacts(filter, contactItems),
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactActions.onDeleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
}

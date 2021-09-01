import shortid from 'shortid'
import { createAction } from '@reduxjs/toolkit'

const addContact = createAction('contacts/Add', ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  }
})

const onDeleteContact = createAction('contacts/Delete')

const changeFilter = createAction('contacts/changeFilter')

const contactsAction = { addContact, onDeleteContact, changeFilter }

export default contactsAction

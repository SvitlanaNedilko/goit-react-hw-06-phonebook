import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import actions from './contacts-action'

const contactItems = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.onDeleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
  contactItems,
  filter,
})

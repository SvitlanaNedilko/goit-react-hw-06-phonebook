import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'
import ContactForm from './components/ContactForm/ContactForm'
import './App.scss'

function App() {
  return (
    <div className="AppRoot">
      <h1 className="AppTitle">Phonebook</h1>
      <ContactForm />
      <h2 className="AppTitle">Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  )
}
export default App

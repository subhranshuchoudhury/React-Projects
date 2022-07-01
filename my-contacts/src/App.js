import './App.css';
import Card from './components/Card';
import contacts from './db/contacts';

function buildCard(contact){
  return <Card key={contact.id} id={contact.id} name={contact.name} imgSrc={contact.imgSrc} phone={contact.phone} mail={contact.mail} />
}

function App() {
  return (
    <div>
      {contacts.map(buildCard)}
    </div>
  );
}

export default App;

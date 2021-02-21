import logo from './logo.svg';
import './App.css';
import Example from './components/Example'
import HelloWorld from './components/HelloWorld'

function App() {
  const user1 = {
    name: {
      first: 'John',
      last: 'Smith',
    },
    phone: '123-4567'
  }
  const user2 = {
    name: {
      first: 'Sarah',
      last: 'Haras',
    },
  }
  return (
    <div>
      <Example></Example>
      <HelloWorld></HelloWorld>
    </div>
  );
}

export default App;

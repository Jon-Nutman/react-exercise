import logo from './logo.svg';
import './App.css';
import Example from './components/Example'
import HelloWorld from './components/HelloWorld'
import Greet from './components/Greet'
import Button1 from './components/Button1'
import Button2 from './components/Button2'

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
  console.log(user1)
  return (
    <div>
      <Example></Example>
      <HelloWorld></HelloWorld>
      <Greet user1={user1} user2={user2} ></Greet>
      <Button1></Button1>
      <Button2></Button2>
    </div>
  );
}

export default App;

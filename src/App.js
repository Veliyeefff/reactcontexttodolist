import './App.css';
import TodoProvider from './Context/TodoContext';
import Input from './Input';
import List from './List';

function App() {
  return (
    <TodoProvider>
      <Input/>
      <List/>
    </TodoProvider>
  );
}

export default App;

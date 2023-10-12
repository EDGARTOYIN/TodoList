import { useState } from 'react';
import './App.css';
import InputFiled from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(''); //this catches the text of todo
  const [todos, setTodos] = useState<Todo[]>([]); // this holds all todo objc

  const hadleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      // se crea una copia del objeto
      //y se agrea el nuevo objeto
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };

  return (
    <div className="App">
      <span className="heading"> Edgar's Taskify </span>
      <InputFiled todo={todo} setTodo={setTodo} hadleAdd={hadleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

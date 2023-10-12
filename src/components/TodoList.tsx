import './styles.css';
import { Todo } from '../model';
import { SingleTodo } from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((unitTodo) => (
        <SingleTodo todo={unitTodo} key={unitTodo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;

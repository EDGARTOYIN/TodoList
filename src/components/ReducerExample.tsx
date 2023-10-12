// import { useReducer } from 'react';
// import { Todo } from '../model';

// type Actions =
//   | {
//       type: 'add';
//       payload: string;
//     }
//   | {
//       type: 'done';
//       payload: number;
//     }
//   | {
//       type: 'remove';
//       payload: number;
//     };

// const todoReducer = (state: Todo[], actions: Actions) => {
//   switch (actions.type) {
//     case 'add':
//       return [...state, { id: Date.now(), todo: actions.payload, isDone: false }];
//     case 'remove':
//       return state.filter((todo) => todo.id !== actions.payload);
//     case 'done':
//       return state.map((todo) =>
//         todo.id !== actions.payload ? { ...state, isDone: !todo.isDone } : state,
//       );
//   }
// };

// export const ReducerExample = () => {
//   const [state, dispatch] = useReducer(todoReducer, []);

//   return <div>ReducerExample</div>;
// };

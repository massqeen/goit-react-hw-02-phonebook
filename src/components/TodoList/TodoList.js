import React from 'react';
import classNames from 'classnames';
import styles from './TodoList.module.css';

console.log(styles);
const boundClassNames = classNames.bind(styles);
const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(({ id, text, completed }) => {
        const className = boundClassNames({
        [styles.item]: true, [styles.completed]: completed });
        return (
          <li
            key={id}
            className={className}
          >
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
            <p className={styles.text}>{text}</p>
            <button
              type="button"
              className={styles.btn}
              onClick={() => onDeleteTodo(id)}
            >
              Удалить
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

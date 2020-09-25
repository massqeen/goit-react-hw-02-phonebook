import React from 'react';
import classNames from 'classnames';
import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={styles.TodoList}>
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        // TODO заменить на метод для CSS-модулей
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
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
    ))}
  </ul>
);

export default TodoList;

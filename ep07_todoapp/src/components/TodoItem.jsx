import './TodoItem.css';
import { memo } from 'react';

function TodoItem({ id, isDone, content, createdDate, onUpdate, onDelete }) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className='TodoItem'>
      <input type='checkbox' checked={isDone} onChange={onChangeCheckbox} />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(createdDate).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

const OptimizedTodoItemComponent = memo(TodoItem);
export default OptimizedTodoItemComponent;

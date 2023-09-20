import './TodoEditor.css';
import { useState, useRef } from 'react';

export default function TodoEditor({ onCreate }) {
  const [content, setContent] = useState('');
  const inputRef = useRef(null);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickButton = (e) => {
    // 빈 입력 방지
    if (content === '') {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(''); // 입력폼 초기화
  };

  const onKeyDown = (e) => {
    // Enter키 쳤을 때도 추가
    if (e.keyCode === 13) {
      onClickButton();
    }
  };

  return (
    <div className='TodoEditor'>
      <input
        placeholder='새로운 TODO...'
        value={content}
        onChange={onChangeContent}
        ref={inputRef}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}

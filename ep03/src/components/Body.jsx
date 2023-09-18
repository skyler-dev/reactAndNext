import { useRef, useState } from 'react';

export default function Body({ children }) {
  const nameRef = useRef(null);
  const [state, setState] = useState({
    name: '',
    gender: '',
    bio: '',
  });
  console.log(nameRef);
  console.log(children);
  const onChange = (e) => {
    console.log(e.target.name + ':' + e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    console.log(nameRef);
    if (state.name === '') {
      nameRef.current.focus();
      return;
    }
    alert(state.name + '님 환영합니다.');
  };

  return (
    <div>
      <h1>{children}</h1>
      <div>
        <input
          ref={nameRef}
          name='name'
          value={state.name}
          placeholder='이름'
          onChange={onChange}
          autoComplete="off"
        />
      </div>
      <div>
        <select name='gender' value={state.gender} onChange={onChange}>
          <option value=''>밝히지 않음</option>
          <option value='female'>여성</option>
          <option value='male'>남성</option>
        </select>
      </div>
      <div>
        <textarea name='bio' value={state.bio} onChange={onChange}></textarea>
      </div>
      <div>
        <button onClick={onSubmit}>회원가입</button>
      </div>
    </div>
  );
}
Body.defaultProps = {
  children: 'title',
};

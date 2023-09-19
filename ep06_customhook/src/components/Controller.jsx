import useUpdate from '../hooks/useUpdate';

export default function Controller({ onClickButton }) {
  const numbers = [-1, -10, -100, 100, 10, 1];

  useUpdate(() => {
    console.log('Controller 업데이트');
  });

  return (
    <div>
      {numbers.map((n, i) => {
        return (
          <button key={i} onClick={() => onClickButton(n)}>
            {n > 0 ? '+' + n : n}
          </button>
        );
      })}
    </div>
  );
}

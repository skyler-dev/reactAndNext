import style from './CountryItem.module.css';
import { useNavigate } from 'react-router-dom';

export default function CountryItem({
  capital,
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
}) {
  const nav = useNavigate();
  const onClickItem = () => {
    nav(`/country/${code}`);
  };

  return (
    <div className={style.container} onClick={onClickItem}>
      <img
        className={style.flag_img}
        src={flagImg}
        alt={`${commonName}의 국기 이미지`}
      />
      <div className={style.content}>
        <div className={style.name}>
          {flagEmoji} {commonName}
        </div>
        <div>지역 : {region}</div>
        <div>수도 : {capital.join(', ')}</div>
        <div>인구 : {population}</div>
      </div>
    </div>
  );
}

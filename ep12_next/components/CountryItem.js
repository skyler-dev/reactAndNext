import style from './CountryItem.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function CountryItem({
  capital,
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
}) {
  const router = useRouter();
  const onClickItem = () => {
    router.push(`/country/${code}`);
  };

  return (
    <div className={style.container} onClick={onClickItem}>
      <div className={style.flag_img}>
        <Image src={flagImg} fill alt={`${commonName}의 국기 이미지`} />
      </div>
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

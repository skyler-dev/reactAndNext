import { useRouter } from 'next/router';
import SubLayout from '@/components/SubLayout';

export default function Country() {
  const router = useRouter();
  const { code } = router.query;

  return <div>Country {code}</div>;
}

Country.Layout = SubLayout;

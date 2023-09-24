import { ReactNode, Suspense } from 'react';
import Spinner from './Spinner.tsx';

type Props = {
  children: ReactNode;
};
const LazySuspense = ({ children }: Props) => (
  <Suspense fallback={<Spinner />}>{children}</Suspense>
);
export default LazySuspense;

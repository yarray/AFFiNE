import { assignInlineVars } from '@vanilla-extract/dynamic';

import { loading, speedVar } from './styles.css';

export interface LoadingProps {
  size?: number;
  speed?: number;
}

export const Loading = ({ size, speed = 1.2 }: LoadingProps) => {
  return (
    <svg
      className={loading}
      width={size ? `${size}px` : '16px'}
      height={size ? `${size}px` : '16px'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        ...assignInlineVars({
          [speedVar]: `${speed}s`,
        }),
      }}
    >
      <path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM4.95017 12C4.95017 15.8935 8.10648 19.0498 12 19.0498C15.8935 19.0498 19.0498 15.8935 19.0498 12C19.0498 8.10648 15.8935 4.95017 12 4.95017C8.10648 4.95017 4.95017 8.10648 4.95017 12Z"
        fill="var(--affine-black-10)"
      />
      <path
        d="M20.525 12C21.3396 12 22.0111 11.3361 21.8914 10.5303C21.7714 9.72269 21.5527 8.93094 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C15.0691 2.44732 14.2773 2.22859 13.4697 2.10859C12.6639 1.98886 12 2.66038 12 3.475C12 4.28962 12.6674 4.93455 13.4643 5.10374C13.8853 5.19314 14.2983 5.32113 14.6979 5.48665C15.5533 5.84095 16.3304 6.36024 16.9851 7.0149C17.6398 7.66955 18.1591 8.44674 18.5133 9.30208C18.6789 9.70167 18.8069 10.1147 18.8963 10.5357C19.0655 11.3326 19.7104 12 20.525 12Z"
        fill="var(--affine-primary-color)"
      />
    </svg>
  );
};

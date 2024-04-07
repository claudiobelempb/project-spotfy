import { ComponentProps } from 'react';
import { FaSpinner } from 'react-icons/fa';

type LoadingRootProps = ComponentProps<'svg'>;

export const LoadingRoot: React.FC<LoadingRootProps> = props => {
  return (
    <FaSpinner
      {...props}
      className={`animate-spin transition duration-600 ${props.className}`}
    />
  );
};

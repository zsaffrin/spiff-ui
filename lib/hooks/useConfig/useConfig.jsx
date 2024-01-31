import { useContext } from 'react';
import { ConfigContext } from '../../contexts';
import defaultConfig from './defaultConfig';

const useConfig = () => {
  const configArgs = useContext(ConfigContext);

  const composedConfig = {
    ...defaultConfig,
    ...configArgs,
  };

  return composedConfig;
};

export default useConfig;

import { useContext } from 'react';
import { ConfigContext } from '../../contexts';
import { merge } from '../../utils';
import defaultConfig from './defaultConfig';

const useConfig = () => {
  const configArgs = useContext(ConfigContext);

  const composedConfig = merge(defaultConfig, configArgs);

  return composedConfig;
};

export default useConfig;

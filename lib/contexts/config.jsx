import { createContext } from 'react';
import { arrayOf, node, oneOfType, shape } from 'prop-types';

const ConfigContext = createContext();

const ConfigProvider = ({ children, config }) => {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};
ConfigProvider.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
  config: shape({}),
};

export { ConfigContext, ConfigProvider };

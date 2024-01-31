import { merge as _merge } from 'lodash';
import { arrayOf, oneOfType, shape } from 'prop-types';

const merge = (object, others) => {
  return _merge(object, others);
};
merge.propTypes = {
  object: shape({}),
  others: oneOfType([
    shape({}),
    arrayOf(shape({})),
  ]),
};
merge.defaultProps = {};

export default merge;
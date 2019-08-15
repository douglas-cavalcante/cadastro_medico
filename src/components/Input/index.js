import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

import { TInput } from './styles';

function Input({ style, ...rest }, ref) {
  return <TInput mode="flat" {...rest} ref={ref} style={style} />;
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};

export default forwardRef(Input);

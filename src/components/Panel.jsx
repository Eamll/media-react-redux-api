import PropTypes from "prop-types"
import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
}

export default Panel;

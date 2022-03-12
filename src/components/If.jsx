import { memo } from 'react'
import propTypes from 'prop-types'

function If({ condition, children, elseComponent }) {
  if (!condition) return elseComponent ? elseComponent : null

  return children
}

If.propTypes = {
  condition: propTypes.bool.isRequired,
  elseComponent: propTypes.func,
  children: propTypes.element,
}

export default memo(
  If,
  (props, oldProps) => props.condition === oldProps.condition
)

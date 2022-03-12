import styled from 'styled-components'
import propTypes from 'prop-types'

function getIcon(file) {
  try {
    const icon = require(`@/assets/icons/${file}.svg`)

    return icon
  } catch (error) {
    throw new Error(`Icon ${file} not found`)
  }
}

export function Icon({ width, height, name }) {
  return <IconWrapper width={width} height={height} src={getIcon(name)} />
}

Icon.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
  name: propTypes.string.isRequired,
}

const IconWrapper = styled.img`
  width: ${(props) => props.width || '1em'};
  height: ${(props) => props.height || '1em'};
`

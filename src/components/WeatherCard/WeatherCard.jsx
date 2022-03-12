import propTypes from 'prop-types'

import { Icon } from '@/components/Icon'

import * as Styled from './WeatherCard.styles'

export function WeatherCard({
  description,
  daytime,
  temperature,
  feelsLike,
  icon,
}) {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.WeatherWrapper>
          <Styled.IconWrapper>
            <Icon name={icon} height={50} width={50} />
          </Styled.IconWrapper>
          <Styled.WeatherResume>{description}</Styled.WeatherResume>
          <Styled.TimeOfDay>{daytime}</Styled.TimeOfDay>
        </Styled.WeatherWrapper>
        <Styled.TemperatureWrapper>
          <Styled.Degrees>{temperature}º</Styled.Degrees>
          <Styled.FeelsLike>Feels like {feelsLike}º</Styled.FeelsLike>
        </Styled.TemperatureWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  )
}

WeatherCard.propTypes = {
  description: propTypes.string.isRequired,
  daytime: propTypes.string.isRequired,
  temperature: propTypes.number.isRequired,
  feelsLike: propTypes.number.isRequired,
}

export default WeatherCard

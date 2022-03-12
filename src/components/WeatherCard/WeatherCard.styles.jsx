import styled from 'styled-components'
import { blue } from '@mui/material'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 300px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: 1.25rem;
  background: linear-gradient(
    45deg,
    rgba(52, 83, 255, 1) 0%,
    rgba(0, 138, 255, 1) 100%
  );
  color: ${({ theme }) => theme.palette.common.white};
  width: 100%;
`
export const Degrees = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
  font-size: 4rem;
  font-weight: 700;
  line-height: 3.25rem;
  height: 3.25rem;
  margin-bottom: auto;
`

export const FeelsLike = styled.span`
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
`

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const WeatherResume = styled.span`
  font-size: 1.375rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`

export const IconWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`

export const TimeOfDay = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`

export const Metrics = styled.span`
  margin-top: auto;
  font-size: 0.875rem;
  font-weight: 500;
`

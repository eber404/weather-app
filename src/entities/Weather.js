import { iconEnum } from '@/enums/iconEnum'

export class Weather {
  constructor({ description, hours, temperature, feelsLike, icon, location }) {
    this.description = description
    this.daytime = this.#getDaytime(hours)
    this.temperature = temperature
    this.feelsLike = feelsLike
    this.icon = iconEnum[icon]
    this.location = location
  }

  #getDaytime(hours) {
    if (hours < 6) {
      return 'early morning'
    } else if (hours >= 6 && hours < 12) {
      return 'morning'
    } else if (hours >= 12 && hours < 18) {
      return 'afternoon'
    } else if (hours >= 18 && hours < 24) {
      return 'evening'
    } else {
      return hours.toString()
    }
  }
}

import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {

  static mapRestCountryToCountry( restCountry: RESTCountry ): Country {
    return {
      // Iniciales
      capital: restCountry.capital?.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      population: restCountry.population,

      // Agregadas
      region: restCountry.region,
      subRegion: restCountry.subregion
    };

  }

  static mapRestCountryArrayToCountryArray( restCountries: RESTCountry[] ): Country[] {
        return restCountries.map( (country) => this.mapRestCountryToCountry(country) )
  }

}



declare module "country-telephone-data" {
  export interface Country {
    name: string;
    iso2: string;
    dialCode: string;
    priority?: number;
    areaCodes?: string[] | null;
    format?: string;
  }

  export const allCountries: Country[];

  const countryTelephoneData: {
    allCountries: Country[];
  };

  export default countryTelephoneData;
}

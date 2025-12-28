import type { Location } from "@/lib/types";

const formatCount = (value: number) => {
  if (value >= 1000) {
    return `${Math.round(value / 1000)}k+`;
  }
  if (value >= 100) {
    return `${Math.round(value / 10) * 10}+`;
  }
  if (value >= 20) {
    return `${Math.round(value / 5) * 5}+`;
  }
  return `${value}+`;
};

const getLocationStats = (locations: Location[]) => {
  const uniqueCities = new Set<string>();
  const uniqueCountries = new Set<string>(["United States", "Canada"]);

  locations.forEach((location) => {
    if (location.city) {
      uniqueCities.add(location.city);
    }

    const commaIndex = location.locationName?.indexOf(", ");
    if (commaIndex !== -1) {
      const stateOrCountry = location.locationName.substring(commaIndex + 2);
      if (stateOrCountry && stateOrCountry.length !== 2 && stateOrCountry.length !== 3) {
        uniqueCountries.add(stateOrCountry);
      }
    }
  });

  return {
    cityCount: uniqueCities.size,
    countryCount: uniqueCountries.size,
  };
};

export { formatCount, getLocationStats };

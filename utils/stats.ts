import type { Location } from "@/lib/types";

const US_STATE_CODES = new Set([
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
  "DC",
]);

const CA_PROVINCE_CODES = new Set([
  "AB",
  "BC",
  "MB",
  "NB",
  "NL",
  "NS",
  "NT",
  "NU",
  "ON",
  "PE",
  "QC",
  "SK",
  "YT",
]);

const AU_STATE_CODES = new Set(["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"]);

const getCountryFromLocation = (location: Location) => {
  const source = location.locationName || location.city;
  if (!source) {
    return null;
  }

  const parts = source
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length < 2) {
    return null;
  }

  const last = parts[parts.length - 1];
  const lastUpper = last.toUpperCase();

  if (US_STATE_CODES.has(lastUpper)) {
    return "United States";
  }
  if (CA_PROVINCE_CODES.has(lastUpper)) {
    return "Canada";
  }
  if (AU_STATE_CODES.has(lastUpper)) {
    return "Australia";
  }

  return last;
};

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
  const uniqueCountries = new Set<string>();

  locations.forEach((location) => {
    const cityName = location.city || location.locationName?.split(",")[0]?.trim();
    if (cityName) {
      uniqueCities.add(cityName);
    }

    const country = getCountryFromLocation(location);
    if (country) {
      uniqueCountries.add(country);
    }
  });

  return {
    cityCount: uniqueCities.size,
    countryCount: uniqueCountries.size,
  };
};

export { formatCount, getLocationStats, getCountryFromLocation };

export function isInteger(input:string) {
  return input?.match(/^\d+$/) ?? false;
}
export interface UserSourceData {
  first_name: string;
  last_name: string,
  email: string;
  trips: []
}

export interface EventSourceData {
  title: string;
  city: string;
  country: string
}
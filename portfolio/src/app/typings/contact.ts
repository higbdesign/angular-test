export interface IRegistered {
  age: number;
  date: string;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IName {
  first: string;
  last: string;
  title: string;
}

export interface ILogin {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

export interface ILocation {
  city: string;
  coordinates: {
    latitude: string;
    longitude: string;
  }
  country: string;
  postcode: number;
  state: string;
  street: {
    name: string;
    number: number;
  }
  timezone: {
    description: string;
    offset: string;
  }
}

export interface IId {
  name: string;
  value: string;
}

export interface IDateOfBirth {
  date: string;
  age: number;
}

export interface IContactInfo {
  cell: string;
  dob: IDateOfBirth;
  email: string;
  gender: string;
  id: IId;
  location: ILocation;
  login: ILogin;
  name: IName;
  nat: string;
  phone: string;
  picture: IPicture;
  registered: IRegistered;
}

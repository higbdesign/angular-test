import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Location {
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

export interface Id {
  name: string;
  value: string;
}

export interface DateOfBirth {
  date: string;
  age: number;
}

export interface ContactInfo {
  cell: string;
  dob: DateOfBirth;
  email: string;
  gender: string;
  id: Id;
  location: Location;
  login: {};
  name: {};
  nat: string;
  phone: string;
  picture: {};
  registered: {};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';

  cell: string;
  dob: DateOfBirth;
  email: string;
  gender: string;
  id: Id;
  location: Location;
  login: any;
  name: any;
  nat: string;
  phone: string;
  picture: any;
  registered: any;

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit() {
    console.log('lorem ipsum');
    this.fetchData();
  }

  ngAfterViewInit() {

  }

  private fetchData() {
    this.http
      .get(
        'https://randomuser.me/api'
      )
      .subscribe(({ info, results }: { info: object, results: object }) => {
        console.log('menu items', results[0]);

        const { cell, dob, email, gender, id, location, login, name, nat, phone, picture, registered }: ContactInfo = results[0];

        this.cell = cell;
        this.dob = dob;
        this.email = email;
        this.gender = gender;
        this.id = id;
        this.location = location;
        this.login = login;
        this.name = name;
        this.nat = nat;
        this.phone = phone;
        this.picture = picture;
        this.registered = registered;
      })
    }
}

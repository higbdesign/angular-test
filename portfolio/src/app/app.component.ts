import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IContactInfo, IDateOfBirth, IId, ILocation, ILogin, IName, IPicture, IRegistered } from './typings/contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
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

        const { cell, dob, email, gender, id, location, login, name, nat, phone, picture, registered }: IContactInfo = results[0];

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

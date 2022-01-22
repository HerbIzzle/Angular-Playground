import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./MaterialUI/User Table/User";


const USER_RESOURCE_URL : string = 'http://devbertspringbootderbydb-env.eba-nck4dqqz.eu-central-1.elasticbeanstalk.com/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  create(user: User): Promise<any> {
    return this.httpClient.post(USER_RESOURCE_URL, user).toPromise();
  }

  retrieve(id: number): Promise<User> {
    return this.httpClient.get<User>(USER_RESOURCE_URL + '/' + id).toPromise();
  }

  update(user: User): Promise<any> {
    return this.httpClient.put(USER_RESOURCE_URL + '/' + user.id, user).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.httpClient.delete(USER_RESOURCE_URL + '/' + id).toPromise();
  }

  retrieveAll(): Promise<User[]> {
    return this.httpClient.get<User[]>(USER_RESOURCE_URL).toPromise();
  }
}


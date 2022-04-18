import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {}

  fetchRepo(username:string):any {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

  getUserInfor(username:string):any {

    const promise = new Promise((resolve, reject) =>{
      resolve(firstValueFrom(this.http.get(`https://api.github.com/users/${username}`)))
    })

    return promise

  }
}

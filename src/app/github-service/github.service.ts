import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {}

  getRepoData(username:string):any {
    const promise = new Promise((resolve, reject) =>{
      resolve(firstValueFrom(this.http.get(`https://api.github.com/users/${username}/repos`)))
    })

    return promise
  }

  getUserInfor(username:string):any {

    const promise = new Promise((resolve, reject) =>{
      resolve(firstValueFrom(this.http.get(`https://api.github.com/users/${username}`)))
    })

    return promise

  }
}

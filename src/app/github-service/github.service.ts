import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  fetchRepo(username:string):any {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}

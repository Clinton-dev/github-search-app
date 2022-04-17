import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repo: Repository;

  constructor(private http: HttpClient) {
    this.repo = new Repository("","","","",new Date(),new Date());
   }

  fetchRepo(username:string):any {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}

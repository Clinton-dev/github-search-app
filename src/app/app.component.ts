import { Component,OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from './github-service/github.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubService:GithubService;
  mySubscription: Subscription = new Subscription;
  repositories:any = [];

  ngOnDestroy():void{
    this.mySubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getPublicRepositories();
  }

  constructor(githubService:GithubService) {
    this.githubService = githubService;
    console.log(this.repositories)
  }

  getPublicRepositories() {
     this.mySubscription.add(this.githubService.fetchRepo('Clinton-dev').subscribe((repos:any) => {
        this.repositories = repos;
      })
     )
     return this.repositories
  }
}

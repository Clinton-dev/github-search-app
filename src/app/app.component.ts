import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from './github-service/github.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubService:GithubService;
  mySubscription: Subscription = new Subscription;
  repositories:any = [];
  name = new FormControl();

  ngOnDestroy():void{
    this.mySubscription.unsubscribe();
  }

  ngOnInit(): void { }

  constructor(githubService:GithubService) {
    this.githubService = githubService;
  }

  getPublicRepositories(username:string) {
    this.mySubscription.add(this.githubService.fetchRepo('Clinton-dev').subscribe((repos:any) => {
      this.repositories = repos;
    })
    )
  }

  searchRepos() {
    this.getPublicRepositories(this.name.value)
    return false
  }
}

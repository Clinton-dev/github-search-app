import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from '../github-service/github.service';
import { Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  githubService:GithubService;
  repositories:any = [];

  mySubscription: Subscription = new Subscription;
  name = new FormControl('',Validators.required);

  ngOnDestroy():void{
    this.mySubscription.unsubscribe();
  }

  constructor(githubService:GithubService) {
    this.githubService = githubService;
   }

  ngOnInit(): void {
  }

  getPublicRepositories(username:string) {
    this.mySubscription.add(this.githubService.fetchRepo(username).subscribe((repos:any) => {
      this.repositories = repos;
    })
    )
  }

  searchRepos() {
    if(!this.name.value) {
      alert("please insert username")
    }

    this.getPublicRepositories(this.name.value)
    return false
  }

}

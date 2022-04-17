import { Component, OnInit, OnDestroy } from '@angular/core';
import { Repository } from '../repository';
import { GithubService } from '../github-service/github.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  githubService:GithubService;
  repos:Repository[] = [];

  mySubscription: Subscription = new Subscription;

  constructor(githubService:GithubService) {
    this.githubService = githubService
  }

   ngOnDestroy():void{
    this.mySubscription.unsubscribe();
   }

    ngOnInit(): void {
    }

    getPublicRepositories(username:string) {
      this.mySubscription.add(this.githubService.fetchRepo(username).subscribe((reposArray:any) => {
        // this.repos = repos; add repos object to the array
        for(let i=0;i<=reposArray.length; i++) {
          let repoInfor = new Repository(reposArray[i].name,reposArray[i].description, reposArray[i].html_url,reposArray[i].created_at);
          this.repos.push(repoInfor)
        }
      })
      )
    }

    githubSearch(inputValue) {
      this.getPublicRepositories(inputValue)
      return false
    }



}

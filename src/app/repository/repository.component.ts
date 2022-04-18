import { Component, OnInit, OnDestroy } from '@angular/core';
import { Repository } from '../repository';
import { GithubService } from '../github-service/github.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  name = new FormControl('');
  githubService:GithubService;
  repos:Repository[] = [];

  constructor(githubService:GithubService) {
    this.githubService = githubService
  }

  ngOnInit(): void {
  }

  searchGithub() {
    console.log(this.name.value)
    this.getInforWithPromise(this.name.value);
  }

  async getInforWithPromise(username:string) {
    await this.githubService.getRepoData(username).then((reposArray) =>{
      for(let i=0;i<=reposArray.length; i++) {
        let repoInfor = new Repository(reposArray[i].name,reposArray[i].description, reposArray[i].html_url,reposArray[i].created_at);
        this.repos.push(repoInfor)
      }
    })
  }

  /*   getPublicRepositories(username:string) {
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
    } */



}

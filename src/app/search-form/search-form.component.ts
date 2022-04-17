import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() inputValue = new EventEmitter<string>();
  name = new FormControl('',Validators.required);

  searchGithub(name:string){
    this.inputValue.emit(name);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

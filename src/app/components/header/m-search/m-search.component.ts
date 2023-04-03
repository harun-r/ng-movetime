import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormControl} from "@angular/forms"
@Component({
  selector: 'app-m-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './m-search.component.html'
})
export class MSearchComponent implements OnInit {
  openSearchModal: any = false;
  search_val:any = '';
  ngOnInit(): void {
    
  }
  constructor(){}

  name = new FormControl('')

  openSearch($event:any){
    console.log($event);
    this.search_val = this.name.value;
    if(this.search_val.length > 0){
      this.openSearchModal = true
    }else{
      this.openSearchModal = false
    }
  }

}

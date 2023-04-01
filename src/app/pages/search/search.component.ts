import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms' 
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  movieResults: any = [];
  isLoader: any = false;
  constructor( private service: SearchService){}
  ngOnInit(): void {
    this.onSubmit()
  }

  searchMovie = new FormGroup({
    'movieName': new FormControl('')
  })

  onSubmit(){
    console.log(this.searchMovie.value, 'Submit Value');
    this.isLoader = true;
    this.service.getSearch(this.searchMovie.value).subscribe((result)=>{
      this.isLoader = false;
      this.movieResults = result.results;

    })
  }
}

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
  constructor( private service: SearchService){}
  ngOnInit(): void {
    this.onSubmit()
  }

  searchMovie = new FormGroup({
    'movieName': new FormControl(null)
  })

  onSubmit(){
    console.log(this.searchMovie.value, 'Submit Value');
    
    this.service.getSearch(this.searchMovie.value).subscribe((result)=>{

      console.log(result, '#SearchResult');
      
      this.movieResults = result.results;

    })
  }
}

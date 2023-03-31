import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from 'src/app/services/movie/movie.service';
MovieService
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html'
})
export class SliderComponent implements OnInit{
  movieResults:any = [];
  constructor(private service: MovieService){}
  ngOnInit(): void {
    this.getMovieSlider()
  }
  image_path = this.service.IMG_PATH;
  getMovieSlider(){
    this.service.homeSlider().subscribe(result => {
      console.log(result, 'result');
      this.movieResults = result.results
    })
  }
}

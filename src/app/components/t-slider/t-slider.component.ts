import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from 'src/app/services/movie/movie.service';
MovieService
@Component({
  selector: 'app-t-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './t-slider.component.html'
})
export class TSliderComponent implements OnInit{
  constructor(private service: MovieService){}
  trandingResult: any = [];
  image_path = this.service.IMG_PATH;
  ngOnInit(): void {
    this.getTrandingSlider();
  }
  getTrandingSlider(){
    this.service.setTradtingSlider().subscribe((result)=>{
      console.log(result, 'trading#');
      this.trandingResult = result.results
    })
  }
}

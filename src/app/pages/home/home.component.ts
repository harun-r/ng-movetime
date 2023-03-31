import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from "../../components/slider/slider.component";
import { TSliderComponent } from "../../components/t-slider/t-slider.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [CommonModule, SliderComponent, TSliderComponent]
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from "../../components/slider/slider.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [CommonModule, SliderComponent]
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MSearchComponent } from "./m-search/m-search.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports: [CommonModule, RouterLink, MSearchComponent]
})
export class HeaderComponent {

}

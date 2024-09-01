import { Component } from '@angular/core';
import { TuiCarousel } from '@taiga-ui/kit';

@Component({
  selector: 'app-top-view',
  standalone: true,
  imports: [
    TuiCarousel
  ],
  templateUrl: './top-view.component.html',
  styleUrl: './top-view.component.less'
})
export class TopViewComponent {

}

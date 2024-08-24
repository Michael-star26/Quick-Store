import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink , 
    RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent {

}

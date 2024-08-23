import { Component } from '@angular/core';
import { MobileUiComponent } from '../mobile-ui/mobile-ui.component';
import { DesktopUiComponent } from '../desktop-ui/desktop-ui.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MobileUiComponent,
    DesktopUiComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}

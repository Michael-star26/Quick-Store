import { Component } from '@angular/core';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    TuiNavigation
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {

}

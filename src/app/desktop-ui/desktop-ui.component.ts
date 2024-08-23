import { Component } from '@angular/core';
import { 
  TuiIcon,
  TuiButton,
  TuiDataList,
  TuiTitle
 } from '@taiga-ui/core';
import {
  TuiNavigation,
} from '@taiga-ui/layout'

import {
  TuiFade,
  TuiBadge
} from '@taiga-ui/kit';
@Component({
  selector: 'app-desktop-ui',
  standalone: true,
  imports: [
    TuiNavigation,
    TuiIcon,
    TuiButton,
    TuiDataList,
    TuiTitle,
    TuiFade,
    TuiBadge
  ],
  templateUrl: './desktop-ui.component.html',
  styleUrl: './desktop-ui.component.less'
})
export class DesktopUiComponent {
  expanded=true
}

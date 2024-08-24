import { Component, ChangeDetectionStrategy } from '@angular/core';
import { 
  TuiIcon,
  TuiButton,
  TuiDataList,
  TuiTitle,
  TuiTextfield,
  TuiHint,
  TuiDropdown
 } from '@taiga-ui/core';
 
import {
  TuiNavigation,
} from '@taiga-ui/layout'
import {
  TuiInputModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/legacy'

import {
  TuiFade,
  TuiBadge,
  TuiChevron,
  TuiDataListDropdownManager,
  TuiBadgeNotification
} from '@taiga-ui/kit';
import {ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
import { TuiObscured } from '@taiga-ui/cdk/directives/obscured';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-desktop-ui',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    TuiHint,
    ReactiveFormsModule,
    TuiDataListDropdownManager,
    TuiNavigation,
    TuiBadgeNotification,
    TuiIcon,
    TuiFade,
    TuiButton,
    TuiDataList,
    TuiTitle,
    TuiFade,
    TuiBadge,
    TuiChevron,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiTextfield,
    TuiDataList,
    TuiDropdown,
    TuiObscured,
    TuiActiveZone,
    
  ],
  templateUrl: './desktop-ui.component.html',
  styleUrl: './desktop-ui.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopUiComponent {
  expanded=false
  search=new FormControl ('',[Validators.required])
}

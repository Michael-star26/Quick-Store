import { Component, ChangeDetectionStrategy } from '@angular/core';
import { 
  TuiIcon,
  TuiButton,
  TuiDataList,
  TuiTitle,
  TuiTextfield,
  TuiHint,
  TuiDropdown,
  TuiAppearance,
  TuiSurface,
  TuiScrollable,
  TuiScrollbar,
  TuiDropdownService
 } from '@taiga-ui/core';
  
 
import {
  TuiCardLarge,
  TuiCardMedium,
  TuiHeader,
  TuiNavComponent,
  TuiNavigation,
} from '@taiga-ui/layout'
import {
  TuiInputModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/legacy'
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
  TuiFade,
  TuiBadge,
  TuiChevron,
  TuiDataListDropdownManager,
  TuiBadgeNotification,
  TuiButtonGroup
} from '@taiga-ui/kit';
import {ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
import { TuiObscured } from '@taiga-ui/cdk/directives/obscured';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../login/login.component';
import { CollectionComponent } from '../collection/collection.component';
import { TopViewComponent } from '../top-view/top-view.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-desktop-ui',
  standalone: true,
  imports: [
    ProductsComponent,
    TuiScrollable,
    TuiScrollbar,
    TuiButtonGroup,
    TuiSurface,
    TuiCardMedium,
  TopViewComponent, 
    CollectionComponent,
    LoginComponent,
    CommonModule,
    TuiNavComponent,
    TuiHeader,
    TuiCardLarge,
    TuiTitle,
    TuiRepeatTimes,
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
    TuiAppearance, 
    TuiSurface,
    TuiTitle,
    TuiFade,
    TuiBadge,
    TuiChevron,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiTextfield,
    TuiDropdown,
    TuiObscured,
    TuiActiveZone,
    
  ],
  templateUrl: './desktop-ui.component.html',
  styleUrl: './desktop-ui.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[TuiDropdownService]
})
export class DesktopUiComponent {
  expanded=false
  search=new FormControl ('',[Validators.required])
  position='sticky'
  show=true
  pst(){
    this.position='relative'
    this.show=false
  };
  options=["discounts","Flash sale","Free delivery"];
}

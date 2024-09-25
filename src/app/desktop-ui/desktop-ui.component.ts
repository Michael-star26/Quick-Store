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
  TuiButtonGroup,
  TuiCarousel
} from '@taiga-ui/kit';
import {ReactiveFormsModule,FormControl, Validators,FormsModule } from '@angular/forms';
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
    TuiNavigation,
    FormsModule,
    TuiCarousel,
    CommonModule,
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
  protected open=false
  toggle(open:boolean){
    this.open=open
  }
  pst(){
    this.position='relative'
    this.show=false
  };
  options=["discounts","Flash sale","Free delivery"];
  protected items=[
    "/images/header1.jpg",
    "/images/laptop1.jpg",
    "/images/ladies1.jpg",
    "/images/laptop2.webp",
    "/images/heaterjug2.jpg",
    "/images/heaterjug.jpg",
    "/images/laptop3.jpg",
    "/images/laptop4.webp",
    "/images/laptop5.webp",
    "/images/samsung1.jpeg",
    "/images/samsung2.jpg",
    "/images/samsung4.jpg",
    "/images/velvex.jpg",
    "/images/clothe1.jpg",
    "/images/clothe2.jpg",
    "/images/clothe3.jpg",
    "/images/clothe4.jpg",
    "/images/clothe5.jpg",
    "/images/clothe6.jpg",
    "/images/clothe7.jpg",
    "/images/clothe8.jpg",
  ]
  protected index=0
}

import { Component } from '@angular/core';
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
  TuiScrollbar
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

import { TuiObscured } from '@taiga-ui/cdk/directives/obscured';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    TuiCarousel,
    TuiScrollable,
    TuiScrollbar,
    TuiButtonGroup,
    TuiSurface,
    TuiCardMedium,
    TuiNavComponent,
    TuiHeader,
    TuiCardLarge,
    TuiTitle,
    TuiRepeatTimes,
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
    TuiDataList,
    TuiDropdown,
    TuiObscured,
    TuiActiveZone,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.less'
})
export class ProductListComponent {
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { TuiCardLarge, TuiCardMedium, TuiCell } from '@taiga-ui/layout';
import { 
  TuiIcon,
  TuiButton,
  TuiTitle,
  TuiHint,
  TuiDropdown,
  TuiAppearance,
  TuiSurface,
  tuiNumberFormatProvider,
 } from '@taiga-ui/core';
 import { GalleryModule, GalleryItem, ImageItem,GalleryComponent } from 'ng-gallery';
 import {
  TuiFade,
  TuiBadge,
  TuiChevron,
  TuiDataListDropdownManager,
  TuiBadgeNotification,
  TuiButtonGroup,
  TuiCarousel
} from '@taiga-ui/kit';
import { CommonModule } from '@angular/common';
import { TuiInputNumberModule,tuiInputNumberOptionsProvider,TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TuiCardLarge,
    TuiCardMedium,
    TuiIcon,
    TuiButton,
    TuiTitle,
    TuiHint,
    TuiDropdown,
    TuiAppearance,
    TuiSurface,
    TuiFade,
    TuiBadge,
    TuiChevron,
    TuiDataListDropdownManager,
    TuiBadgeNotification,
    TuiButtonGroup,
    TuiCarousel,
    TuiCell,
    CommonModule,
    TuiInputNumberModule,
    ReactiveFormsModule,
    FormsModule,
    TuiTextfieldControllerModule,
    GalleryModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.less',
providers:[
  tuiNumberFormatProvider({
    precision:0
  }),
tuiInputNumberOptionsProvider({
  step:1
})
]
})
export class CartComponent implements OnInit{
  @ViewChild(GalleryComponent) gallery!: GalleryComponent;
  // protected items=[
  //   "/images/header1.jpg",
  //   "/images/laptop1.jpg",
  //   "/images/ladies1.jpg",
  //   "/images/laptop2.webp",
  //   "/images/heaterjug2.jpg",
  // ]

  cartQuantity=new FormGroup({
    quantity:new FormControl(1)
  })
  images!: GalleryItem[];

  ngOnInit(): void {
    this.gallery.load([
      new ImageItem({ src: '/images/brand4.jpg', thumb: '/images/brand4.jpg',alt:'not loaded' }),
      new ImageItem({ src: '/images/laptop3.jpg', thumb: '/images/laptop2.webp',alt:'not loaded' }),
      new ImageItem({ src: '/images/laptop4.webp', thumb: '/images/laptop2.webp' }),
      new ImageItem({ src: '/images/laptop5.webp', thumb: '/images/laptop2.webp' }),
      new ImageItem({ src: '/images/laptop6.webp', thumb: '/images/laptop2.webp' }),
    ])
      
  }

}

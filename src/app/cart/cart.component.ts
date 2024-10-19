import { Component, OnInit, ViewChild } from '@angular/core';
import { TuiCardLarge, TuiCardMedium, TuiCell, TuiNavigation } from '@taiga-ui/layout';
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
import { GALLERY_CONFIG, GalleryConfig , GalleryModule, Gallery, GalleryRef, ImageItem} from 'ng-gallery';
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
    TuiNavigation
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.less',
providers:[
  tuiNumberFormatProvider({
    precision:0
  }),
tuiInputNumberOptionsProvider({
  step:1
}),
{
  provide: GALLERY_CONFIG,
  useValue: {
    autoHeight: true,
    imageSize: 'cover'
  } as GalleryConfig
}
]
})
export class CartComponent implements OnInit{
  constructor(private gallery: Gallery){}
  protected items=[
    "/images/header1.jpg",
    "/images/laptop1.jpg",
    "/images/ladies1.jpg",
    "/images/laptop2.webp",
    "/images/heaterjug2.jpg",
  ]


  cartQuantity=new FormGroup({
    quantity:new FormControl(1)
  })

  ngOnInit(): void {
    const galleryRef = this.gallery.ref('myGallery');
    galleryRef.load([
      new ImageItem({ src: '/brand3.png', thumb: 'brand3.png',alt:'xyz',type:'png' }),
      new ImageItem({ src: '/brand3.png', thumb: 'brand3.png',alt:'xyz' }),
      new ImageItem({ src: '/brand3.png', thumb: 'brand3.png',alt:'xyz' }),
      new ImageItem({ src: '/images/samsung8.jpg', thumb: '/images/samsung8.jpg' }),
      new ImageItem({ src: '/images/samsung8.jpg', thumb: '/images/samsung8.jpg' }),
      new ImageItem({ src: '/images/samsung8.jpg', thumb: '/images/samsung8.jpg' }),
      // ... more items
    ])
  }

}

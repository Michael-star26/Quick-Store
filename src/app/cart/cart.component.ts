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
import { CommonModule, AsyncPipe, NgForOf } from '@angular/common';
import { TuiInputNumberModule,tuiInputNumberOptionsProvider,TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GALLERY_CONFIG, GalleryConfig , GalleryModule, Gallery, GalleryRef, ImageItem,} from 'ng-gallery';
import { NgxColorsModule } from 'ngx-colors';
import {TuiTable} from '@taiga-ui/addon-table';
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
    TuiNavigation,
    NgxColorsModule,
    TuiTable,
    NgForOf
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
    imageSize: 'cover',
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
      new ImageItem({ src: '/images/clothe1.jpg', thumb: 'images/clothe1.jpg' }),
      new ImageItem({ src: '/images/clothe2.jpg', thumb: 'images/clothe2.jpg' }),
      new ImageItem({ src: '/images/clothe3.jpg', thumb: 'images/clothe3.jpg' }),
      new ImageItem({ src: '/images/clothe4.jpg', thumb: 'images/clothe4.jpg' }),
      new ImageItem({ src: '/images/clothe5.jpg', thumb: 'images/clothe5.jpg' }),
      new ImageItem({ src: '/images/laptop1.jpg', thumb: '/images/laptop1.jpg' }),
      new ImageItem({ src: '/images/laptop3.jpg', thumb: '/images/laptop3.jpg' }),
      new ImageItem({ src: '/images/samsung2.jpg', thumb: '/images/samsung2.jpg' }),
      new ImageItem({ src: '/images/samsung4.jpg', thumb: '/images/samsung4.jpg' }),
      // ... more items
    ])
  }

  selectedColor: string = "#9C27B0";
  colorPalette = [
    "#00BCD4",
    "#03A9F4",
    "#B2F35C",
  ];

  data:any=[
    {
      name:"Back camera",
      descriprion:"50 MP back camera"
    },
    {
      name:"Rear camera",
      descriprion:"10 MP rear camera"
    },
    {
      name:"RAM",
      descriprion:"8 GB"
    },
    ,
    {
      name:"Storage",
      descriprion:"64GB expandable"
    },
    {
      name:"Screen",
      descriprion:"Gorilla screen"
    },
    {
      name:"Display",
      descriprion:"Amo led"
    },
    {
      name:"Sim card",
      descriprion:"Dual sim"
    }
  ] as const
  protected readonly columns=Object.keys(this.data[0])

}

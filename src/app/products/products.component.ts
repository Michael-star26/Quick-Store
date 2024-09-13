import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import {TuiHint, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductListComponent,
    TuiHint, 
    TuiSurface, 
    TuiTitle,
    TuiFade,
    TuiCardMedium,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.less'
})
export class ProductsComponent {

}

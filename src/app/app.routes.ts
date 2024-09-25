import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
import { CashOutComponent } from './cash-out/cash-out.component';
import { ChatComponent } from './chat/chat.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DesktopUiComponent } from './desktop-ui/desktop-ui.component';

export const routes: Routes = [
    {path:'cart',title:'cart',component:CartComponent},
    {path:'cash-out',title:'',component:CashOutComponent},
    {path:'contact-us',title:'',component:ContactUsComponent},
    {path:'login',title:'',component:LoginComponent},
    {path:'item/id',title:'',component:ViewProductComponent},
    {path:'welcome',component:DesktopUiComponent,title:'Welcome'},       
    {path:'welcome',component:DesktopUiComponent,title:'Shop with us',
        children:[
            {
                path:'cart',component:CartComponent,title:'cart'
            }
        ]
    },
    {path:'',title:'Home',redirectTo:'/welcome',pathMatch:'full'},
    {path:'**',title:'Page not found',component:NotFoundComponent},
];

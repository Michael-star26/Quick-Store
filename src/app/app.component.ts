import { TuiRoot } from "@taiga-ui/core";
import { Component ,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { DesktopUiComponent } from "./desktop-ui/desktop-ui.component";
import { FooterComponent } from "./footer/footer.component";
import {MobileUiComponent} from "./mobile-ui/mobile-ui.component"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TuiRoot,
    NgxSpinnerModule,
    DesktopUiComponent,
    FooterComponent,
    MobileUiComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  constructor(private spinner:NgxSpinnerService){}
  title = 'Quick Store';
  ngOnInit(): void {
    this.spinner.hide()
    setTimeout(()=>{
      this.spinner.hide()
    },3000)
  }

}

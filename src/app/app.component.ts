import { TuiRoot } from "@taiga-ui/core";
import { Component ,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { DesktopUiComponent } from "./desktop-ui/desktop-ui.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TuiRoot,
    NgxSpinnerModule,
    DesktopUiComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  constructor(private spinner:NgxSpinnerService){}
  title = 'Quick Store';
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(()=>{
      this.spinner.hide()
    },3000)
  }
  
}

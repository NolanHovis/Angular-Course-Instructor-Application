import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService, 
    private loggingService: LoggingService,
    @Inject(PLATFORM_ID) private platformId
    ){}
    ngOnInit(){
      if(isPlatformBrowser(this.platformId)){
        this.authService.autoLogin();
      }
      this.loggingService.printLog('Hey From AppComponent');
    }
}

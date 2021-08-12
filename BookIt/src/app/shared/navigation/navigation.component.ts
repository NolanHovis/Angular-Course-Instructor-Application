import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from '../data-storage/data-storage.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  collapsed = true;
  show = false;
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}
  ngOnInit(
  ) {
    console.log("test");

    this.userSub = this.authService.user.subscribe(user=>{
      this.isAuthenticated = !!user;
      console.log("test");
      console.log(this.isAuthenticated)
      console.log("test");
    });
  }

  onSaveData(){
    this.dataStorageService.storeBooks();
  }

  onFetchData(){
    this.dataStorageService.fetchBooks().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { GlobalState } from '../../../global.state';
import { BaProfilePicturePipe } from '../../pipes';
import { BaMsgCenter } from '../../components/baMsgCenter';
import { BaScrollPosition } from '../../directives';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  directives: [BaMsgCenter, BaScrollPosition],
  pipes: [BaProfilePicturePipe],
  encapsulation: ViewEncapsulation.None
})


export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;
  public showUsername: boolean = false;
  public userName: string;
  constructor(private _state: GlobalState,
    private _localStorage: LocalStorageService, private _router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;

    });
    let loginDetails = this._localStorage.get('loginDetails');
    if (loginDetails !== null) {
      let userName = loginDetails['userName'];
      this.userName = userName;
      this.showUsername = true;

    } else {
      this.showUsername = false;
    }
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public signOut() {
    this._localStorage.remove('loginDetails');

  }
}

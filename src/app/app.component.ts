import './app.loader.ts';
import { Component, ViewEncapsulation, provide, Provider } from '@angular/core';
import { GlobalState } from './global.state';
import { BaThemeConfigProvider, BaThemeConfig } from './theme';
import { Location } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { BaThemeRun } from './theme/directives';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG  }
from 'angular-2-local-storage';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';

let localStorageServiceConfig = {
    prefix: 'investor-analytics',
    storageType: 'sessionStorage'
};

const LOCAL_STORAGE_CONFIG_PROVIDER: Provider = provide(LOCAL_STORAGE_SERVICE_CONFIG, {
    useValue: localStorageServiceConfig
});

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  directives: [BaThemeRun],
  providers: [BaThemeConfigProvider, BaThemeConfig, BaImageLoaderService,
  BaThemeSpinner, HTTP_PROVIDERS,
  LocalStorageService, LOCAL_STORAGE_CONFIG_PROVIDER, Location],
  encapsulation: ViewEncapsulation.None,
  styles: [require('normalize.css'), require('./app.scss')],
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})


export class App {


  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner) {

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }
}

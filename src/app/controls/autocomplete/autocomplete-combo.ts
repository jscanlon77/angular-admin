import { Component, NgModule } from '@angular/core';
import { IgComboComponent } from "./ignite-typings/ignite-angular2";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

declare var jQuery: any;
@Component({
	selector: 'auto-complete-combo',
	templateUrl: "./autocomplete.html"
})
export class AutoCompleteCombo {
	public options: IgCombo;
    public dataSource:any;
    public valueKey:any;
    public textKey:any;
    public width:number;

	constructor() {
		
		this.options = {
			valueKey: this.valueKey,
			textKey: this.textKey,
			dataSource: this.dataSource,
			width: this.width
		};
	}
}
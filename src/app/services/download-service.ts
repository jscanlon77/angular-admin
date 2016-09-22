import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions, BrowserXhr } from '@angular/http';


@Injectable()
export class DownloadService {
  constructor(private _xmlHttpRequest: XMLHttpRequest) {

  }

  downloadFile(base64Array:any, fileExtension:string, fileName:string){
      var actualContentType = "";
        switch (fileExtension) {
            case '.xlsx':
                actualContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8";
                break;
            case '.xls':
                actualContentType = "application/ms-excel";
                break;
            default:
        }
        try {

            var blob = new Blob([base64Array], { type: actualContentType });
            var fileNameAndExtension = fileName + fileExtension;
            (blob, fileNameAndExtension);
            saveAs(blob, fileNameAndExtension);
            blob.msClose();
        } catch (e) {
            
        }
  }
}

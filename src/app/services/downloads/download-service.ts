import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions, BrowserXhr } from '@angular/http';
import { saveAs } from 'file-saver';
import json2csv = require('json2csv');


@Injectable()
export class DownloadService {
    constructor() {

    }

    toExcel(data: any, fileExtension: string, fileName: string) {
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

            var blob = new Blob([data], { type: actualContentType });
            var fileNameAndExtension = fileName + fileExtension;
            saveAs(blob, fileNameAndExtension);
            blob.msClose();

        } catch (e) {

        }
    }

    jsonToExcel(fileJson: any, headers:any, fileExtension: string, fileName: string) {
        var actualContentType = "";
        switch (fileExtension) {
            case '.csv':
                actualContentType = "data:text/csv;charset=utf-8";
                break;
           
            default:
        }
        try {

            let result = json2csv({ data: fileJson, fields: headers})
            var blob = new Blob([result], { type: actualContentType });
            var fileNameAndExtension = fileName + fileExtension;
            saveAs(blob, fileNameAndExtension);

        } catch (e) {
            console.error(e);
        }
    }


}

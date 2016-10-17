import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS, Http, Headers, RequestOptions, BrowserXhr } from '@angular/http';
import fileSaver from 'file-saver';
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
            (blob, fileNameAndExtension);

            fileSaver.saveAs(blob, fileNameAndExtension);
            blob.msClose();

        } catch (e) {

        }
    }

    jsonToExcel(data: any, fileExtension: string, fileName: string) {
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


            var fields = ['car', 'price', 'color'];
            var myCars = [
                {
                    "car": "Audi",
                    "price": 40000,
                    "color": "blue"
                }, {
                    "car": "BMW",
                    "price": 35000,
                    "color": "black"
                }, {
                    "car": "Porsche",
                    "price": 60000,
                    "color": "green"
                }
            ];
            let result = json2csv({ data: myCars, fields: fields })
            var blob = new Blob([result], { type: actualContentType });
            var fileNameAndExtension = fileName + fileExtension;
            (blob, fileNameAndExtension);
            fileSaver.saveAs(blob, fileNameAndExtension);
            blob.msClose();

        } catch (e) {

        }
    }


}

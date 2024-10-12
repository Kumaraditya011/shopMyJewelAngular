import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
// environment={
//        production: false,
//        accesskeyyy : 'AKIA42X4NKH4WPPOT4XF',
//        secretkeyyy : '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'
// }
  constructor() { }

  uploadFileToS3(options: any, index: any): Observable<any> {
    return new Observable(observer => {
      const s3 = new S3({
        // secretAccessKey: this.environment.secretkeyyy,
        // accessKeyId: this.environment.accesskeyyy,
        region: 'ap-south-1'
      });

      let file = options.file;
      let folderName = 'merchantUploads';
      let fileName = file.name;
      const contentType = file.type;

      const payload = {
        Key: `${folderName}/${fileName}`,
        Bucket: 'shopmyjewelbucket',
        Body: file,
        ContentType: contentType,
      };

      s3.upload(payload).on('httpUploadProgress', function (evt: any) {
        let progress = (evt.loaded / evt.total) * 100.0;
        evt.percent = parseInt(progress.toString());
        evt.index = index;
        evt.filename = fileName;
        observer.next(evt);
      }).send((err: any, res: any) => {
        if (err) {
          console.log('Error uploading file: ', err);
          observer.error(err);
        } else {
          res.percent = 100;
          res.index = index;
          res.key = res.Key;
          res.filename = fileName;
          observer.next(res);
        }
        observer.complete();
      });
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor(private http: HttpClient) { }

  readFile(path) {
    return this.http.get(path, {
      headers: new HttpHeaders({'NeedsAuthentication': "0", 'Loading': "0"})
    }).toPromise()
  }

  async readJSON(fileName) {
    return await this.readFile('../../assets/files/' + fileName)
  }
}

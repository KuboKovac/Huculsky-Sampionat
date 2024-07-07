import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FileModel } from '../models/FileModel.js';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private serverUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getImagesByCategory(param: string): Observable<FileModel[]> {
    return this.http.get<FileModel[]>(this.serverUrl + "Files/GetImagesByCategory/" + param).pipe()
  }

  addImages(param: string, file: any) {
    return this.http.post(this.serverUrl + "Files/CreateImages/" + param, file).pipe();
  }

  deleteImageById() {

  }
}

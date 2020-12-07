import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class NotesServiceService {
  private headers: HttpHeaders;
  private url: string = 'https://localhost:44398/api/notes';
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    });
  }
  public get() {
    return this.http.get(this.url, { headers: this.headers });
  }
  public add(payload) {
    return this.http.post(this.url, payload, { headers: this.headers });
  }
  public remove(payload) {
    let newurl = this.url + '/delete/' + payload.id;
    return this.http.get(newurl, { headers: this.headers });
  }
  public update(payload) {
    let newurl = this.url + '/put';
    return this.http.post(newurl, payload, { headers: this.headers });
  }
}

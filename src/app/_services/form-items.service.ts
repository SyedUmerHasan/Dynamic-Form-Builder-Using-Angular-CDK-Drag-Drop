import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormItemsService {

  constructor(private http: HttpClient) { }
  getPassCandidatesCount() {
    return this.http.get<any>(environment.apiUrl + `api/FormItems`, {})
        .pipe(map(user => {
          return user;
        }));
  }
  saveFormFields(formItem, options=null){
    return this.http.post<any>(environment.apiUrl + `api/FormItems`, {formItem, options})
        .pipe(map(user => {
          return user;
        }));
  }

}

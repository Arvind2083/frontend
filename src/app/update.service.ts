import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }

  public updateStatement(statement) {
    return this.http.put("http://localhost:8080/updateStatement", statement, { responseType: 'text' as 'json' });
  }

  public viewStatements() {
    let username = 'admin';
    let password = 'admin1';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get("http://localhost:8080/viewStatements",{headers});
  }

  public doLogin(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'});
  }

}

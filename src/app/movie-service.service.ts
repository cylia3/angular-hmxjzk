import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
  })



export class MovieServiceService {
constructor(private $http: HttpClient) {

    }

    getData(): Observable<any> {
     
        return this.$http.get('https://api.themoviedb.org/3/discover/movie?api_key=aef41dcf26fa7efeb0775672fd9dab02');

        
    }

}
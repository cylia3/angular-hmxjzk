import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieServiceService } from './movie-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  data: any;

  constructor(private $ser: MovieServiceService) { }

  ngOnInit() {
      this.$ser.getData().subscribe(
      s => this.data = s,
      error => alert('error !!')

    );
  }

 
}

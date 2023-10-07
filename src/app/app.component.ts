import { Component, VERSION } from '@angular/core';
import { HttpService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: any;
  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.httpService.getPosts().subscribe(
      (response) => {
        this.posts = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // getvalue() {
  //   console.log("op")
  //   for (let i; i < this.posts.length; i++) {
  //     console.log(this.posts[i]);
  //   }
  // }
}

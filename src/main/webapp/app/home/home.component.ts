import { Component, OnInit } from '@angular/core';
import { Post } from 'app/shared/model/post.model';
import { PostService } from 'app/entities/post';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.service.query().subscribe(
      (res: HttpResponse<Post[]>) => {
        this.posts = res.body;
      },
      error => {
        console.log(error);
      }
    );
  }
}

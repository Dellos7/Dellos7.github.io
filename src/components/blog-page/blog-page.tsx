import { Component, Prop, h, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { BlogService } from '../../services/blog-service';
import{ Helmet } from '@stencil/helmet';

@Component({
  tag: 'blog-page',
  styleUrl: 'blog-page.scss'
})
export class BlogPage {

  @Prop() history: RouterHistory;

 @State() imgFilterFromColor: string;
 @State() imgFilterToColor: string; 

  componentWillLoad(){
    this.imgFilterFromColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    this.imgFilterToColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
  }

  formateDate( date: string ) {
    return new Date(date).toLocaleDateString();
  }

  render() {
    return (
      <div class="blog-page">
        <Helmet>
          <title>📖 Blog | David López Castellote 💻 👨‍🏫</title>
        </Helmet>
        <ul class="posts-list">
        {(BlogService).posts.map((post) =>
          <li class="posts-list__item">
            <stencil-route-link url={"/" + BlogService.config.posts_route + "/" + post.unique_link}>
              <image-filter fromColor={this.imgFilterFromColor} toColor={this.imgFilterToColor} src={post.metadata.image}></image-filter>
              <h2 class="posts-list__item-title">{post.metadata.title}</h2>
            </stencil-route-link>
              {/* <div class="posts-list__item-date texto-gradiente-2">{this.formateDate(post.metadata.date)}</div> */}
              <div class="posts-list__item-date texto-gradiente-1">{this.formateDate(post.metadata.date)}</div>
              <div class="posts-list__item-summary">{post.metadata.summary}</div>
          </li>
        )}
      </ul>
      </div>
    );
  }
}

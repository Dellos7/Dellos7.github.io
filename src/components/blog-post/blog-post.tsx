import { Component, Prop, State, Element, h } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { HTMLStencilElement } from '@stencil/core/internal';
import { BlogService } from '../../services/blog-service';

@Component({
  tag: 'blog-post',
  styleUrl: 'blog-post.scss'
})
export class BlogPost {

  @Element() el: HTMLStencilElement;
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @Prop({ mutable: true }) uniqueLink: string;
  @Prop({ mutable: true }) metadata: string;

  @State() postContent: string;
  @State() highlighted: boolean = false;

  componentWillLoad() {
    // return this.loadContent();
    this.loadContent().then();
  }

  componentDidLoad(){
    
  }

  // Como no va, hacerlo en el script que parsea los blogs, reemplazando las etiquetas del html de
  // <pre><code>...</code></pre> por el contenido parseado.
  componentDidUpdate(){
    console.log('componentDidUpdate Prism');
    //Prism.highlightAll();
  }

  private _getUniqueLink() {
    let uniqueLink = this.match && this.match.params && this.match.params.unique_link
      ? this.match.params.unique_link
      : null;
    if (!uniqueLink) {
      uniqueLink = this.history && this.history.location && this.history.location.state && this.history.location.state.unique_link ? this.history.location.state.unique_link : null;
    }
    if (!uniqueLink) {
      uniqueLink = this.uniqueLink;
    }
    return uniqueLink;
  }

  private _getMetadata() {
    let metadata = this.match && this.match.params && this.match.params.metadata
      ? this.match.params.metadata
      : null;
    if (!metadata) {
      metadata = this.history && this.history.location && this.history.location.state && this.history.location.state.metadata ? this.history.location.state.metadata : null;
    }
    if (!metadata) {
      metadata = this.metadata;
    }
    return metadata;
  }

  loadContent() {
    return new Promise((resolve, reject) => {
      this.uniqueLink = this._getUniqueLink();
      this.metadata = this._getMetadata();

      let fileName = BlogService.getFileForPost(this.uniqueLink);
      if (!fileName) {
        console.error(`No post with unique link ${this.uniqueLink} was found.`)
      }
      else {
        fetch(fileName)
          .then(response => response.text())
          .then(data => {
            this.postContent = data;
            resolve();
          })
          .catch((err) => reject(err));
      }
    })
  }

  render() {
    return [
      <slot name="before" />,
      <div class="blog-post-content" innerHTML={this.postContent}></div>,
      <slot name="after" />
    ];
  }
}
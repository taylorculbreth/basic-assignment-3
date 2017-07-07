import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
displayParagraphStatus = [];
displayParagragh = true;

toggleSecretParagraph(){
  this.displayParagragh = !this.displayParagragh;
  this.displayParagragh ? this.displayParagraphStatus.push('on') : this.displayParagraphStatus.push('off');
}

  getDisplay(){
    return this.displayParagragh ? 'block' : 'none';
  }
}

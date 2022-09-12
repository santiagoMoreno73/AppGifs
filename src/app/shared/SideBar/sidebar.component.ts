import { Component } from '@angular/core';

// service
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: '<app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SideBarComponent {
  constructor(private gifsService: GifsService) {}

  get history() {
    return this.gifsService.history;
  }

  searchClicked(term: string) {
    this.gifsService.searchGifs(term);
  }
}

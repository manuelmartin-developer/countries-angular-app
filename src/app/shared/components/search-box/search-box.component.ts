import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = 'Buscar...';

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  public emitSearch(value: string): void {
    if (value.trim() === '') return;
    this.onSearch.emit(value);
  }
}

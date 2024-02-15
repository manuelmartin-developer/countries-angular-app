import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private _debouncer: Subject<string> = new Subject();
  private _debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = 'Buscar...';

  @Input()
  public initialValue: string = '';

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this._debouncerSubscription = this._debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => this.onDebounce.emit(value));
  }

  ngOnDestroy(): void {
    this._debouncerSubscription?.unsubscribe();
  }

  public emitSearch(value: string): void {
    if (value.trim() === '') return;
    this.onSearch.emit(value);
  }

  public emitDebounceSearch(value: string): void {
    this._debouncer.next(value);
  }

  public onKeyPress(value: string): void {
    this._debouncer.next(value);
  }
}

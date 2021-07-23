import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent<T> implements OnInit {
  @Input() elements: T[] | null = new Array<T>();
  @Input() search: string = '';
  constructor() {}

  ngOnInit(): void {}
}

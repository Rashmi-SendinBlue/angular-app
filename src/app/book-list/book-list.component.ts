import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public booksList: any[];

  @Input('books')
  set books(books){
    this.booksList = JSON.parse(books);
  }


  // @Input('prop1')
  // set books(prop1){
  //   this.booksList = prop1;
  //   // this.booksList = JSON.parse(books);
  // }

  @Output() bookSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selected(book: any){
    this.bookSelected.emit(JSON.stringify(book));
  }

}

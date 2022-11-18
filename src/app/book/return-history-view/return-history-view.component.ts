import { Personbookreturn } from './../../model/personbookreturn';
import { Personbooklend } from './../../model/personbooklend';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-return-history-view',
  templateUrl: './return-history-view.component.html',
  styleUrls: ['./return-history-view.component.css']
})
export class ReturnHistoryViewComponent implements OnInit {

  currentReturns: Iterable<Personbookreturn> | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllReturns().subscribe(allReturns=>this.currentReturns=allReturns);
  }

}

import { Personbookreturn } from './../../model/personbookreturn';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-history-box-view',
  templateUrl: './return-history-box-view.component.html',
  styleUrls: ['./return-history-box-view.component.css']
})
export class ReturnHistoryBoxViewComponent implements OnInit {

  @Input()
  currentPersonbookreturn:Personbookreturn | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}

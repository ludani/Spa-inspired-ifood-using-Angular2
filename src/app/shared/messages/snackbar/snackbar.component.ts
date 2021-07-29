import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [

  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello SnacBar'
  snackVisibility: string = ''

  constructor() { }

  ngOnInit() {
  }

}

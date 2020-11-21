import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navsup',
  templateUrl: './navsup.component.html',
  styleUrls: ['./navsup.component.css']
})
export class NavsupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  a(){
    let menu = document.querySelector('.menuIcon');
  
    menu.classList.toggle('active');



  

  }

}

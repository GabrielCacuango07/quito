import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 year :string = '2022';
  constructor() { }

  //only get the year actually and show in the  footer
  ngOnInit(): void {

    let copyright=new Date();

this.year=copyright.getFullYear().toString();

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  search : String ="";
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
loggedin(){
return localStorage.getItem('token');
}
onLogout(){
 localStorage.removeItem('token')
  this.router.navigate(['Login']);
}
}

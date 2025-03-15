import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { VolunteerTableComponent } from './volunteer-table/volunteer-table.component';
@Component({
  selector: 'app-admin-interface',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, VolunteerTableComponent, ContactTableComponent],
  templateUrl: './admin-interface.component.html',
  styleUrl: './admin-interface.component.css'
})
export class AdminInterfaceComponent {
  readonly APIUrl = 'http://localhost:5038/posts/';
  editingPost: any=null;  

  constructor(private http:HttpClient){}

  posts: any=[];

  refreshPosts(){
    this.http.get(this.APIUrl+'GetPosts').subscribe(data=>{this.posts=data;})
  }
  ngOnInit(){
    this.refreshPosts();
  }
}

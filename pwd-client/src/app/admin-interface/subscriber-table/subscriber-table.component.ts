import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-subscriber-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscriber-table.component.html',
  styleUrl: './subscriber-table.component.css'
})
export class SubscriberTableComponent {
  readonly useremailAPIUrl = "http://localhost:5038/subscriber-email/";
  useremail: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.refreshUseremail();
  }

  refreshUseremail() {
    this.http.get(this.useremailAPIUrl + 'GetEmail').subscribe(data => {
      console.log("Subscriber Email: ", data);
      this.useremail = data;
    }, error => {
      console.error("Error fetching subscriber's email: ", error);
    });
  }

  deleteUseremail(id: string) {
    this.http.delete(this.useremailAPIUrl + 'DeleteEmail?id=' + id).subscribe((data: any) => {
      alert(data.message);
      this.refreshUseremail();
    }, error => {
      alert("Failed to delete subscriber's email.");
      console.error(error);
    });
  }
}

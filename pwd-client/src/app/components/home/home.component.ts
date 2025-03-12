import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Introduction Section Header and Paragraph
  intro_header = "Breaking Barriers, Creating Opportunities"; 
  intro_para = "Advocating for the rights, welfare, and empowerment of the PWD community in the Philippines.";

  // Post Section Header and Paragraph
  post_header = "Making an Impact Our Initiatives";
  post_para = "Showcasing programs, events, and success stories that uplift the PWD community.";

  // News Section Header and Paragraph
  news_header = "Community Highlights & News";
  news_para = "Bringing you the latest stories and milestones from the PWD community.";
  
  // Quick Contact Section Header and Paragraph
  quick_contact_header = "Community Highlights & News";
  quick_contact_para = "Bringing you the latest stories and milestones from the PWD community.";

}

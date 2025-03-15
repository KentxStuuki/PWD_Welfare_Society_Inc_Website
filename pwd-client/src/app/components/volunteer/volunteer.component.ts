import { Component } from '@angular/core';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [VolunteerFormComponent],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {

}

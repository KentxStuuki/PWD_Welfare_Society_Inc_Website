import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footer_para ="Empowering the PWD community through advocacy, support, and inclusion.";
  footer_rights = "2025 PWD Welfare Society Inc. 2.0 | WD - 302 | All rights reserved.";
}

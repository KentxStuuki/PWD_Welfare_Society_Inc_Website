import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'event', component: EventsComponent},
    {path: 'volunteer', component: VolunteerComponent},
    {path: 'contact', component: ContactComponent},
];

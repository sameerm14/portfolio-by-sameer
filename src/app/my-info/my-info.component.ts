import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { MyExperianceComponent } from '../my-experiance/my-experiance.component';
import { MyEducationComponent } from '../my-education/my-education.component';
import { MyCertificationsComponent } from '../my-certifications/my-certifications.component';
import { ContactmeComponent } from '../contactme/contactme.component';
import { MyResumeComponent } from '../my-resume/my-resume.component';

@Component({
  selector: 'appmyinfo',
  imports: [
    FontAwesomeModule,
    MySkillsComponent,
    MyProjectsComponent,
    MyExperianceComponent,
    MyEducationComponent,
    MyCertificationsComponent,
    ContactmeComponent,
    MyResumeComponent,
  ],
  templateUrl: './my-info.component.html',
  styleUrl: './my-info.component.css',
})
export class MyInfoComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin);
  }
}

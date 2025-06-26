import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'experiance',
  imports: [CommonModule],
  templateUrl: './my-experiance.component.html',
  styleUrl: './my-experiance.component.css',
})
export class MyExperianceComponent {
  experiences = [
    {
      company: 'Infynow',
      role: 'Software Developer Intern',
      duration: '(April 2022 – June 2022)',
      description:
        'Choosing the right technologies and frameworks for our web project. We evaluate various options based on factors like project requirements, scalability, and team expertise.Design and Experience, Development, and Coding, which I learned. ',
      techStack: ['java', 'JavaScript', 'python', 'Mysql'],
    },
  ];
}

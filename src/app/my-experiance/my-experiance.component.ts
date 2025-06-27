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
{
  company: 'Octaware',
  role: 'Back End Developer',
  duration: '(Feb 2022 – Jun 2025)',
  description:
    'Backend Java Developer with 3.1 years of experience in designing, developing, and maintaining scalable Java-based web applications. Skilled in Spring Boot, REST APIs, Hibernate, and Microservices architecture. Experienced in MySQL and integrating third-party services like Stripe. Familiar with Postman, Git, Jenkins, and Agile methodology. Good understanding of API security, JWT authentication, and cloud deployment.',
  techStack: ['Java', 'Spring Boot', 'REST APIs', 'Hibernate', 'MySQL', 'JWT', 'Git', 'Postman', 'Jenkins'],
},

  ];
}

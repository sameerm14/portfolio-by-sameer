import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myprojects',
  imports: [CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css',
})
export class MyProjectsComponent {
  projects = [
    {
      title: 'LogiFlow - Inventory Management',
      description: 'A full-stack inventory and shipment tracking system.',
      techStack: [
        'assests/images/react.png',
        'assests/images/Node.png',
        'assests/images/MongoDB.png',
      ],
      github: 'https://github.com/sameerm14/-CODE-BY-SAMEER-NADAF-.git',
    },
    {
      title: 'QuizApp - Interactive Quiz Platform',
      description: 'A dynamic quiz platform with real-time score tracking.',
      techStack: [
        'assests/images/react.png',
        'assests/images/Django.png',
        'assests/images/mysqld.png',
      ],
      github: 'https://github.com/sameer/quizapp',
    },
    {
      title: 'My Portfolio Website',
      description:
        'A personal portfolio showcasing my projects, certifications, and achievements.',
      techStack: ['assests/images/angular.png', 'assests/images/Bootstrap.png'],
      // Your portfolio website URL
<<<<<<< HEAD
      github: 'https://github.com/sameerm14/Myportfolio', // Your GitHub repository URL
=======
      github: 'https://github.com/sameer/portfolio', // Your GitHub repository URL
>>>>>>> bb57c910b122f39aaad7c6d50b2679483e1422ed
    },
  ];
}

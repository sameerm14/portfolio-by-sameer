import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'mycertifications',
  imports: [CommonModule],
  templateUrl: './my-certifications.component.html',
  styleUrl: './my-certifications.component.css',
})
export class MyCertificationsComponent {
  certifications = [
    {
      title: 'JavaScript & React Bootcamp',
      platform: 'LetsUpgrade',
      year: '2022',
      url: 'https://drive.google.com/file/d/1SIGrAzwKTZY67Uakafttv9clrBuT2mZj/preview', // Replace with actual URL
    },
    {
      title: 'Internship at Infynow',
      platform: 'Infynow',
      year: '2022',
      url: 'https://drive.google.com/file/d/1OucP4qksqTH1P-OvJZ_ZlCLfK6vJ0TER/preview', // Replace with actual URL
    },
    {
      title: 'UX Design Foundation',
      platform: 'NASSCOM',
      year: '2024',
      url: 'https://drive.google.com/file/d/1DQTDiJ1Zpk6bDkzO74B0tw6rRy-PbmF0/preview', // Replace with actual URL
    },
    {
      title: 'Research Paper on AI for Predictive Maintenance',
      platform: 'Published Journal',
      year: '2024',
      url: 'https://drive.google.com/file/d/1XB5Ec0V7kWdcAiFR2mj0I44waLUQPQZQ/preview', // Replace with actual URL
    },
    {
      title: 'Web Development Workshop',
      platform: 'KLS Gogte Institute of Technology Belagavi',
      year: '2024',
      url: 'https://drive.google.com/file/d/11md-r2FUhSwZUShpLkhWomCKTmix5xmb/preview', // Replace with actual URL
    },
  ];
  viewCertificate(url: string) {
    window.open(url, '_blank');
  }
}

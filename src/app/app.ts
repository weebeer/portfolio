import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: lista todos os componentes filhos que esse componente usa
  imports: [
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{ }
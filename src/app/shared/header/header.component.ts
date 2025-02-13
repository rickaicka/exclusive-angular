import { Component } from '@angular/core';
import {AngularModules} from '../shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AngularModules],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

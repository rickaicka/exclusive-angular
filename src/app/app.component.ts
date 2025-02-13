import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TopHeaderComponent} from './shared/top-header/top-header.component';
import {AngularModules, SharedModule} from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, AngularModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exclusive-angular';
}

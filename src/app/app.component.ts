import {  Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgtCanvas } from 'angular-three';
import { SceneComponent } from './scene/scene.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SceneComponent,NgtCanvas,SceneComponent],
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'angular-geometry-fall';
  readonly Scene = SceneComponent;

}

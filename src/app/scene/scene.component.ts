import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  effect,
} from '@angular/core';

import { NgtcPhysics } from 'angular-three-cannon';
import { extend, NgtArgs } from 'angular-three';
extend({ Mesh, MeshStandardMaterial, BoxGeometry, AmbientLight, PointLight });
import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  PointLight,
} from 'three';
import { PlaneComponent } from '../plane/plane.component';
import { ShapeComponent } from '../shape/shape.component';
import { type GeometricShape } from '../data/geometric';
import { randomColor, randomShape } from '../utils';

@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [PlaneComponent, ShapeComponent, NgtcPhysics,NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss',
})
export class SceneComponent {
  protected shapes = signal<GeometricShape[]>([
    {
      id: Date.now(),
      shape: randomShape(),
      color: randomColor(),
      position: [Math.random() * 12 - 4, 10, Math.random() * 4 - 4] as [
        number,
        number,
        number
      ],
    },
  ]);

  constructor() {
    // Agregar nuevas formas geométricas periódicamente
    effect((onCleanup) => {
      const timer = setInterval(() => {
        const newShape = {
          id: Date.now(),
          shape: randomShape(),
          color: randomColor(),
          position: [Math.random() * 12 - 4, 10, Math.random() * 4 - 4] as [
            number,
            number,
            number
          ],
        };

        // Actualiza el signal con un nuevo array
        this.shapes.update((shapes) => [...shapes, newShape]);
      }, 2000);

      // Limpiar el interval cuando se destruye el componente
      onCleanup(() => {
        clearInterval(timer);
      });
    });
  }
}
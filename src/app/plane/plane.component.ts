import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend, NgtArgs } from 'angular-three';
import { Mesh, PlaneGeometry, MeshStandardMaterial } from 'three';
extend({ Mesh, PlaneGeometry, MeshStandardMaterial });
@Component({
  selector: 'app-plane',
  standalone: true,
  imports: [NgtArgs],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './plane.component.html',
  styleUrl: './plane.component.scss'
})
export class PlaneComponent {
  protected readonly rotationX = -Math.PI / 2;
  
}

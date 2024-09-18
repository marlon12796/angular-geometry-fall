import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, viewChild } from '@angular/core';
import { Mesh, BoxGeometry, SphereGeometry, CylinderGeometry, TetrahedronGeometry, MeshStandardMaterial } from 'three';
import { extend, NgtArgs } from 'angular-three';
import {type  ShapeType } from '../data/geometric';
import { injectBox } from 'angular-three-cannon/body';
extend({Mesh, BoxGeometry, SphereGeometry, CylinderGeometry, TetrahedronGeometry, MeshStandardMaterial });

@Component({
  selector: 'app-shape',
  standalone: true,
  imports: [NgtArgs],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.scss'
})
export class ShapeComponent {
  @Input() shape: ShapeType = 'box';
  @Input() color: string = 'orange';
  @Input() position: [number, number, number] = [0, 0, 0];
  active = false;
  mesh = viewChild.required<ElementRef<Mesh>>('mesh');
  box = injectBox(() => ({ mass: 1,position:this.position }), this.mesh);
}

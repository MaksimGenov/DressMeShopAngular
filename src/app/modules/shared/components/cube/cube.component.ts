import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css'],
  // animations: [
  //   trigger("cube", [
  //     state("top", style({
  //       'background-color': 'red',
  //       transform: 'rotateX(45deg) skewX(-15deg) translate(-27%,-100%)',
  //       'z-index': 2,
  //       'transform-style': 'preserve-3d'
  //     })),
  //     state("bottom", style({
  //       'background-color': 'blue',
  //       transform: 'rotateX(135deg) skew(15deg) translateX(27%)',
  //       'transform-style': 'preserve-3d'
  //     })),
  //     state("back", style({
  //       transform: 'rotateX(135deg) skew(-15deg) translate(54%,100%)',
  //       'background-color': 'green',
  //       'z-index': -2,
  //       'transform-style': 'preserve-3d'
  //     })),
  //     state("front", style({
  //       'background-color': 'yellow',
  //       'z-index': 7,
  //       transform: 'rotateX(45deg) skew(15deg) ',
  //       'transform-style': 'preserve-3d'
  //     })),
  //     transition('* => *', [animate(3000)]),
  //   ])
  // ]
})
export class CubeComponent implements OnInit {
  klass: string[]
  titles: string[]
  constructor() {
    
   }

  ngOnInit() {
    this.klass = ["top", "front", "bottom", "back"]
    this.titles = ["test1", "test2", "test3", "test4"]
  }

  down() {
    this.klass.push(this.klass.shift())
    console.log("fire")
  }

  up() {
    this.klass.unshift(this.klass.pop())
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent  implements OnInit{
 
  title: string = ''

  questios: any
  questionSelected: any

  answer: string[] = []
  answerSelected: string = ""
  
  questionIndex: number = 0
  quesitonMaxIndex: number = 0

  finished:boolean = false

  constructor() { }

  ngOnInit(): void {  }
}

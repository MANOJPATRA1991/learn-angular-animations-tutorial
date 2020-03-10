import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations-level-2',
  templateUrl: './animations-level-2.component.html',
  styleUrls: ['./animations-level-2.component.css']
})
export class AnimationsLevel2Component implements OnInit {

  markdown = `
  ## Animations transitions and triggers
  ---
  ### Wildcard state
  An asterisk \`*\` or wildcard matches any animation state. 
  > useful for defining transitions that apply regardless of the HTML element's start or end state.

  \`* => *\` transition applies when any change between two states takes place.

  Transitions are matched in the order in which they are defined.

  > \`* => *\` can be used as a fallback

  \`\`\`typescript
    transition('open => closed', [animate('1s')]),
    transition('closed => open', [animate('0.5s')]),
    transition('* => closed', [animate('1s')]),
    transition('* => open', [animate('0.5s')]),
    transition('open <=> closed', [animate('0.5s')]),
    transition('* => open', [animate('1s', style({ opacity: '*' }))]),
    transition('* => *', [animate('1s')])
  \`\`\`
  
  Use the wildcard \`*\` with a style to tell the animation to use whatever the current style value is, and animate with that. Example:
  \`\`\`typescript
    transition('* => open', [animate('1s', style({ opacity: '*' }))])
  \`\`\`

  ### Void state

  > Use void state to configure transitions for an element that is entering or leaving a page
  `;

  constructor() { }

  ngOnInit() {
  }

}
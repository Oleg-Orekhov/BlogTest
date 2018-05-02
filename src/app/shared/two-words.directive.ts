import { Directive } from '@angular/core';
import {
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormsModule,
  FormGroup,
  FormControl,
  ValidatorFn,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[appTwoWords][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TwoWordsDirective,
      multi: true
    }
  ]
})
export class TwoWordsDirective implements Validator{
  validator: ValidatorFn;

  constructor() {
    this.validator = this.twoWordsValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  twoWordsValidator(): ValidatorFn {
    return (c: FormControl) => {
      let isValid = false;
      let value = c.value;
      if (value) {
        value = value.split(' ');
        console.log(value);
        if (value.length === 2) {
          const firstCapLetter = value[0][0];
          const secondCapLetter = value[1][0];
          if (firstCapLetter === firstCapLetter.toUpperCase() &&
            secondCapLetter === secondCapLetter.toUpperCase() ) {
            isValid = true;
          }
        }
      }
      if (isValid) {
        return null;
        // return {
        //   twoWords: {
        //     valid: true
        //   }
        // };
      } else {
        return {
          twoWords: {
            valid: false
          }
        };
      }
    };
  }
}

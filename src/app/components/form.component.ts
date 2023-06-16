import { Component } from "@angular/core";

@Component({
    selector: 'app-test',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent{
    password: string = '';
  getColor(section: number): string {
    if (this.password === '') {
      return 'gray';
    }
    if (this.password.length < 8) {
      return 'red';
    }
    const hasLetters = /[a-zA-Zа-яА-ЯґҐєЄїЇіІ0]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[!@#$%^&*()]/.test(this.password);

    if (section === 0) {
      if (hasLetters && !hasNumbers && !hasSymbols) {
        return 'red';
      }
      if (!hasLetters && hasNumbers && !hasSymbols) {
        return 'red';
      }
      if (!hasLetters && !hasNumbers && hasSymbols) {
        return 'red';
      }
 
      if (hasLetters && hasNumbers && hasSymbols) {
        return 'green';
      }
           if ((hasLetters && hasSymbols) || (hasLetters && hasNumbers) || (hasNumbers && hasSymbols)) {
        return 'yellow';
      }
      return 'gray';
    }

    if (section === 1) {
       if (hasLetters && hasNumbers && hasSymbols) {
        return 'green';
      }
      if ((hasLetters && hasSymbols) || (hasLetters && hasNumbers) || (hasNumbers && hasSymbols)) {
        return 'yellow';
      }
      
      return 'gray';
    }

    if (section === 2) {
       if (hasLetters && hasNumbers && hasSymbols) {
        return 'green';
      }
    }
    return 'gray';
  }

  calculateStrength(): void {
   
  }
}
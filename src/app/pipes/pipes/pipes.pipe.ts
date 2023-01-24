import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class PipeUppercase implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}

@Pipe({
  name: 'rerverse'
})
export class ReverseTextPipe implements PipeTransform {
  transform(value: string): string {
     const text = value.split('').reverse().join('');
     return text;
  }
}

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform{
  transform(value: number, num: number): string {
    const sum = value + num;
    return `$${sum.toLocaleString()}`; 
  }
}

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): any {
    const sentence = value.split(' ').map(word => 
      `<b class="text-danger">${word.charAt(0).toUpperCase()}</b>${word.slice(1)}`);
    return sentence.join(' ');
  }
}

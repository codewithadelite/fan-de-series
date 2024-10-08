import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatString'
})
export class FormatStringPipe implements PipeTransform {

    transform(message : string): string {
        const hour : number = new Date().getHours()
        console.log(hour);
        if (hour > 18) {
            return 'Bonsoir'
        }
        return message;
    }

}

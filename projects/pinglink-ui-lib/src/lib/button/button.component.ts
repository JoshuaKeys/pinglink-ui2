import { Component, Input } from "@angular/core";

@Component({
    selector: 'pl-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class PLButtonComponent {
    @Input() label: string = '';
    @Input() size: 'small' | 'large' = 'small';
}
import { Component, ViewChild, AfterViewInit, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

import { ModalService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    selector:   'app-modal',
    templateUrl: './modal.component.html',
    styleUrls:  ['./modal.component.less']
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    // private element: JQuery;
    public element;
    public main;
    public backBlock;
    // public mainBox;

   /* private _chartContainer: ElementRef;
    @Input()
    set chartContainer(ElementRef value) {
        this._chartContainer = value;
        console.log(this.chartContainer);
        console.log(this.chartContainer.nativeElement);
    }*/

    @ViewChild('box') box: ElementRef;
    @ViewChild('back') back: ElementRef;
    @ViewChild('mainBox') mainBox: ElementRef;

    constructor(
        private modalService: ModalService,
        private renderer: Renderer2,
        private el: ElementRef) {
        this.main = el.nativeElement;
        // this.element = this.box.nativeElement;
        // this.element = js-modal-box
        console.log('el', el.nativeElement, this.box);

        // const self = this;

        modalService.addEvent(this.eventOpen.bind(this));
        modalService.addCloseEvent( this.close.bind(this) );
       // console.log('e', el);
       // this.element = el;
    }

    ngAfterViewInit(): void  {
        this.element   = this.box.nativeElement;
        this.backBlock = this.back.nativeElement;
    }

    ngOnInit(): void {
        // const modal = this;

        // ensure id attribute exists
        /*if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');*/

        // close modal on background click
        // this.element.on('click', function (e: any) {
            /*var target = $(e.target);
            if (!target.closest('.modal-body').length) {
                modal.close();
            }*/
        // });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        // this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        // this.modalService.remove(this.id);
        // this.element.remove();
    }

    // open modal
    open(): void {
        this.element.show();
       // $('body').addClass('modal-open');
    }

    eventOpen(modal) {
        this.renderer.appendChild(this.element, modal.div);
        modal.div.style.display = 'block';
       // this.renderer.addClass(this.element, 'show');
       // this.renderer.addClass(this.backBlock, 'show');
       this.renderer.addClass(this.mainBox.nativeElement, 'show');
    }

    // close modal
    close(): void {
        // this.renderer.removeClass(this.main, 'modal-show');
        // this.renderer.removeClass(this.element, 'show');
        // this.renderer.removeClass(this.backBlock, 'show');
        this.renderer.removeClass(this.mainBox.nativeElement, 'show');
        console.log('close');
        // this.element.hide();
        // $('body').removeClass('modal-open');
    }
}

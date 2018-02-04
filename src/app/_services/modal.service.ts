import { without, find } from 'lodash';

export class ModalService {
    private modals: any[] = [];

    public div    = '';
    public opened = null;
    public events = [];
    private closeEvents = [];

    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(id: string) {
        // remove modal from array of active modals
        // let modalToRemove = find(this.modals, { id: id });
        // this.modals = without(this.modals, modalToRemove);
    }

    open(id: string) {
        // open modal specified by id
        let modal: any = find(this.modals, { id: id });
        if (!modal) {
            // const div = $('#' + id);
            const div = window[id];
            this.add({
                id : id,
                div : div
            });
            modal = find(this.modals, { id: id });
            // this.div    = modal.div;
            this.opened = id;
        }
        this.eventOpen(modal);
        // modal.open();
    }

    addEvent(func: any) {
        this.events.push(func);
    }

    eventOpen(modal: any) {
        this.events.forEach((event) => {
            event(modal);
        });
    }

    addCloseEvent(func: any) {
        this.closeEvents.push(func);
    }

    closeEvent() {
        this.closeEvents.forEach((event) => {
            event();
        });
    }

    close() {
        this.closeEvent();
        // close modal specified by id
        // let modal: any = find(this.modals, { id: id });
        // modal.close();
    }
}
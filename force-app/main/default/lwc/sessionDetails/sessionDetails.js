import { LightningElement, api, track, wire } from 'lwc';
import getSession from '@salesforce/apex/SessionController.getSession';

export default class sessionDetails extends LightningElement {
    @track session;
    @api sessionId;
    @wire(getSession, { sessionId: '$sessionId' })
    wiredSession({ error, data }) {
        if (data) {
            this.session = data;
        } else if (error) {
            this.session = undefined;
            throw new Error('Failed to retrieve session');
        }
    }
}

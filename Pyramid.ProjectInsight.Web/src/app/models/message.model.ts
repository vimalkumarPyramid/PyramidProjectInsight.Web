export class Message {
    content: string;
    timeStamp: Date;
    chatIcon: string;

    constructor(content: string, chatIcon: string, timeStamp?: Date) {
        this.content = content;
        this.timeStamp = timeStamp;
        this.chatIcon = chatIcon;
    }
}


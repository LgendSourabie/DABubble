export class Message {
    id: string;
    content: string;
    name: string;
    reactions: { type: string, userId: string, count: number }[];
    time: string;
    senderId: string;
    fileUrl: string;
    fileName: string;
    edit: boolean;

    constructor(obj?: any) {
        this.id = obj && obj.id ? obj.id : '';
        this.content = obj && obj.content ? obj.content : '';
        this.name = obj && obj.name ? obj.name : '';
        this.reactions = obj && obj.reactions ? obj.reactions : [];
        this.time = obj && obj.time ? obj.time : '';
        this.senderId = obj && obj.senderId ? obj.senderId : '';
        this.fileUrl = obj && obj.fileUrl ? obj.fileUrl : '';
        this.fileName = obj && obj.fileName ? obj.fileName : '';
        this.edit = obj && obj.edit ? obj.edit : false;
    }

    toJSON() {
        return {
            id: this.id,
            content: this.content,
            name: this.name,
            reactions: this.reactions,
            time: this.time,
            senderId: this.senderId,
            fileUrl: this.fileUrl,
            fileName: this.fileName,
            edit: this.edit
        };
    }
}
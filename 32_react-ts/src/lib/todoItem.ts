export class TodoItem{
    public readonly date: Date;
    public constructor (
        public readonly id: number,
        public readonly title: string,
        public readonly completed: boolean,
        data: string
    ) {
        this.date = new Date(data);
    }
}
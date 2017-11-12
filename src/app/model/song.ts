interface ISong {
    id : number;
    name : string;
    creation : Date;
}

export class Song implements ISong {
    id: number;
    name: string;
    creation: Date;
}
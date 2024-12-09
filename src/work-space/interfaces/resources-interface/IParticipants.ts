export interface IParticipants {
    id: number;
    name: string;
    created_at: Date;
    deleted_at?: Date; // opcional
}
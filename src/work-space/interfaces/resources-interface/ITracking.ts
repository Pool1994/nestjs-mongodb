export interface ITracking {
    title: string;
    description: string;
    start_time: Date;
    end_time: Date;
    created_at: Date;
    deleted_at?: Date; // opcional
}
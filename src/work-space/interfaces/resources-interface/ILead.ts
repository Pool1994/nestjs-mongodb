export interface ILead {
    id: number,
    name: string,
    mobile: string,
    account?: string, // opcional
    client_account_id?: string, // ocpcional
    program_id?: number, // opcional
    program_name?: string // opcional
}
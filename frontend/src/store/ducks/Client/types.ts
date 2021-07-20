
export enum EClientActions {
    LOAD_REQUEST = "@client/LOAD_REQUEST",
    LOAD_SUCCESS = "@client/LOAD_SUCCESS",
    LOAD_FAILURE = "@client/LOAD_FAILURE",

    SAVE_REQUEST = "@client/SAVE_REQUEST",
    SAVE_SUCCESS = "@client/SAVE_SUCCESS",
    SAVE_FAILURE = "@client/SAVE_FAILURE",

    DELETE_REQUEST = "@client/DELETE_REQUEST",
    DELETE_SUCCESS = "@client/DELETE_SUCCESS",
    DELETE_FAILURE = "@client/DELETE_FAILURE",
}


export interface IClient {
    Id: number
    Nome: string
    Email: string
    CPF: string
    Telefone: string
    CEP: string
    Rua: string
    Numero: string
    Cidade: string
    Estado: string
}

export interface IClientState {
    data: IClient[]
    loading: boolean
    error: boolean
}
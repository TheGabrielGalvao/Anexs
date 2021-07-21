
export enum EClientActions {
    LOAD_REQUEST = "@client/LOAD_REQUEST",
    LOAD_SUCCESS = "@client/LOAD_SUCCESS",
    LOAD_FAILURE = "@client/LOAD_FAILURE",

    SAVE_REQUEST = "@client/SAVE_REQUEST",
    SAVE_SUCCESS = "@client/SAVE_SUCCESS",
    SAVE_FAILURE = "@client/SAVE_FAILURE",

    REMOVE_REQUEST = "@client/REMOVE_REQUEST",
    REMOVE_SUCCESS = "@client/REMOVE_SUCCESS",
    REMOVE_FAILURE = "@client/REMOVE_FAILURE",

    EDIT_REQUEST = "@client/EDIT_REQUEST",
}


export interface IClient {
    id: number
    nome: string
    email: string
    cpf: string
    telefone: string
    cep: string
    rua: string
    numero: string
    cidade: string
    estado: string
}

export interface IClientState {
    tmp?: IClient
    data: IClient[]
    loading: boolean
    error: boolean
}
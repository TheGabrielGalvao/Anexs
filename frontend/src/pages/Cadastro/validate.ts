import { FormErrors } from "redux-form"
import { IClient } from "../../store/ducks/Client/types"

const required = (field: string) => (`O campo ${field} é obrigatório`)


export const validate = (client: IClient) => {
    const errors: FormErrors<IClient> = {}

    if (!client.nome) { errors.nome = required("Nome") }
    if (!client.email) { errors.email = required("Email") }
    if (!client.cpf) { errors.cpf = required("CPF") }
    if (!client.telefone) { errors.telefone = required("Telefone") }
    if (!client.estado) { errors.estado = required("Estado") }
    if (!client.cidade) { errors.cidade = required("Cidade") }
    if (!client.rua) { errors.rua = required("Rua") }
    if (!client.numero) { errors.numero = required("Número") }
    if (!client.cep) { errors.cep = required("CEP") }

    return errors
}
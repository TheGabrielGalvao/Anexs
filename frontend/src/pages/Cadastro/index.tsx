import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import { Field, FormErrors, getFormInitialValues, InjectedFormProps, reduxForm } from "redux-form"
import { Button } from "../../components/Button"
import { ReduxFormInput } from "../../components/ReduxFormInput"
import SaveIcon from '@material-ui/icons/Save';
import { ReduxFormSelect } from "../../components/ReduxFormSelect"
import { IBGEApi } from "../../services/api"
import { ApplicationState } from "../../store"
import * as ClientActions from '../../store/ducks/Client/actions'
import { IClient } from "../../store/ducks/Client/types"

import './styles.css'
import { useHistory } from "react-router-dom"
import { validate } from "./validate"

interface Props {
    saveRequest(client: IClient): void
}

const Cadastro: React.FC<Props & InjectedFormProps<{}, Props>> = ({ handleSubmit, saveRequest }) => {
    const [validation, setValidation] = useState<FormErrors<IClient>>({})

    const history = useHistory()

    const submit = (data: any) => {
        if (data != null && data !== {} && data !== "") {
            const errors = validate(data)

            if (errors) {
                setValidation(errors)
            }
            else {
                saveRequest(data)
            }

        }
    }

    return (
        <div className="cadastro">
            <h1>Cadastro de Cliente</h1>
            <form onSubmit={handleSubmit((fields: any) => submit(fields))} noValidate autoComplete="off">
                <div className="form-group">
                    <Field
                        className="input"
                        required
                        fullWidth
                        id="nome"
                        name="nome"
                        label="Nome"
                        placeholder="Nome"
                        variant="outlined"
                        component={ReduxFormInput}
                        message={validation?.nome}
                    />
                    <Field
                        className="input"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        variant="outlined"
                        component={ReduxFormInput}
                        message={validation?.email}
                    />
                    <Field
                        className="input"
                        required
                        fullWidth
                        id="cpf"
                        name="cpf"
                        label="CPF"
                        placeholder="CPF"
                        variant="outlined"
                        component={ReduxFormInput}
                        message={validation?.cpf}
                    />
                    <Field
                        className="input"
                        required
                        fullWidth
                        id="telefone"
                        name="telefone"
                        label="Telefone"
                        placeholder="Telefone"
                        variant="outlined"
                        component={ReduxFormInput}
                        message={validation?.telefone}
                    />
                </div>
                <div className="form-group">
                    <div className="form-select-group">

                        <Field
                            className="input"
                            required
                            fullWidth
                            id="estado"
                            name="estado"
                            label="Estado"
                            placeholder="Estado"
                            variant="outlined"
                            component={ReduxFormInput}
                            message={validation?.estado}
                        />
                        <Field
                            className="input"
                            required
                            fullWidth
                            id="cidade"
                            name="cidade"
                            label="Cidade"
                            placeholder="Cidade"
                            variant="outlined"
                            component={ReduxFormInput}
                            message={validation?.cidade}
                        />
                    </div>
                    <div className="form-select-group">
                        <Field
                            className="input"
                            required
                            fullWidth
                            id="cep"
                            name="cep"
                            label="CEP"
                            placeholder="CEP"
                            variant="outlined"
                            component={ReduxFormInput}
                            message={validation?.cep}
                        />
                        <Field
                            className="input"
                            required
                            fullWidth
                            id="numero"
                            name="numero"
                            label="Número"
                            placeholder="Número"
                            variant="outlined"
                            component={ReduxFormInput}
                            message={validation?.numero}
                        />
                    </div>

                    <Field
                        className="input"
                        required
                        fullWidth
                        id="rua"
                        name="rua"
                        label="Rua"
                        placeholder="Rua"
                        variant="outlined"
                        component={ReduxFormInput}
                        message={validation?.rua}
                    />

                    <div className="button">
                        <Button className="btn-success btn-block"><SaveIcon /> Salvar </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const form = reduxForm<{}, Props>({
    form: 'client',
    enableReinitialize: true,
    destroyOnUnmount: true,
})(Cadastro)



const mapStateToProps = (state: ApplicationState) => ({
    client: state.client.tmp,
    initialValues: state.client.tmp
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ClientActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(form)


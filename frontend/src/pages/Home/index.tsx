import { useEffect } from 'react'
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import { ApplicationState } from "../../store"
import { IClientState } from "../../store/ducks/Client/types"
import * as ClientActions from "../../store/ducks/Client/actions"

interface Props {
    client: IClientState
    loadRequest(): void
    saveRequest(): void
    deleteRequest(): void
}

const Home: React.FC<Props> = ({ client, loadRequest, saveRequest, deleteRequest }) => {

    useEffect(() => {
        loadRequest()
    }, [])

    return (
        <div className="home">
            <h1>Clientes</h1>
            {client.data.map(item => (
                <span>{item}</span>
            ))}
        </div>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    client: state.client
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ClientActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
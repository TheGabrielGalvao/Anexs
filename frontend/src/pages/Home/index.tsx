import { useEffect } from 'react'
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import { ApplicationState } from "../../store"
import { IClient, IClientState } from "../../store/ducks/Client/types"
import * as ClientActions from "../../store/ducks/Client/actions"
import { CustomCollapsibleTable } from '../../components/CustomCollapsibleTable'

import './styles.css'

interface Props {
    client: IClientState
    loadRequest(): void
    removeRequest(client: IClient): void
    editRequest(client: IClient): void
}

const Home: React.FC<Props> = ({ client, loadRequest, editRequest, removeRequest }) => {
    useEffect(() => {
        loadRequest()
    }, [])

    return (
        <div className="home">
            <h1>Clientes</h1>

            <CustomCollapsibleTable editRequest={editRequest} removeRequest={removeRequest} data={client.data} />
        </div>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    client: state.client
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ClientActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
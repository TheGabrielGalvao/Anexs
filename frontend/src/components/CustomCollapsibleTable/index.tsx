import React, { MouseEventHandler } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { IClient } from '../../store/ducks/Client/types';
import { ButtonGroup } from '@material-ui/core';
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import * as ClientActions from '../../store/ducks/Client/actions'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface Props {
  data?: IClient[]
  editRequest(client: IClient): void
  removeRequest(client: IClient): void
}

interface RowProps extends Props {
  client: IClient
}

const Row: React.FC<RowProps> = ({ editRequest, removeRequest, client }) => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory()

  const handleDelete = (client: IClient, event?: MouseEvent) => {
    removeRequest(client)
  }

  const handleEdit = (client: IClient, event?: MouseEvent) => {
    event?.preventDefault()

    editRequest(client)
    history.push("/cadastro")
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{client?.nome}</TableCell>
        <TableCell>{client?.cpf}</TableCell>
        <TableCell>{client?.email}</TableCell>
        <TableCell>{client?.telefone}</TableCell>
        <TableCell>
          <ButtonGroup disableElevation variant="contained" >
            <IconButton onClick={() => handleEdit(client)}>
              <CreateIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(client)}>
              <DeleteIcon />
            </IconButton>
          </ButtonGroup>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">

              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Estado</TableCell>
                    <TableCell>Cidade</TableCell>
                    <TableCell>CEP</TableCell>
                    <TableCell>Rua</TableCell>
                    <TableCell>Número</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={client?.id}>
                    <TableCell component="th" scope="row">
                      {client?.estado}
                    </TableCell>
                    <TableCell>{client?.cidade}</TableCell>
                    <TableCell>{client?.cep}</TableCell>
                    <TableCell>{client?.rua}</TableCell>
                    <TableCell>{client?.numero}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export const CustomCollapsibleTable: React.FC<Props> = ({ data, editRequest, removeRequest }) => {
  return (
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Nome</TableCell>
          <TableCell>CPF</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Telefone</TableCell>
          <TableCell colSpan={2}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((client) => (
          <Row client={client} editRequest={editRequest} removeRequest={removeRequest} />
        ))}
      </TableBody>
    </Table>

  );
}


export default CustomCollapsibleTable
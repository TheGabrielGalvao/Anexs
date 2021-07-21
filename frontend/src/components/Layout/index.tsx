import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Button } from '../Button';

interface Props { }

const Layout: React.FC<Props> = ({ children }) => {
    const history = useHistory()
    const location = useLocation()


    return (
        <div className="container">
            {children}
            <Button className="btn-float btn-primary"
                onClick={(location.pathname) == "/" ?
                    () => history.push("/cadastro") :
                    () => history.push("/")}>
                {(location.pathname) == "/" ? <AddIcon /> : <HomeIcon />}
            </Button>
        </div>
    )
}

export default Layout



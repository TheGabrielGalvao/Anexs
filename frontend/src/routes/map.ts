import { INavigation } from "../interfaces/INavigation";
import Home from "../pages/Home";

export const mapRoute: INavigation[] = [
    {
        Name: "home",
        Caption: "Home",
        Route: "/",
        Component: Home,
        exact: true
    },

    {
        Name: "cadastro",
        Caption: "Cadastro",
        Route: "/Listagem"
    }
]
//TODO Here we create the context
import {createContext} from "react"

export const UserApi = createContext({
    name:null, 
    age:null
});
//! lo Exportamos a un hooks "useApi" y luego al componente "App.js"

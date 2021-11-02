import { useState } from "react";
import EntradaDevice from "./EntradaDevice";
import Category from "../core/Category";
import Botao from "./Botao";
interface FormularioDeviceProps{
    category: Category;
    cancel?: () => void
    newCategory?: (category: Category) => void  
}


export default function FormularioDevice(props: FormularioDeviceProps){
    
    const id = props.category?.id
    const [name, setName] = useState(props.category?.name ?? '')

    return(
        <div>
            <EntradaDevice 
                 texto = "Name" 
                 valor = {name}
                 newValue = {setName} />
            <div>
                <Botao cor="blue"
                    onClick={() => props.newCategory(new Category(name,id)) }
                >New</Botao>
                <Botao cor="gray" onClick = {props.cancel} >Cancel</Botao>

            </div>
        </div>

    )
}
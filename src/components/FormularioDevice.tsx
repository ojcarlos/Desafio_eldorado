import { useState } from "react";
import EntradaDevice from "./EntradaDevice";
import Device from "../core/Device";
import Botao from "./Botao";
import CategoryList from "./CategoryList";
interface FormularioDeviceProps{
    device: Device
    cancel?: () => void
    newDevice?: (device: Device) => void  
}


export default function FormularioDevice(props: FormularioDeviceProps){
    
    const id = props.device?.id
    const [color, setColor] = useState(props.device?.color ?? '')
    const [partNumber, setPartNumber] = useState(props.device?.partNumber ?? 0)
    const [category, setCategory] = useState(props.device?.category ?? '')

    return(
        <div>
            <EntradaDevice 
                 texto = "Color" 
                 valor = {color}
                 newValue = {setColor} />
            <EntradaDevice texto = "PartNumber" 
                 tipo = "number" 
                 valor = {partNumber}
                 newValue = {setPartNumber} />
            <CategoryList texto ="Category"
                 valor = {category}
                 newValue = {setCategory}
            />
            <div>
                <Botao cor="blue"
                    onClick={() => props.newDevice(new Device(category, color, +partNumber,id)) }
                >New</Botao>
                <Botao cor="gray" onClick = {props.cancel} >Cancel</Botao>

            </div>
        </div>

    )
}
import Device from "../core/Device";
import { Delete } from "./icons";

interface TabelaProps{
    device: Device[]
    deviceDelete?: (device: Device) => void
}

export default function Tabela1(props){
    
    function renderCabecalho(){
        return (
        <tr>
            <th className="text-left p-4">ID</th>
            <th className="text-left p-4">category</th>
            <th className="text-left p-4">Color</th>
            <th className="text-left p-4">PartNumber</th>
            <th className="text-left p-4">Delete</th>
        </tr>
        )
    }
    
    function renderDados(){
        return props.devices?.map((device, i)=>{
            return (
                <tr key={device.id}
                className= {`${i%2===0 ? `bg-purple-200`: `bg-purple-100` }`} >
                    <td className="text-left p-4">{device.id}</td>
                    <td className="text-left p-4">{device.category}</td>
                    <td className="text-left p-4">{device.color}</td>
                    <td className="text-left p-4">{device.partNumber}</td>
                    {Action(device)}
                </tr>
            )
        } )
    }
    function Action (device: Device){
        return(
            <td className="flex justify p-4" >
                <button onClick={()=> props.deviceDelete?.(device)} className={`
                flex justify-left items-center rounded-full
                hover:bg-purple-50
                text-red-500`}>{Delete}</button>
            </td>
        )
    }

    return(
        
        <table className ="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500  to-purple-800
            `} >
               {renderCabecalho()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}
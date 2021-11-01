import Device from "../core/Device";

interface TabelaProps{
    device: Device[]
}

export default function Tabela1(props){
    
 
    
    function renderDados(){
        return props.devices?.map((device, i)=>{
            return (
                <tr key={device.id} >
                    <td>{device.id}</td>
                    <td>{device.category}</td>
                    <td>{device.color}</td>
                    <td>{device.partNumber}</td>
                </tr>
            )
        } )
    }

    return(
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>category</th>
                    <th>Color</th>
                    <th>PartNumber</th>
                </tr>
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}
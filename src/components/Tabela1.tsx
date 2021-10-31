import Device from "../core/Device";

interface TabelaProps{
    device: Device[]
}

export default function Tabela1(props){
    return(
        <table>
            <th>ID</th>
            <th>category</th>
            <th>Color</th>
            <th>PartNumber</th>
        </table>
    )
}
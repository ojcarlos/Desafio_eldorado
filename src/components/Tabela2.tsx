import Device from "../core/Device";
import { Delete } from "./icons";
import Category from "../core/Category";

interface TabelaProps{
    category: Category[]
    categoryDelete?: (category: Category) => void
}

export default function Tabela1(props){
    
    function renderCabecalho(){
        return (
        <tr>
            <th className="text-left p-4">ID</th>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Delete</th>
        </tr>
        )
    }
    
    function renderDados(){
        return props.categorys?.map((category, i)=>{
            return (
                <tr key={category.id}
                className= {`${i%2===0 ? `bg-purple-200`: `bg-purple-100` }`} >
                    <td className="text-left p-4">{category.id}</td>
                    <td className="text-left p-4">{category.name}</td>

                    {Action(category)}
                </tr>
            )
        } )
    }
    function Action (category: Category) {
        return(
            <td className="flex justify p-4" >
                <button onClick={()=> props.categoryDelete?.(category)} className={`
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
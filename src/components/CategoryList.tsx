interface CategoryListProps{
    texto: string
    valor: any
    newValue: (valor:any) => void

}


export default function CategoryList(props: CategoryListProps){
    return(
        <div  className="flex flex-col">
                <label className="m-2" >
                    {props.texto}
                </label>
                <select
                    value = {props.valor} 
                    onChange={e => props.newValue?.(e.target.value)}
                    className = {`
                        border border-purple-500 rounded-lg
                        focus:outline-none
                    `}>
                    <option value="laranja">Phone</option>
                    <option value="limao">PC</option>
                    <option value="coco">Notebook</option>
                    <option value="manga">Motorola</option>
                </select>
        </div>
    )
}
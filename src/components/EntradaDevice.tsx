interface EntradaDeviceProps{
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    newValue: (valor:any) => void

}


export default function EntradaDevice(props: EntradaDeviceProps){
    return(
        <div  className="flex flex-col">
                <label className="m-2" >
                    {props.texto}
                </label>
                <input type={props.tipo ?? 'text'}
                    value = {props.valor} 
                    onChange={e => props.newValue?.(e.target.value)}
                    className = {`
                        border border-purple-500 rounded-lg
                        focus:outline-none
                    `}
                />
        </div>
    )
}
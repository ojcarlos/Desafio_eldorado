interface BotaoProps{
    cor: 'green' |'blue' | 'gray'
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    return(
        <button onClick = {props.onClick} className={`
            bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-800
            text-white px-5  py-3 m-4 rounded-full
        `} >
            {props.children}
        </button>
    )
}
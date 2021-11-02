import { useState } from "react";
import Botao from "../components/Botao";
import FormularioDevice from "../components/FormularioDevice";
import Layout from "../components/Layout";
import Tabela1 from "../components/Tabela1";
import Device from "../core/Device";

export default function Home() {

  const devices = [
    new Device('pc', 'blue', 12345, 1),
    new Device('phone', 'blue', 123456, 2),
    new Device('tablet', 'blue', 1234567, 3),
  ]

  function deviceDelete(device: Device){
    console.log(`excluir ... ${device.color}`);
  }

  function deviceSave(device: Device){
    console.log(device);
  }

  const[visivel, setVisivel] = useState<'tabela1' |'form1'>('tabela1')
  return (
    <div className={
    `
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    `
    }>
      <Layout titulo="Device">
        {visivel === 'tabela1' ? (
          <> 
              <div className = "flex justify-end">
                  <Botao cor = "green" onClick ={() => setVisivel('form1')}  >New Device</Botao>
              </div>
              <Tabela1 devices={devices} deviceDelete={deviceDelete}/>
          </>
  
        ) : (

          <FormularioDevice device={devices[0]}
          cancel = {() => setVisivel('tabela1') }
          newDevice = {deviceSave}
          />

        )}
        
          
      
      
    </Layout>
    
      
    </div>
  )
}

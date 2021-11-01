import Layout from "../components/Layout";
import Tabela1 from "../components/Tabela1";
import Device from "../core/Device";

export default function Home() {

  const devices = [
    new Device('pc', 'blue', 12345, 1),
    new Device('phone', 'blue', 123456, 2),
    new Device('tablet', 'blue', 1234567, 3),
  ]
  return (
    <div className={
    `
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    `
    }>
    <Layout titulo="Cadastro Simples">
      <Tabela1 devices={devices}></Tabela1>
    </Layout>
      
    </div>
  )
}

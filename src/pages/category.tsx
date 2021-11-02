import { useState } from "react";
import Botao from "../components/Botao";
import FormularioCategory from "../components/FormularioCategory";
import Layout from "../components/Layout";
import Tabela2 from "../components/Tabela2";
import Category from "../core/Category";

export default function categoria() {
  const[category, setCategory] = useState<Category>(Category.vazio)
  const[visivel, setVisivel] = useState<'tabela1' |'form1'>('tabela1')
  const categorys = [
    new Category('pc'),
    new Category('phone'),
    new Category('tablet'),
  ]

  function categoryDelete(category: Category){
    console.log(`excluir ... ${category}`);
  }

  function categorySave(category: Category){
    console.log(category);
  }

  
  return (
    <div className={
    `
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    `
    }>
      <Layout titulo="Category">
        {visivel === 'tabela1' ? (
          <> 
              <div className = "flex justify-end">
                  <Botao cor = "green" onClick ={() => setVisivel('form1')}  >New Category</Botao>
              </div>
              <Tabela2 categorys={categorys} categoryDelete={categoryDelete}/>
          </>
  
        ) : (

          <FormularioCategory category={category}
          cancel = {() => setVisivel('tabela1') }
          newCategory= {categorySave}
          />

        )}
        
          
      
      
    </Layout>
    
      
    </div>
  )
}
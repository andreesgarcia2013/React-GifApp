import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['jujutsu kaisen']);
    
    const onAddCategory=(newCategory)=>{
        if (categories.includes(newCategory)) return;
        
        // setCategories(cat=>['valorant',...categories ]);
        //console.log(NewCategory);
        setCategories([newCategory,...categories])
    }

  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory 
        onNewCategory={(value)=>onAddCategory(value)}
    />
        {
            categories.map((category)=> (
                <GifGrid 
                    key={category} category={category}/>
            )
            )
        }
    </>
  )
}

import QuizButton from "./QuizButton";
import { useState, useEffect } from "react";
export default function QuizWrapper() {
  const [productData, setProductData] = useState([]);
    const [filterStrings, setFilterStrings] = useState([]);
    const [categoryNumber, setCategoryNumber] = useState(0);
  useEffect(() => {
    const getProductData = async () => {
      return await fetch("/data/helseProdukter.json")
        .then((res) => res.json())
        .then((data) => {
          setProductData(data);
          return data;
        });
    };
    getProductData();
    }, []);
  console.log(productData);
  useEffect(()=>{
      const getUniqueFilters = async () => {
        return await fetch("/data/categoryStrings.json")
          .then((res) => res.json())
          .then((data) => {
            setFilterStrings(data);
            return data;
          });
      };
    
   console.log("function",getUniqueFilters()) 
  },[productData])
  console.log(categoryNumber,filterStrings[categoryNumber])
  return (
    <section>
      <div>
        <p></p>
      </div>
      <div>
        {productData.map((item) =>{return(<QuizButton key={Math.random()} name={item.name} onclick={()=>setCategoryNumber(categoryNumber + 1)}/>)})}
      </div>
    </section>
  );
}

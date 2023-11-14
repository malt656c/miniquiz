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
    function getUniqueFilters() {
      let filterArray = [];
      for (let i = 0; i < 5; i++) {
        let categoryArray = [];
        productData.forEach((item) => categoryArray.push(item.categories[i]));
        let uniqueCategories = [...new Set(categoryArray)];
        let questionObject={
          question: `catagory ${i}`,
          options: uniqueCategories
        }
        filterArray.push(questionObject);
      }
    setFilterStrings(filterArray)
      return filterArray;
    }
   console.log("function",getUniqueFilters()) 
  },[productData])
  console.log(filterStrings)
  return (
    <section>
      <div>
        <p></p>
      </div>
      <div>
        {filterStrings.map((item) =>{return(<QuizButton key={item.id*Math.random()} name={item.options[categoryNumber]} onclick={1}/>)})}
      </div>
    </section>
  );
}

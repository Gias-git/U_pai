import Sub_cat_Card from "./Sub_cat_Card";


export default function SubCategoryCards() {
  return (
    <div className="py-6 grid grid-cols-2 md:grid-cols-4 gap-10">
      <Sub_cat_Card
        imageSrc="/sub-demo-img.webp" // make sure to place the image inside /public/images/
        title="Antimicrobial"
      />

       <Sub_cat_Card
        imageSrc="/sub-demo-img.webp" // make sure to place the image inside /public/images/
        title="Antimicrobial"
      />


       <Sub_cat_Card
        imageSrc="/sub-demo-img.webp" // make sure to place the image inside /public/images/
        title="Antimicrobial"
      />

       <Sub_cat_Card
        imageSrc="/sub-demo-img.webp" // make sure to place the image inside /public/images/
        title="Antimicrobial"
      />
    </div>
    
  );
}

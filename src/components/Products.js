import React from 'react'
import "./Products.css"
import Product from './Product';

const Products = () => {
  return (
    <>
    <div className="products_row">
      <Product
        id="1"
        title=" Under Eye Masks Patches - for Wrinkles, Dark Circles, Puffy Eyes, Fine Lines, Eye Bags Treatment with Hyaluronic Acid and Collagen Moisturizing(60Pcs)"
        image="https://m.media-amazon.com/images/I/41vs+XkwmmL._SY300_SX300_.jpg"
        rating={4}
        price={39.99}
      />
      <Product
        id="2"
        title="Lee Beauty Professional Callus Remover for Feet - 8 Oz, Pack of 2 Original, Powerful Formulation - Extra Strength Gel, Home Pedicure Foot Spa Results - Cracked & Dead Dry Skin Supplies)"
        image="https://m.media-amazon.com/images/I/61dMj8X8URL._AC_UL480_FMwebp_QL65_.jpg"
        rating={5}
        price={19.99}
      />
    </div>
    <div className="products_row">
    <Product
        id="3"
        title="Under Eye Mask - 60 PCS Aloe Vera Under Eye Patches - Combat Puffy Eyes, Dark Circles, Fine Lines, and Wrinkles Using Pure Natural Extracts"
        image="https://m.media-amazon.com/images/I/71q71NossOL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        rating={2}
        price={11.99}
      />
      <Product
        id="4"
        title="Under Eye Patchs (30 Pairs) Hyaluronic Acid Eye Mask for Dark Circles and Puffiness"
        image="https://m.media-amazon.com/images/I/41dmQspmY3L._SX300_SY300_QL70_FMwebp_.jpg"
        rating={4}
        price={9.9}
      />
      <Product
        id="5"
        title="Castor Oil Organic (2oz) + Filled Mascara Tube USDA Certified, 100% Pure, Cold Pressed, Hexane Free by Live Fraiche. Hair Growth Oil for Eyelashes, Eyebrows, Hair. Lash Growth Serum. Brow Treatment"
        image="https://m.media-amazon.com/images/I/71Ai8ogdeVL._SY879_.jpg"
        rating={3}
        price={12.9}
      />
      

    </div>
    <div className="products_row">
    <Product
        id="6"
        title="IHealthia-Water-Flosser-Teeth-Cleaner, Rechargeable - Waterproof, Portable Cordless Dental Oral Irrigator, Water flossers for Teeth, 3 Modes 4 Nozzles, for Home&Travel Elegant Black"
        image="https://m.media-amazon.com/images/I/61gpZJLBdNL._AC_UL480_FMwebp_QL65_.jpg"
        rating={4.8}
        price={20.99}
      />
      </div>
  </>
);
}
export default Products
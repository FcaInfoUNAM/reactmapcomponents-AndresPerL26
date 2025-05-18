import './App.css'
import Card from './Card'

function App() {
  const products = [
  {
  name: "Electronic Frozen Soap",
  model: "978-1-894542-44-9",
  hexColor: "#494719",
  b64Image: "https://picsum.photos/seed/5htb27xeX/640/480",
  properties: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  },
  {
  name: "Unbranded Fresh Shoes",
  model: "978-1-905099-69-6",
  b64Image: "https://picsum.photos/seed/ozuQiMyzNK/640/480",
  properties: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  },
  {
  name: "Modern Granite Towels",
  model: "978-0-260-37094-5",
  b64Image: "https://picsum.photos/seed/R2VuLA/640/480",
  properties: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  },
  {
  name: "Luxurious Fresh Car",
  model: "978-0-448-40650-3",
  b64Image: "https://picsum.photos/seed/TkJvL/640/480",
  properties: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  },
  {
  name: "Modern Rubber Chair",
  model: "978-1-7904-2553-2",
  b64Image: "https://picsum.photos/seed/rDWbwgbgDz/640/480",
  properties: "The Football Is Good For Training And Recreational Purposes",
  },
  {
  name: "Sleek Cotton Tuna",
  model: "978-1-184-04781-4",
  b64Image: "https://picsum.photos/seed/otI5DVDz/640/480",
  properties: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
  },
  {
  name: "Licensed Granite Ball",
  model: "978-1-74218-429-6",
  b64Image: "https://picsum.photos/seed/1fujI/640/480",
  properties: "The Football Is Good For Training And Recreational Purposes",
  },
  {
  name: "Intelligent Metal Pants",
  model: "978-1-84836-342-7",
  b64Image: "https://picsum.photos/seed/Y5knt1/640/480",
  properties: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
  }];
  return (
    /*<>
    <div className="bg-orange-500 p-8 grid grid-cols-4 gap-4">
      <div>
      <Card image="https://images.samsung.com/is/image/samsung/p6pim/mx/2401/gallery/mx-galaxy-s24-s928-sm-s928bzkmltm-539300146?$684_547_PNG$" title="Samsung Galaxy S24 Ultra" paragraph="smartphone de gama alta que destaca por su gran pantalla Dynamic AMOLED 2X de 6.8 pulgadas, su sistema de cámaras de alta resolución (200 MP, 50 MP, 12 MP y 10 MP) y su rendimiento excepcional gracias al procesador Snapdragon 8 Gen 3."/>
      </div>
    </div>
    </>*/
    <>
      <div className="bg-orange-500 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.b64Image}
            title={product.name}
            paragraph={product.properties}
            productRef={`#product-${index}`} // Puedes cambiar esto por una URL real
          />
        ))}
      </div>
    </>
  )
}

export default App
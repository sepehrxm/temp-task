import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Products = ({items, setItems,isError, category, setCategory}) => {
    const handleCategory = (event) => {
        let newCategory = event.target.value
        setCategory(newCategory)
        let newItems = items.filter((item) => item.category === newCategory)
        setItems(newItems)
    }
  return (
    <>
    {isError? <h3>Something went wrong.</h3> 
    :<>
    <div id='select'>
    <select
        name="category"
        id="category"
        value={category}
        onChange={handleCategory}>
         <option value="">All</option>
         <option value="men's clothing">Men's clothing</option>
         <option value="women's clothing">Women's clothing</option>
         <option value="jewelery">Jewelery</option>
         <option value="electronics">Electronics</option>
      </select>
    </div>
    <Container id='container'> 
        <Row>{items.map((item) => {
            return <Col id='col' md={4} sm={8} key={item.id}>
                <img src={item.image}/>
                <p id='title'>{item.title}</p>
                <p id='desc'>#{item.category}</p>
                <p id='price'>{item.price}$</p>
            </Col>
        })}</Row>
    </Container>
    </>}
    </>
  )
}
export default Products
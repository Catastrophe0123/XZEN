import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap';
import Message from '../components/Message';
import {addToCart, removeFromCart} from '../actions/cartActions.js'


const CartScreen = (props) => {
    const productId=props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state=> state.cart)
    const {cartItems} = cart
    console.log(cartItems)
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch, productId, qty])

    const removeFromCartHandler = (id)=>{
        dispatch(removeFromCart(id))
    }

    const checkoutHandler=()=>{
        props.history.push('/login?redirect=shipping')
    }
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <Message>Roh Oh!, Nothing to see here <Link to='/'> Go Back</Link></Message> :(
                    <ListGroup variant='flush'>
                        {cartItems.map((item)=>(
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded></Image>
                                    </Col>

                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}className="no-underline">{item.name}</Link>
                                    </Col>

                                    <Col md={2}>$ {item.price}</Col>
                                    <Col md={2}>
                                        <Form.Control className="form-select" as="select" value={item.qty} onChange={(e)=>dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                {[...Array(item.countInStock).keys()].map((x)=>(
                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                ))}
                                            </Form.Control>
                                    </Col>

                                    <Col md={2}>
                                        <Button type='button' variant='light' onClick={()=> removeFromCartHandler(item.product)}>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc,item)=> acc+item.qty, 0)})Items</h2>
                            ${cartItems.reduce((acc, item)=> acc+item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn btn-primary w-100' disabled={cartItems.length === 0} onClick={checkoutHandler}>
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>

            
            </Col>

           


        </Row>
    )
}

export default CartScreen

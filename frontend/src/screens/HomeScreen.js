import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';
import Rating from '../components/Rating';
import CTASection from '../components/CTASection';


const HomeScreen = ({match}) => {
    const keyword = match.params.keyword;
    const pageNumber = match.params.pageNumber || 1;
    const dispatch = useDispatch()
    const productList=useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(()=>{
        dispatch(listProducts(keyword, pageNumber));

    },[dispatch, keyword, pageNumber])

    
    return (
        <>
        <Meta title='Home' />
           
            {!keyword ? <ProductCarousel/> :<Link to='/' className='btn btn-outline-primary mb-3'>Back to Home</Link>}
    
            {loading ? <Loader>Loading...</Loader> : error ? <Message variant='danger'>{error}</Message> : 
            <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                        {!keyword && <CTASection/>}
                        <h2 id="products"className="text-2xl font-extrabold tracking-tight text-gray-900">Latest Products</h2>
                        <div className="mt-1 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                <h3 className="text-sm text-gray-700">
                                    <Link to={`/product/${product._id}`} style={{textDecoration:"none"}}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                    </Link>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
                                <Rating value={product.rating} text={product.numReviews} className="mt-1 text-sm text-gray-500"/>
                                </div>
                                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            // <Row >
            //     {products.map(product =>(
            //         <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="align-items-stretch d-flex">
            //             <Product product={product}></Product>
            //         </Col>
            //     ))}
            // </Row>
        }
            
             <Paginate page={page} pages={pages} pageNumber={pageNumber} keyword={keyword ? keyword : ''}></Paginate>   
            
        </>
    )
}

export default HomeScreen

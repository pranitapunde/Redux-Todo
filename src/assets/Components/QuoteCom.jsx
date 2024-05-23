import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../features/quote/quoteSlice';

const QuoteCom = () => {


  const dispatch = useDispatch();

  const { quoteData, isLoading, isError } = useSelector((state) => state.quotes);

  useEffect(() => {

    dispatch(fetchQuote())

  }, []);


  if (!quoteData || isLoading) {
    return (
      <marquee>
        <h4 className='spinner-border text-dark'> </h4>

      </marquee>
    )
  }

  if (isError) {
    return (
      <marquee>
        <h4 className='text-danger'> somthing went wrong !!</h4>

      </marquee>
    )
  }


  return (

    <marquee>
      <h4>  {quoteData.content}  - {quoteData.author}</h4>

    </marquee>
  )
}

export default QuoteCom

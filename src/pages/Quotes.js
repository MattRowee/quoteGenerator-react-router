import { useEffect } from "react";
import { getAllQuotes } from "../lib/api";
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";

const Quotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  };
  // do we have an error?
  if(error){
    return <p className='centered focused'>{error}</p>
  }
  // do we have any quotes?
  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuotes} />;
};
export default Quotes;

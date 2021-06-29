import QuoteItem from '../components/quotes/QuoteItem';
import { useParams, Route} from 'react-router-dom';
import { Fragment } from 'react';

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
    const params = useParams();
  return (
      <Fragment>
          <h1>Quote Detail page</h1>
          <p>{params.quoteId}</p>
          <Route path={`/quotes/${params.quoteId}/comments`}>
              <Comments />
          </Route>
      </Fragment>
  );
};
export default QuoteDetail;

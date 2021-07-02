import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

//Goal is fetching comments and fetching comments for a specific quote ID
//our useHttp hook (not redux here, but we could use that in a more complex app)
//and specific imported functions from our lib/api folder will do that lifting

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {
    sendRequest,
    status,
    data: loadedComments,
  } = useHttp(getAllComments, true);

  const params = useParams();
  const { quoteId } = params;
  console.log(params);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  // I will only use useParams in a place where the URL contains the parameter

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };


  //useCallback ensures that this component is not recreated everytime comments.js is reevaluated
// avoids unecc rerender cycles and infinite loops
  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId] );

  let comments;
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }
  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments added yet.</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;

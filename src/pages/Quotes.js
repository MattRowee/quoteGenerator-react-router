import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Matt",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Matthew",
    text: "Man, I need couches!",
  },
];
const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default Quotes;

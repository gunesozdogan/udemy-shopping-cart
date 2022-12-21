import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = data => {
        history.push("./quote");
        console.log(data);
    };
    return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;

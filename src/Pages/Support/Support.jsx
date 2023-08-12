// other
import { Link } from "react-router-dom";

// styles
import "./support.scss";

const Support = () => {
  return (
    <div className="support-container">
      <section>
        <h1>Need Help? Contact MOVIEFLIX Support!</h1>
        <p>
          Our dedicated support team is here to assist you with any questions,
          concerns, or technical issues you may have. We strive to provide the
          best possible experience for our users, and we are always ready to
          lend a helping hand.
        </p>
        <p>
          Email: For general inquiries or assistance, you can send us an email
          at <a href="mailto: support@movieflix.com">support@movieflix.com</a>.
          Our team will get back to you promptly with the information you need.
        </p>
        <p>
          Whether you have questions about using our website, need help with
          your account, or have feedback to share, our support team is here to
          listen and assist. We value your feedback and suggestions as they help
          us improve our service.
        </p>
        <p>
          At MOVIEFLIX, your satisfaction is our top priority. We are committed
          to providing you with the best movie-watching experience and ensuring
          that you have a smooth and enjoyable time on our platform. Thank you
          for choosing MOVIEFLIX, and we look forward to assisting you!
        </p>
        <p>
          Best regards, <br />
          The <Link to="/">MOVIEFLIX</Link> Support Team
        </p>
      </section>
    </div>
  );
};

export default Support;

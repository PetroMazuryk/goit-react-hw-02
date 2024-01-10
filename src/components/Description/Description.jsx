// import PropTypes from "prop-types";
import {
  DescriptionkName,
  DescriptionResponce,
  DescriptionWrapper,
} from "./Description.styled";

export const Description = () => {
  return (
    <DescriptionWrapper>
      <DescriptionkName>Sip Happens Cafe</DescriptionkName>
      <DescriptionResponce>
        Please leave your feedback about our service by selecting one of the
        option below.
      </DescriptionResponce>
    </DescriptionWrapper>
  );
};

// Description.propTypes = {
//   name: PropTypes.string,
// };

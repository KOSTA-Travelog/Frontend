import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${props => props.align}
`

const HeaderTitle = ({align, title, action}) => (
    <Title align={align} onClick={action}>
      {title}
    </Title>
)

HeaderTitle.propTypes = {
  align: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
  title: PropTypes.node,
  action: PropTypes.func,
}

// Title.propTypes = {
//   align: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
// }
export default HeaderTitle;
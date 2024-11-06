import PropTypes from 'prop-types';

const Text = ({textWidth, paddyng, text}) => {
  return (
    <p className={`${textWidth} ${paddyng} font-mono text-[#242742] text-[16px]`}>{text}</p>
  )
}   

Text.propTypes = {
  textWidth: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  paddyng:PropTypes.string.isRequired
};

export default Text
import React from 'react';
import PropTypes from 'prop-types';
class Details extends React.Component{
    render(){
      return <h2> {this.props.detailTitle}
                  {this.props.detailValue}</h2>
             }
}


Details.defaultProps = {
  detailTitle: 'Teoria',
  detailValue: 4
};
Details.propTypes = {
  detailTitle: PropTypes.string,
  detailValue: PropTypes.number
};
export default Details;

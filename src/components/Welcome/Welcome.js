import React, {Component} from 'react';
import classes from './Welcome.css';
import MyCarousel from '../MyCarousel/MyCarousel';
import StyledLink from '../UI/StyledLink/StyledLink';
import DisplayErrors from '../DisplayErrors/DisplayErrors';

class Welcome extends Component {
  render {
    return (
      <main className={classes.Welcome}>
        <h1>Card Game Secretary</h1>
          <MyCarousel />
          <p>
            This app will help you record the scores of your card games.
            Check the list of available card games. I will try to add more in the
            future. Have fun!
          </p>
        <h2>Madame Secretary currently takes care of the following games...</h2>
        <StyledLink
          component="/maumau"
          color="Purple"
          >
          Mau Mau
        </StyledLink>
        <StyledLink
          component="/rummy"
          color="Purple"
          >
          Rummy
        </StyledLink>
        <DisplayErrors errors={[this.props.namesPostError]}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    namesPostError: state.names.namesPostError
  };
};

export default connect(mapStateToProps, null)(Welcome);

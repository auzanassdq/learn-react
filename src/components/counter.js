import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  increase = () => {
    this.setState(prevState => ({
      number: prevState.number + 1
    }));
  };

  decrease = () => {
    if (this.state.number === 0) {
      this.setState({
        number: 0
      });
    } else {
      this.setState({
        number: this.state.number - 1
      });
    }
  };

  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Button variant="contained" color="primary" onClick={this.decrease}>
          <Typography variant="h3">-</Typography>
        </Button>
        <Typography variant="h4" style={{ margin: 20 }}>
          {this.state.number}
        </Typography>
        <Button variant="contained" color="primary" onClick={this.increase}>
          <Typography variant="h3">+</Typography>
        </Button>
      </Grid>
    );
  }
}

export default Counter;

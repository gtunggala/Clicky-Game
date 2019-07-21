import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Navbar = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Clicky Game!</h1>
        <p className="lead">
          Click on an image to earn points, but don't click on any more than
          once!
        </p>
        <hr className="my-2" />
        <p>loren ipsum etc</p>
        {/* <p className="lead">
          <Button color="primary">Learn More</Button>
        </p> */}
      </Jumbotron>
    </div>
  );
};

export default Navbar;

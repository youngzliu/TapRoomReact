import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import NewKeg from "./NewKeg";
import Navbar from "./Navbar";
import KegList from "./KegList";
import { v4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: new Map()
    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
    this.handleRemovingPint = this.handleRemovingPint.bind(this);
  }

  handleAddingNewKeg(newKeg) {
    var newKegId = v4();
    let newMasterKegList = new Map(this.state.masterKegList);
    newMasterKegList.set(newKegId, newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  handleRemovingPint(kegId) {
    let newMasterKegList = new Map(this.state.masterKegList);
    let kegToChange = newMasterKegList.get(kegId);
    if (kegToChange.amount > 0) {
      kegToChange.amount = kegToChange.amount - 1;
    }
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <div>
        <style jsx global>
          {`
            body {
              font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
                "Helvetica Neue", sans-serif;
              background-image: url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/SBlo8amripm9dyff/videoblocks-a-pint-of-dark-beer-is-rotating-against-black-background-glass-of-stout-is-spinning_bwezegvif_thumbnail-full01.png);
              background-size: cover;
            }
          `}
        </style>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <KegList
                kegList={this.state.masterKegList}
                onRemovingPint={this.handleRemovingPint}
              />
            )}
          />
          <Route
            exact
            path="/new"
            render={() => <NewKeg onNewKegCreation={this.handleAddingNewKeg} />}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;

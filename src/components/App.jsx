import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import NewKeg from "./NewKeg";
import Navbar from "./Navbar";
import KegList from "./KegList";
import { v4 } from "uuid";

const initialKegs = [
  {
    name: "Banana Bread Beer",
    brand: "Charles Wells",
    price: "$10.98",
    conc: "5.2%",
    amount: 124
  },
  {
    name: "Amber Lager",
    brand: "Abita",
    price: "$9.98",
    conc: "4.5%",
    amount: 124
  },
  {
    name: "Obsidian Stout Ale",
    brand: "Deschutes",
    price: "$11.98",
    conc: "6.4%",
    amount: 124
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: new Map(),
      kegToEdit: null
    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
    this.handleRemovingPint = this.handleRemovingPint.bind(this);
    this.handleSelectToEdit = this.handleSelectToEdit.bind(this);
    this.handleEditKeg = this.handleEditKeg.bind(this);
    this.handleDeletingKeg = this.handleDeletingKeg.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < initialKegs.length; i++) {
      this.handleAddingNewKeg(initialKegs[i]);
    }
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

  handleSelectToEdit(kegId) {
    this.setState({ kegToEdit: kegId });
  }

  handleEditKeg(keg) {
    let newMasterKegList = new Map(this.state.masterKegList);
    keg.amount = newMasterKegList.get(this.state.kegToEdit).amount;
    newMasterKegList.set(this.state.kegToEdit, keg);
    this.setState({ masterKegList: newMasterKegList });
  }

  handleDeletingKeg(kegId) {
    let newMasterKegList = new Map(this.state.masterKegList);
    newMasterKegList.delete(kegId);
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
              background-image: url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/SBlo8amripm9dyff/videoblocks-a-pint-of-dark-beer-is-rotating-against-black-background-glass-of-stout-is-spinning_sz-b4e4im_thumbnail-full01.png);
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
                onSelectToEdit={this.handleSelectToEdit}
                onEditKeg={this.handleEditKeg}
                kegToEdit={this.state.kegToEdit}
                onDeletingKeg={this.handleDeletingKeg}
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

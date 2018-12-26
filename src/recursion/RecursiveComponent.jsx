import React, { Component } from "react";

export default class RecursiveComponent extends Component {
  constructor(props) {
    super(props);
    this.recurseThemAll = this.recurseThemAll.bind(this);
    this.components = this.props.components;
  }
  recurseThemAll() {
    return this.props.components.reduceRight(
      (children, NestedComponent) => (
        <NestedComponent>{children}</NestedComponent>
      ),
      null
    );
  }

  render() {
    return (
      <div>
        {this.recurseThemAll()}
        {/*this.props.components.map(e => e())*/}
        {/* invoke recursive method here */}
      </div>
    );
  }
}

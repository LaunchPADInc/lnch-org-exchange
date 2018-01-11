import React from 'react';

let Help = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <h1>{this.props.title}</h1>
        <section className="text-center">
          <h4>Please see the <a href="http://lnchpad.com/deployment/" target="_blank">FAQ</a> on the <a href="http://lnchpad.com/deployment/" target="_blank">LaunchPAD</a> website.</h4>
          <p>dApp documentation coming soon on the <a href="https://github.com/LaunchPADInc" target="_blank">LaunchPAD GitHub</a>.</p>
        </section>
      </div>
    );
  }
});

module.exports = Help;

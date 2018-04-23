import React from 'react';

let Help = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <h1>{this.props.title}</h1>
        <section className="text-center">
          <h4>Please see the <a href="https://lnch.org/FAQ" target="_blank">FAQ</a> on the <a href="https://lnch.org/FAQ" target="_blank">LaunchPAD</a> website.</h4>
            <p>dApp documentation coming soon on the <a href="https://github.com/LaunchPADInc/Documentation" target="_blank">LaunchPAD GitHub</a>.</p>
          <p>dApp documentation coming soon.</p>
        </section>
      </div>
    );
  }
});

module.exports = Help;

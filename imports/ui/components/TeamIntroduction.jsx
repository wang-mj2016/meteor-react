import React, { Component, PropTypes } from 'react';
import Radium, { Style } from 'radium';
import NewTeamIntro from './NewTeamIntro.jsx';
const style = {
  whole: {
    background: 'rgba(80,145,230,0.05)',
    marginTop: '20px',
    paddingBottom: '45px',
  },
};
@Radium
export default class TeamIntroduction extends Component {
  render() {
    return (
      <div id="teamIntroduction" style={style.whole}>
        <div className="container">
          <div className="teamInTitle">团队介绍</div>
          <NewTeamIntro />
        </div>
        <Style
          scopeSelector="#teamIntroduction"
          rules={{
            '.teamInTitle': {
              fontSize: '24px',
              color: '#353535',
              textAlign: 'center',
              padding: '42px 0 0px',
            },
          }}
        />
      </div>
    );
  }
}
TeamIntroduction.propTypes = {};

import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import Radium, { Style } from 'radium';
import _ from 'lodash';

let styles = {};
@Radium
export default class NewTeamIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamArrs: [
        [
          {
            img: 'https://cdn-global1.unicareer.com/official-project/image/up17-6-3007070697l7.jpeg',
            name: 'Barbara',
            position: '联合创始人 | CEO',
            dec: '2017年入选美国财经媒体福布斯发布的“亚洲地区30位30岁以下商业领袖榜单”（Forbes 30 Under 30 Asia）。毕业于复旦大学，普林斯顿大学优秀交换生。曾就职于摩根士丹利、花旗集团、通用电气、谷歌等知名企业。WDC 2011年魔兽争霸Dota女子组世界冠军。',
          },
          {
            img: 'https://cdn-global1.unicareer.com/official-project/image/up17-6-30070706990w.jpeg',
            name: 'Denise',
            position: '联合创始人',
            dec: '纽约证券分析师协会全球投资分会委员、美国亚裔另类投资协会委员、职场多元化招聘官和培训师，前新东方托福明星导师。毕业于耶鲁大学经济系，前贝莱德资管副总裁，主管全球官方机构业务。有10年纽约香港伦敦三地金融管理和产品销售经验，并于2013年创立贝莱德教育研究学院，影响千余名机构客户。',
          },
          {
            img: 'https://cdn-global1.unicareer.com/official-project/image/up17-6-3007070701ml.jpeg',
            name: 'Esther',
            position: '总经理',
            dec: '前普华永道纽约所高级战略咨询师，曾在普华永道旧金山，西雅图和上海办公室担任企业并购咨询师，主要负责TMT和医药行业的融资并购和股权投资。宾夕法尼亚州立大学经济数学双学士，纽约州注册会计师。',
          },
          {
            img: 'https://cdn-global1.unicareer.com/official-project/image/up17-6-30070707068r.png',
            name: 'Lydia',
            position: '人力资源总监',
            dec: '美国人力资源管理协会（SHRM）主要成员，曾在美国纳苏郡政府社会保障部门从事招聘与培训，拥有4年教育领域招聘经验。霍夫斯特拉大学人力资源管理硕士，曾任美国人力资源管理协会霍夫斯特拉大学分会副主席。',
          },
        ],
        [
          {
            img: 'https://cdn-global1.unicareer.com/official-project/image/up17-7-803128902b6.jpeg',
            name: 'Isabella',
            position: '产品研发部经理',
            dec: '前美国高盛集团对冲策略分析师，曾在纽约花旗集团、瑞士银行、香港巴克莱资本从事资产组合投资和行业研究分析工作。加州伯克利大学MBA，纽约大学金融精算双学士，曾帮助数百位学员斩获心仪offer。',
          },
          {
            img: 'https://cdn-global1.unicareer.com/official-project/image/up17-7-628935648ed.png',
            name: 'Anyi',
            position: '首席技术官',
            dec: '拥有超过7年软件开发、测试及项目管理经验，纽约大学计算机硕士。曾在纽约大学网络实验室中担任研究助理，目前主要负责UniCareer线上产品的设计与研发。',
          },
          {
            img: 'https://cdn-global1.unicareer.com/official-project/image/up17-7-6289867264l.jpeg',
            name: 'Apple',
            position: '商务合作部经理',
            dec: '超过15年行业工作经验，To B教育领域3年创业经验，B2B领域市场营销专家，曾出任Dell、DHL、TNT等世界500强企业市场部高级经理、总监。宾夕法尼亚州立大学MBA。',
          },
          {
            img: 'https://cdn-global1.unicareer.com/official-project/image/up17-7-6290266642u.jpeg',
            name: 'Li',
            position: '市场部经理',
            dec: '毕业于芝加哥德保罗大学，曾担任德保罗大学全球大使负责亚太地区市场拓展，拥有多年品牌管理、数字营销和大数据分析经验。',
          },
        ],
      ],
      curIndex: '00',
    };
  }
  // 鼠标hover效果
  hover(index, mindex) {
    const container = document.getElementById('new-team-intro');
    const allCard = container.getElementsByClassName('card');
    const curCard = container.getElementsByClassName(`card${index}${mindex}`)[0];
    // const curCard = aa;
    // 去掉所有card的active
    for (let i = 0; i < allCard.length; i++) {
      allCard[i].classList.toggle('active', false);
    }
    curCard.classList.toggle('active', true);
    this.setState({
      curIndex: `${index}${mindex}`,
    });
    // console.log('index', index);
    // console.log('mindex', mindex);
  }
  renderRow() {
    const teamArrs = this.state.teamArrs;
    return teamArrs.map((teamArr, index) =>
      <div key={index}>
        <div className="row" style={styles.padding}>
          {this.renderCard(teamArr, index)}
        </div>
        {this.renderDescrip(teamArr, index)}
      </div>
    );
  }
  renderCard(teamArr, index) {
    const teamArrs = teamArr;
    const curIndex = parseInt(this.state.curIndex, 10);
    return teamArrs.map((team, dex) =>
      <div
        className="col-md-3"
        onMouseOver={() => this.hover(index, dex)}
        key={_.uniqueId('card_')}
      >
        <div className={curIndex === parseInt(`${index}${dex}`, 10) ? `card card${index}${dex} active` : `card card${index}${dex}`}>
          <div className="img-box">
            <img src={team.img} alt="header" />
            <div className="mask">
              <div className="box">
                <div style={styles.name}>{team.name}</div>
                <div style={styles.posi}>{team.position}</div>
              </div>
            </div>
          </div>
          <div className="position">
            <h3>{team.name}</h3>
            <div className="posi">{team.position}</div>
          </div>
        </div>
      </div>
    );
  }
  renderDescrip(teamArr, index) {
    const teamArrs = teamArr;
    const curIndex = parseInt(this.state.curIndex, 10);
    return teamArrs.map((team, ind) => {
      // console.log('parseindex', parseInt(`${index}${ind}`, 10));
      return (
        <div
          key={_.uniqueId('des_')}
          className={curIndex === parseInt(`${index}${ind}`, 10) ? 'descrip active' : 'descrip'}
          style={styles.padding}
        >
          {team.dec}
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return (
      <div id="new-team-intro">
        {this.renderRow()}
        <Style
          scopeSelector="#new-team-intro"
          rules={{
            '.card': {
              cursor: 'pointer',
            },
            '.card.active .mask': {
              display: 'none',
            },
            '.card.active .position': {
              display: 'block',
            },
            '.img-box': {
              position: 'relative',
              marginTop: '30px',
            },
            '.img-box img': {
              width: '100%',
            },
            '.img-box .mask': {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(53, 53, 53, 0.5)',
              color: '#fff',
            },
            '.img-box .mask .box': {
              position: 'absolute',
              left: '0',
              bottom: '0',
              width: '100%',
              height: '63px',
              textAlign: 'center',
              fontSize: '1.25em',
              fontWeight: 200,
            },
            '.position': {
              textAlign: 'center',
              display: 'none',
            },
            '.position h3': {
              fontSize: '1.25em',
              marginTop: '18px',
            },
            '.position .posi': {
              fontSize: '17px',
              color: '#b2b2b2',
              fontWeight: 100,
            },
            '.descrip': {
              display: 'none',
              fontSize: '0.875em',
              color: '#353535',
              lineHeight: '28px',
              margin: '10px 0 0px',
            },
            '.descrip.active': {
              display: 'block',
            },
          }}
        />
      </div>
    );
  }
}
styles = {
  name: {
    fontSize: '1em',
    fontWeight: 200,
  },
  posi: {
    fontSize: '17px',
    fontWeight: 100,
  },
  padding: {
    padding: '0 5%',
  },
};
NewTeamIntro.propTypes = {
  // img: PropTypes.string.isRequired,
};

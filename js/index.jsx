import React from 'react';
var ReactDOM = require('react-dom');
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import Toggle from 'material-ui/Toggle';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import update from 'react-addons-update';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import CozyFiMap from './cozyfimap.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';





const NavBar = () => (
  <AppBar
    title="Cozifi"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementRight={<TextField
      in
      hintStyle={{color:'white'}}
      hintText="Enter Your Current City"
    />}
    iconStyleRight={{marginRight:'12rem'}}>

  </AppBar>
);



// export default class Popover extends React.Component {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       open: false,
//     };
//   }
//
//   handleTouchTap = (event) => {
//     // This prevents ghost click.
//     event.preventDefault();
//     this.setState({
//       open: true,
//       anchorEl: event.currentTarget,
//     });
//   };
//
  // handleRequestClose = () => {
  //   this.setState({
  //     open: false,
  //   });
  // };
//
//   render() {
//     return (
//       <div>
//         <RaisedButton
//           onTouchTap={this.handleTouchTap}
//           label="Click me"
//         />
//         <Popover
//           open={this.state.open}
//           anchorEl={this.state.anchorEl}
//           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
//           targetOrigin={{horizontal: 'left', vertical: 'top'}}
//           onRequestClose={this.handleRequestClose}
//           animation={PopoverAnimationVertical}
//         >
//           <Menu>
//             <MenuItem primaryText="Refresh" />
//             <MenuItem primaryText="Help &amp; feedback" />
//             <MenuItem primaryText="Settings" />
//             <MenuItem primaryText="Sign out" />
//           </Menu>
//         </Popover>
//       </div>
//     );
//   }
// }

const SinglePage = () => (

    <div>
        <NavBar />
        <div className = "singlePage" style={styles.container}>
            <div className="cardz" style={styles.cardz}> <Cardz /> </div>
            <div className="cozyFiMap" style={styles.cozyfi}> <CozyFiMap /> </div>
        </div>
    </div>
);

const imgUrl = 'http://thepurposeisprofit.com/wp-content/uploads/2014/07/Fiap-paulista-coworking.jpg'

const styles = {
    root: {
        flex: .5,
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: 500,
        height: 750,
        overflowY: 'auto',
        marginBottom: 24,
        border: 'white'
    },
    container: {
        flex: .3,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-end',
        // width: '100%',
        height: 750,
        overflowY: 'auto',
        marginBottom: 24,
        color: 'white',
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: "cover",
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    },
    cardz: {
        maxHeight: 500
    },
    cozyFi: {
        "border": `1px solid transparent`,
        "borderRadius": `1px`,
        "boxShadow": `0 2px 6px rgba(0, 0, 0, 0.3)`,
        "boxSizing": `border-box`,
        "MozBoxSizing": `border-box`,
        "fontSize": `14px`,
        "height": `32px`,
        "marginTop": `27px`,
        "outline": `none`,
        "padding": `0 12px`,
        "textOverflow": `ellipses`,
        "width": `400px`
    }
};

export default class Cardz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesData: [
        {
          img: 'https://static1.squarespace.com/static/53fe0ff1e4b03ae33c173d0b/t/565f50cfe4b0d9b44ab71fe0/1449087188284/Provost-Studio-RTP-Frontier_Photo-14_x.jpg?format=1500w',
          avatar: 'https://writenaked.files.wordpress.com/2016/01/img_3792.jpg?w=300&h=254',
          title: 'The Frontier',
          placeid:'ChIJAfxBZL3vrIkRYVG0gkU72dI',
          subtitle: 'Free coworking environment in RTP',
          wifi: 'RTPGuest',
          passwrod: 'open',
          quirks: 'wifi is weird sometimes',
          address: {street: '800 Park Offices Dr',
                    city: 'Durham, NC',
                    zip: 27709},
          submitter: 'gwhitley',
          featured: true,
          expanded: false,
          anchorEl: event.currentTarget,

        },
        {
          img: 'https://c2.staticflickr.com/6/5349/17374712440_ae198715ea_z.jpg',
          avatar: 'http://s3-media4.fl.yelpcdn.com/bphoto/eryKArSBuET-Dj4FcBuoKw/348s.jpg',
          title: 'Cocoa Cinnamon',
          subtitle: 'Hip coffee shop in Durham\'s DIY district',
          placeid: 'ChIJ005xLnTkrIkRyOEuOjvwi94',
          wifi: 'Cocoa Cinnamon',
          passwrod: 'ESPRESSO!',
          quirks: 'nowhere to park',
          address: {street: '420 W Geer St',
                    city: 'Durham, NC',
                    zip: 27707},
          submitter: 'gwhitley',
          expanded: false,
          anchorEl: event.currentTarget,


        },
        {
          img: 'http://video.aia.org/aiaawards/2013/2013-library-awards/jbhj-library/i/photo4.jpg',
          avatar: 'https://i.vimeocdn.com/portrait/8150369_300x300.jpg',
          title: 'James B Hunt Jr Library',
          placeid: 'ChIJQR9Zn3X1rIkRWX_jnCZmAr4',
          subtitle: 'NCSU Campus Library, designer digs with super-fast wifi',
          wifi: 'Library Wifi',
          passwrod: 'open',
          quirks: 'pay to park',
          address: {street: '1070 Partners Way',
                    city: 'Raleigh, NC',
                    zip: 27606},
          submitter: 'gwhitley',
          expanded: false,
          anchorEl: event.currentTarget,


        },
        {
          img: 'https://farm4.staticflickr.com/3835/15130401655_c191ae776b.jpg',
          avatar: 'https://static1.squarespace.com/static/56b3cbf945bf21bec4f54976/t/56b657aeb6aa60e6d942a7cf/1467146667788/?format=1500w',
          title: 'Honeysuckle Teahouse',
          placeid: 'ChIJLcOqFtbarIkRnyH30OdQzUg',
          subtitle: 'Open air tea cafe on an herb farm outside Chapel Hill',
          wifi: 'GuestWifi',
          passwrod: '1122112233',
          quirks: 'kind of a far drive from town',
          address: {street: '1070 Partners Way',
                    city: 'Raleigh, NC',
                    zip: 27606},
          submitter: 'gwhitley',
          expanded: false,
          anchorEl: event.currentTarget,


        },
      ]
    };
  }
  handleExpandChange(expanded) {
    // var newState = update(this.state, {0: {expanded: {$set: expanded}}})
    // // this.update(this.state.tilesData[0].expanded, {$set: true});
    // this.setState(newState);
    // this.setState({expanded: expanded});
  };

// TODO:log state log this.state

  handleToggle(toggle, index, event) {
    var newState = update(this.state, {tilesData: {[index]: {expanded: {$set: true}}}})
    // this.update(this.state.tilesData[0].expanded, {$set: true});
    console.log(index)

    this.setState(newState);
    // this.setState({expanded: toggle});
  };

// update(state1, {$push: ['y']})
  handleTouchTap(event){
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      expanded: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose(toggle, index, event){
    var newState = update(this.state, {tilesData: {[index]: {expanded: {$set: false}}}})

    this.setState(newState);

  };

  render() {
    return (
      <div>
      {this.state.tilesData.map((tile, index) => (
        <div>
      <Card
        onTouchTap={this.handleTouchTap.bind(this, !tile.expanded, index)}
        onClick={this.handleToggle.bind(this, !tile.expanded, index)}>
        <CardHeader
          title={tile.title}
          subtitle={tile.subtitle}
          avatar={tile.avatar}
        />
      </Card>
      <Popover
        open={tile.expanded}
        anchorEl={tile.anchorEl}
        anchorOrigin={{horizontal: 'right', vertical: 'middle'}}
        targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        onRequestClose={tile.handleRequestClose}
        animation={PopoverAnimationVertical}
      >
        <Menu>
          <MenuItem primaryText={tile.title} />
          <MenuItem primaryText="Help &amp; feedback" />
          <MenuItem primaryText="Settings" />
          <MenuItem primaryText="Sign out" />
        </Menu>
      </Popover>
      </div>
    ))}


      </div>
    );
  }
}



const App = () => (

  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <SinglePage />
  </MuiThemeProvider>
);



document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById('app'));
});

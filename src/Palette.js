import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Palettefooter from './Palettefooter';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
  }
  changeLevel = (level) => {
    this.setState({ level });
  };
  changeFormat = (val) => {
    this.setState({ format: val });
  };
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const { classes } = this.props;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />
        {/* NavBar comes here */}
        <div className={classes.colors}>{colorBoxes}</div>
        {/* footers */}
        <Palettefooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);

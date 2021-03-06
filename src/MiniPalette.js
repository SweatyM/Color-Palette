import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  deletePalette = (e) => {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  };
  handleClick = () => {
    this.props.goToPalette(this.props.id);
  };
  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    console.log('rendering', paletteName);
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    ));

    return (
      <div className={classes.root} onClick={this.handleClick}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: 'all 0.3s ease-in-out' }}
          onClick={this.deletePalette}
        />
        <div className={classes.colors}>
          {/* Mini color boxes */}
          {miniColorBoxes}
        </div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}
export default withStyles(styles)(MiniPalette);

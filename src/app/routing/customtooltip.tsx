import { Tooltip, withStyles } from "@material-ui/core"
  const CustomTooltip = withStyles({
    tooltip: {
      fontSize: 12,
      backgroundColor: '#009df74d',
      color: '#222222',
      
      fontFamily: 'poppins',
    },
  })(Tooltip)
  
export {CustomTooltip}
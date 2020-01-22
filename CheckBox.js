import React from 'react';
import { TouchableOpacity,StyleSheet,Image} from 'react-native';
import PropTypes from 'prop-types';

class CheckBox extends React.Component{   
    constructor(props){
        super(props)
        const checkBoxStyle = StyleSheet.create({
            checkBox:{
                width: this.props.checkBoxSize ? this.props.checkBoxSize : 30,
                height: this.props.checkBoxSize ? this.props.checkBoxSize : 30,
                tintColor: this.props.checkColor ? this.props.checkColor : 'navy',
            },
        })

        this.state={
            isChecked: this.props.isChecked ? this.props.isChecked: false,
            checkBoxStyle, 
        }
    }


    onToggle=()=>this.setState({isChecked: !this.state.isChecked})

    render(){
        return(
            <TouchableOpacity onPress={this.onToggle}>
            { this.props.squareCheckBox ? 
                <Image style={this.state.checkBoxStyle.checkBox} source={this.state.isChecked ? require('./assets/checkSquare.png'): require('./assets/square.png')} /> 
                :
                <Image style={this.state.checkBoxStyle.checkBox} source={this.state.isChecked ? require('./assets/checkCircle.png'): require('./assets/circle.png')} /> 
            }
            </TouchableOpacity>          
        )
    }
}

CheckBox.propTypes = {
    isChecked: PropTypes.bool,
    checkBoxSize : PropTypes.number,
    checkColor : PropTypes.string,
    squareCheckBox : PropTypes.bool,
    onToggle: PropTypes.func,
};

export default CheckBox


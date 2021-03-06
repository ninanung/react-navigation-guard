import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigationGuard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blockRender: false,
        }
        this.blockRender = this.blockRender.bind(this);
    }

    componentWillMount() {
        const {exact, component, returnBool, ifTrue, ifFalse, computedMatch} = this.props;
        const propsPath = this.props.path;
        //check all the props
        if(!exact || !component || !returnBool || !ifTrue || !ifFalse || !propsPath) {
            throw 'check all the props are passed for react-navigation-guard';
        }
        if(returnBool.length !== 2) {
            throw '"returnBool" function parameters are not fully passed for react-navigation-guard';
        }
        if(ifTrue.length !== 3) {
            throw '"ifTrue" function parameters are not fully passed for react-navigation-guard';
        }
        if(ifFalse.length !== 3) {
            throw '"ifFalse" function parameters are not fully passed for react-navigation-guard';
        }
        const {url, params} = computedMatch;
        const returnValue = returnBool(url, params);
        if(returnValue === true) {
            ifTrue(url, params, this.blockRender);
        } else if(returnValue === false) {
            ifFalse(url, params, this.blockRender);
        } else {
            throw 'returnBool\'s return value must be True or False for react-navigation-guard';
        }
    }

    blockRender() {
        this.setState({
            blockRender: true,
        })
    }

    render() {
        const { path, component, exact } = this.props;
        if(this.state.blockRender) {
            return (<div></div>);
        }
        return (
            <div>
                {exact ? <Route exact path={path} component={component} /> : <Route path={path} component={component} />}
            </div>
        )
    }
}

NavigationGuard.propTypes = {
    exact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    returnBool: PropTypes.func.isRequired,
    ifTrue: PropTypes.func.isRequired,
    ifFalse: PropTypes.func.isRequired,
}

export default NavigationGuard;
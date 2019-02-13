import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigationGuard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stopRender: false,
        }
        this.stopRender.bind();
    }

    componentWillMount() {
        const {exact, component, returnBool, ifTrue, ifFalse, computedMatch} = this.props;
        const propsPath = this.props.path;
        //check all the props
        if(!exact || !component || !returnBool || !ifTrue || !ifFalse || !propsPath) {
            throw 'please, check all the props are passed for react-navigation-guard';
        }
        if(returnBool.length !== 2) {
            throw '"returnBool" function\'s parameters are not fully passed';
        }
        if(ifTrue.length !== 3) {
            throw '"ifTrue" function\'s parameters are not fully passed';
        }
        if(ifFalse.length !== 3) {
            throw '"ifFalse" function\'s parameters are not fully passed';
        }
        const {path, url, params} = computedMatch;
        const returnValue = returnBool(path, params);
        if(returnValue === true) {
            ifTrue(path, params, this.stopRender);
        } else if(returnValue === false) {
            ifFalse(path, params, this.stopRender);
        } else {
            throw 'returnBool\'s return value must be True or False.';
        }
    }

    stopRender() {
        this.setState({
            stopRender: true,
        })
    }

    render() {
        const { path, component, exact } = this.props;
        if(this.state.stopRender) {
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
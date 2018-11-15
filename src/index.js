import React from 'react';
import Route from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigationGuard extends React.Component {
    componentWillMount() {
        const {returnBool, ifTrue, ifFalse, computedMatch} = this.props;
        const {path, url, params} = computedMatch;
        const returnValue = returnBool(path, url, params);
        if(returnValue === true) {
            ifTrue(path, url, params);
        } else if(returnValue === false) {
            ifFalse(path, url, params);
        } else {
            throw 'return value must be True or False.';
        }
    }

    render() {
        const { path, component, exact } = this.props;
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
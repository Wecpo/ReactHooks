import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ReactChildren>
                <Component />
                <Component />
                <Component />
            </ReactChildren>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    return <div>Компонент списка {value}</div>;
};

const ReactChildren = ({ children }) => {
    let value = 1;
    return React.Children.map(children, (child) => {
        const config = { ...child.props, value: value++ };
        return React.cloneElement(child, config);
    });
};

ReactChildren.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    value: PropTypes.string
};
Component.propTypes = {
    value: PropTypes.number
};

export default ChildrenExercise;

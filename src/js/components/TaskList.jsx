const React = require('react');
const Task = require('./Task.jsx');

let TaskList = React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  render() {
    let {tasks} = this.props;
    return (
      <ul>
        {tasks.map((task,index) =>
          <Task key={index} reactKey={index} task={task} />
        )}
      </ul>
    );
  }
});

module.exports = TaskList;

const React = require('react');
const ActionCreator = require('../actions/TodoActionCreators');

let Task = React.createClass({
  getDefaultProps() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },

  handleToggle() {
    if (this.refs.checkbox.getDOMNode().checked) {
      let key = this.props.reactKey;
      ActionCreator.completeTask(key);
    }
  },

  render() {
    let {task} = this.props;
    let marked = task.completed ? 'line-through' : '';

    return (
      <li className="task">
        <input type="checkbox" ref="checkbox" checked={task.completed}
          onChange={this.handleToggle.bind(this)} />
        <label style={{textDecoration: marked}}>{task.title}</label>
      </li>
    );
  }
});

module.exports = Task;

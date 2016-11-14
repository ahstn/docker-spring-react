const React = require('react');
const ReactDOM = require('react-dom');

class UpdateDialog extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var updatedEmployee = {};
    this.props.attributes.forEach(attribute => {
      updatedEmployee[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
    });
    this.props.onUpdate(this.props.employee, updatedEmployee);
    window.location = "#";
  }

  render() {
    var inputs = this.props.attributes.map(attribute =>
      <p key={ this.props.employee.entity[attribute] }>
        <input type="text" placeholder={ attribute }
               defaultValue={ this.props.employee.entity[attribute] }
               ref={ attribute } className="field" />
      </p>
    );

    var dialogId = "updateEmployee-" + this.props.employee.entity._links.self.href;

    return (
      <div key={ this.props.employee.entity._links.self.href }>
        <a href={ "#" + dialogId }>Update</a>
        <div id={ dialogId } className="modalDialog">
          <div>
            <a href="#" title="Close" className="close">X</a>

            <h2>Update an employee</h2>

            <form>
              { inputs }
              <button onClick={ this.handleSubmit }>Update</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateDialog;
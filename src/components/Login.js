import React from 'react'
import { Button, FormGroup, InputGroup, Intent, Tooltip } from "@blueprintjs/core";

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      host: props.host,
      usr: props.usr,
      pwd: props.pwd
    }
  }

  handleLoginClick() {
    if ( this.props.onLoginAction ) {
      // send login action backup to app
      this.props.onLoginAction({
        host: this.state.host,
        usr: this.state.usr,
        pwd: this.state.pwd
      })
    }
  }

  handleLockClick() {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  }

  handleHostChange(e) {
    this.setState({ host: e.target.value });
  }

  handleUsrChange(e) {
    this.setState({ usr: e.target.value });
  }

  handlePwdChange(e) {
    this.setState({ pwd: e.target.value });
  }

  render() {

    const lockButton = (
      <Tooltip content={`${this.state.showPassword ? "Hide" : "Show"} Password`}>
        <Button
          icon={this.state.showPassword ? "unlock" : "lock"}
          intent={Intent.WARNING}
          minimal={true}
          onClick={this.handleLockClick.bind(this)}
        />
      </Tooltip>
    );

    return (
      <div>
        <FormGroup
          label="Server Host"
          labelFor="host-input"
          labelInfo="(required)"
        >
          <InputGroup id="host-input" 
            placeholder="ERPNext Server Host" 
            value={this.state.host || ""} 
            onChange={this.handleHostChange.bind(this) }
          />
        </FormGroup>
        <FormGroup
          label="Username"
          labelFor="usr-input"
          labelInfo="(required)"
        >
          <InputGroup id="usr-input" 
            placeholder="ERPNext Server Host" 
            value={this.state.usr || ""} 
            onChange={this.handleUsrChange.bind(this) }
          />
        </FormGroup>
        <FormGroup
          label="Password"
          labelFor="pwd-input"
          labelInfo="(required)"
        >
          <InputGroup id="host-input" 
            placeholder="ERPNext Server Host" 
            value={this.state.pwd || ""} 
            rightElement={lockButton}
            type={this.state.showPassword ? "text" : "password"} 
            onChange={this.handlePwdChange.bind(this) }
          />
        </FormGroup>
        <Button fill={true} text="Login" onClick={ this.handleLoginClick.bind(this) } icon="key" />
      </div>
    );
  }
}
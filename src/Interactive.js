import preact from 'preact';
import linkState from 'linkstate';
import theme from '@drafty/theme-the-drab';

theme();

export default class Interactive extends preact.Component {
  constructor(props) {
    super(props);

    this.state = {
      figure: '',
      didDrink: null,
      step: 0,
      result: null,
    }
  }

  handleStep(e) {
    e.preventDefault();
    this.setState({ step: this.state.step + 1, result: Math.round((parseInt(this.state.figure, 10) * (Math.random() * 2) + 1) * 100) / 100 });
  }

  render(props, state) {
    return (
      <div>
        <h1 className="Title">Bank Account Balance Simulator</h1>
        {state.step === 0 ? <div>
          <h1 className="Heading">What do you think your balance is?</h1>
          <form onSubmit={this.handleStep.bind(this)}>
            <input className="Input" type="number" step="0.01" onInput={linkState(this, 'figure')} />
            <button className="Button">Next →</button>
          </form>
        </div> : null}
        {state.step === 1 ? <div>
          <h1 className="Heading">You balance is actually</h1>
          <div className="Balance">£{state.result}</div>
        </div> : null}
        {state.step === 2 ? <div>
          <h1 className="Heading">Did you go out last night?</h1>
          <optgroup>
            <option>Mad time m8</option>
            <option>A few drinks</option>
            <option>No</option>
          </optgroup>
          <button className="Button">Next →</button>
        </div> : null}
      </div>
    )
  }
}
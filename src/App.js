import './App.css';

function App() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="login-form__header">Log in</h3>
        <div className="login-form__item">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="emial" placeholder="email"></input>
        </div>
        <div className="login-form__item">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"></input>
        </div>
        <button>Submit</button>
      </form>
    </div>

  );
}

export default App;

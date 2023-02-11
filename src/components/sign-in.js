
import React from "react"
import { useNavigate } from 'react-router-dom';

  
// when button is pressed - go to homepage
function SignIn() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/home';
    navigate(path);
  }
  // const history = useHistory();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Code to handle the sign in logic here
  //   history.push('/home');
  // };
    return (

    <form class="form-signin">
  {/* <img class="mb-4" src="/docs/4.6/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> */}
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
  </div>
  <button onClick={routeChange} class="btn btn-lg btn-secondary btn-block" type="submit">Sign in</button>
  <p class="mt-5 mb-3 text-muted">© 2017-2022</p>
</form>
    )
}


export default SignIn;

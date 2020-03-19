import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rm2012 from './racingMiku2012.jpg';
import rm2015 from './racingMiku2015.jpg';
import rm2019 from './racingMiku2019.jpg';
import rm2020 from './racingMiku2020.jpg';
import sm2014 from './snowMiku2014.jpg';
import sm2016 from './snowMiku2016.jpg';
import sm2017 from './snowMiku2017.jpg';
import sm2018 from './snowMiku2018.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  Redirect,
  useLocation
} from "react-router-dom";
export default function AuthExample() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg">
        <h3>MIKUSHOP</h3>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/shop"><button className class="btn btn-success">Shop</button></Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <AuthButton />
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ShopRoute path="/shop">
            <ShopPage />
          </ShopRoute>
        </Switch>
      </div>
    </Router>
  );
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return fakeAuth.isAuthenticated ? (
    <button class="btn btn-danger" onClick={() => {
      fakeAuth.signout(() => history.push("/"));
    }}>
      Log out
    </button>
  ) : (
      <button class="btn btn-primary" onClick={login}>Log in</button>
    );
}
function ShopRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}
function ShopPage() {
  return (
    <Router>
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/racings">Racing Miku Series</Link>
          </li>
          <li className="list-group-item">
            <Link to="/snows">Snow Miku Series</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/racings">
            <Racings />
          </Route>
          <Route path="/snows">
            <Snows />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button class="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
}
function Snows() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Snow Miku Series</h2>
      <div className="container">
        <div className="row">
          <Link class="col-sm column kolombox" to={`${url}/Nendoroid Snow Miku 2014 ver. Rp 2.364.000,-`}>
            <img src={sm2014} alt="" className="gambar" />
            <div class="namabarang">Snow Miku 2014 ver.</div>
          </Link>
          <Link class="col-sm column kolombox" to={`${url}/Nendoroid Snow Miku 2016 ver. Rp 2.521.500,-`}>
            <img src={sm2016} alt="" className="gambar" />
            <div class="namabarang">Snow Miku 2016 ver.</div>
          </Link>
          <Link class="col-sm column kolombox" to={`${url}/Nendoroid Snow Miku 2017 ver. Rp 2.758.000,-`}>
            <img src={sm2017} alt="" className="gambar" />
            <div class="namabarang">Snow Miku 2017 ver.</div>
          </Link>
          <Link class="col-sm column kolombox" to={`${url}/Nendoroid Snow Miku 2018 ver. Rp 2.679.500,-`}>
            <img src={sm2018} alt="" className="gambar" />
            <div class="namabarang">Snow Miku 2018 ver.</div>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:productId`}>
          <Snow />
        </Route>
      </Switch>
    </div>
  );
}
function Snow() {
  let { productId } = useParams();
  return (
    <div>
      <h3>{productId}</h3>
    </div>
  );
}
function Racings() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Racing Miku Series</h2>
      <div className="container">
        <div className="row">
          <Link class="col-sm column kolombox" to={`${url}/Nendoroid Racing Miku 2012 ver. Rp 2.418.500,-`}>
            <img src={rm2012} alt="" className="gambar" />
            <div class="namabarang">Racing Miku 2012 ver.</div>
          </Link>
          <Link class="col-sm column kolombox" to={`${url}/Nendoroid Racing Miku 2015 ver. Rp 2.528.000,-`}>
            <img src={rm2015} alt="" className="gambar" />
            <div class="namabarang">Racing Miku 2015 ver.</div>
          </Link>
          <Link class="col-sm column kolombox" to={`${url}/Nendoroid Racing Miku 2019 ver. Rp 2.700.000,-`}>
            <img src={rm2019} alt="" className="gambar" />
            <div class="namabarang">Racing Miku 2019 ver.</div>
          </Link>
          <Link class="col-sm column kolombox" to={`${url}/Nendoroid Racing Miku 2020 ver. Rp 2.680.000,-`}>
            <img src={rm2020} alt="" className="gambar" />
            <div class="namabarang">Racing Miku 2020 ver.</div>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:productId`}>
          <Racing />
        </Route>
      </Switch>
    </div>
  );
}
function Racing() {
  let { productId } = useParams();
  return (
    <div>
      <h3>{productId}</h3>
    </div>
  );
}

// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr/>
//         <Switch>
//           <Route exact path="/">
//             <Home/>
//           </Route>
//           <Route path="/topics">
//             <Topics/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>  
//   );
// }
// function Topics() {
//   let {path, url} = useRouteMatch();
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic!</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//     let {topicId} = useParams();
//     return (
//       <div>
//         <h3>{topicId}</h3>
//       </div>
//     );
// }

// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/:id" children={<Child/>}/>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child() {
//   let { id } = useParams();
//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// export default function BasicExamples() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr/>
//         <Switch>
//           <Route exact path="/">
//             <Home/>
//           </Route>
//           <Route exact path="/about">
//             <About/>
//           </Route>
//           <Route exact path="/dashboard">
//             <Dahsboard/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   ); 
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   ); 
// }

// function Dahsboard() {
//   return (
//     <div>
//       <h2>Dahsboard</h2>
//     </div>
//   ); 
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//         <div className="btn btn-primary btn-sm">BOOTSTRAP</div>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

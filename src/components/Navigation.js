import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <nav class="nav-wrap">
              <div className="nav">
            
                <ul>
                  <Link to="/AboutMe">
                    <li >
                        <i>About Me</i>
                    </li>
                  </Link>
                  <Link to="/Experience">
                    <li >
                        <i>Experience</i>
                    </li>
                  </Link>
                  <Link to="/Stage">
                    <li >
                      <i>Stage</i>
                    </li>
                  </Link>
                  <Link to="/Education">
                    <li >
                         <i>Education</i>
                    </li>
                  </Link>
                  <Link to="/Competance">
                    <li >
                      <i>Competance</i>
                    </li>
                  </Link>

                </ul>
              </div>
          </nav>

        )

    }
}
export default Navigation;
import plus from '../images/plus.png';
import profile2 from '../images/profile-2.jpg';
import profile3 from '../images/profile-3.jpg';
import profile4 from '../images/profile-4.jpg';
function Center() {
  return (
    <>
      {/* <h1>Analytics</h1> */}
      {/* <!-- Analyses --> */}
      <div className="analyse">
        <div className="sales">
          <div className="status">
            <div className="info">
              <h3>Total Sales</h3>
              <h1>$65,024</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle
                  cx="38"
                  cy="38"
                  r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+81%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="visits">
          <div className="status">
            <div className="info">
              <h3>Site Visit</h3>
              <h1>24,981</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle
                  cx="38"
                  cy="38"
                  r="36"></circle>
              </svg>
              <div className="percentage">
                <p>-48%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="searches">
          <div className="status">
            <div className="info">
              <h3>Searches</h3>
              <h1>14,147</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle
                  cx="38"
                  cy="38"
                  r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+21%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End of Analyses --> */}

      {/* <!-- New Users Section --> */}
      <div className="new-users">
        <h2>New Users</h2>
        <div className="user-list">
          <div className="user">
            <img
              src={profile2}
              alt=""
            />
            <h2>Jack</h2>
            <p>54 Min Ago</p>
          </div>
          <div className="user">
            <img
              src={profile3}
              alt=""
            />
            <h2>Amir</h2>
            <p>3 Hours Ago</p>
          </div>
          <div className="user">
            <img
              src={profile4}
              alt=""
            />
            <h2>Ember</h2>
            <p>6 Hours Ago</p>
          </div>
          <div className="user">
            <img
              src={plus}
              alt=""
            />
            <h2>More</h2>
            <p>New User</p>
          </div>
        </div>
      </div>
      {/* <!-- End of New Users Section --> */}

      {/* <!-- Recent Orders Table --> */}
      <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
          }}>
          Show All
        </a>
      </div>
    </>
  );
}

export default Center;

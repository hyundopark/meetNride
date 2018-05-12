import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // {/* // <!-- Wrapper Start --> */}
      // {/* // <!-- Header Section Start --> */}
      <header className="header--section style--1">
        {/* <!-- Header Topbar Start --> */}
        <div className="header--topbar bg-black">
          <div className="container">
            {/* <!-- Header Topbar Links Start --> */}
            <ul className="header--topbar-links nav ff--primary float--left">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <span>En</span>
                  <i className="fa fa-caret-down" />
                </a>

                <ul className="dropdown-menu">
                  <li className="active">
                    <a href="#">En</a>
                  </li>
                  <li>
                    <a href="#">Bn</a>
                  </li>
                  <li>
                    <a href="#">In</a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <!-- Header Topbar Links End -->
        
                            <!-- Header Topbar Social Start --> */}
            <ul className="header--topbar-social nav float--left hidden-xs">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-rss" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
              </li>
            </ul>
            {/* <!-- Header Topbar Social End -->
        
                            <!-- Header Topbar Links Start --> */}
            <ul className="header--topbar-links nav ff--primary float--right">
              <li>
                <a
                  href="cart.html"
                  title="Cart"
                  data-toggle="tooltip"
                  data-placement="bottom"
                >
                  <i className="fa fa-shopping-basket" />
                  <span className="badge">3</span>
                </a>
              </li>
              <li>
                <a href="#" className="btn-link">
                  <i className="fa mr--8 fa-user-o" />
                  <span>My Account</span>
                </a>
              </li>
            </ul>
            {/* <!-- Header Topbar Links End --> */}
          </div>
        </div>
        {/* <!-- Header Topbar End --> */}

        {/* <!-- Header Navbar Start --> */}
        <div className="header--navbar navbar bg-black" data-trigger="sticky">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle style--1 collapsed"
                data-toggle="collapse"
                data-target="#headerNav"
              >
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>

              {/* <!-- Header Navbar Logo Start --> */}
              <div className="header--navbar-logo navbar-brand">
                <a href="index.html">
                  <img src="img/logo-white.png" className="normal" alt="" />
                  <img src="img/logo-black.png" className="sticky" alt="" />
                </a>
              </div>
              {/* <!-- Header Navbar Logo End --> */}
            </div>

            <div
              id="headerNav"
              className="navbar-collapse collapse float--right"
            >
              {/* <!-- Header Nav Links Start --> */}
              <ul className="header--nav-links style--1 nav ff--primary">
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span>Home</span>
                    <i className="fa fa-caret-down" />
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a href="home-1.html">
                        <span>Home Version 1</span>
                      </a>
                    </li>
                    <li>
                      <a href="home-2.html">
                        <span>Home Version 2</span>
                      </a>
                    </li>
                    <li>
                      <a href="home-3.html">
                        <span>Home Version 3</span>
                      </a>
                    </li>
                    <li>
                      <a href="home-4.html">
                        <span>Home Version 4</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span>Community</span>
                    <i className="fa fa-caret-down" />
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a href="activity.html">
                        <span>Activity</span>
                      </a>
                    </li>
                    <li>
                      <a href="members.html">
                        <span>Members</span>
                      </a>
                    </li>
                    <li>
                      <a href="groups.html">
                        <span>Groups</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span>BBPress</span>
                    <i className="fa fa-caret-down" />
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a href="forums.html">Forums</a>
                    </li>
                    <li>
                      <a href="sub-forums.html">Sub Forums</a>
                    </li>
                    <li>
                      <a href="topics.html">Topics</a>
                    </li>
                    <li>
                      <a href="topic-replies.html">Topic Replies</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown megamenu">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span>Pages</span>
                    <i className="fa fa-caret-down" />
                  </a>

                  <div className="dropdown-menu">
                    <div className="row">
                      <ul className="col-md-2">
                        <li>
                          <a href="members.html">Members</a>
                        </li>
                        <li>
                          <a href="groups.html">Groups</a>
                        </li>
                        <li>
                          <a href="activity.html">Site Wide Activity</a>
                        </li>
                        <li>
                          <a href="member-activity-personal.html">
                            Member Activity
                          </a>
                        </li>
                        <li>
                          <a href="group-home.html">Group Activity</a>
                        </li>
                      </ul>

                      <ul className="col-md-2">
                        <li>
                          <a href="member-profile.html">Member Profile</a>
                        </li>
                        <li>
                          <a href="member-forum-topics.html">Member Forum</a>
                        </li>
                        <li>
                          <a href="member-media-all.html">Member Media</a>
                        </li>
                        <li>
                          <a href="group-forum.html">Group Forum</a>
                        </li>
                        <li>
                          <a href="group-media.html">Group Media</a>
                        </li>
                      </ul>

                      <ul className="col-md-2">
                        <li>
                          <a href="forums.html">Forums</a>
                        </li>
                        <li>
                          <a href="sub-forums.html">Sub Forums</a>
                        </li>
                        <li>
                          <a href="topics.html">Topics</a>
                        </li>
                        <li>
                          <a href="topic-replies.html">Topic Replies</a>
                        </li>
                        <li>
                          <a href="#">Dummy</a>
                        </li>
                      </ul>

                      <ul className="col-md-2">
                        <li>
                          <a href="products.html">Products</a>
                        </li>
                        <li>
                          <a href="product-details.html">Product Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="#">Dummy</a>
                        </li>
                      </ul>

                      <ul className="col-md-2">
                        <li>
                          <a href="blog-sidebar-right.html">
                            Blog Sidebar Right
                          </a>
                        </li>
                        <li>
                          <a href="blog-sidebar-left.html">Blog Sidebar Left</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="#">Dummy</a>
                        </li>
                        <li>
                          <a href="#">Dummy</a>
                        </li>
                      </ul>

                      <ul className="col-md-2">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span>Products</span>
                    <i className="fa fa-caret-down" />
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a href="products.html">Products</a>
                    </li>
                    <li>
                      <a href="product-details.html">Product Details</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span>Blog</span>
                    <i className="fa fa-caret-down" />
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-sidebar-right.html">Blog Sidebar Right</a>
                    </li>
                    <li>
                      <a href="blog-sidebar-left.html">Blog Sidebar Left</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
              {/* <!-- Header Nav Links End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Header Navbar End --> */}
      </header>
      // {/* <!-- Header Section End --> */}
    );
  }
}

export default Header;

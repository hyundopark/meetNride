var Test = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* ==== Document Title ==== */}
          <title>SociFly - Multipurpose Social Network HTML5 Template</title>
          {/* ==== Document Meta ==== */}
          <meta name="author" content />
          <meta name="description" content />
          <meta name="keywords" content />
          {/* ==== Favicon ==== */}
          <link rel="icon" href="favicon.png" type="image/png" />
          {/* ==== Google Font ==== */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,500,600,700%7CRoboto:300,400,400i,500,700" />
          {/* ==== Plugins Bundle ==== */}
          <link rel="stylesheet" href="css/plugins.min.css" />
          {/* ==== Main Stylesheet ==== */}
          <link rel="stylesheet" href="style.css" />
          {/* ==== Responsive Stylesheet ==== */}
          <link rel="stylesheet" href="css/responsive-style.css" />
          {/* ==== Color Scheme Stylesheet ==== */}
          <link rel="stylesheet" href="css/colors/color-1.css" id="changeColorScheme" />
          {/* ==== Custom Stylesheet ==== */}
          <link rel="stylesheet" href="css/custom.css" />
          {/* ==== HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries ==== */}
          {/*[if lt IE 9]>
          
          
      <![endif]*/}
          {/* Preloader Start */}
          <div id="preloader">
            <div className="preloader--inner" />
          </div>
          {/* Preloader End */}
          {/* Wrapper Start */}
          <div className="wrapper">
            {/* Header Section Start */}
            <header className="header--section style--1">
              {/* Header Topbar Start */}
              <div className="header--topbar bg-black">
                <div className="container">
                  {/* Header Topbar Links Start */}
                  <ul className="header--topbar-links nav ff--primary float--left">
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <span>En</span>
                        <i className="fa fa-caret-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="active"><a href="#">En</a></li>
                        <li><a href="#">Bn</a></li>
                        <li><a href="#">In</a></li>
                      </ul>
                    </li>
                  </ul>
                  {/* Header Topbar Links End */}
                  {/* Header Topbar Social Start */}
                  <ul className="header--topbar-social nav float--left hidden-xs">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-rss" /></a></li>
                    <li><a href="#"><i className="fa fa-youtube" /></a></li>
                  </ul>
                  {/* Header Topbar Social End */}
                  {/* Header Topbar Links Start */}
                  <ul className="header--topbar-links nav ff--primary float--right">
                    <li>
                      <a href="cart.html" title="Cart" data-toggle="tooltip" data-placement="bottom">
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
                  {/* Header Topbar Links End */}
                </div>
              </div>
              {/* Header Topbar End */}
              {/* Header Navbar Start */}
              <div className="header--navbar navbar bg-black" data-trigger="sticky">
                <div className="container">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle style--1 collapsed" data-toggle="collapse" data-target="#headerNav">
                      <span className="sr-only">Toggle Navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    {/* Header Navbar Logo Start */}
                    <div className="header--navbar-logo navbar-brand">
                      <a href="index.html">
                        <img src="img/logo-white.png" className="normal" alt />
                        <img src="img/logo-black.png" className="sticky" alt />
                      </a>
                    </div>
                    {/* Header Navbar Logo End */}
                  </div>
                  <div id="headerNav" className="navbar-collapse collapse float--right">
                    {/* Header Nav Links Start */}
                    <ul className="header--nav-links style--1 nav ff--primary">
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <span>Home</span>
                          <i className="fa fa-caret-down" />
                        </a>
                        <ul className="dropdown-menu">
                          <li><a href="home-1.html"><span>Home Version 1</span></a></li>
                          <li><a href="home-2.html"><span>Home Version 2</span></a></li>
                          <li><a href="home-3.html"><span>Home Version 3</span></a></li>
                          <li><a href="home-4.html"><span>Home Version 4</span></a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <span>Community</span>
                          <i className="fa fa-caret-down" />
                        </a>
                        <ul className="dropdown-menu">
                          <li><a href="activity.html"><span>Activity</span></a></li>
                          <li><a href="members.html"><span>Members</span></a></li>
                          <li><a href="groups.html"><span>Groups</span></a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <span>BBPress</span>
                          <i className="fa fa-caret-down" />
                        </a>
                        <ul className="dropdown-menu">
                          <li><a href="forums.html">Forums</a></li>
                          <li><a href="sub-forums.html">Sub Forums</a></li>
                          <li><a href="topics.html">Topics</a></li>
                          <li><a href="topic-replies.html">Topic Replies</a></li>
                        </ul>
                      </li>
                      <li className="dropdown megamenu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <span>Pages</span>
                          <i className="fa fa-caret-down" />
                        </a>
                        <div className="dropdown-menu">
                          <div className="row">
                            <ul className="col-md-2">
                              <li><a href="members.html">Members</a></li>
                              <li><a href="groups.html">Groups</a></li>
                              <li><a href="activity.html">Site Wide Activity</a></li>
                              <li><a href="member-activity-personal.html">Member Activity</a></li>
                              <li><a href="group-home.html">Group Activity</a></li>
                            </ul>
                            <ul className="col-md-2">
                              <li><a href="member-profile.html">Member Profile</a></li>
                              <li><a href="member-forum-topics.html">Member Forum</a></li>
                              <li><a href="member-media-all.html">Member Media</a></li>
                              <li><a href="group-forum.html">Group Forum</a></li>
                              <li><a href="group-media.html">Group Media</a></li>
                            </ul>
                            <ul className="col-md-2">
                              <li><a href="forums.html">Forums</a></li>
                              <li><a href="sub-forums.html">Sub Forums</a></li>
                              <li><a href="topics.html">Topics</a></li>
                              <li><a href="topic-replies.html">Topic Replies</a></li>
                              <li><a href="#">Dummy</a></li>
                            </ul>
                            <ul className="col-md-2">
                              <li><a href="products.html">Products</a></li>
                              <li><a href="product-details.html">Product Details</a></li>
                              <li><a href="cart.html">Cart</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                              <li><a href="#">Dummy</a></li>
                            </ul>
                            <ul className="col-md-2">
                              <li><a href="blog-sidebar-right.html">Blog Sidebar Right</a></li>
                              <li><a href="blog-sidebar-left.html">Blog Sidebar Left</a></li>
                              <li><a href="blog-details.html">Blog Details</a></li>
                              <li><a href="#">Dummy</a></li>
                              <li><a href="#">Dummy</a></li>
                            </ul>
                            <ul className="col-md-2">
                              <li><a href="about.html">About</a></li>
                              <li><a href="faq.html">FAQ</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="coming-soon.html">Coming Soon</a></li>
                              <li><a href="404.html">404</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <span>Products</span>
                          <i className="fa fa-caret-down" />
                        </a>
                        <ul className="dropdown-menu">
                          <li><a href="products.html">Products</a></li>
                          <li><a href="product-details.html">Product Details</a></li>
                          <li><a href="cart.html">Cart</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <span>Blog</span>
                          <i className="fa fa-caret-down" />
                        </a>
                        <ul className="dropdown-menu">
                          <li><a href="blog-sidebar-right.html">Blog Sidebar Right</a></li>
                          <li><a href="blog-sidebar-left.html">Blog Sidebar Left</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html"><span>Contact</span></a></li>
                    </ul>
                    {/* Header Nav Links End */}
                  </div>
                </div>
              </div>
              {/* Header Navbar End */}
            </header>
            {/* Header Section End */}
            {/* Banner Section Start */}
            <section className="banner--section" data-bg-img="img/preview-img/banner-bg.jpg" data-overlay="0.7">
              <div className="container">
                {/* Banner Content Start */}
                <div className="banner--content pt--100 pb--100 text-center">
                  <div className="title pb--10">
                    <h1 className="h4 text-white">Responsive and Retina Ready Bootstrap Based 40 Demo Templates</h1>
                  </div>
                  <div className="sub-title pb--10">
                    <h2 className="h2 text-white">SociFly - Multipurpose Social Network HTML5 Template</h2>
                  </div>
                  <div className="action eq text-uppercase">
                    <a href="#demos" className="btn btn-white" data-trigger="smoothScroll">View Demos</a>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                  </div>
                </div>
                {/* Banner Content End */}
              </div>
            </section>
            {/* Banner Section End */}
            {/* Demos Section Start */}
            <section id="demos" className="pt--70">
              <div className="container">
                {/* Section Title Start */}
                <div className="section--title pb--50 text-center">
                  <div className="title lined">
                    <h2 className="h2">Demos</h2>
                  </div>
                </div>
                {/* Section Title End */}
                <div className="row AdjustRow">
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="home-1.html" className="btn-link text-darkest text-center" target="_blank">
                        <img src="img/preview-img/home-1.jpg" alt />
                        <span>Home Version 1</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="home-2.html" className="btn-link text-darkest text-center" target="_blank">
                        <img src="img/preview-img/home-2.jpg" alt />
                        <span>Home Version 2</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="home-3.html" className="btn-link text-darkest text-center" target="_blank">
                        <img src="img/preview-img/home-3.jpg" alt />
                        <span>Home Version 3</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-0 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="home-4.html" className="btn-link text-darkest text-center" target="_blank">
                        <img src="img/preview-img/home-4.jpg" alt />
                        <span>Home Version 4</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                </div>
              </div>
            </section>
            {/* Demos Section End */}
            {/* Demos Section Start */}
            <section className="pt--150 pb--20 bg-primary section--arrow">
              <div className="container">
                {/* Section Title Start */}
                <div className="section--title pb--50 text-center">
                  <div className="title lined lined-white">
                    <h2 className="h2 text-white">Pages</h2>
                  </div>
                </div>
                {/* Section Title End */}
                <div className="row AdjustRow">
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="about.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/about.jpg" alt />
                        <span className="text-white">About Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="faq.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/faq.jpg" alt />
                        <span className="text-white">FAQ Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="contact.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/contact.jpg" alt />
                        <span className="text-white">Contact Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="activity.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/activity.jpg" alt />
                        <span className="text-white">Activity Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="members.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/members.jpg" alt />
                        <span className="text-white">Members Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="member-activity-personal.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/member-activity.jpg" alt />
                        <span className="text-white">Member Activity Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="member-profile.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/member-profile.jpg" alt />
                        <span className="text-white">Member Profile Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="member-friends.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/member-friends.jpg" alt />
                        <span className="text-white">Member Friends Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="member-groups.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/member-groups.jpg" alt />
                        <span className="text-white">Member Groups Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="member-forum-topics.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/member-forum.jpg" alt />
                        <span className="text-white">Member Forum Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="member-media-all.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/member-media.jpg" alt />
                        <span className="text-white">Member Media Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="groups.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/groups.jpg" alt />
                        <span className="text-white">Groups Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="group-home.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/group-activity.jpg" alt />
                        <span className="text-white">Group Activity Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="group-forum.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/group-forum.jpg" alt />
                        <span className="text-white">Group Forum Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="group-members.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/group-members.jpg" alt />
                        <span className="text-white">Group Members Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="group-media.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/group-media.jpg" alt />
                        <span className="text-white">Group Media Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="forums.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/forums.jpg" alt />
                        <span className="text-white">Forums Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="topics.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/topics.jpg" alt />
                        <span className="text-white">Topics Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="topic-replies.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/topic-replies.jpg" alt />
                        <span className="text-white">Topic Replies Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="products.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/products.jpg" alt />
                        <span className="text-white">Products Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="product-details.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/product-details.jpg" alt />
                        <span className="text-white">Product Details Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="cart.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/cart.jpg" alt />
                        <span className="text-white">Cart Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="checkout.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/checkout.jpg" alt />
                        <span className="text-white">Checkout Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="blog-sidebar-right.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/blog-sidebar-right.jpg" alt />
                        <span className="text-white">Blog Page (Right Sidebar)</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="blog-sidebar-left.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/blog-sidebar-left.jpg" alt />
                        <span className="text-white">Blog Page (Left Sidebar)</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="blog-details.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/blog-details.jpg" alt />
                        <span className="text-white">Blog Details Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="coming-soon.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/coming-soon.jpg" alt />
                        <span className="text-white">Coming Soon Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Image Block Start */}
                    <div className="img--block style--2">
                      <a href="404.html" className="btn-link text-center" target="_blank">
                        <img src="img/preview-img/404.jpg" alt />
                        <span className="text-white">404 Page</span>
                      </a>
                    </div>
                    {/* Image Block End */}
                  </div>
                </div>
              </div>
            </section>
            {/* Demos Section End */}
            {/* Features Section Start */}
            <section className="pt--150 pb--20 section--arrow section--arrow-primary">
              <div className="container">
                {/* Section Title Start */}
                <div className="section--title pb--50 text-center">
                  <div className="title lined">
                    <h2 className="h2">Features</h2>
                  </div>
                </div>
                {/* Section Title End */}
                <div className="row AdjustRow">
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Based on Bootstrap</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Fully Responsive Design</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">800+ Google Fonts</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Clean Design</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Cross Browser Supported</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Sticky Menu</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Dropdown Menu</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Megamenu Menu</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Boxed &amp; Wide Layouts</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">10 Color Schemes</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">AJAX Contact Form</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Well Documentation</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Well Commented Code</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">W3 Validated Code</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">RTL Support</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Retina Ready</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">250+ HTML Pages</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">8 Homepage Layouts</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">4+ Post Layouts</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">3 Unique Blog Styles</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">3 Archive Pages</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">9 Unique Menu Styles</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">45 Custom Widgets</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Ajax + Mailchimp Widget</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">eCommerce Ready</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Special Pricing &amp; Shop Page</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Coming Soon Page</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Google Map</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Lifetime Updates</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                  <div className="col-md-4 col-xs-6 col-xxs-12 pb--60">
                    {/* Feature Block Start */}
                    <div className="feature--block clearfix">
                      <div className="icon icon-block fs--24 mr--20 text-white bg-primary float--left">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <div className="content ov--h mt--8">
                        <p className="text-black fs--22 fw--500">Exclusive Support</p>
                      </div>
                    </div>
                    {/* Feature Block End */}
                  </div>
                </div>
              </div>
            </section>
            {/* Features Section End */}
            {/* Footer Section Start */}
            <footer className="footer--section">
              {/* Footer Widgets Start */}
              <div className="footer--widgets pt--70 pb--20 bg-lightdark" data-bg-img="img/footer-img/footer-widgets-bg.png">
                <div className="container">
                  <div className="row AdjustRow">
                    <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                      {/* Widget Start */}
                      <div className="widget">
                        <h2 className="h4 fw--700 widget--title">About Us</h2>
                        {/* Text Widget Start */}
                        <div className="text--widget">
                          <p>Ipsum is simply dummy text of the printing indusLorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                        {/* Text Widget End */}
                      </div>
                      {/* Widget End */}
                      {/* Widget Start */}
                      <div className="widget">
                        <h2 className="h4 fw--700 widget--title">Subscribe To Our Newsletter</h2>
                        {/* Newsletter Widget Start */}
                        <div className="newsletter--widget style--1" data-form="validate">
                          <form action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&id=f4e0e93d1d" method="post" name="mc-embedded-subscribe-form" target="_blank">
                            <div className="input-group">
                              <input type="email" name="EMAIL" placeholder="Enter your emil address" className="form-control" autoComplete="off" required />
                              <div className="input-group-btn">
                                <button type="submit" className="btn-link"><i className="fa fa-send-o" /></button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* Newsletter Widget End */}
                      </div>
                      {/* Widget End */}
                    </div>
                    <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                      {/* Widget Start */}
                      <div className="widget">
                        <h2 className="h4 fw--700 widget--title">Recent Post</h2>
                        {/* Recent Posts Widget Start */}
                        <div className="recent-posts--widget">
                          <ul className="nav">
                            <li>
                              <p className="date fw--300">
                                <a href="#"><i className="fa mr--8 fa-file-text-o" />19 Jan 2017</a>
                              </p>
                              <p className="title fw--700">
                                <a href="blog-details.html">I look at you and see the rest of my life in front</a>
                              </p>
                            </li>
                            <li>
                              <p className="date fw--300">
                                <a href="#"><i className="fa mr--8 fa-file-text-o" />19 Jan 2017</a>
                              </p>
                              <p className="title fw--700">
                                <a href="blog-details.html">If I know what love is, it is because of you</a>
                              </p>
                            </li>
                            <li>
                              <p className="date fw--300">
                                <a href="#"><i className="fa mr--8 fa-file-text-o" />19 Jan 2017</a>
                              </p>
                              <p className="title fw--700">
                                <a href="blog-details.html">At the touch of love everyone becomes a poet</a>
                              </p>
                            </li>
                          </ul>
                        </div>
                        {/* Recent Posts Widget End */}
                      </div>
                      {/* Widget End */}
                      {/* Widget Start */}
                      <div className="widget">
                        <h2 className="h4 fw--700 widget--title">Tags</h2>
                        {/* Tags Widget Start */}
                        <div className="tags--widget">
                          <ul className="nav">
                            <li><a href="#">BuddyPress</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">Music</a></li>
                            <li><a href="#">Technology</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">WordPress</a></li>
                          </ul>
                        </div>
                        {/* Tags Widget End */}
                      </div>
                      {/* Widget End */}
                    </div>
                    <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                      {/* Widget Start */}
                      <div className="widget">
                        <h2 className="h4 fw--700 widget--title">Some of Catagories</h2>
                        {/* Nav Widget Start */}
                        <div className="nav--widget">
                          <ul className="nav">
                            <li>
                              <a href="#">
                                <i className="fa fa-folder-o" />
                                <span className="text">Social Media</span>
                                <span className="count">(26)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-folder-o" />
                                <span className="text">Business Studies</span>
                                <span className="count">(06)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-folder-o" />
                                <span className="text">Technology</span>
                                <span className="count">(34)</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* Nav Widget End */}
                      </div>
                      {/* Widget End */}
                      {/* Widget Start */}
                      <div className="widget">
                        <h2 className="h4 fw--700 widget--title">From Archives</h2>
                        {/* Nav Widget Start */}
                        <div className="nav--widget">
                          <ul className="nav">
                            <li>
                              <a href="#">
                                <i className="fa fa-calendar-o" />
                                <span className="text">Jan - July 2017</span>
                                <span className="count">(86)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-calendar-o" />
                                <span className="text">Jan - Dce 2016</span>
                                <span className="count">(328)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-calendar-o" />
                                <span className="text">Jan - Dec 2015</span>
                                <span className="count">(427)</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* Nav Widget End */}
                      </div>
                      {/* Widget End */}
                    </div>
                    <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                      {/* Widget Start */}
                      <div className="widget">
                        <h2 className="h4 fw--700 widget--title">Forums</h2>
                        {/* Links Widget Start */}
                        <div className="links--widget">
                          <ul className="nav">
                            <li><a href="sub-forums.html">User Interface Design</a></li>
                            <li><a href="sub-forums.html">Front-End Engineering</a></li>
                            <li><a href="sub-forums.html">Web Development</a></li>
                            <li><a href="sub-forums.html">Social Media Marketing</a></li>
                            <li><a href="sub-forums.html">Content Marketing</a></li>
                          </ul>
                        </div>
                        {/* Links Widget End */}
                      </div>
                      {/* Widget End */}
                      {/* Widget Start */}
                      <div className="widget">
                        <h2 className="h4 fw--700 widget--title">Useful Links</h2>
                        {/* Links Widget Start */}
                        <div className="links--widget">
                          <ul className="nav">
                            <li><a href="#">Register</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Membership Levels</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Contact</a></li>
                          </ul>
                        </div>
                        {/* Links Widget End */}
                      </div>
                      {/* Widget End */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Widgets End */}
              {/* Footer Extra Start */}
              <div className="footer--extra bg-darker pt--30 pb--40 text-center">
                <div className="container">
                  {/* Widget Start */}
                  <div className="widget">
                    <h2 className="h4 fw--700 widget--title">Recent Active Members</h2>
                    {/* Recent Active Members Widget Start */}
                    <div className="recent-active-members--widget style--2">
                      <div className="owl-carousel" data-owl-items={12} data-owl-nav="true" data-owl-speed={1200} data-owl-responsive="{&quot;0&quot;: {&quot;items&quot;: &quot;3&quot;}, &quot;481&quot;: {&quot;items&quot;: &quot;6&quot;}, &quot;768&quot;: {&quot;items&quot;: &quot;8&quot;}, &quot;992&quot;: {&quot;items&quot;: &quot;12&quot;}}">
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/01.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/02.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/03.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/04.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/05.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/06.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/07.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/08.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/09.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/10.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/11.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/12.jpg" alt /></a>
                        </div>
                        <div className="img">
                          <a href="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/13.jpg" alt /></a>
                        </div>
                      </div>
                    </div>
                    {/* Recent Active Members Widget End */}
                  </div>
                  {/* Widget End */}
                </div>
              </div>
              {/* Footer Extra End */}
              {/* Footer Copyright Start */}
              <div className="footer--copyright pt--30 pb--30 bg-darkest">
                <div className="container">
                  <div className="text fw--500 fs--14 text-center">
                    <p>Copyright © Soci<span>fly</span>. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
              {/* Footer Copyright End */}
            </footer>
            {/* Footer Section End */}
          </div>
          {/* Wrapper End */}
          {/* Back To Top Button Start */}
          <div id="backToTop">
            <a href="#" className="btn"><i className="fa fa-caret-up" /></a>
          </div>
          {/* Back To Top Button End */}
          {/* ==== Plugins Bundle ==== */}
          {/* ==== Main Script ==== */}
        </div>
      );
    }
  });
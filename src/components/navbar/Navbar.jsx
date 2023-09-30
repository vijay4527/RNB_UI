import React from "react";
import styles from "./navbar.module.css";
import 'bootstrap/dist/css/bootstrap.css';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {

  return (
    <div>
      {/* <header class={`${styles.headerWrapper} ${styles.scrolled}`}>
      <nav class={`navbar navbar-expand-lg navbar-light`}>
        <div class={`container`}>
          <a href="#home" download="" class={`navbar-brand`}>
            <img src="/static/media/logo.f5f6e56242584e5133be.png" alt="logo" />
          </a>
          <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class={`navbar-toggler collapsed`}>
            <span class={`navbar-toggler-icon`}></span>
          </button>
          <div class={`navbar-collapse collapse`} id="basic-navbar-nav">
            <div class={`ms-auto navbar-nav`}>
              <div class={`${styles.subnav}`}>
                <div class={`${styles.subnavbtn}`}>
                  <a href="#home" data-rr-ui-event-key="#home" class={`nav_link`}>Home</a>
                </div>
              </div>
              <div class={`${styles.subnav}`}>
                <div class={`${styles.subnavbtn}`}>
                  <a href="#link" data-rr-ui-event-key="#link" class={`nav_link`}>About</a>
                </div>
              </div>
              <div class={`${styles.subnav}`}>
                <div class={`${styles.subnavbtn}`}>
                  <a href="#link" data-rr-ui-event-key="#link" class={`nav_link`}>Occasional Cakes</a>
                </div>
                <div  class={`${styles.subnav_content} ${styles.subnavChild-1}`}>
                  <ul  class={`${styles.submenu_list} ${styles.odd}`}>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Wedding Day</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Birthday Bash Cake</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Dazzling Collection</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <ul class={`${styles.submenu_list} ${styles.even}`}>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/vanilla-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Customised Cakes</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Festive Season</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Fathers day</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div class={`${styles.submenu_common}`}>
                    <a  class={`${styles.img_link}`} href="/chocolate-cakes">
                      <div  class={`${styles.submenu_image_content}`}>
                        <img src="https://media.bakingo.com/menuimage/snicker-chocolate-cake.jpg" alt="Chocolate Cakes"  class={`${styles.submenu_image_content_inner}`} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class={`${styles.subnav}`}>
                <div class={`${styles.subnavbtn}`}>
                  <a href="#link" data-rr-ui-event-key="#link" class={`${styles.nav_link}`}>Our Products</a>
                </div>
                <div  class={`${styles.subnav_content} ${styles.subnavChild-1}`}>
                  <ul  class={`${styles.submenu_list} ${styles.odd}`}>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Cakes</span>
                        </a>
                        <ul class="subnav-submenu_list">
                          <li>
                            <div class={`${styles.category_sub_title}`}>
                              <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                                <span class={`${styles.m-0} ${styles.sub_label}`}>Ready Regulars </span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class={`${styles.category_sub_title}`}>
                              <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                                <span class={`${styles.m-0} ${styles.sub_label}`}>Sinful Collections</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class={`${styles.category_sub_title}`}>
                              <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                                <span class={`${styles.m-0} ${styles.sub_label}`}>Photo Cakes</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class={`${styles.category_sub_title}`}>
                              <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                                <span class={`${styles.m-0} ${styles.sub_label}`}>Signature Cakes</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class={`${styles.category_sub_title}`}>
                              <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                                <span class={`${styles.m-0} ${styles.sub_label}`}>Fancy Cakes </span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class={`${styles.category_sub_title}`}>
                              <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                                <span class={`${styles.m-0} ${styles.sub_label}`}>Sensational Cakes</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class={`${styles.category_sub_title}`}>
                              <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                                <span class={`${styles.m-0} ${styles.sub_label}`}>Cake of The Month</span>
                              </a>
                            </div>
                          </li>
                          <li class="blink">
                            <div class={`${styles.category_sub_title}`}>
                              <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                                <span class={`${styles.m-0} ${styles.sub_label}`}>Tall Wonder</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Biscuits</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Savoury</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Desserts</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Chocolates</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <ul class={`${styles.submenu_list} ${styles.even}`}>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Donuts</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/vanilla-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>WafersWafers</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Titbits</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Breads</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class={`${styles.category_sub_title}`}>
                        <a class={`${styles.category_sub_title}`} href="/mango-cakes">
                          <span class={`${styles.m-0} ${styles.sub_label}`}>Tea Time Cakes</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div class={`${styles.submenu_common}`}>
                    <a  class={`${styles.img_link}`} href="/mango-cakes">
                      <div  class={`${styles.submenu_image_content}`}>
                        <img src="https://media.bakingo.com/mango-cakes.jpg" alt="Mango Cakes"  class={`${styles.submenu_image_content_inner}`} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class={`${styles.subnav}`}>
                <div class={`${styles.subnavbtn}`}>
                  <a href="#link" data-rr-ui-event-key="#link" class={`${styles.nav_link}`}>Get Franchise</a>
                </div>
              </div>
              <div class={`${styles.subnav}`}>
                <div class={`${styles.subnavbtn}`}>
                  <a href="#link" data-rr-ui-event-key="#link" class={`${styles.nav_link}`}>
                    <span  class={`${styles.count}`}>0</span>
                    <svg class="stroke" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                      <path stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 4 5 8v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8l-3-4H8ZM5 8h18"></path>
                      <path stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 12a4 4 0 1 1-8 0"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class={`${styles.subnav}`}>
                <div class={`${styles.subnavbtn}`}>
                  <a href="#link" data-rr-ui-event-key="#link" class={`${styles.nav_link}`}>
                    <span  class={`${styles.count}`}>0</span>
                    <svg  class={`${styles.stroke_fill}`} xmlns="http://www.w3.org/2000/svg" width="27" height="26" fill="none" viewBox="0 0 27 26">
                      <path fill="#333" stroke="#333" stroke-width=".3" d="M23.024 3.015C21.71 1.629 19.963.865 18.107.865c-1.714 0-3.333.649-4.606 1.836C12.226 1.514 10.608.865 8.894.865c-1.857 0-3.603.764-4.918 2.15-2.701 2.853-2.701 7.493 0 10.346l7.014 7.41a3.438 3.438 0 0 0 2.505 1.094c.95 0 1.836-.39 2.504-1.094 0 0 6.946-7.333 7.015-7.41 2.711-2.853 2.711-7.493.01-10.346Zm-1.013 9.318-7.015 7.41a2.053 2.053 0 0 1-1.496.655c-.563 0-1.098-.231-1.496-.655 0 0-6.951-7.339-7.015-7.41-2.165-2.287-2.165-6.009 0-8.296 1.045-1.105 2.43-1.71 3.91-1.71 1.476 0 2.866.61 3.911 1.71.053.055.106.121.165.187.286.308.705.325 1.06 0 .07-.06.112-.126.165-.187 1.046-1.105 2.43-1.71 3.911-1.71 1.475 0 2.865.61 3.91 1.71 2.155 2.293 2.155 6.009-.01 8.296Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class={`${styles.subnav}`}>
                <div class={`${styles.subnavbtn}`}>
                  <a href="#link" data-rr-ui-event-key="#link" class={`${styles.nav_link}`}>
                    <svg class="stroke" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                      <path stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M22 23v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2M14 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                    </svg>Sign Up </a>
                </div>
              </div>
              <div class={`${styles.subnav}`}>
                <div class={`${styles.subnavbtn}`}>
                  <a href="#link" data-rr-ui-event-key="#link" class={`${styles.nav_link}`}>
                    <svg class="fill" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </svg>City </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header> */}
    </div>
  );
};

export default Navbar;

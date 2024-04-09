const headerMenu = {
  list: [
    {
      text: '<li><a id="home">Home</a></li>',
    },
    {
      text: "<li><a>About</a></li>",
    },
    {
      text: "<li><a>Services</a></li>",
    },
    {
      text: "<li><a>Blog</a></li>",
    },
    {
      text: "<li><a>Contacts</a></li>",
    },
    {
      text: "<li><a class='btn' id='sign-in' href='#'>Sign In</a></li>",
    },
  ],
};

const footerMenu = {
  col1: [
    {
      text: "<li>Quick Links</li>",
    },
    {
      text: "<li><a ref='#'>Services</a></li>",
    },
    {
      text: "<li><a href='#'>Contact</a></li>",
    },
    {
      text: "<li><a href='#'>Blog</a></li>",
    },
  ],
  col2: [
    {
      text: "<li>Resources</li>",
    },
    {
      text: "<li><a href='#'>Art Design</a></li>",
    },
    {
      text: "<li><a href='#'>Computer</a></li>",
    },
    {
      text: "<li><a href='#'>IT News</a></li>",
    },
    {
      text: "<li><a href='#'>Networking</a></li>",
    },
    {
      text: "<li><a href='#'>Web Security</a></li>",
    },
  ],
  col3: [
    {
      text: "<li>Contact Us</li>",
    },
    {
      text: "<li><p><span>Address: </span> Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</p></li>",
    },
    {
      text: "<li><p><span>Phone: </span>+99 (0) 101 0000 888</p></li>",
    },
    {
      text: "<li><p><span>Email: </span>info@yourdomain.com</p></li>",
    },
  ],
};
const socials = {
  logos: [
    {
      text: '<li><a href=""><i class="fa-brands fa-instagram"></i></a></li>',
    },
    {
      text: '<li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>',
    },
    {
      text: '<li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>',
    },
    {
      text: '<li><a href=""><i class="fa-brands fa-twitter"></i></a></li>',
    },
  ],
};
export default { headerMenu, footerMenu, socials };

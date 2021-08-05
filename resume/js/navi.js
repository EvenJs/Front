const menuHome = document.getElementById('menuHome');
const menuResume = document.getElementById('menuResume');
const menuServices = document.getElementById('menuServices');
const menuBlog = document.getElementById('menuBlog');
const menuContact = document.getElementById('menuContact');

const homePage = document.getElementById('homePage');
const resumePage = document.getElementById('resumePage');
const servicesPage = document.getElementById('servicesPage');
const blogPage = document.getElementById('blogPage');
const contactPage = document.getElementById('contactPage');

// const classNameChange = (menuItem) => {
//   const getCorrespondPage = (menuItem) => ({
//     menuHome: homePage,
//     menuResume: resumePage,
//     menuServices: servicesPage,
//     menuBlog: blogPage,
//     menuContact: contactPage,
//   }[menuItem]);
//   const pageList = [homePage, resumePage, servicesPage, blogPage, contactPage];
  
//   buttonList.map((button) => {
//     console.log(111, button);
//     const currentPage = getCorrespondPage(menuItem);
//     const newPageList = pageList.filter((page)=> page !== currentPage);
//     console.log(222, currentPage);
//     currentPage.classList.remove('hidden');
//     newPageList.map((newPage) => newPage.classList.add('hidden'));
//   })
// };


// const buttonList = [menuHome, menuResume, menuServices, menuBlog, menuContact];
// buttonList.map((button) => button.addEventListener('click', () => classNameChange(button)));

menuHome.addEventListener('click', function(){
  homePage.classList.remove('hidden');
  menuHome.classList.add('active')
  menuResume.classList.remove('active');
  menuServices.classList.remove('active');
  menuBlog.classList.remove('active');
  menuContact.classList.remove('active');
  resumePage.classList.add('hidden');
  servicesPage.classList.add('hidden');
  blogPage.classList.add('hidden');
  contactPage.classList.add('hidden');
})

menuResume.addEventListener('click', function(){
  resumePage.classList.remove('hidden');
  homePage.classList.add('hidden');
  servicesPage.classList.add('hidden');
  blogPage.classList.add('hidden');
  contactPage.classList.add('hidden');
  menuResume.classList.add('active');
  menuHome.classList.remove('active');
  menuServices.classList.remove('active');
  menuBlog.classList.remove('active');
  menuContact.classList.remove('active');
})

menuServices.addEventListener('click', function(){
  servicesPage.classList.remove('hidden');
  resumePage.classList.add('hidden');
  homePage.classList.add('hidden');
  blogPage.classList.add('hidden');
  contactPage.classList.add('hidden');
  menuServices.classList.add('active');
  menuHome.classList.remove('active');
  menuBlog.classList.remove('active');
  menuResume.classList.remove('active');
  menuContact.classList.remove('active');
})

menuBlog.addEventListener('click', function(){
  blogPage.classList.remove('hidden');
  resumePage.classList.add('hidden');
  servicesPage.classList.add('hidden');
  homePage.classList.add('hidden');
  contactPage.classList.add('hidden');
  menuBlog.classList.add('active');
  menuHome.classList.remove('active');
  menuServices.classList.remove('active');
  menuResume.classList.remove('active');
  menuContact.classList.remove('active');
})

menuContact.addEventListener('click', function(){
  contactPage.classList.remove('hidden');
  resumePage.classList.add('hidden');
  servicesPage.classList.add('hidden');
  blogPage.classList.add('hidden');
  homePage.classList.add('hidden');
  menuContact.classList.add('active');
  menuHome.classList.remove('active');
  menuServices.classList.remove('active');
  menuResume.classList.remove('active');
  menuBlog.classList.remove('active');
})
 



  $(function(){
	var navbar = $('.navbar');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});

var waypoints = $('#handler-first').waypoint(function(direction) {
  const element = document.querySelector('.js--wp-1');
element.classList.add('animate__animated', 'animate__pulse','animate__fast' );
  
 
}, {
  offset: '80%'
})
// var waypoints = $('#handler-second').waypoint(function(direction) {
//   const element = document.querySelector('.js--wp-2');
// element.classList.add('animate__animated', 'animate__bounceOut','animate__slow' );
  
 
// }, {
//   offset: '80%'
// })
// var waypoints = $('#handler-third').waypoint(function(direction) {
//   const element = document.querySelector('.js--wp-3');
// element.classList.add('animate__animated', 'animate__bounceIn','animate__slow' );
  
 
// }, {
//   offset: '80%'
// })
    // $('.js--wp-1').waypoint(function(direction){
    //     $('.js--wp-1').addClass('animated fadeIn')
    //     console.log("hey")
    // },{
    //     offset:'50%'
    // })
});




// element.addEventListener('animationend', () => {
//   // do something
// });
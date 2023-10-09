


// gsap.to (".nav",{
//     backgroundColor : "#000",
//     height: "110px",
//     duration : 0.5,
//     ScrollTrigger:{
//         trigger:".nav",
//                start:"top -10%",
//               markers:true,
//             end:"top -11%",
//             scroller: "body",
//             scrub: 1
            
//     }
// })
var cur= document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets){
   cur.style.left= dets.x+"px" 
   cur.style.top= dets.y+"px" 
})
var cursor= document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
   cursor.style.left= dets.x-150+"px" 
   cursor.style.top= dets.y-150+"px" 
})

var tl1= gsap.timeline({
  scrollTrigger:{
      trigger:".nav",
      start:"top -10%",
     //markers:true,
    
    scroller: "body",
    // pin:true,
     // end:"+=" + (window.innerHeight * 2),
      end:" top -11%",
      scrub: 1
}
});
tl1.to(".nav",{
    backgroundColor : "#000",
         height: "90px",
         duration : 0.5,
         
      }
    )
  
    var tl2= gsap.timeline({
        scrollTrigger:{
            trigger:"#main",
            start:"top -40%",
          //  markers:true,
          
          scroller: "body",
          // pin:true,
           // end:"+=" + (window.innerHeight * 2),
            end:" top -100%",
            scrub: 2
      }
      });
      tl2.to("#main",{
          backgroundColor : "#000",
            
        
               
            }
          )

          var t3= gsap.timeline({
            scrollTrigger:{
                trigger:"#page1",
                start:"top -10%",
              //  markers:true,
              
              scroller: "body",
               pin:true,
               // end:"+=" + (window.innerHeight * 2),
               // end:" top -100%",
                scrub: 2
          }
          });
          gsap.set(".a",{y:350,opacity:0})
          
          t3.to(".a",{
               opacity:1,
                y:50,
               stagger:.2,
               ease:"power1.out"
                   
                }
              )
    
 
              var t4= gsap.timeline({
                scrollTrigger:{
                    trigger:"#page2",
                    start:"top 0%",
                  //  markers:true,
                  
                  scroller: "body",
                   pin:true,
                   // end:"+=" + (window.innerHeight * 2),
                   // end:" top -100%",
                    scrub: 2
              }
              });
              gsap.set(".b",{y:350,opacity:0})
              
              t4.to(".b",{
                   opacity:1,
                    y:0,
                   stagger:.2,
                   ease:"power1.out"
                       
                    }
                  )
        
                  var t5= gsap.timeline({
                    scrollTrigger:{
                        trigger:"#page3",
                        start:"top 0%",
                      //  markers:true,
                      
                      scroller: "body",
                       pin:true,
                       // end:"+=" + (window.innerHeight * 2),
                       // end:" top -100%",
                        scrub: 2
                  }
                  });
                  gsap.set(".c",{opacity:0})
                  
                  t5.to(".c",{
                       opacity:1,
                        
                       stagger:.2,
                       ease:"power1.out"
                           
                        }
                      )
            
                      var t6= gsap.timeline({
                        scrollTrigger:{
                            trigger:"#page4",
                            start:"top 0%",
                          //  markers:true,
                          
                          scroller: "body",
                           pin:true,
                           // end:"+=" + (window.innerHeight * 2),
                           // end:" top -100%",
                            scrub: 2
                      }
                      });
                      gsap.set(".d",{y:350,opacity:0})
                      
                      t6.to(".d",{
                           opacity:1,
                            y:-50,
                           stagger:.2,
                           ease:"power1.out"
                               
                            }
                          )
                
                          var t7= gsap.timeline({
                            scrollTrigger:{
                                trigger:"#page6",
                                start:"top 0%",
                              //  markers:true,
                              
                              scroller: "body",
                               pin:true,
                               // end:"+=" + (window.innerHeight * 2),
                               // end:" top -100%",
                                scrub: 2
                          }
                          });
                          gsap.set(".e",{y:100,opacity:0})
                          gsap.set(".f",{y:100,opacity:0})
                          
                          t7.to(".e",{
                               opacity:1,
                                y:-10,
                               stagger:.2,
                               ease:"power1.out"
                                   
                                }
                              )
                              t7.to(".f",{
                                opacity:1,
                                 y:-10,
                                 rotate:-360,
                                stagger:.2,
                                ease:"power1.out"
                                    
                                 }
                               )
                     
            
        
    
         
     
    
    
     
 


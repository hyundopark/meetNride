import React from "react";
import { Carousel } from "react-bootstrap";

class Test extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            width={900}
            height={500}
            alt="900x500"
            src="https://www.northernontario.travel/images/motorsports/motorcycletouring/wobbly_meetups/Motosocial-03.jpg"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900}
            height={500}
            alt="900x500"
            src="https://cdn.vox-cdn.com/thumbor/D-1Gq3kbdndMSfPqrc64mZUE9fg=/0x0:1224x816/1200x800/filters:focal(522x209:716x403)/cdn.vox-cdn.com/uploads/chorus_image/image/52409067/coffee.0.jpeg"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900}
            height={500}
            alt="900x500"
            src="https://www.pixelstalk.net/wp-content/uploads/images1/Harley-Davidson-wallpaper-FXDF-Fat-Bob.jpg"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default Test;
//       <Carousel
//         activeIndex={index}
//         direction={direction}
//         onSelect={this.handleSelect}
//       >
//         <Carousel.Item>
//           <img
//             width={900}
//             height={500}
//             alt="900x500"
//             src="https://cdn.vox-cdn.com/thumbor/D-1Gq3kbdndMSfPqrc64mZUE9fg=/0x0:1224x816/1200x800/filters:focal(522x209:716x403)/cdn.vox-cdn.com/uploads/chorus_image/image/52409067/coffee.0.jpeg"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             width={900}
//             height={500}
//             alt="900x500"
//             src="https://www.northernontario.travel/images/motorsports/motorcycletouring/wobbly_meetups/Motosocial-03.jpg"
//           />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             width={900}
//             height={500}
//             alt="900x500"
//             src="https://www.pixelstalk.net/wp-content/uploads/images1/Harley-Davidson-wallpaper-FXDF-Fat-Bob.jpg"
//           />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
// }

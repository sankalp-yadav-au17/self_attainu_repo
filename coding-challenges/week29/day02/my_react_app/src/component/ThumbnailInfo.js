import { Component } from "react";

class ThumbnailInfo extends Component{

    constructor(){
        super()
    }

    render(){
        return(
          <div className='row'>
            <div className='col-2'>
              <img className='img-fluid rounded-circle' src='https://yt3.ggpht.com/ytc/AKedOLQKxx6nR-pMU1buNOyraqB4c7oVg45OPWzNXNbQ=s68-c-k-c0x00ffffff-no-rj'/>
            </div>
            <div className='col-10'>
              <h6>The Only Badass Anime Moments You Need To Watch #3 (with names +...</h6>
              <div className='text-muted'>
                <h6>weeb verified</h6>
                <h6>199k views • 1 month ago</h6>
              </div>
                
            </div>
          </div>
        )
    }
}
// SankalpYadav©2021
export default ThumbnailInfo
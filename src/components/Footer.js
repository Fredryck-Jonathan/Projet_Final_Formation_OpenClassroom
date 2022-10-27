import '../styles/Footer_styles.css'



function Footer() {

    return (
        <div className='footer'>
            
            <div className='logo'>
       
            <img id="logo-footer" src={require("../assets/logo-footer.png")} alt="logo"/>

            </div>
            <h4 className='copyright_footer'>© 2020 Kasa. All rights reserved</h4>
        </div>
    )

}

export default Footer
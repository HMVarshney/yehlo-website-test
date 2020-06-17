import React from 'react';

const GetApp = () => {
    return ( 
        <>
        <section class="listghor_login section_padding wow fadeInUp">
			<div id='hm' class="container">
				<div class="listghor_wrapper_form">
					<div class="wrapper_form_left bg_image" style={{backgroundImage: "url(assets/images/login_bg.jpg)"}}>
						<div class="content_text">
							<h2>Find  Great Place <br />In Your City</h2>
                            <h3 className='mt-5' style={{color:'white'}}>YEHLO</h3>
                        </div>
					</div>
					<div class="wrapper_form_right">
						<div class="form_title">
							<h2>Our full features are available on the Yehlo App</h2>
                            <p>Download the app now!</p>
						</div>
						<div class="appDownloadSection">
							<img width='50%' src='assets/images/PlayStoreBadge.png' alt='PlayStore'/>
                            <img width='40%' src='assets/images/AppleStoreBadge.svg' alt='Apple Store'/>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
     );
}
 
export default GetApp;
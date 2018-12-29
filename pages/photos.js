import Layout from '../components/Layout.js';

export default () => (
    <Layout> 
        <div id="fh5co-page">
            <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
            <aside id="fh5co-aside" role="complementary" className="border js-fullheight">

                <h1 id="fh5co-logo"><a href="index.html">
                    <img src="../static/logo-colored.png" alt=""/>
                    </a>
                </h1>
                <nav id="fh5co-main-menu" role="navigation">
                    <ul>
                        <li className="fh5co-active"><a href="#">Home</a></li>
                        <li><a href="#">Photos</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div className="fh5co-footer">
                    <p>
                        <small>&copy; 2018 PeraSports, UOP. All Rights Reserved.
                            <span>Designed by <a href= "http://www.ce.pdn.ac.lk/" target="_blank">Engineering Faculty, UOP</a> </span>
                            <span>Images: <a href="https://www.facebook.com/perabeatspage/" target="_blank">Pera Beats</a></span>
                        </small>
                    </p>
                    <ul>
                        <li><a href="#"><i className="icon-facebook"></i></a></li>
                        <li><a href="#"><i className="icon-twitter"></i></a></li>
                        <li><a href="#"><i className="icon-instagram"></i></a></li>
                        <li><a href="#"><i className="icon-linkedin"></i></a></li>
                    </ul>
                </div>

            </aside>

            <div id="fh5co-main">
                <div className="fh5co-gallery">

                    <a className="gallery-item" href="#">
                        <img src="../static/work_1.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Cricket</h2>
                            <span>14 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_2.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Hockey</h2>
                            <span>7 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_3.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Elle</h2>
                            <span>22 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_4.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Base Ball</h2>
                            <span>28 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_5.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Swimming</h2>
                            <span>17 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_6.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Athletics</h2>
                            <span>34 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_7.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Table Tennis</h2>
                            <span>10 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_8.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Karate</h2>
                            <span>19 Photos</span>
                        </span>
                    </a>

                    <a className="gallery-item" href="#">
                        <img src="../static/work_9.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Taekwondo</h2>
                            <span>42 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_10.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Carrom</h2>
                            <span>10 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_11.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Power Lifting</h2>
                            <span>76 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_12.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Basket Ball</h2>
                            <span>55 Photos</span>
                        </span>
                    </a>

                    <a className="gallery-item" href="#">
                        <img src="../static/work_13.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Rugby</h2>
                            <span>47 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_14.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Foot Ball</h2>
                            <span>10 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_15.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Chess</h2>
                            <span>17 Photos</span>
                        </span>
                    </a>
                    <a className="gallery-item" href="#">
                        <img src="../static/work_16.jpg" alt=""/>
                        <span className="overlay">
                            <h2>Volley Ball</h2>
                            <span>22 Photos</span>
                        </span>
                    </a>
                </div>

                <div className="fh5co-testimonial" >
                    <div className="fh5co-narrow-content">
                        <div className="owl-carousel-fullwidth animate-box" data-animate-effect="fadeInLeft">
                        <div className="item">
                            <figure>
                                <img src="../static/testimonial_person2.jpg" alt=""/>
                            </figure>
                            <p className="text-center quote">&ldquo;You can’t put a limit on anything. The more you dream, the farther you get.&rdquo; <cite className="author">&mdash; Michael Phelps</cite></p>
                        </div>
                        <div className="item">
                            <figure>
                                <img src="../static/testimonial_person3.jpg" alt=""/>
                            </figure>
                            <p className="text-center quote">&ldquo;Strength does not come from winning. Your struggles develop your strengths.&rdquo;<cite className="author">&mdash; Arnold Schwarzenegger</cite></p>
                        </div>
                        <div className="item">
                            <figure>
                                <img src="../static/testimonial_person4.jpg" alt=""/>
                            </figure>
                            <p className="text-center quote">&ldquo;The more difficult the victory, the greater the happiness in winning.&rdquo;<cite className="author">&mdash; Pele</cite></p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="fh5co-counters"  style={{'backgroundImage': 'url(../static/hero.jpg)'}} data-stellar-background-ratio="0.5" id="counter-animate">
                    <div className="fh5co-narrow-content animate-box">
                        <div className="row" >
                            <div className="col-md-4 text-center">
                                <span className="fh5co-counter js-counter" data-from="0" data-to="67" data-speed="5000" data-refresh-interval="50"></span>
                                <span className="fh5co-counter-label">Gymnasium</span>
                            </div>
                            <div className="col-md-4 text-center">
                                <span className="fh5co-counter js-counter" data-from="0" data-to="130" data-speed="5000" data-refresh-interval="50"></span>
                                <span className="fh5co-counter-label">University of Peradeniya</span>
                            </div>
                            <div className="col-md-4 text-center">
                                <span className="fh5co-counter js-counter" data-from="0" data-to="27232" data-speed="5000" data-refresh-interval="50"></span>
                                <span className="fh5co-counter-label">Captured By: Pera Beats</span>
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className="fh5co-narrow-content">
                    <div className="row">
                        <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                            <h1 className="fh5co-heading-colored">Get in touch</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <p className="fh5co-lead">You don’t make a photograph just with a camera. You bring to the act of photography all the pictures you have seen, the books you have read, the music you have heard, the people you have loved.</p>
                            <p><a href="#" className="btn btn-primary btn-outline">Find More ...</a></p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>

        <style jsx>{`
            #fh5co-page {
                width: 100%;
                overflow: hidden;
                position: relative;
            }

            .fh5co-gallery {
                position: relative;
                margin-bottom: 7em;
                float: left;
                width: 100%;
            }
            .fh5co-gallery .gallery-item {
                width: 25%;
                position: relative;
                overflow: hidden;
                display: block;
                float: left;
                z-index: 110;
            }
            .fh5co-gallery .gallery-item img {
                position: relative;
                max-width: 100%;
                -webkit-transform: scale(1.2);
                -moz-transform: scale(1.2);
                -ms-transform: scale(1.2);
                -o-transform: scale(1.2);
                transform: scale(1.2);
                -webkit-transition: 0.9s;
                -o-transition: 0.9s;
                transition: 0.9s;
            }
            @media screen and (max-width: 1200px) {
                .fh5co-gallery .gallery-item {
                width: 33.3333%;
                }
            }
            @media screen and (max-width: 768px) {
                .fh5co-gallery .gallery-item {
                width: 50%;
                }
            }
            @media screen and (max-width: 480px) {
                .fh5co-gallery .gallery-item {
                width: 100%;
                }
            }
            .fh5co-gallery .gallery-item .overlay {
                position: absolute;
                right: 0;
                left: 0;
                bottom: 0;
                top: 0;
                z-index: 11;
                vertical-align: middle;
                padding-top: 30%;
                visibility: hidden;
                opacity: 0;
                -webkit-transition: 0.5s;
                -o-transition: 0.5s;
                transition: 0.5s;
            }
            .fh5co-gallery .gallery-item .overlay h2, .fh5co-gallery .gallery-item .overlay span {
                position: relative;
                z-index: 12;
                margin-bottom: 0;
                text-align: center;
                display: block;
                -webkit-transition: 0.3s;
                -o-transition: 0.3s;
                transition: 0.3s;
            }
            .fh5co-gallery .gallery-item .overlay h2 {
                color: #fff;
                font-size: 26px;
                font-weight: 300;
                margin-bottom: 10px;
                bottom: -15px;
            }
            @media screen and (max-width: 768px) {
                .fh5co-gallery .gallery-item .overlay h2 {
                font-size: 18px;
                }
            }
            .fh5co-gallery .gallery-item .overlay span {
                color: #7ac143;
                color: rgba(255, 255, 255, 0.7);
                font-size: 11px;
                letter-spacing: 2px;
                text-transform: uppercase;
                font-weight: 400;
                bottom: -5px;
                visibility: hidden;
                opacity: 0;
            }
            .fh5co-gallery .gallery-item .overlay:before {
                content: '';
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.5);
            }
            .fh5co-gallery .gallery-item:hover img {
                -webkit-transform: scale(1);
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
            }
            .fh5co-gallery .gallery-item:hover .overlay {
                visibility: visible;
                opacity: 1;
            }
            .fh5co-gallery .gallery-item:hover .overlay:before {
                content: '';
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.5);
            }
            .fh5co-gallery .gallery-item:hover .overlay h2 {
                bottom: 0px;
            }
            .fh5co-gallery .gallery-item:hover .overlay span {
                visibility: visible;
                opacity: 1;
                bottom: 0px;
            }                        
            #fh5co-aside #fh5co-main-menu ul {
                text-align: center;
                margin: 0;
                padding: 0;
            }
            @media screen and (max-width: 768px) {
                #fh5co-aside #fh5co-main-menu ul {
                margin: 0 0 2em 0;
                }
            }
            #fh5co-aside #fh5co-main-menu ul li {
                margin: 0 0 10px 0;
                padding: 0;
                list-style: none;
            }
            #fh5co-aside #fh5co-main-menu ul li a {
                color: rgba(0, 0, 0, 0.5);
                text-decoration: none;
                letter-spacing: .1em;
                text-transform: uppercase;
                font-size: 15px;
                font-weight: 300;
                position: relative;
                -webkit-transition: 0.3s;
                -o-transition: 0.3s;
                transition: 0.3s;
                padding: 10px 10px;
                letter-spacing: .2em;
                font-family: "Merriweather", Times, serif;
            }
            #fh5co-aside #fh5co-main-menu ul li a:after {
                content: "";
                position: absolute;
                height: 2px;
                bottom: 7px;
                left: 10px;
                right: 10px;
                background-color: #7ac143;
                visibility: hidden;
                -webkit-transform: scaleX(0);
                -moz-transform: scaleX(0);
                -ms-transform: scaleX(0);
                -o-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                -ms-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            #fh5co-aside #fh5co-main-menu ul li a:hover {
                text-decoration: none;
                color: black;
            }
            #fh5co-aside #fh5co-main-menu ul li a:hover:after {
                visibility: visible;
                -webkit-transform: scaleX(1);
                -moz-transform: scaleX(1);
                -ms-transform: scaleX(1);
                -o-transform: scaleX(1);
                transform: scaleX(1);
            }
            #fh5co-aside #fh5co-main-menu ul li.fh5co-active a {
                color: black;
            }
            #fh5co-aside #fh5co-main-menu ul li.fh5co-active a:after {
                visibility: visible;
                -webkit-transform: scaleX(1);
                -moz-transform: scaleX(1);
                -ms-transform: scaleX(1);
                -o-transform: scaleX(1);
                transform: scaleX(1);
            }
        
            #fh5co-main {
                width: 85%;
                float: right;
                -webkit-transition: 0.5s;
                -o-transition: 0.5s;
                transition: 0.5s;
            }
            @media screen and (max-width: 1200px) {
                #fh5co-main {
                width: 70%;
                }
            }
            @media screen and (max-width: 768px) {
                #fh5co-main {
                width: 100%;
                }
            }
            #fh5co-main .fh5co-narrow-content {
                position: relative;
                width: 80%;
                margin: 0 auto;
                padding: 4em 0;
            }
            @media screen and (max-width: 768px) {
                #fh5co-main .fh5co-narrow-content {
                width: 100%;
                padding: 3.5em 1em;
                }
            }
                        
            body.offcanvas #fh5co-main, body.offcanvas .fh5co-nav-toggle {
                top: 0;
                -moz-transform: translateX(270px);
                -webkit-transform: translateX(270px);
                -ms-transform: translateX(270px);
                -o-transform: translateX(270px);
                transform: translateX(270px);
            }
                        
            .fh5co-nav-toggle {
                cursor: pointer;
                text-decoration: none;
            }
            .fh5co-nav-toggle.active i::before, .fh5co-nav-toggle.active i::after {
                background: #000;
            }
            .fh5co-nav-toggle.dark.active i::before, .fh5co-nav-toggle.dark.active i::after {
                background: #000;
            }
            .fh5co-nav-toggle:hover, .fh5co-nav-toggle:focus, .fh5co-nav-toggle:active {
                outline: none;
                border-bottom: none !important;
            }
            .fh5co-nav-toggle i {
                position: relative;
                display: -moz-inline-stack;
                display: inline-block;
                zoom: 1;
                *display: inline;
                width: 30px;
                height: 2px;
                color: #000;
                font: bold 14px/.4 Helvetica;
                text-transform: uppercase;
                text-indent: -55px;
                background: #000;
                transition: all .2s ease-out;
            }
            .fh5co-nav-toggle i::before, .fh5co-nav-toggle i::after {
                content: '';
                width: 30px;
                height: 2px;
                background: #000;
                position: absolute;
                left: 0;
                -webkit-transition: 0.2s;
                -o-transition: 0.2s;
                transition: 0.2s;
            }
            .fh5co-nav-toggle.dark i {
                position: relative;
                color: #000;
                background: #000;
                transition: all .2s ease-out;
            }
            .fh5co-nav-toggle.dark i::before, .fh5co-nav-toggle.dark i::after {
                background: #000;
                -webkit-transition: 0.2s;
                -o-transition: 0.2s;
                transition: 0.2s;
            }
            
            .fh5co-nav-toggle i::before {
                top: -7px;
            }
            
            .fh5co-nav-toggle i::after {
                bottom: -7px;
            }
            
            .fh5co-nav-toggle:hover i::before {
                top: -10px;
            }
            
            .fh5co-nav-toggle:hover i::after {
                bottom: -10px;
            }
            
            .fh5co-nav-toggle.active i {
                background: transparent;
            }
            
            .fh5co-nav-toggle.active i::before {
                top: 0;
                -webkit-transform: rotateZ(45deg);
                -moz-transform: rotateZ(45deg);
                -ms-transform: rotateZ(45deg);
                -o-transform: rotateZ(45deg);
                transform: rotateZ(45deg);
            }
            
            .fh5co-nav-toggle.active i::after {
                bottom: 0;
                -webkit-transform: rotateZ(-45deg);
                -moz-transform: rotateZ(-45deg);
                -ms-transform: rotateZ(-45deg);
                -o-transform: rotateZ(-45deg);
                transform: rotateZ(-45deg);
            }
            
            .fh5co-nav-toggle {
                position: fixed;
                left: 0;
                top: 0px;
                z-index: 9999;
                cursor: pointer;
                opacity: 1;
                visibility: hidden;
                padding: 20px;
                -webkit-transition: 0.5s;
                -o-transition: 0.5s;
                transition: 0.5s;
            }
            @media screen and (max-width: 768px) {
                .fh5co-nav-toggle {
                opacity: 1;
                visibility: visible;
                }
            }
                                   
            #fh5co-aside {
                padding-top: 40px;
                padding-bottom: 40px;
                width: 15%;
                position: fixed;
                bottom: 0;
                top: 0;
                left: 0;
                overflow-y: scroll;
                background: #e6e6e6;
                z-index: 1001;
                -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
                -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
                -ms-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
                -o-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
                box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
                -webkit-transition: 0.5s;
                -o-transition: 0.5s;
                transition: 0.5s;
            }
            #fh5co-aside.border {
                border-right: 1px solid #e6e6e6;
            }
            @media screen and (max-width: 1200px) {
                #fh5co-aside {
                width: 30%;
                }
            }
            @media screen and (max-width: 768px) {
                #fh5co-aside {
                width: 270px;
                -moz-transform: translateX(-270px);
                -webkit-transform: translateX(-270px);
                -ms-transform: translateX(-270px);
                -o-transform: translateX(-270px);
                transform: translateX(-270px);
                }
            }
            #fh5co-aside #fh5co-logo {
                text-align: center;
            }
            #fh5co-aside .fh5co-footer {
                position: absolute;
                bottom: 40px;
                font-size: 14px;
                text-align: center;
                width: 100%;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.6);
            }
            @media screen and (max-width: 768px) {
                #fh5co-aside .fh5co-footer {
                position: relative;
                bottom: 0;
                }
            }
            #fh5co-aside .fh5co-footer span {
                display: block;
            }
            #fh5co-aside .fh5co-footer ul {
                padding: 0;
                margin: 0;
                text-align: center;
            }
            #fh5co-aside .fh5co-footer ul li {
                padding: 0;
                margin: 0;
                display: inline;
                list-style: none;
            }
            #fh5co-aside .fh5co-footer ul li a {
                color: rgba(0, 0, 0, 0.7);
                padding: 4px;
            }
            #fh5co-aside .fh5co-footer ul li a:hover, #fh5co-aside .fh5co-footer ul li a:active, #fh5co-aside .fh5co-footer ul li a:focus {
                text-decoration: none;
                outline: none;
                color: #7ac143;
            }

            body.offcanvas #fh5co-aside {
                -moz-transform: translateX(0);
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                -o-transform: translateX(0);
                transform: translateX(0);
                width: 270px;
                background: #fff;
                z-index: 999;
                position: fixed;
            }

            .fh5co-testimonial {
                padding: 3em 0;
                background: #7ac143;
                position: relative;
            }
            @media screen and (max-width: 768px) {
                .fh5co-testimonial {
                padding: 3em 0;
                }
            }
            .fh5co-testimonial .item {
                color: white;
                padding-left: 3em;
                padding-right: 3em;
            }
            @media screen and (max-width: 768px) {
                .fh5co-testimonial .item {
                padding-left: 0em;
                padding-right: 0em;
                }
            }
            .fh5co-testimonial .item figure {
                text-align: center;
            }
            .fh5co-testimonial .item figure img {
                max-width: inherit;
                width: 90px;
                margin: 0 auto;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                -ms-border-radius: 50%;
                border-radius: 50%;
            }
            .fh5co-testimonial .item p {
                font-size: 30px;
            }
            @media screen and (max-width: 768px) {
                .fh5co-testimonial .item p {
                font-size: 28px;
                }
            }
            @media screen and (max-width: 480px) {
                .fh5co-testimonial .item p {
                font-size: 20px;
                }
            }
            .fh5co-testimonial .item .author {
                font-size: 16px;
                display: block;
            }
          
            .row-bottom-padded-lg {
                padding-bottom: 7em;
            }
            @media screen and (max-width: 768px) {
                .row-bottom-padded-lg {
                padding-bottom: 1em;
                }
            }
            
            .row-bottom-padded-md {
                padding-bottom: 4em;
            }
            @media screen and (max-width: 768px) {
                .row-bottom-padded-md {
                padding-bottom: 1em;
                }
            }
            
            .row-bottom-padded-sm {
                padding-bottom: 1em;
            }
            @media screen and (max-width: 768px) {
                .row-bottom-padded-sm {
                padding-bottom: 1em;
                }
            }

            .fh5co-counters .fh5co-counter-label {
                color: #fff;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 13px;
                font-family: "Merriweather", Times, serif;
                letter-spacing: 5px;
                margin-bottom: 2em;
                display: block;
              }
                
            .fh5co-counters {
                padding: 1em 0;
                background: #e6e6e6;
                background-size: cover;
                background-attachment: fixed;
            }
            .fh5co-counters .fh5co-counter {
                font-size: 50px;
                display: block;
                color: #fff;
                font-family: "Roboto", Arial, sans-serif;
                width: 100%;
                font-weight: 700;
                margin-bottom: .5em;
            }                
            .fh5co-counter .fh5co-number {
                font-size: 100px;
                color: #7ac143;
                font-weight: 400;
                margin: 0;
                padding: 0;
                line-height: .7;
            }
            .fh5co-counter .fh5co-number.fh5co-left {
                float: left;
                width: 30%;
            }
            @media screen and (max-width: 768px) {
                .fh5co-counter .fh5co-number.fh5co-left {
                width: 100%;
                line-height: 1.2;
                }
            }
            .fh5co-counter .fh5co-text {
                float: right;
                text-align: left;
                width: 70%;
            }
            @media screen and (max-width: 768px) {
                .fh5co-counter .fh5co-text {
                width: 100%;
                text-align: center;
                }
            }
            .fh5co-counter .fh5co-text h3 {
                margin: 0;
                padding: 0;
                position: relative;
            }
            .fh5co-counter .fh5co-text h3.border-bottom:after {
                content: "";
                width: 50px;
            }

            .js .animate-box {
                opacity: 0;
              }
        
            .fh5co-heading-colored {
                color: blue;
            }

            .fh5co-lead {
                font-size: 24px;
                color: #00FF00;
                line-height: 1.5;
              }
                        
            .btn {
                margin-right: 4px;
                margin-bottom: 4px;
                font-family: "Roboto", Arial, sans-serif;
                font-size: 18px;
                font-weight: 400;
                -webkit-border-radius: 50px;
                -moz-border-radius: 50px;
                -ms-border-radius: 50px;
                border-radius: 50px;
                -webkit-transition: 0.5s;
                -o-transition: 0.5s;
                transition: 0.5s;
                padding: 8px 20px !important;
            }
            .btn.btn-sm {
                padding: 4px 15px !important;
            }
            .btn.btn-md {
                padding: 8px 20px !important;
            }
            .btn.btn-lg {
                padding: 18px 36px !important;
            }
            .btn:hover, .btn:active, .btn:focus {
                box-shadow: none !important;
                outline: none !important;
            }
            
            .btn-primary {
                background: #7ac143;
                color: #fff;
                border: 2px solid #7ac143;
            }
            .btn-primary:hover, .btn-primary:focus, .btn-primary:active {
                background: #88c756 !important;
                border-color: #88c756 !important;
            }
            .btn-primary.btn-outline {
                background: transparent;
                color: #7ac143;
                border: 2px solid #7ac143;
            }
            .btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {
                background: #7ac143;
                color: #fff;
            }
            
            .btn-success {
                background: #5cb85c;
                color: #fff;
                border: 2px solid #5cb85c;
            }
            .btn-success:hover, .btn-success:focus, .btn-success:active {
                background: #4cae4c !important;
                border-color: #4cae4c !important;
            }
            .btn-success.btn-outline {
                background: transparent;
                color: #5cb85c;
                border: 2px solid #5cb85c;
            }
            .btn-success.btn-outline:hover, .btn-success.btn-outline:focus, .btn-success.btn-outline:active {
                background: #5cb85c;
                color: #fff;
            }
            
            .btn-info {
                background: #5bc0de;
                color: #fff;
                border: 2px solid #5bc0de;
            }
            .btn-info:hover, .btn-info:focus, .btn-info:active {
                background: #46b8da !important;
                border-color: #46b8da !important;
            }
            .btn-info.btn-outline {
                background: transparent;
                color: #5bc0de;
                border: 2px solid #5bc0de;
            }
            .btn-info.btn-outline:hover, .btn-info.btn-outline:focus, .btn-info.btn-outline:active {
                background: #5bc0de;
                color: #fff;
            }
            
            .btn-warning {
                background: #f0ad4e;
                color: #fff;
                border: 2px solid #f0ad4e;
            }
            .btn-warning:hover, .btn-warning:focus, .btn-warning:active {
                background: #eea236 !important;
                border-color: #eea236 !important;
            }
            .btn-warning.btn-outline {
                background: transparent;
                color: #f0ad4e;
                border: 2px solid #f0ad4e;
            }
            .btn-warning.btn-outline:hover, .btn-warning.btn-outline:focus, .btn-warning.btn-outline:active {
                background: #f0ad4e;
                color: #fff;
            }
            
            .btn-danger {
                background: #d9534f;
                color: #fff;
                border: 2px solid #d9534f;
            }
            .btn-danger:hover, .btn-danger:focus, .btn-danger:active {
                background: #d43f3a !important;
                border-color: #d43f3a !important;
            }
            .btn-danger.btn-outline {
                background: transparent;
                color: #d9534f;
                border: 2px solid #d9534f;
            }
            .btn-danger.btn-outline:hover, .btn-danger.btn-outline:focus, .btn-danger.btn-outline:active {
                background: #d9534f;
                color: #fff;
            }
            
            .btn-outline {
                background: none;
                border: 2px solid gray;
                font-size: 16px;
                -webkit-transition: 0.3s;
                -o-transition: 0.3s;
                transition: 0.3s;
            }
            .btn-outline:hover, .btn-outline:focus, .btn-outline:active {
                box-shadow: none;
            }
  
        `}
        </style>
    </Layout>
)
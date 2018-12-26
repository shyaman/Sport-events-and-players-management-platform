import Link from 'next/link'


const Header = () => (
    <div>
        <div id="navigation">
            <div class="shell">
                {/* <div class="cl">&nbsp;</div> */}
                <ul>
                    <li><Link href="/news"><a>news &amp; events</a></Link></li>
                    <li><Link href="/photos"><a>photo gallery</a></Link></li>
                    <li><Link href="/sports"><a>sports</a></Link></li>
                    <li><Link href="/community"><a>community</a></Link></li>
                    <li><Link href="/shedules"><a>schedules</a></Link></li>
                </ul>
                {/* <div class="cl">&nbsp;</div> */}
            </div>
        </div>
        <style jsx>{`

            .cl { font-size: 0; line-height: 0; height: 0; clear: both; }

            .shell {margin: 0 auto; width: 930px;}
    
            #navigation {background: url("../static/nav.gif") repeat-x 0 0; height: 50px;}
            #navigation ul {float: right; list-style-type: none;}
            #navigation ul li {background: url("../static/nav-divider.gif") no-repeat right 0; float: left; display: inline; padding-left: 23px; padding-right: 19px;}
            #navigation ul li a {color: #676767; font-family: tahoma, sans-serif; font-size: 13px; text-transform: uppercase; display: block; height: 34px; float: left;}
            
            a img { border: 0; }
            a { color: #9fea00; text-decoration: none; }
            a:hover { text-decoration: underline; cursor: pointer;}
        `}
        </style>
    </div>

)

export default Header
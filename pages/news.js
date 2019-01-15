import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch'
import { Component } from "react";
import { isAuthenticated } from "../lib/auth";
import {addNews} from "../services/newsApi"
import Error from "../components/Error";

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
          };
    }

    static getInitialProps = async function (ctx) {
        const res = await fetch('http://localhost:3000/api/news')
        const data = await res.json()

        // console.log(`Show data fetched. Count: ${data.length}`)

        return {
            news: data,
            authenticated: isAuthenticated(ctx)
        }
    }

    render() {
        const { news ,authenticated } = this.props;
        const { error } = this.state;        
        return (
            <Layout authenticated={authenticated}>
                {error && <Error message={error} />}
                <div id="secwrapper">
                    <section>
                        {news.map((news) => (
                            <article key={news._id}>
                                <a href="#"><img src={`../static/${news.imageURL}`} alt="" /></a>
                                <h1>{news.name}</h1>
                                <p>{news.description}</p>
                                <a href="#" className="readmore">Read more</a>
                            </article>
                        ))}
                    </section>
                </div>
                {authenticated &&
                    <div className="form-style-5">
                        <form onSubmit={this.handleSubmit}>
                            <fieldset>
                                <legend><span className="number">1</span>Add a Event</legend>
                                <input type="text" name="title" placeholder="Title" />
                                <textarea name="description" placeholder="Description"></textarea>
                            </fieldset>
                            <input type="submit" value="Add" />
                        </form>
                    </div>
                }

                <style jsx>{` 
        
                
                .form-style-5{
                    max-width: 22%;
                    padding: 10px 20px;
                    background: #f4f7f8;
                    margin: 10px auto;
                    padding: 20px;
                    background: #f4f7f8;
                    border-radius: 8px;
                    font-family: Georgia, "Times New Roman", Times, serif;
                    float: right;
                }
                .form-style-5 fieldset{
                    border: none;
                }
                .form-style-5 legend {
                    font-size: 1.4em;
                    margin-bottom: 10px;
                }
    
                .form-style-5 input[type="text"],
                .form-style-5 input[type="date"],
                .form-style-5 input[type="datetime"],
                .form-style-5 input[type="email"],
                .form-style-5 input[type="number"],
                .form-style-5 input[type="search"],
                .form-style-5 input[type="time"],
                .form-style-5 input[type="url"],
                .form-style-5 textarea,
                .form-style-5 select {
                    font-family: Georgia, "Times New Roman", Times, serif;
                    background: rgba(255,255,255,.1);
                    border: none;
                    border-radius: 4px;
                    font-size: 15px;
                    margin: 0;
                    outline: 0;
                    padding: 10px;
                    width: 100%;
                    box-sizing: border-box; 
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box; 
                    background-color: #e8eeef;
                    color:#8a97a0;
                    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
                    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
                    margin-bottom: 30px;
                }
                .form-style-5 input[type="text"]:focus,
                .form-style-5 input[type="date"]:focus,
                .form-style-5 input[type="datetime"]:focus,
                .form-style-5 input[type="email"]:focus,
                .form-style-5 input[type="number"]:focus,
                .form-style-5 input[type="search"]:focus,
                .form-style-5 input[type="time"]:focus,
                .form-style-5 input[type="url"]:focus,
                .form-style-5 textarea:focus,
                .form-style-5 select:focus{
                    background: #d2d9dd;
                }
    
                .form-style-5 .number {
                    background: #1abc9c;
                    color: #fff;
                    height: 30px;
                    width: 30px;
                    display: inline-block;
                    font-size: 0.8em;
                    margin-right: 4px;
                    line-height: 30px;
                    text-align: center;
                    text-shadow: 0 1px 0 rgba(255,255,255,0.2);
                    border-radius: 15px 15px 15px 0px;
                }
                
                .form-style-5 input[type="submit"],
                .form-style-5 input[type="button"]
                {
                    position: relative;
                    display: block;
                    padding: 19px 39px 18px 39px;
                    color: #FFF;
                    margin: 0 auto;
                    background: #1abc9c;
                    font-size: 18px;
                    text-align: center;
                    font-style: normal;
                    width: 100%;
                    border: 1px solid #16a085;
                    border-width: 1px 1px 3px;
                    margin-bottom: 10px;
                }
                .form-style-5 input[type="submit"]:hover,
                .form-style-5 input[type="button"]:hover
                {
                    background: #109177;
                }
            

            footer{
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
                padding: 1rem;
                text-align: center;
            }
            img{
                border: none;
                height: auto; 
                width: auto; 
                max-width: 280px; 
                max-height: 300px;
            }

            body{
                font-family: SourceSansProLight, Verdana, Arial, sans-serif;
                font-size: 14px;
            }
            header h1, nav, nav li{
                display: inline-block;
            }
            header{
                background-color: white;
                height: 50px;
                width: 100%;
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                box-shadow: 0px 0px 10px rgba(0,0,0,.8);
                z-index: 100;
                border-bottom: 0px solid #C10021;
            }
            header h1 a{
                font-family: LeagueGothic, Verdana, Arial, sans-serif;
                color: black;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: normal;
                font-size: 28px;
                position:absolute;
                top:8px;
                left: 35px;
            }
            #version{
                color: white;
                font-size: 10px;
                position: relative;
                top: 12px;
                left: 122px;
            }
            nav{
                position: absolute;
                top: 32.8%;
                left: 12.5%;
            }
            nav li a{
                color: white;
                text-decoration: none;
                font-family: Verdana, Arial, sans-serif;
                font-size: 13px;
                margin-right: 12px;
                padding: 5px;
            }
            nav li a:hover{
                background-color: #383838;
                border-radius: 3px;
            }
            .current{
                background-color: #383838;
                border-radius: 3px;
            }
            #adbanner{
                margin-top: 50px;
                height: 124px;
                background-color: #dbdbdb;
                border-bottom: 1px solid #c3c3c3;
            }
            #ad{
                width: 728px;
                margin: auto;
            }
            #adbanner a{
                display: inline-block;
                border: 1px solid #c3c3c3;
                height: 90px;
                width: 728px;
                margin: 16px auto;
                color: #6b6b6b;
                text-decoration: none;
                font-family: Verdana, Arial, sans-serif;
                font-size: 14px;
                background-color: #d1d1d1;
            }
            #adbanner a:hover{
                border: 1px solid #a7a7a7;
                /*text-decoration: underline;*/
                color: #3f3f3f;
                background-color: #cacaca;
            }
            #adbanner a p{
                text-align: center;
                margin-top: 35px;
            }
            section{
                width: ${ authenticated ? '75%' : '1350px'};
                margin: auto;
                float:left;
            }
            #secwrapper{
                /*background: url('images/bg.gif') fixed;
                background-color: #f47771;*/ 
                padding-top: 20px; 
            }
            article{
                width: 280px;
                // height: 500px;
                margin-right: 40px;
                display: inline-block;
                vertical-align: top;
                border: 1px solid #c8c8c8;
                margin-bottom: 20px;
                padding: 7px;
                border-radius: 3px;
                box-shadow: 0 2px 3px #ccc;
                background-color: white;
                *display:inline;
                zoom:1;
            }
            #sponsors, .rightcl{
                margin-right: 0px;
            }
            .readmore{
                background-color: black;
                padding: 5px 10px;
                color: white;
                text-decoration: none;
                border-radius: 3px;
                display: inline-block;
            }
            .readmore:hover{
                background-color: #383838;
            }
            article p{
                margin-bottom: 7px;
            }
            #photobox img{
                margin: 5px 4px 6px 6.5px;
                border: 1px solid black;
            }
            #sponsors a{
                color: #6b6b6b;
                text-decoration: none;
                font-family: Verdana, Arial, sans-serif;
                font-size: 14px;
                background-color: #d1d1d1;
                width: 125px;
                height: 125px;
                display: inline-block;
                margin: 5px 4px 6px 7px;
                border: 1px solid #c3c3c3; 
            }
            #sponsors a p{
                margin: 50px auto;
                width: 125px;
                text-align: center;
            }
            #sponsors a:hover{
                border: 1px solid #a7a7a7;
                /*text-decoration: underline;*/
                color: #3f3f3f;
                background-color: #cacaca;
            }
            #featured{
                position: relative;
            }
            #featuredico{
                position: absolute;
                top: 0;
                left: 0;
            }

            .old_ie header h1, .old_ie nav, .old_ie nav li, .old_ie #adbanner a, .old_ie article, .old_ie .readmore, .old_ie #sponsors a {
                display: inline;
                zoom: 1;
            }
        `}
                </style>
            </Layout>
        )
    };

    handleSubmit = async e => {
        e.preventDefault();
    
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
    
        const res = await addNews(title, description);
        if (!res.news) {
          this.setState({
            error:"Required field is missing!"
          });
          return false;
        }
      };

}
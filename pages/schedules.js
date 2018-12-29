import Layout from "../components/Layout.js";

export default () => (
  <Layout>
    <div>
      <ul>
        <li>
          <div>
            <h3>Cricket</h3>
            <p><strong>Days</strong> : Monday, Wednesday, Friday</p>
            <p><strong>Venue</strong> : Cricket Ground</p>
            <p><strong>Time</strong> : 4.30pm</p>
          </div>
        </li>

        <li>
          <div>
            <h3>Football</h3>
            <p><strong>Days</strong> : Monday, Wednesday, Friday</p>
            <p><strong>Venue</strong> : Football Ground</p>
            <p><strong>Time</strong> : 4.30pm</p>
          </div>
        </li>

        <li>
          <div>
            <h3>Bascketball</h3>
            <p><strong>Days</strong> : Monday, Wednesday, Friday</p>
            <p><strong>Venue</strong> : Gymnasium</p>
            <p><strong>Time</strong> : 4.30pm</p>
          </div>
        </li>

        <li>
          <div>
            <h3>Bascketball</h3>
            <p><strong>Days</strong> : Monday, Wednesday, Friday</p>
            <p><strong>Venue</strong> : Gymnasium</p>
            <p><strong>Time</strong> : 4.30pm</p>
          </div>
        </li>

        <li>
          <div>
            <h3>Bascketball</h3>
            <p><strong>Days</strong> : Monday, Wednesday, Friday</p>
            <p><strong>Venue</strong> : Gymnasium</p>
            <p><strong>Time</strong> : 4.30pm</p>
          </div>
        </li>

        
      </ul>
    </div>

    <footer>
			<p>Copyright & copy 2018 Pera Sports Management Platform by UOP. All Rights Reserved.</p>
		</footer>

    <style jsx>
      {`
        * {
          margin: 0;
          padding: 0;
        }

        div {
          width: 500px;
          margin: auto;
          margin-top: 10px
        }

        ul {
          list-style-type: none;
          width: 500px;
        }

        h3 {
          font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
        }

        li p {
          font: 200 12px/1.5 Georgia, Times New Roman, serif;
        }

        li {
          padding: 10px;
        }

        li div {
          padding: 10px;
          background-color:#0f4fd5
        }

        footer{
          background-color: black;
          height: 28px;
          color: white;
          padding: 7px;
        }

        footer p{
          margin: 5px 0 0 12%;
        }
        
      `}
    </style>
  </Layout>
);

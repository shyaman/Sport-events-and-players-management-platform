import Layout from "../components/Layout.js";

export default () => (
	<Layout>
		<div className="parent">
			<div className="column">
				<div className="left">
					<ul>
						<li>
							<div>
								<img src="static/schedules/cricket.jpeg" />
								<h3>Cricket</h3>
								<p>
									<strong>Days</strong> : Monday, Wednesday, Friday
								</p>
								<p>
									<strong>Venue</strong> : Cricket Ground
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/football.jpg" />
								<h3>Football</h3>
								<p>
									<strong>Days</strong> : Monday, Wednesday, Friday
								</p>
								<p>
									<strong>Venue</strong> : Football Ground
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/baseball.jpg" />
								<h3>Basketball</h3>
								<p>
									<strong>Days</strong> : Monday, Wednesday, Friday
								</p>
								<p>
									<strong>Venue</strong> : Gymnasium
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/swimming.jpg" />
								<h3>Swimming</h3>
								<p>
									<strong>Days</strong> : Monday, Wednesday, Friday
								</p>
								<p>
									<strong>Venue</strong> : University Swimming Pool
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/rugby.jpg" />
								<h3>Rugby</h3>
								<p>
									<strong>Days</strong> : Tuesday, Thursday, Saturday
								</p>
								<p>
									<strong>Venue</strong> : Rugby Ground
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/elle.jpg" />
								<h3>Elle</h3>
								<p>
									<strong>Days</strong> : Thursday
								</p>
								<p>
									<strong>Venue</strong> : Athletic Ground
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/weightlifting.jpg" />
								<h3>Weightlifting</h3>
								<p>
									<strong>Days</strong> : Monday, Thuesday, Thursday
								</p>
								<p>
									<strong>Venue</strong> : Gymnasium
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>
					</ul>
				</div>
				<div className="right">
					<ul>
						<li>
							<div>
								<img src="static/schedules/karate.jpg" />
								<h3>Karate</h3>
								<p>
									<strong>Days</strong> : Monday, Tuesday, Wednesday
								</p>
								<p>
									<strong>Venue</strong> : Gymnasium
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/volleyball.jpg" />
								<h3>Volleyball</h3>
								<p>
									<strong>Days</strong> : Monday, Wednesday, Friday
								</p>
								<p>
									<strong>Venue</strong> : Gymnasium
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/badminton.jpg" />
								<h3>Badminton</h3>
								<p>
									<strong>Days</strong> : Monday, Tuesday, Thursday
								</p>
								<p>
									<strong>Venue</strong> : Gymnasium
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/tennis.jpg" />
								<h3>Tennis</h3>
								<p>
									<strong>Days</strong> : Monday, Wednesday, Thursday
								</p>
								<p>
									<strong>Venue</strong> : University Tennis Court
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/athletics.jpg" />
								<h3>Athletics</h3>
								<p>
									<strong>Days</strong> : Monday, Wednesday, Friday
								</p>
								<p>
									<strong>Venue</strong> : Athletic Ground
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/baseball.jpg" />
								<h3>Baseball</h3>
								<p>
									<strong>Days</strong> : Tuesday, Wednesday, Thursday
								</p>
								<p>
									<strong>Venue</strong> : Athletic Ground
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>

						<li>
							<div>
								<img src="static/schedules/hockey.jpg" />
								<h3>Hockey</h3>
								<p>
									<strong>Days</strong> : Tuesday, Wednesday, Thursday
								</p>
								<p>
									<strong>Venue</strong> : Athletic Ground
								</p>
								<p>
									<strong>Time</strong> : 4.30pm
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<footer>
			<p>
				Copyright & copy 2018 Pera Sports Management Platform by UOP. All Rights
				Reserved.
			</p>
		</footer>

		<style jsx>
			{`
				* {
					margin: 0;
					padding: 0;
				}

				 {
					/* div {
					width: 500px;
					margin: auto;
					margin-top: 10px;
				} */
				}

				ul {
					list-style-type: none;
					width: 500px;
				}

				h3 {
					font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
				}

				li img {
					float: left;
					margin: 0 15px 0 0;
					width: 80px;
					min-height: 80px;
					max-height: auto;
				}

				li p {
					font: 200 12px/1.5 Georgia, Times New Roman, serif;
				}

				li {
					padding: 10px;
				}

				li div {
					padding: 10px;
					background-color: white;
 border: 1px solid #c8c8c8;
    padding: 7px;
    box-shadow: 0 2px 3px #ccc;
				}

				footer {
					background-color: black;
					height: 28px;
					color: white;
					padding: 7px;
				}

				footer p {
					margin: 5px 0 0 12%;
				}

				.left {
					flex: 2;
					padding: 1em;
					align-items: center;
				}

				.right {
					flex: 2;
					padding: 1em;
					align-items: center;
				}

				.parent {
					background: #2c2c2c;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.columns {
					display: flex;
					flex: 1;
					align-items: center;
				}

				/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
				@media screen and (max-width: 600px) {
					.column {
						width: 100%;
					}
				}
			`}
		</style>
	</Layout>
);
